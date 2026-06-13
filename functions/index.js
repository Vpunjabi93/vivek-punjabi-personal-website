const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true });

const openRouterApiKey = defineSecret("OPENROUTER_API_KEY");

exports.generateGTMAudit = onRequest({ 
  secrets: [openRouterApiKey], 
  timeoutSeconds: 300, 
  memory: "256MiB" 
}, (req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { targetUrl } = req.body;
    if (!targetUrl) {
      return res.status(400).json({ error: 'Missing targetUrl parameter.' });
    }

    let scrapedText = "";
    try {
      // STEP 1: Server-Side Scraping using Jina Reader
      const jinaRes = await fetch(`https://r.jina.ai/${targetUrl}`);
      if (!jinaRes.ok) throw new Error("Jina Proxy Failed to retrieve target URL.");
      
      const text = await jinaRes.text();
      scrapedText = text.substring(0, 5000); // 5000 chars limit
    } catch (err) {
      console.warn("Scraping failed on backend, falling back to URL inference:", err);
      scrapedText = `Failed to scrape website directly. Analyze based on the domain name: ${targetUrl}`;
    }

    // STEP 2: The Core Prompt
    const prompt = `You are an elite Product Marketing Manager and Conversion Copywriter executing a strict 4-step GTM workflow.

Data provided from the target website (${targetUrl}):
"""
${scrapedText}
"""

Execute the following 4 steps strictly in order. Output them clearly with markdown headers. DO NOT skip any steps.

### Step 1: Foundational Context & Target Audience
Analyze the provided text. Identify exactly what the product/service is. Then, build a psychological profile of the core target audience (their pain points, motivations, and the primary "job to be done").

### Step 2: Competitor Profiling
Identify 2-3 direct market rivals for this specific product or service based on its industry and value prop. If specific competitors aren't obvious, name the status quo alternative (e.g. "doing nothing" or "using spreadsheets").

### Step 3: USP vs Alternatives
Map out exactly why this product wins against those competitors. What is the unique wedge or differentiator that makes this the superior choice? 

### Step 4: Copywriting & Angle Generation
Using the TG, Competitor Profiles, and USP derived above, draft 3 highly-converting headline angles and one core value proposition paragraph designed to win against the competition. Keep it sharp, visceral, and direct.`;

    // STEP 3: Call OpenRouter with Retry Logic
    let attempt = 0;
    const maxRetries = 3;
    const apiKey = openRouterApiKey.value();

    while (attempt < maxRetries) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "HTTP-Referer": "https://vivek-punjabi-site-2026.web.app", 
            "X-Title": "Vivek Punjabi Portfolio Backend", 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "nvidia/nemotron-3-ultra-550b-a55b:free",
            messages: [
              { role: "system", content: "You are an elite Product Marketing Manager executing a strict GTM teardown." },
              { role: "user", content: prompt }
            ]
          })
        });

        if (!response.ok) {
          const errorData = await response.text();
          let errMsg = "Unknown OpenRouter Error";
          try {
            const parsed = JSON.parse(errorData);
            if (parsed.error && parsed.error.message) {
              errMsg = parsed.error.message;
            }
          } catch (e) {
            errMsg = errorData;
          }
          throw new Error(`API Rejected: ${errMsg}`);
        }

        const data = await response.json();
        
        if (!data.choices || data.choices.length === 0 || !data.choices[0].message.content) {
          throw new Error("Empty block returned from model compute node.");
        }
        
        return res.json({ audit: data.choices[0].message.content });

      } catch (err) {
        attempt++;
        console.warn(`[Attempt ${attempt}/${maxRetries}] OpenRouter API failed: ${err.message}`);
        if (attempt >= maxRetries) {
          return res.status(500).json({ error: `Engine exhausted all ${maxRetries} attempts. Last error: ${err.message}` });
        }
        // Wait 1.5 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    }
  });
});
