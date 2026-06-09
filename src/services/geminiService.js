/**
 * Gemini via OpenRouter API Service for GTM Audit & Copywriting Pipeline
 * 
 * Flow:
 * 1. Crawl target website via a client-side CORS gateway.
 * 2. Connect to OpenRouter API using the provided API key.
 * 3. Construct the prompt based on the current active mode (Sales vs Marketing):
 *    - Marketing Mode: Generates Core Brief, User Profiles, Pain Points, Insights, First Fold Copy, and 4 Creative Ads (/copywriting skill).
 *    - Sales Mode: Generates Core Brief, User Profiles, Pain Points, Insights, Competitor Comparison Card, and Pitch One-Pager (/sales-enablement skill).
 * 4. Return structured JSON matching the correct schema.
 */

// OpenRouter API Configuration
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

/**
 * Extracts a clean domain name (e.g. stripe.com -> Stripe), replacing typos like commas with dots.
 */
export const getCleanDomainName = (input) => {
  try {
    let clean = input.trim().toLowerCase();
    clean = clean.replace(/,/g, '.');
    clean = clean.replace(/^(https?:\/\/)?(www\.)?/, '');
    clean = clean.split('/')[0];
    const parts = clean.split('.');
    if (parts.length > 1) {
      const main = parts[parts.length - 2];
      return main.charAt(0).toUpperCase() + main.slice(1);
    }
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  } catch (e) {
    return 'Target Product';
  }
};

/**
 * Normalizes input into a valid URL
 */
const normalizeUrl = (input) => {
  let target = input.trim().replace(/,/g, '.');
  if (!/^https?:\/\//i.test(target)) {
    target = `https://${target}`;
  }
  return target;
};

/**
 * Crawls a website homepage using allorigins CORS proxy and extracts raw text
 */
export const crawlWebsite = async (url) => {
  try {
    const targetUrl = normalizeUrl(url);
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
    
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('CORS gateway failed');
    
    const data = await response.json();
    const html = data.contents;
    if (!html) throw new Error('Empty response from proxy');

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove non-content elements
    const scripts = doc.querySelectorAll('script, style, meta, link, head, nav, footer, iframe, noscript');
    scripts.forEach(s => s.remove());

    const text = doc.body.innerText || doc.body.textContent || '';
    return text.replace(/\s+/g, ' ').trim().slice(0, 4500);
  } catch (error) {
    console.warn('Scraping failed, falling back to model knowledge:', error.message);
    return '';
  }
};

/**
 * Generates the unified GTM prompt for Marketing Mode (/copywriting skill)
 */
export const generateMarketingAuditPrompt = (domain, crawledText) => {
  return `
You are an AI system simulating two expert agents in sequence: a Product Marketing Manager (using the /product-marketing framework) and a Conversion Copywriter (using the /copywriting framework).

Analyze the crawled homepage text for the domain "${domain}":
---
${crawledText || "[No crawled text available. Rely on your built-in Google Search grounding and historical knowledge about this product]"}
---

Before generating the final JSON output, you must execute the following GTM audit steps in order:

STAGE 1: PRODUCT MARKETING CONTEXT EXTRACTION (PMM Framework)
- Step 1.1: Brand & Catalog Overview: Identify the mission, value statement, categories, and price positioning.
- Step 1.2: Target Customer & Demographics: Define demographics, psychographics, and shopping motivators.
- Step 1.3: Customer Personas: Define 3 archetypes, their hesitations, and high-converting triggers.
- Step 1.4: Problems & Friction Points: Map fit/sizing/quality/durability anxieties.
- Step 1.5: Competitive Landscape: List direct and indirect competitors and how they fall short.
- Step 1.6: Switching Dynamics (JTBD Four Forces): Identify the Push, Pull, Habit, and Anxiety forces.
- Step 1.7: Tone & Voice: Establish formality, styling voice, and core customer expressions.
- Step 1.8: Compile all Stage 1 findings into a structured, in-memory Markdown context (.md) block.

STAGE 2: CONVERSION COPYWRITING SYNTHESIS (Copywriting Framework)
- Step 2.1: Analyze the compiled Markdown context under conversion copy rules.
- Step 2.2: Apply the "Clarity Over Cleverness" rule (instantly understandable, no jargon).
- Step 2.3: Apply the "Benefits Over Features" rule (focus on outcome over mechanics).
- Step 2.4: Apply the "Specificity Over Vagueness" rule (quantified metrics over generic statements).
- Step 2.5: Design the landing page first fold copy using standard conversion formulas (e.g. "{Achieve outcome} without {pain point}").
- Step 2.6: Draft 4 paid creative assets for social media targeting different customer angles (e.g. friction, pain-point, benefit, trust).

OUTPUT FORMAT:
Generate the GTM Positioning and Copywriting Audit based on the above steps.
Return the response STRICTLY as a JSON object matching this schema. Do not put markdown code fences (like \`\`\`json) around the JSON output:
{
  "productBrief": "string (Core product brief, 5-6 sentences, distilling the mission and core value)",
  "userProfiles": ["string", "string", "string"],
  "painPoints": ["string", "string", "string"],
  "insights": ["string", "string", "string"],
  "firstFoldCopy": {
    "headline": "string",
    "subheadline": "string",
    "cta": "string"
  },
  "creativeAssets": [
    { "title": "string", "hook": "string", "body": "string", "cta": "string" },
    { "title": "string", "hook": "string", "body": "string", "cta": "string" },
    { "title": "string", "hook": "string", "body": "string", "cta": "string" },
    { "title": "string", "hook": "string", "body": "string", "cta": "string" }
  ]
}
`;
};

