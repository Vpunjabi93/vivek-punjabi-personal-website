import React from 'react';

const TICKER_ITEMS = [
  { label: 'TIMESPRO (TIMES GROUP): 100,000+ APP INSTALLS IN 90 DAYS', highlight: true },
  { label: 'IIM EXECUTIVE MBA: +41% FORM FILL RATE SURGE (VWO AUDIT)', highlight: false },
  { label: 'EMERITUS (INT\'L): $500K+/QTR EXECUTIVE ED REVENUE PORTFOLIOS', highlight: true },
  { label: 'AI QUALITY CONTROL: 50% COLLATERAL TURNAROUND REDUCTION', highlight: false },
  { label: 'CXO PROGRAMME: 5,000-LEAD PRIMARY RESEARCH & N-2 ICP DISCOVERY', highlight: true },
  { label: 'SUGOI CULTURE: 300-DPI MCP PIPELINE & GA4/CLARITY SURGERY (541 SESSIONS)', highlight: false },
  { label: 'OPEN SOURCE: PYTHON GA4 MCP SERVER PUBLISHED ON PYPI', highlight: true },
];

const EditorialMasthead = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{ position: 'relative', zIndex: 90, background: 'var(--surface)' }}>
      {/* Top Editorial Metadata Bar */}
      <div
        className="masthead-meta-row"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0.65rem 2rem',
          borderBottom: '1px solid var(--grid-rule)',
          borderLeft: '1px solid var(--grid-rule)',
          borderRight: '1px solid var(--grid-rule)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.09em',
          textTransform: 'uppercase',
          color: 'var(--on-surface-variant)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontWeight: 700, color: 'var(--on-surface)' }}>
            <span style={{ width: '7px', height: '7px', background: 'var(--accent-vermilion)', display: 'inline-block' }} />
            VIVEK PUNJABI // SENIOR PRODUCT MARKETING SPECIALIST
          </span>
          <span style={{ opacity: 0.35 }}>|</span>
          <span>MUMBAI, INDIA // REMOTE READY</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              border: '1px solid var(--on-surface)',
              padding: '2px 8px',
              background: 'var(--surface-paper-bright)',
              color: 'var(--on-surface)',
              fontWeight: 600,
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-vermilion)' }} />
            OPEN TO LEAD / SENIOR PMM ROLES
          </span>
          <span>EDTECH · B2B SAAS · D2C</span>
        </div>
      </div>

      {/* Main Masthead Title Row */}
      <div
        className="masthead-title-row"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.5rem 2rem 1.35rem',
          borderBottom: '1px solid var(--grid-rule)',
          borderLeft: '1px solid var(--grid-rule)',
          borderRight: '1px solid var(--grid-rule)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-vermilion)',
              fontWeight: 700,
              marginBottom: '0.35rem',
            }}
          >
            PRODUCT MARKETING WITH A BUILDER MINDSET
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 0.96,
              color: 'var(--on-surface)',
            }}
          >
            VIVEK PUNJABI <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--accent-vermilion)' }}>—</span> DISPATCH
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <a
            href="./Vivek_Punjabi_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.73rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '0.8rem 1.25rem',
            }}
          >
            Resume (PDF) ↓
          </a>
          <button
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.73rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.8rem 1.4rem',
            }}
          >
            Get In Touch →
          </button>
        </div>
      </div>

      {/* Running Metric Ticker */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          borderLeft: '1px solid var(--grid-rule)',
          borderRight: '1px solid var(--grid-rule)',
          borderBottom: '1px solid var(--grid-rule)',
          background: 'var(--surface-container-low)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          height: '36px',
        }}
      >
        <div
          style={{
            padding: '0 1.25rem',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--on-surface)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            zIndex: 2,
          }}
        >
          EVIDENCE //
        </div>

        <div className="ticker-wrap" aria-label="Portfolio Evidence Ticker">
          <div className="ticker-move">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.69rem',
                  letterSpacing: '0.06em',
                  color: item.highlight ? 'var(--accent-vermilion)' : 'var(--on-surface)',
                  fontWeight: item.highlight ? 700 : 500,
                  marginRight: '2.25rem',
                }}
              >
                <span>{item.label}</span>
                <span style={{ color: 'var(--ink-muted)', opacity: 0.45 }}>///</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Editorial Navigation Bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(244, 241, 234, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '3px solid var(--on-surface)',
        }}
      >
        <div
          className="sticky-nav-inner"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0.65rem 2rem',
            borderLeft: '1px solid var(--grid-rule)',
            borderRight: '1px solid var(--grid-rule)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <nav
            aria-label="Editorial Sections"
            className="sticky-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { href: '#cover', label: '01 // OVERVIEW' },
              { href: '#experience', label: '02 // EXPERIENCE & STACK' },
              { href: '#case-studies', label: '03 // CASE STUDIES' },
              { href: '#sugoi-case-study', label: '04 // SUGOI [D2C LAB]', isHot: true },
              { href: '#tools-and-code', label: '05 // CODE & ENDORSEMENTS' },
              { href: '#contact', label: '06 // CONTACT' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: item.isHot ? 700 : 600,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: item.isHot ? 'var(--accent-vermilion)' : 'var(--on-surface)',
                  paddingBottom: '2px',
                  borderBottom: item.isHot ? '2px solid var(--accent-vermilion)' : '2px solid transparent',
                  transition: 'color 0.15s ease, border-color 0.15s ease',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className="sticky-nav-subtitle"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              letterSpacing: '0.08em',
              color: 'var(--on-surface-variant)',
            }}
          >
            TIMESPRO · EX-EMERITUS · SUGOI CULTURE
          </div>
        </div>
      </div>
    </header>
  );
};

export default EditorialMasthead;
