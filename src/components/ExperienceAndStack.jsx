import React from 'react';

const CAREER_TIMELINE = [
  {
    period: 'AUG 2021 — PRESENT',
    role: 'Senior Product Marketing Specialist',
    company: 'TimesPro · The Times Group (Bennett, Coleman & Co. Ltd.)',
    tag: 'PRIMARY PMM TENURE · 5+ YRS',
    isPrimary: true,
    note: 'Promoted from Consultant to Marketing Coordinator (2021), where cross-functional launch workflows cut time-to-market by 50% and sales enablement reduced lifecycle dropouts by 20%.',
    highlights: [
      'Owns positioning, Google Search, content, messaging & creative pod leadership (3–4 reportees) across high-ticket Executive MBAs (IIM Amritsar, IIM Kozhikode) & CXO cohorts.',
      'Strategic liaison for mobile app debut securing 100,000+ installs within 90 days across ASO & performance assets.',
      'Built VWO experimentation culture (85% stat-sig rigor) and sales-feedback battlecards (+10% lead-to-prospect progression) plus BTL activations (+25% conversion).',
      'Institutionalized LLM-driven collateral Quality Control (NotebookLM), reducing turnaround time (TAT) by 50%.',
    ],
  },
  {
    period: '2025 — PRESENT',
    role: 'Founder & Full-Stack GTM Architect',
    company: 'Sugoi Culture · Bootstrapped D2C Apparel',
    tag: 'HANDS-ON D2C LAB',
    isPrimary: false,
    highlights: [
      'Engineered WooCommerce storefront, automated 300-DPI MCP production workflows, forensic GA4/Clarity telemetry recovery (541 sessions), and SKU-level landed COGS/CM1 models.',
    ],
  },
  {
    period: '2018 — AUG 2021',
    role: 'Programme Advisor (International Markets)',
    company: 'Emeritus · US & Global Executive Education',
    tag: 'REVENUE & BUYER PSYCHOLOGY',
    isPrimary: false,
    highlights: [
      'Managed quarterly revenue portfolios exceeding $500K+ across US and international cohorts, handling C-suite & VP-level objections directly.',
      'Fed live frontline buyer hesitation and competitive feedback directly to product teams to sharpen high-ticket GTM narratives.',
    ],
  },
  {
    period: 'FOUNDATION',
    role: 'Frontline B2C Sales & Objections',
    company: 'Pre-Emeritus Sales Career',
    tag: 'COLD CALLS TO GTMS',
    isPrimary: false,
    highlights: [
      'Years of direct cold calls and quota-carrying sales conversations—learning firsthand which hooks convert skeptical prospects versus what only sounds persuasive in a slide deck.',
    ],
  },
];

const SKILL_PILLARS = [
  {
    code: 'PILLAR // 01',
    domain: 'GTM Strategy & Messaging',
    skills: [
      'Category & Product Positioning',
      'Primary ICP Discovery & Surveys',
      'Sales Enablement & Battlecards',
      'Cross-Functional Launch Orchestration',
      'Creative Pod Management (Writers / Design)',
      'BTL Event & Retail Activation',
    ],
  },
  {
    code: 'PILLAR // 02',
    domain: 'CRO, Analytics & Telemetry',
    skills: [
      'VWO A/B & Multivariate Testing',
      'Scroll, Click & Friction Mapping',
      'Google Analytics 4 (GA4 Events)',
      'Microsoft Clarity Session Forensics',
      'Looker / Data Studio & Excel Modeling',
      'Consent & Caching DOM Debugging',
    ],
  },
  {
    code: 'PILLAR // 03',
    domain: 'Demand Gen, ASO & Lifecycle',
    skills: [
      'Google Search Intent Architecture',
      'Meta Ads Manager & Creative Iteration',
      'CRM Lead Nurture Audits',
      'App Store Optimization (ASO)',
      'PR & SEO Launch Coordination',
      'SKU Unit Economics & CM1 Modeling',
    ],
  },
  {
    code: 'PILLAR // 04',
    domain: 'AI Systems & Builder Stack',
    skills: [
      'Model Context Protocol (Python MCP)',
      'NotebookLM Collateral QC Automation',
      'Gemini Pro API & Claude Code Workflows',
      'React, JavaScript, HTML/CSS',
      'GitHub Automation & Tooling',
      'Adobe Creative Cloud, Asana, Notion',
    ],
  },
];

