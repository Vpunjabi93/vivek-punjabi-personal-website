import React from 'react';
import profileImg from '../assets/profile.jpg';

const OPERATING_LAWS = [
  {
    num: '01',
    name: 'AUDIT RAW BEHAVIOR, NOT THE BRIEF',
    desc: 'Briefs often reflect internal assumptions instead of buyer reality. Before touching design or copy, listen to live sales calls, inspect VWO/Clarity heatmaps, and audit the tracking DOM. Friction rarely sits where teams assume.',
    linkTarget: 'case-studies',
    linkLabel: 'See EdTech Case Study →',
  },
  {
    num: '02',
    name: 'SEQUENCE PROOF BEFORE ASKING FOR COMMITMENT',
    desc: 'High-ticket buyers evaluate career and financial risk before features. Demanding a lead form on Scroll 1 before delivering credible ROI proof burns ad spend. Sequence proof of return first, and conversion follows.',
    linkTarget: 'case-studies',
    linkLabel: 'See CXO Research →',
  },
  {
    num: '03',
    name: 'BUILD THE TELEMETRY BEFORE SPENDING RUPEES',
    desc: 'If you cannot trace a user from ad impression to landed unit margin, you are scaling blind. Full-stack PMMs fix caching race conditions, verify GA4 event integrity, and model contribution margins before launching spend.',
    linkTarget: 'sugoi-case-study',
    linkLabel: 'See Sugoi Crucible →',
  },
];

