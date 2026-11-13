import React from 'react';
import { ArrowRight, Code2, Terminal, Cpu, Database, ExternalLink } from 'lucide-react';

const TOOLS = [
  {
    id: 'ga4-mcp',
    badge: 'PYPI PACKAGE // MODEL CONTEXT PROTOCOL',
    title: 'Google Analytics 4 MCP Server',
    desc: 'Engineered and published a Python Model Context Protocol server enabling LLMs and autonomous AI agents to query GA4 data, run conversion audits, and diagnose session drop-offs directly within agentic workflows.',
    tech: ['Python', 'GA4 Data API', 'MCP', 'PyPI'],
    link: 'https://github.com/Vpunjabi93/GA4-MCP',
    linkLabel: 'View PyPI & Repo',
  },
  {
    id: 'ad-scorer',
    badge: 'GROWTH AUTOMATION // GEMINI PRO API',
    title: 'Google & Meta Ads Scorer',
    desc: 'Automated RSA character-limit validator and scoring compiler powered by Gemini Pro API, testing advertising copy drafts against historical winning hooks to remove guesswork from ad creative iterations.',
    tech: ['JavaScript', 'Gemini Pro API', 'Growth Engineering'],
    link: 'https://github.com/Vpunjabi93/ad-ctr-evaluator',
    linkLabel: 'View Code & Logic',
  },
  {
    id: 'monte-carlo',
    badge: 'STOCHASTIC MODELING // PROBABILITY',
    title: 'Monte Carlo Game Engine',
    desc: 'Engineered a probabilistic simulation engine running 10,000+ randomized trials to calculate turn-by-turn draw probabilities and optimize decision trees in complex competitive systems.',
    tech: ['JavaScript', 'Monte Carlo Math', 'Simulation'],
    link: 'https://github.com/Vpunjabi93/tcgp-deck-builder',
    linkLabel: 'Launch Simulator',
  },
];

const OpenSourceTools = () => {
  return (
    <section
      id="tools-and-code"
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
      {/* Editorial Header Row */}
      <div
        style={{
          padding: '0.65rem 2rem',
          borderBottom: '1px solid var(--grid-rule)',
          borderTop: '3px solid var(--on-surface)',
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
        <span>SECTION 05 // CODE &amp; OPEN-SOURCE TOOLING</span>
        <span>VERIFIED REPOSITORIES &amp; PACKAGES</span>
        <span>STATUS: PUBLIC</span>
      </div>

      <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 2rem', borderBottom: '1px solid var(--grid-rule)' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent-vermilion)',
            marginBottom: '0.75rem',
            fontWeight: 700,
          }}
        >
          // TECHNICAL PROOF OF WORK
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            margin: '0 0 1rem',
            color: 'var(--on-surface)',
          }}
        >
          PMMs Who Build Tools, <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Not Just Slides.</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: 'var(--on-surface-variant)',
            maxWidth: '720px',
            margin: 0,
          }}
        >
          When existing tools don&apos;t solve the conversion or telemetry challenge, I write the code myself. Here are selected open-source utilities and AI packages built to automate marketing pipelines.
        </p>
      </div>

      {/* 3-Card Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 0,
          background: 'var(--surface-paper-bright)',
        }}
      >
        {TOOLS.map((tool, idx) => (
          <div
            key={tool.id}
            className={idx < TOOLS.length - 1 ? 'responsive-col-border' : undefined}
            style={{
              padding: '2.5rem 2rem',
              borderRight: idx < TOOLS.length - 1 ? '1px solid var(--grid-rule)' : 'none',
              borderBottom: '1px solid var(--grid-rule)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--surface-paper-bright)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-vermilion)',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}
              >
                {tool.badge}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  margin: '0 0 1rem',
                  color: 'var(--on-surface)',
                }}
              >
                {tool.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: 'var(--on-surface-variant)',
                  margin: '0 0 1.5rem',
                }}
              >
                {tool.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {tool.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      padding: '3px 8px',
                      background: 'var(--surface-container-low)',
                      border: '1px solid var(--grid-rule)',
                      color: 'var(--on-surface)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--grid-rule)' }}>
              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-vermilion)',
                  textDecoration: 'none',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {tool.linkLabel} ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSourceTools;