/**
 * Generates the unified GTM prompt for Sales Mode (/sales-enablement skill)
 */
export const generateSalesAuditPrompt = (domain, crawledText) => {
  return `
You are an AI system simulating two expert agents in sequence: a Product Marketing Manager (using the /product-marketing framework) and a B2B Sales Enablement Specialist (using the /sales-enablement framework).

Analyze the crawled homepage text for the domain "${domain}":
---
${crawledText || "[No crawled text available. Rely on your built-in Google Search grounding and historical knowledge about this product]"}
---

Before generating the final JSON output, you must execute the following GTM audit steps in order:

STAGE 1: PRODUCT MARKETING CONTEXT EXTRACTION (PMM Framework)
- Step 1.1: Brand Overview: Identify value proposition, target customer segment, and price point.
- Step 1.2: Problems & Friction: Map the core operational and technical paint points.
- Step 1.3: Competitive Landscape: Identify key direct competitors and how they fall short.
- Step 1.4: Compile all Stage 1 findings into a structured, in-memory Markdown context (.md) block.

STAGE 2: SALES ENABLEMENT ASSETS SYNTHESIS (Sales-Enablement Framework)
- Step 2.1: Analyze the compiled Markdown context under B2B sales enablement rules (scannable, benefit-driven, tied back to business outcomes).
- Step 2.2: Configure a Competitor Comparison Battlecard comparing the product against its primary direct competitor:
  - Identify the primary competitor's name.
  - List 3 key differentiators (why we win).
  - Map 2 battleground features compared side-by-side.
  - Draft 1 quick objection handling script against the competitor (objection statement + response approach + follow-up question).
- Step 2.3: Configure a Pitch One-Pager:
  - Formulate a 1-sentence problem statement.
  - Formulate a 2-3 sentence solution overview.
  - List 3 key differentiators.
  - Formulate 1 strong business outcome metric or quote (proof point).
  - Formulate a clear next step call-to-action (CTA).

OUTPUT FORMAT:
Generate the GTM Sales Enablement positioning based on the above steps.
Return the response STRICTLY as a JSON object matching this schema. Do not put markdown code fences (like \`\`\`json) around the JSON output:
{
  "productBrief": "string (Core product brief, 5-6 sentences, distilling the mission and core value)",
  "userProfiles": ["string", "string", "string"],
  "painPoints": ["string", "string", "string"],
  "insights": ["string", "string", "string"],
  "comparisonCard": {
    "competitorName": "string",
    "keyDifferentiators": ["string", "string", "string"],
    "battlegroundFeatures": [
      { "feature": "string", "us": "string", "them": "string" },
      { "feature": "string", "us": "string", "them": "string" }
    ],
    "objectionHandling": {
      "objection": "string",
      "response": "string"
    }
  },
  "onePager": {
    "problemStatement": "string",
    "solutionOverview": "string",
    "differentiators": ["string", "string", "string"],
    "proofPoint": "string",
    "cta": "string"
  }
}
`;
};

/**
 * Domain-aware fallback mock brief generator in case API fails
 * Categorizes industries based on URL keywords to ensure industry-agnostic audits.
 */