const IMPACT_LEDGER = [
  { metric: '5+ YRS', label: 'Product Marketing · TimesPro (Times Group)' },
  { metric: '100K+', label: 'Mobile App Installs Delivered in 90 Days' },
  { metric: '+41%', label: 'Form Fill Rate Surge in Single EMBA VWO Test' },
  { metric: '$500K+', label: 'Quarterly Revenue Portfolio · Emeritus Int\'l' },
];

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cover"
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
      {/* Editorial Header Strip */}
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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--on-surface)', fontWeight: 700 }}>
          <span style={{ width: '6px', height: '6px', background: 'var(--accent-vermilion)', display: 'inline-block' }} />
          LEAD EDITION // SECTION 01
        </span>
        <span>EDTECH · B2B SAAS · D2C GTM ARCHITECTURE</span>
        <span>MUMBAI HQ // GLOBAL REMOTE</span>
      </div>

      {/* Main Cover Broadsheet Split */}
      <div
        style={{
          padding: 'clamp(2rem, 5vw, 4.25rem) clamp(1.15rem, 4vw, 3rem)',
          borderBottom: '1px solid var(--grid-rule)',
        }}
      >
        <div className="hero-cover-grid">
          {/* Left Column: 3-Second Positioning Anchor, Thesis Headline & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.65rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '4px 10px',
                  border: '1px solid var(--on-surface)',
                  background: 'var(--surface-paper-bright)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.69rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                <span style={{ width: '6px', height: '6px', background: 'var(--accent-vermilion)' }} />
                SENIOR PRODUCT MARKETING SPECIALIST // EX-SALES
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.69rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--on-surface-variant)',
                }}
              >
                SPECIALIZING IN HIGH-TICKET EDTECH &amp; AI GTM
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.45rem)',
                fontWeight: 900,
                letterSpacing: '-0.035em',
                lineHeight: 1.04,
                margin: 0,
                color: 'var(--on-surface)',
              }}
            >
              Positioning without systems is just poetry.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-vermilion)' }}>
                Systems without positioning is burning spend.
              </span>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 1.55vw, 1.32rem)',
                lineHeight: 1.58,
                color: 'var(--on-surface)',
                margin: 0,
                maxWidth: '720px',
              }}
            >
              I&apos;m <strong>Vivek Punjabi</strong>—a Senior Product Marketing Specialist at{' '}
              <strong>TimesPro (Times Group)</strong> with 5+ years driving EdTech GTM (IIM Executive MBAs,
              100k+ app installs), preceded by closing <strong>$500K+/qtr</strong> in international markets at{' '}
              <strong>Emeritus</strong>. I pair frontline buyer psychology with hands-on CRO, GA4 telemetry, and
              AI workflow automation.
            </p>

            {/* Primary & Secondary Action Bar Above the Fold */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.35rem' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollTo('case-studies')}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                View Case Studies ↓
              </button>

              <a
                href="./Vivek_Punjabi_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Download Resume (PDF) ↗
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: '2px solid var(--accent-vermilion)',
                  padding: '0.25rem 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--on-surface)',
                  cursor: 'pointer',
                  marginLeft: '0.25rem',
                }}
              >
                Initiate Correspondence →
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Quick Impact Ledger */}
          <aside
            aria-label="Vivek Punjabi Profile and Key Metrics"
            style={{
              border: '1px solid var(--on-surface)',
              background: 'var(--surface-paper-bright)',
              boxShadow: '6px 6px 0px rgba(17, 17, 17, 0.9)',
            }}
          >
            {/* Dossier Caption Header */}
            <div
              style={{
                padding: '0.55rem 1rem',
                borderBottom: '1px solid var(--grid-rule)',
                background: 'var(--surface-container-low)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.64rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--on-surface-variant)',
              }}
            >
              <span style={{ fontWeight: 700, color: 'var(--on-surface)' }}>FIG 01 // OPERATOR PROFILE</span>
              <span>EDTECH · SAAS · D2C</span>
            </div>

            {/* Framed Portrait */}
            <div
              className="editorial-portrait-wrap"
              style={{
                aspectRatio: '16 / 10',
                overflow: 'hidden',
                borderBottom: '1px solid var(--grid-rule)',
                background: '#111111',
                position: 'relative',
              }}
            >
              <img
                src={profileImg}
                alt="Vivek Punjabi speaking on microphone in studio blazer"
                className="editorial-portrait-img"
              />
            </div>

            {/* 2x2 Quick Stats Ledger */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 0,
              }}
            >
              {IMPACT_LEDGER.map((item, idx) => (
                <div
                  key={item.metric}
                  style={{
                    padding: '1rem 1.1rem',
                    borderRight: idx % 2 === 0 ? '1px solid var(--grid-rule)' : 'none',
                    borderBottom: idx < 2 ? '1px solid var(--grid-rule)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: idx === 2 ? 'var(--accent-vermilion)' : 'var(--on-surface)',
                      lineHeight: 1.05,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {item.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.64rem',
                      lineHeight: 1.35,
                      letterSpacing: '0.04em',
                      color: 'var(--on-surface-variant)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Institutional Track Record Strip */}
      <div
        style={{
          padding: '1rem 2rem',
          borderBottom: '1px solid var(--grid-rule)',
          background: 'var(--surface-container-low)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem 2rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-vermilion)',
            fontWeight: 700,
          }}
        >
          EXPERIENCE &amp; PORTFOLIOS //
        </span>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.85rem 2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--on-surface)',
            fontWeight: 700,
          }}
        >
          <span>TIMESPRO (TIMES GROUP)</span>
          <span style={{ opacity: 0.25 }}>·</span>
          <span>EMERITUS (US &amp; INT&apos;L)</span>
          <span style={{ opacity: 0.25 }}>·</span>
          <span>IIM AMRITSAR &amp; KOZHIKODE PORTFOLIOS</span>
          <span style={{ opacity: 0.25 }}>·</span>
          <span>SUGOI CULTURE</span>
          <span style={{ opacity: 0.25 }}>·</span>
          <span>PYPI / GITHUB (@VPUNJABI93)</span>
        </div>
      </div>

      {/* 3 Core Operating Principles */}
      <div style={{ padding: 'clamp(2rem, 4vw, 3.25rem) clamp(1.5rem, 4vw, 3rem)' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
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
              }}
            >
              // CORE OPERATING LAWS
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                margin: '0.25rem 0 0',
                letterSpacing: '-0.02em',
              }}
            >
              How I Diagnose &amp; Build GTM Engines
            </h2>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--on-surface-variant)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            APPLIED ACROSS EDTECH, SAAS &amp; D2C
          </div>
        </div>

        {/* 3 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {OPERATING_LAWS.map((law) => (
            <div
              key={law.num}
              style={{
                border: '1px solid var(--grid-rule)',
                background: 'var(--surface-paper-bright)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--accent-vermilion)',
                    marginBottom: '1rem',
                  }}
                >
                  PRINCIPLE // {law.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    margin: '0 0 1rem',
                    color: 'var(--on-surface)',
                  }}
                >
                  {law.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--on-surface-variant)',
                    margin: 0,
                  }}
                >
                  {law.desc}
                </p>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--grid-rule)' }}>
                <button
                  type="button"
                  onClick={() => scrollTo(law.linkTarget)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-vermilion)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  {law.linkLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
