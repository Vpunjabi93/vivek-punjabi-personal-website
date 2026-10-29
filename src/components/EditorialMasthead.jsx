import React from 'react';

const TICKER_ITEMS = [
  { label: 'BLENDED ROAS: 6.16x ▲', highlight: true },
  { label: 'META CBO UNIT ECONOMICS: 10.3 ORDERS BREAK-EVEN', highlight: false },
  { label: 'GA4 + CLARITY AUDIT: 541 SESSIONS CLEANED (56.7% SELF-REFERRAL PURGED)', highlight: true },
  { label: '300-DPI MCP PIPELINE: 35 LPI HALFTONE KNOCKOUT ACTIVE', highlight: false },
  { label: 'IIM EXECUTIVE MBA: +41% FORM FILL RATE SURGE', highlight: true },
  { label: 'CXO N-2 AUDIENCE DISCOVERY: 5,000-LEAD PRIMARY RESEARCH', highlight: false },
  { label: '550B LLM GTM TEARDOWN ENGINE: ONLINE', highlight: true },
];

const BarcodeSVG = () => (
  <svg width="118" height="34" viewBox="0 0 118 34" aria-hidden="true" style={{ display: 'block' }}>
    {[0, 4, 7, 12, 15, 20, 22, 27, 31, 34, 39, 44, 47, 51, 56, 59, 63, 68, 72, 75, 80, 84, 88, 91, 96, 100, 103, 108, 112, 115].map((x, idx) => (
      <rect
        key={x}
        x={x}
        y="0"
        width={idx % 3 === 0 ? '2.5' : idx % 2 === 0 ? '1.2' : '1.8'}
        height="24"
        fill="#111111"
      />
    ))}
    <text x="59" y="32" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#3E3D3A" letterSpacing="1.2">
      04-7712-2836-GTM
    </text>
  </svg>
);

const EditorialMasthead = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{ position: 'relative', zIndex: 90, background: 'var(--surface)' }}>
      {/* Top Archival Telemetry Bar */}
      <div
        className="masthead-meta-row"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0.6rem 2rem',
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
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--on-surface)' }}>
            <span style={{ width: '7px', height: '7px', background: 'var(--accent-vermilion)', display: 'inline-block' }} />
            BROADSHEET FOLIO NO. IV
          </span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>CIRCULATION: GLOBAL (541 VERIFIED NODES)</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>COORDINATES: 19°04&apos;N 72°52&apos;E // MUMBAI HQ</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
            TELEMETRY ON
          </span>
          <span>OCTOBER 2026 // ISSUE 04</span>
        </div>
      </div>

      {/* Main Newspaper Title Block */}
      <div
        className="masthead-title-row"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.75rem 2rem 1.5rem',
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
            THE GTM SYNTHESIZER &amp; ARCHIVAL DISPATCH
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.3rem, 5.2vw, 4.4rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 0.96,
              color: 'var(--on-surface)',
            }}
          >
            VIVEK PUNJABI <span style={{ fontWeight: 300 }}>—</span> DISPATCH
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <BarcodeSVG />
          <button
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
            style={{ padding: '0.75rem 1.35rem', fontSize: '0.72rem' }}
          >
            ▣ INITIATE DOSSIER
          </button>
        </div>
      </div>

      {/* Sticky Editorial Section Nav Bar */}
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
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { href: '#cover', label: '01 // THESIS' },
              { href: '#case-studies', label: '02 // MONOGRAPHS' },
              { href: '#sugoi-case-study', label: '03 // SUGOI CULTURE [CENTERFOLD]', isHot: true },
              { href: '#intelligence', label: '04 // LIVE CONSOLE' },
              { href: '#contact', label: '05 // COLOPHON' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: item.isHot ? 700 : 600,
                  letterSpacing: '0.08em',
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
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.08em',
              color: 'var(--on-surface-variant)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span>■ EDITION: 4.2.0-STABLE</span>
            <span>·</span>
            <span style={{ color: 'var(--accent-vermilion)', fontWeight: 700 }}>PRICE: COMPLIMENTARY INTELLIGENCE</span>
          </div>
        </div>
      </div>

      {/* Running Stock / Telemetry Ticker Tape */}
      <div className="ticker-wrap" aria-label="Live Portfolio Telemetry Ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                paddingRight: '2.25rem',
                whiteSpace: 'nowrap',
                color: item.highlight ? '#FAF8F3' : '#C8C4BC',
                fontWeight: item.highlight ? 700 : 500,
              }}
            >
              <span style={{ color: 'var(--accent-vermilion)', fontSize: '0.85rem' }}>✦</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default EditorialMasthead;