const generateDynamicMockOutput = (domainName, mode) => {
  const name = getCleanDomainName(domainName);
  const lowerName = name.toLowerCase();

  // Determine Industry category
  let industryType = 'saas';
  if (lowerName.includes('timespro') || lowerName.includes('edu') || lowerName.includes('learn') || lowerName.includes('course') || lowerName.includes('school') || lowerName.includes('university') || lowerName.includes('academy')) {
    industryType = 'edtech';
  } else if (lowerName.includes('stripe') || lowerName.includes('pay') || lowerName.includes('card') || lowerName.includes('finance') || lowerName.includes('bill') || lowerName.includes('wallet') || lowerName.includes('bank')) {
    industryType = 'fintech';
  }

  // Base PMM data
  let pmmData = {};
  if (industryType === 'edtech') {
    pmmData = {
      productBrief: `${name} is an advanced professional education and career growth platform designed to deliver industry-aligned learning programs. By partnering with premier academic institutions and corporate employers, it offers certified training, executive degrees, and specialized vocational courses. The platform combines interactive live online sessions, self-paced modules, and hands-on lab projects to ensure practical skill acquisition. This enables working professionals and fresh graduates to upskill and transition into high-demand roles. Ultimately, it bridges the gap between traditional academic pedagogy and actual corporate hiring requirements.`,
      userProfiles: [
        "Working professionals seeking verified certifications to accelerate promotions or career pivots.",
        "Fresh graduates looking for job-guaranteed training programs to secure corporate placements.",
        "Enterprise L&D managers seeking to upskill team cohorts in digital and technical domains."
      ],
      painPoints: [
        "Incongruence between traditional college curricula and rapidly evolving corporate skills demands.",
        "High attrition and low completion rates of typical video-only online learning courses.",
        "Lack of direct placement channels and career support services for job-seeking learners."
      ],
      insights: [
        "Learners prioritize programs with direct recruitment partnerships and placement guarantees.",
        "Live interactive cohort-based instruction yields 4x higher completion rates than self-paced video modules.",
        "Blended learning (combining theory with mock projects) is critical to build employer trust."
      ]
    };
  } else if (industryType === 'fintech') {
    pmmData = {
      productBrief: `${name} is a high-performance financial infrastructure and payment processing platform built for the modern digital economy. It provides businesses of all sizes with secure APIs to accept online payments, manage subscription models, and coordinate global payouts. By handling complex currency conversions, fraud prevention, and regional tax compliance under-the-hood, it removes the friction of global commerce. The platform scales from startup sandbox environments to high-throughput enterprise transactions with maximum uptime. Ultimately, it simplifies global payment operations, allowing teams to focus on core product value.`,
      userProfiles: [
        "SaaS founders and developers needing quick, robust payment integration APIs.",
        "Finance Operations teams managing cross-border transactions and multi-currency billing.",
        "E-commerce managers focused on checkout page conversion rates and fraud reduction."
      ],
      painPoints: [
        "High checkout drop-off rates caused by lacking local payment methods and poor mobile UI.",
        "Complex compliance overhead for global tax regulations, KYC checks, and PCI standards.",
        "Losing revenue to false-positive fraud declines and inefficient subscription dunning loops."
      ],
      insights: [
        "Adding local payment options lifts checkout conversions by up to 22% globally.",
        "Developers are the primary gatekeepers in fintech buying decisions; API elegance is a core asset.",
        "AI-driven fraud detection saves millions by reducing false transaction declines."
      ]
    };
  } else {
    pmmData = {
      productBrief: `${name} is an innovative cloud-based software platform designed to streamline core workflows and drive business productivity. By centralizing operations, collaborative tracking, and data-driven insights into a single accessible interface, it eliminates organizational silos. The platform integrates seamlessly with existing tools, allowing operations leads and cross-functional teams to automate manual work in minutes. This leads to a massive reduction in friction and accelerates GTM speed. Ultimately, it empowers growing companies to optimize their daily operations and scale efficiently.`,
      userProfiles: [
        "Product and Team Leaders looking to organize their operational flows and data streams.",
        "Department Managers seeking to automate manual updates and tool handoffs.",
        "Operations Leads requiring centralized analytics and performance visibility."
      ],
      painPoints: [
        "Fragmented data scattered across multiple disconnected apps leading to alignment lag.",
        "Manual administrative overhead eating up hours of high-value strategic work week after week.",
        "Lack of real-time visibility and status tracking causing project delays and GTM friction."
      ],
      insights: [
        "Operational speed is a primary growth engine; companies with automated handoffs scale faster.",
        "Clean visual layouts and intuitive UIs increase employee platform adoption by up to 90%.",
        "Centralized reporting is critical for management buy-in and data-backed decision making."
      ]
    };
  }

  // Branch results based on Mode
  if (mode === 'sales') {
    const competitor = industryType === 'edtech' ? 'UpGrad' : (industryType === 'fintech' ? 'Adyen' : 'GenericCompetitor');
    return {
      ...pmmData,
      comparisonCard: {
        competitorName: competitor,
        keyDifferentiators: [
          `Higher completion rate: Our structured approach yields 3x higher onboarding completion than ${competitor}.`,
          `Deeper integration: Seamless data and account syncing out-of-the-box compared to ${competitor}'s manual uploads.`,
          `Actionable reporting: Real-time operational dashboards instead of ${competitor}'s weekly CSV exports.`
        ],
        battlegroundFeatures: [
          { 
            feature: "Onboarding Automation", 
            us: "Automated, self-serve developer sandbox setup in under 5 minutes.", 
            them: "Requires sales approval and manual onboarding key generation (2-3 days)." 
          },
          { 
            feature: "Cross-Tool Syncing", 
            us: "Real-time bi-directional sync across 200+ popular SaaS applications.", 
            them: "Unidirectional syncing with limited, brittle webhook configurations." 
          }
        ],
        objectionHandling: {
          objection: `We already use ${competitor} for our processes.`,
          response: `I hear you—${competitor} is a solid platform. However, many of our users transitioned because they were struggling with API latency and developer bottlenecks. If I could show you how we reduce integration setups from 4 weeks to 15 minutes, would you be open to a 10-minute demo?`
        }
      },
      onePager: {
        problemStatement: `Teams waste up to 15 hours weekly copy-pasting data between disconnected tools due to developer queues.`,
        solutionOverview: `${name} provides a secure, low-code interface to bridge database workflows and route customer pipelines instantly.`,
        differentiators: [
          "Zero-code custom builder: empower operations teams to deploy pipelines immediately.",
          "Enterprise compliance: built-in SOC2 access controls, audit logs, and regional routing.",
          "High reliability: bi-directional syncing with automatic error retry and recovery."
        ],
        proofPoint: `Saved operations teams 80+ hours monthly and reduced pipeline dropouts by 45%.`,
        cta: `Schedule a 10-Minute Technical Demo`
      }
    };
  } else {
    // Marketing mode
    return {
      ...pmmData,
      firstFoldCopy: {
        headline: `Position your product narratives with ${name}`,
        subheadline: `Sync customer touchpoints, automate competitor research, and align sales enablement collateral in one secure workspace.`,
        cta: `Start Free Audit`
      },
      creativeAssets: [
        {
          title: "Asset 1: Friction-Free (Hook Focus)",
          hook: `Frustrated by slow operational handoffs?`,
          body: `Stop letting administrative bottlenecks delay your launches. Connect your team pipelines with ${name} and scale operations with ease.`,
          cta: `Learn More`
        },
        {
          title: "Asset 2: Data Leakage (Pain-Point Focus)",
          hook: `Are your GTM pipelines dropping hot leads?`,
          body: `Disconnected operational tools cause lead dropouts. ${name} bridges the gap, ensuring data is updated instantly across all channels.`,
          cta: `Secure Your Data`
        },
        {
          title: "Asset 3: Team Velocity (Benefit Focus)",
          hook: `Empower your GTM team to launch 3x faster.`,
          body: `Bypass development bottlenecks. ${name} provides low-code builders so product teams can deploy sync loops without waiting on engineering.`,
          cta: `Get Started`
        },
        {
          title: "Asset 4: Scaling operations (Enterprise Focus)",
          hook: `Scale operational capacity without doubling headcount.`,
          body: `Build high-reliability automation pipelines protected by enterprise-grade security and role-based permissions.`,
          cta: `Book Demo`
        }
      ]
    };
  }
};

