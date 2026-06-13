export const generateGTMAudit = async (targetUrl) => {
  // Load the API key from environment variables instead of hardcoding
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  
  if (!apiKey) {
    throw new Error("OpenRouter API key is missing.");
  }

  // We use Jina Reader API (r.jina.ai) to bypass Cloudflare/Shopify bot protections
  // and return clean, LLM-ready markdown directly to the frontend.
  let scrapedText = "";
  try {
    const proxyUrl = `https://r.jina.ai/${targetUrl}`;
    const fetchRes = await fetch(proxyUrl);
    
    if (!fetchRes.ok) throw new Error("Jina Proxy Failed");
    
    const text = await fetchRes.text();
    
    // Jina returns clean markdown. We just truncate it to fit the context window.
    scrapedText = text.substring(0, 5000);
    
  } catch (err) {
    console.warn("Scraping failed, falling back to URL inference:", err);
    scrapedText = `Failed to scrape website directly. Analyze based on the domain name: ${targetUrl}`;
  }

  // STEP 2: The Skill-Baked LLM Prompt
  const prompt = `You are an elite Product Marketing Manager and Conversion Copywriter executing a strict 4-step GTM workflow.

Data provided from the target website (${targetUrl}):
"""
${scrapedText}
"""

Execute the following 4 steps strictly in order. Output them clearly with markdown headers.

### Step 1: Product Marketing Context
Based on the scraped text, define the foundational brand identity. Detail the core mission, the exact Target Customer Profile (TG), and the primary friction points they solve.

### Step 2: Competitor Profiling
Identify 2-3 likely direct competitors in this specific space. Briefly outline their market positioning and perceived strengths.

### Step 3: Competitor Comparison & USP
Analyze how the provided company stacks up against the competitors identified in Step 2. What is their Unique Selling Proposition (USP) compared to the alternatives?

### Step 4: Copywriting & Angle Generation
Using the TG, Competitor Profiles, and USP derived above, draft 3 highly-converting headline angles and one core value proposition paragraph designed to win against the competition. Keep it sharp, visceral, and direct.`;

  // STEP 3: Call OpenRouter with Retry Logic
  let attempt = 0;
  const maxRetries = 3;

  while (attempt < maxRetries) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "http://localhost:5173", 
          "X-Title": "Vivek Punjabi Portfolio", 
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
      
      return data.choices[0].message.content;

    } catch (err) {
      attempt++;
      console.warn(`[Attempt ${attempt}/${maxRetries}] OpenRouter API failed: ${err.message}`);
      if (attempt >= maxRetries) {
        throw new Error(`Engine exhausted all ${maxRetries} attempts. Last error: ${err.message}`);
      }
      // Wait 1.5 seconds before retrying to let the compute node breathe
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }
};