const ExperienceAndStack = () => {
  return (
    <section
      id="experience"
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        borderLeft: '1px solid var(--grid-rule)',
        borderRight: '1px solid var(--grid-rule)',
        borderBottom: '3px solid var(--on-surface)',
        background: 'var(--surface)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Editorial Section Metadata Strip */}
      <div
        style={{
          padding: '0.65rem 2rem',
          borderBottom: '1px solid var(--grid-rule)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--on-surface-variant)',
          background: 'var(--surface-container-low)',
        }}
      >
        <span style={{ color: 'var(--on-surface)', fontWeight: 700 }}>
          SECTION 02 // CAREER PROGRESSION &amp; CAPABILITY LEDGER
        </span>
        <span>FROM QUOTA-CARRYING SALES TO PRODUCT MARKETING</span>
        <span>EDUCATION: BBA (MARKETING), NMIMS 2023</span>
      </div>

      {/* Main 2-Column Split Grid */}
      <div className="experience-split-grid">
        {/* Left Column: Career Progression Timeline */}
        <div
          className="responsive-col-border"
          style={{
            padding: 'clamp(2rem, 4vw, 3.25rem) clamp(1.15rem, 3.5vw, 2.75rem)',
            borderRight: '1px solid var(--grid-rule)',
            borderBottom: '1px solid var(--grid-rule)',
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-vermilion)',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            // CAREER TIMELINE — COLD CALLS TO GTMS
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              margin: '0 0 1rem',
              color: 'var(--on-surface)',
            }}
          >
            Sales-Forged <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Product Marketing.</span>
          </h2>

          {/* Framing Callout: Turning Sales Roots into Unfair Advantage */}
          <div
            style={{
              padding: '1.15rem 1.35rem',
              background: 'var(--surface-paper-bright)',
              border: '1px solid var(--grid-rule)',
              borderLeft: '4px solid var(--accent-vermilion)',
              marginBottom: '2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'var(--on-surface)',
            }}
          >
            Most marketers have never carried a revenue quota. I spent years closing B2C and international
            EdTech buyers ($500K+/qtr at Emeritus) before moving into Product Marketing at TimesPro—so every
            landing page, battlecard, and positioning shift is built around what actually moves hesitant buyers.
          </div>

          {/* Chronological Ledger Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {CAREER_TIMELINE.map((item) => (
              <article
                key={item.role + item.period}
                style={{
                  padding: '1.4rem 1.5rem',
                  border: item.isPrimary ? '1px solid var(--on-surface)' : '1px solid var(--grid-rule)',
                  background: item.isPrimary ? 'var(--surface-paper-bright)' : 'var(--surface)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.67rem',
                    letterSpacing: '0.09em',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ fontWeight: 700, color: 'var(--accent-vermilion)' }}>{item.period}</span>
                  <span
                    style={{
                      padding: '2px 7px',
                      border: '1px solid var(--grid-rule)',
                      background: 'var(--surface-container-low)',
                      color: 'var(--on-surface-variant)',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    margin: '0 0 0.2rem',
                    color: 'var(--on-surface)',
                  }}
                >
                  {item.role}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.73rem',
                    color: 'var(--on-surface-variant)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.company}
                </div>

                {item.note && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.84rem',
                      fontStyle: 'italic',
                      color: 'var(--on-surface-variant)',
                      margin: '0 0 0.75rem',
                      paddingBottom: '0.65rem',
                      borderBottom: '1px dashed var(--grid-rule)',
                    }}
                  >
                    {item.note}
                  </p>
                )}

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    color: 'var(--on-surface-variant)',
                  }}
                >
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Scannable Core Competencies & Tool Stack */}
        <div
          style={{
            padding: 'clamp(2rem, 4vw, 3.25rem) clamp(1.5rem, 3.5vw, 2.75rem)',
            background: 'var(--surface-paper-bright)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-vermilion)',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              // CORE COMPETENCIES &amp; TECHNICAL STACK
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 2.8vw, 2.35rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                margin: '0 0 1.5rem',
                color: 'var(--on-surface)',
              }}
            >
              T-Shaped PMM Toolkit
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {SKILL_PILLARS.map((pillar) => (
                <div
                  key={pillar.code}
                  style={{
                    border: '1px solid var(--grid-rule)',
                    background: 'var(--surface)',
                    padding: '1.35rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '0.85rem',
                      paddingBottom: '0.55rem',
                      borderBottom: '1px solid var(--grid-rule)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        margin: 0,
                      }}
                    >
                      {pillar.domain}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        color: 'var(--accent-vermilion)',
                        fontWeight: 700,
                      }}
                    >
                      {pillar.code}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.67rem',
                          letterSpacing: '0.03em',
                          padding: '4px 9px',
                          background: 'var(--surface-paper-bright)',
                          border: '1px solid var(--grid-rule)',
                          color: 'var(--on-surface)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Full Resume Download Box */}
          <div
            style={{
              padding: '1.4rem',
              border: '1px solid var(--on-surface)',
              background: 'var(--surface-container-low)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-vermilion)',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                }}
              >
                CREDENTIALS &amp; FULL CV
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700 }}>
                BBA (Marketing), NMIMS (2023)
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--on-surface-variant)' }}>
                Focus: Strategic Management, Market Research &amp; GTM Frameworks
              </div>
            </div>

            <a
              href="./Vivek_Punjabi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.75rem 1.2rem',
              }}
            >
              Download PDF ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndStack;