/**
 * Main Service API Entry Point
 * Executes the full background sequence.
 */
export const runGTMAuditPipeline = async (domain, crawledText = '', mode = 'marketing') => {
  // Use OpenRouter endpoint if key is valid
  if (OPENROUTER_API_KEY && OPENROUTER_API_KEY !== 'YOUR_API_KEY') {
    try {
      // Pick the correct prompt based on GTM mode (Sales vs Marketing)
      const prompt = mode === 'sales'
        ? generateSalesAuditPrompt(domain, crawledText)
        : generateMarketingAuditPrompt(domain, crawledText);
      
      const payload = {
        model: 'nvidia/nemotron-3-super-120b-a12b:free',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 3000,
        response_format: { type: 'json_object' }
      };

      const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`OpenRouter API returned HTTP ${response.status}`);
      }

      const data = await response.json();
      const rawText = data.choices[0].message.content;
      
      let cleanedText = rawText.trim();
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.slice(7);
      }
      if (cleanedText.endsWith('```')) {
        cleanedText = cleanedText.slice(0, -3);
      }

      return JSON.parse(cleanedText.trim());
    } catch (error) {
      console.error('OpenRouter API call failed, falling back to dynamic mock:', error);
      return generateDynamicMockOutput(domain, mode);
    }
  }

  // Fallback simulator
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateDynamicMockOutput(domain, mode));
    }, 2000);
  });
};
