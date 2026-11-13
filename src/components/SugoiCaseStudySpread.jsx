import React, { useState } from 'react';

const UNIT_ECONOMICS_ROWS = [
  {
    sku: 'Tsundere / Shinigami Bomber (FA30/UA30)',
    type: 'Cut-and-Sew Sublimation Satin',
    making: '₹749.70',
    landed: '₹1,057',
    retail: '₹3,499',
    cm1: '₹2,442 (69.8%)',
  },
  {
    sku: 'Heavyweight Pullover Hoodie (UH62)',
    type: '380 GSM Cotton Terry Fleece',
    making: '₹1,029.00',
    landed: '₹1,303',
    retail: '₹2,699',
    cm1: '₹1,396 (51.7%)',
  },
  {
    sku: 'Shinigami Acid Wash OS Tee (UC61)',
    type: '240 GSM Mineral Acid Cotton',
    making: '₹780.75',
    landed: '₹963',
    retail: '₹1,799',
    cm1: '₹836 (46.5%)',
  },
  {
    sku: 'Hime Baby Tee 2-Pack Bundle (FT47×2)',
    type: '190 GSM Ribbed Combed Cotton',
    making: '₹714.00',
    landed: '₹869',
    retail: '₹1,499',
    cm1: '₹630 (42.0%)',
  },
  {
    sku: 'Shinigami / Hime Embroidery Cap (SB30)',
    type: 'Heavy Cotton Twill Snapback',
    making: '₹356.00',
    landed: '₹470',
    retail: '₹799',
    cm1: '₹329 (41.2%)',
  },
];

const SugoiCaseStudySpread = () => {
  const [activeTab, setActiveTab] = useState('cro'); // 'cro' | 'print' | 'margin'
  const [telemetryState, setTelemetryState] = useState('after'); // 'before' | 'after'

  return (
    <section
      id="sugoi-case-study"
      style={{
        background: 'var(--noir-bg)',
        color: 'var(--noir-text)',
        borderTop: '4px solid var(--accent-vermilion)',
        borderBottom: '4px solid var(--on-surface)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          borderLeft: '1px solid var(--noir-border)',
          borderRight: '1px solid var(--noir-border)',
        }}
      >
        {/* Top Running Header */}
        <div
          style={{
            padding: '0.75rem 2rem',
            borderBottom: '1px solid var(--noir-border)',
            background: '#101014',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span className="stamp-badge">SECTION 04 // THE PROVING GROUND</span>
            <span style={{ color: 'var(--noir-muted)' }}>
              SUGOI CULTURE (凄いカルチャー) // FULL-STACK D2C BRAND ARCHITECTURE
            </span>
          </div>
          <div style={{ color: 'var(--noir-amber)', fontWeight: 700 }}>
            PIPELINE: 300-DPI MCP AUTOMATION + GA4/CLARITY SURGERY + UNIT MARGINS
          </div>
        </div>

        {/* Cover Story Headline Banner */}
        <div
          style={{
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.15rem, 3vw, 2rem)',
            borderBottom: '1px solid var(--noir-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2.5rem',
            alignItems: 'end',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--noir-amber)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              ARCHIVAL DOSSIER // THE FULL-STACK D2C CRUCIBLE
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.35rem, 4.6vw, 4.1rem)',
                color: 'var(--noir-text)',
                fontWeight: 500,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              SUGOI CULTURE — Testing GTM Systems with Skin in the Game.
            </h2>
          </div>

          <div
            style={{
              borderLeft: '2px solid var(--noir-red)',
              paddingLeft: '1.5rem',
              color: 'var(--noir-muted)',
              fontSize: '1.02rem',
              lineHeight: 1.65,
            }}
          >
            Scaling an anime-inspired luxury streetwear label in India required more than aesthetic lookbooks. I engineered the entire operational and technical system from raw pixel to margin model: an <strong style={{ color: 'var(--noir-text)' }}>automated 300-DPI MCP production pipeline</strong>, forensic <strong style={{ color: 'var(--noir-text)' }}>GA4 + Microsoft Clarity telemetry recovery</strong> across 541 sessions, and a contribution-margin-first <strong style={{ color: 'var(--noir-text)' }}>unit economics model</strong>.
          </div>
        </div>

        {/* Full-Width 3-Tab Archival Dossier */}
        <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 2rem' }}>
          {/* 3-Tab Monolithic Segment Selector */}
          <div
            role="tablist"
            aria-label="Sugoi Culture Case Study Chapters"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              border: '1px solid var(--noir-border)',
              marginBottom: '2.5rem',
              background: '#0E0E12',
            }}
          >
            {[
              { id: 'cro', code: 'TAB A // 01', title: 'GA4 + CLARITY TELEMETRY SURGERY' },
              { id: 'print', code: 'TAB B // 02', title: '300-DPI MCP PRODUCTION PIPELINE' },
              { id: 'margin', code: 'TAB C // 03', title: 'SKU MARGIN & COGS ARCHITECTURE' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '1.1rem 1.25rem',
                    border: 'none',
                    borderRight: '1px solid var(--noir-border)',
                    borderTop: isActive ? '3px solid var(--noir-red)' : '3px solid transparent',
                    background: isActive ? 'var(--noir-panel-high)' : 'transparent',
                    color: isActive ? 'var(--noir-text)' : 'var(--noir-muted)',
                    textAlign: 'left',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ fontSize: '0.64rem', color: isActive ? 'var(--noir-amber)' : 'var(--noir-muted)', marginBottom: '0.3rem' }}>
                    {tab.code}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    {tab.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* TAB A: GA4 + CLARITY TELEMETRY SURGERY & CRO */}
          {activeTab === 'cro' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--noir-text)', margin: 0 }}>
                    01 // Forensic GA4 + Clarity Telemetry Audit &amp; Conversion Surgery
                  </h3>
                  <span className="stamp-badge">541 LIVE SESSIONS AUDITED</span>
                </div>

                <p style={{ color: 'var(--noir-muted)', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, maxWidth: '960px' }}>
                  Before deploying paid media on <code style={{ color: 'var(--noir-amber)' }}>sugoiculture.com</code>, I cross-referenced live DOM script execution against 30 days of Microsoft Clarity session recordings (<code style={{ color: 'var(--noir-amber)' }}>xa0ou08hu0</code>) and GA4 (<code style={{ color: 'var(--noir-amber)' }}>G-C9QMCV92F9</code>). The audit uncovered that speed optimization (<strong style={{ color: 'var(--noir-text)' }}>BlogVault Airlift</strong>) and SEO (<strong style={{ color: 'var(--noir-text)' }}>SEOPress</strong>) plugins were actively sabotaging analytics and conversion tracking.
                </p>
              </div>

              {/* Visual DOM & Telemetry Flow Blueprint */}
              <div
                style={{
                  border: '1px solid var(--noir-border)',
                  background: '#0E0E12',
                  padding: '1.15rem 1.35rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    letterSpacing: '0.1em',
                    color: 'var(--noir-amber)',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                  }}
                >
                  FIG 04.1 // ROOT-CAUSE TELEMETRY RECOVERY ARCHITECTURE
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                    gap: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                  }}
                >
                  <div style={{ padding: '0.75rem', border: '1px solid rgba(200, 40, 30, 0.4)', background: '#141115' }}>
                    <div style={{ color: 'var(--noir-red)', fontWeight: 700, marginBottom: '0.25rem' }}>
                      01 // BROKEN EXECUTION
                    </div>
                    <div style={{ color: 'var(--noir-muted)', lineHeight: 1.45 }}>
                      Airlift delayed JS + SEOPress <code style={{ color: 'var(--noir-text)' }}>consent(false)</code> → 0% WooCommerce events &amp; 56.7% self-referrals.
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--noir-border)', background: 'var(--noir-panel)' }}>
                    <div style={{ color: 'var(--noir-text)', fontWeight: 700, marginBottom: '0.25rem' }}>
                      02 // SNIPPET #8780 SURGERY
                    </div>
                    <div style={{ color: 'var(--noir-muted)', lineHeight: 1.45 }}>
                      <code style={{ color: 'var(--noir-amber)' }}>bv-exclude=&quot;true&quot;</code> + <code style={{ color: 'var(--noir-amber)' }}>document.readyState</code> + duplicate SEOPress Clarity tag removed.
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', border: '1px solid rgba(229, 142, 38, 0.45)', background: '#15130F' }}>
                    <div style={{ color: 'var(--noir-amber)', fontWeight: 700, marginBottom: '0.25rem' }}>
                      03 // CLEAN FUNNEL SIGNAL
                    </div>
                    <div style={{ color: 'var(--noir-muted)', lineHeight: 1.45 }}>
                      Unified <code style={{ color: 'var(--noir-text)' }}>trackBoth()</code> restoring 100% GA4 events, 0 JS scroll errors &amp; Prepaid UPI checkout flow.
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Before vs. After Telemetry Funnel Toggle */}
              <div
                style={{
                  border: '1px solid var(--noir-border)',
                  background: 'var(--noir-panel)',
                  padding: '1.75rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid var(--noir-border)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }}>
                    ⚡ TELEMETRY &amp; FUNNEL STATE INSPECTOR:
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setTelemetryState('before')}
                      style={{
                        padding: '0.5rem 1rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        border: '1px solid var(--noir-border)',
                        background: telemetryState === 'before' ? 'var(--noir-red)' : 'transparent',
                        color: telemetryState === 'before' ? '#fff' : 'var(--noir-muted)',
                        cursor: 'pointer',
                      }}
                    >
                      [BEFORE: AIRLIFT &amp; SEOPRESS BUGS]
                    </button>
                    <button
                      type="button"
                      onClick={() => setTelemetryState('after')}
                      style={{
                        padding: '0.5rem 1rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        border: '1px solid var(--noir-amber)',
                        background: telemetryState === 'after' ? 'var(--noir-amber)' : 'transparent',
                        color: telemetryState === 'after' ? '#0B0B0D' : 'var(--noir-amber)',
                        cursor: 'pointer',
                      }}
                    >
                      [AFTER: DEPLOYED LIVE FIXES &amp; CRO]
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  {(telemetryState === 'before'
                    ? [
                        {
                          label: 'GA4 CUSTOM ECOMMERCE EVENTS',
                          val: '0% ACTIVE (DEAD)',
                          status: 'CRITICAL',
                          detail:
                            'Airlift delayed custom WooCommerce JS (type="bv_inline_delayed_js") until after DOMContentLoaded had already fired — view_item, add_to_cart, and purchase never executed.',
                        },
                        {
                          label: 'CLARITY SESSION ATTRIBUTION',
                          val: '56.7% SELF-REFERRALS',
                          status: '307 FAKE SESSIONS',
                          detail:
                            'Duplicate SEOPress snippet forced window.clarity("consent", false), blocking cookies and splitting every internal click into a new sugoiculture.com session (0% returning users).',
                        },
                        {
                          label: 'DOM & UX FRICTION SIGNALS',
                          val: '1,233 JS SCROLL ERRORS',
                          status: '91 LOGO DEAD-CLICKS',
                          detail:
                            'Inline window.onscroll queried missing #hide-header on every scroll tick. Unlinked header logo caused 91 dead taps; static "LOADING MORE..." heading caused 16 dead clicks.',
                        },
                        {
                          label: 'CHECKOUT & AOV STRUCTURE',
                          val: '20–35% COD RTO BLEED',
                          status: '₹1,799 SINGLE-ITEM CART',
                          detail:
                            'Multi-step checkout friction and zero cart upsell architecture left single-tee buyers ₹200 short of free delivery with unmitigated COD return risks.',
                        },
                      ]
                    : [
                        {
                          label: 'GA4 + CLARITY SYNC (SNIPPET #8780)',
                          val: '100% EVENTS RESTORED',
                          status: 'DEPLOYED LIVE',
                          detail:
                            'Added data-cfasync="false" bv-exclude="true", replaced DOMContentLoaded race condition with document.readyState check, and unified trackBoth() across GA4 & Clarity.',
                        },
                        {
                          label: 'COOKIE & ATTRIBUTION RECOVERY',
                          val: '0.0% SELF-REFERRAL LEAK',
                          status: 'CLEAN FUNNEL',
                          detail:
                            'Disabled duplicate SEOPress Clarity tag while preserving Google Site Kit & SEOPress SEO meta; added UTM governance for InstagramApp & GoogleApp in-app browsers.',
                        },
                        {
                          label: 'NULL-SAFE SCROLL & UX FIXES (#4705)',
                          val: '0 JS SCROLL ERRORS',
                          status: 'ZERO DEAD-CLICKS',
                          detail:
                            'Deployed passive null-safe scroll listener (if (!headerEl) return;), wrapped desktop/mobile logos in homepage links, and set /wedding-page/ (#8403) to noindex, nofollow.',
                        },
                        {
                          label: 'PREPAID UPI & AOV ENGINE',
                          val: 'PREPAID UPI NUDGE',
                          status: 'RTO BLEED MITIGATED',
                          detail:
                            'Added Instant ₹100 Off + Free Holographic Warding Sticker Pack for Prepaid UPI, plus a dynamic ₹1,999 Free Express Shipping bar that nudges single-tee buyers to add an embroidery cap.',
                        },
                      ]
                  ).map((card) => (
                    <div
                      key={card.label}
                      style={{
                        padding: '1.25rem',
                        background: '#0E0E12',
                        border:
                          telemetryState === 'before'
                            ? '1px solid rgba(200, 40, 30, 0.45)'
                            : '1px solid rgba(229, 142, 38, 0.45)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.64rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <span style={{ color: 'var(--noir-muted)' }}>{card.label}</span>
                        <span
                          style={{
                            color: telemetryState === 'before' ? 'var(--noir-red)' : 'var(--noir-amber)',
                            fontWeight: 700,
                          }}
                        >
                          {card.status}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.4rem',
                          color: 'var(--noir-text)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {card.val}
                      </div>
                      <p style={{ color: 'var(--noir-muted)', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                        {card.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB B: 300-DPI MCP PRINT PIPELINE */}
          {activeTab === 'print' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--noir-text)', margin: '0 0 0.75rem' }}>
                  02 // Automated 300-DPI MCP Asset &amp; Cut-and-Sew Pipeline
                </h3>
                <p style={{ color: 'var(--noir-muted)', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, maxWidth: '960px' }}>
                  To manufacture cut-and-sew apparel in India with zero quality degradation, I built an automated cross-application pipeline connecting Krita, Adobe Illustrator, and a custom Photoshop Raster Engine MCP server.
                </p>
              </div>

              {/* 4 Pipeline Stages */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                  gap: '1.25rem',
                }}
              >
                {[
                  {
                    step: 'STAGE 01 // TAXONOMY',
                    title: '10,000+ Vector Index',
                    desc: 'Python vector database indexing dark Ukiyo-e, cyber-occult anatomy, and Japanese warding calligraphy with strict 1:1 Golden Mockup continuity.',
                  },
                  {
                    step: 'STAGE 02 // VECTOR & HOOP',
                    title: 'Illustrator & Krita MCP',
                    desc: 'Enforces 2.25"×2.25" square cap embroidery geometry (675×675 px @ 300 DPI, 2.5mm min stitch stroke, flat 2D fills with zero faux thread grain).',
                  },
                  {
                    step: 'STAGE 03 // SEMITONE RASTER',
                    title: 'Photoshop Raster Engine',
                    desc: 'Knocks out pure #000000 cotton backgrounds, clears trapped kanji/letter counters, and dithers shadow edges with 35 LPI / 55 LPI halftone dots.',
                  },
                  {
                    step: 'STAGE 04 // TECH PACK',
                    title: 'Qikink 300-DPI Master',
                    desc: 'Embeds explicit pHYs (300, 300) DPI metadata across 4200×5400 jumbo tees, 2400×2400 FT47 baby tees, and 8500×8500 cut-and-sew Sukajan bombers.',
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    style={{
                      padding: '1.5rem',
                      background: 'var(--noir-panel)',
                      border: '1px solid var(--noir-border)',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--noir-amber)', marginBottom: '0.5rem', fontWeight: 700 }}>
                      {s.step}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--noir-text)', marginBottom: '0.6rem', fontWeight: 700 }}>
                      {s.title}
                    </div>
                    <p style={{ color: 'var(--noir-muted)', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Editorial Pull Quote */}
              <blockquote
                style={{
                  margin: 0,
                  padding: '1.5rem 2rem',
                  borderLeft: '4px solid var(--noir-red)',
                  background: '#101015',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.25rem',
                  lineHeight: 1.5,
                  color: 'var(--noir-text)',
                }}
              >
                &ldquo;By knocking out pure black (#000000) into a 35 LPI halftone matrix, the 240 GSM mineral-washed cotton breathes directly through the artwork — eliminating rubbery plastisol sweat traps while cutting production prep from 3 days to 18 minutes.&rdquo;
              </blockquote>
            </div>
          )}

          {/* TAB C: SKU MARGIN & COGS ARCHITECTURE */}
          {activeTab === 'margin' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--noir-text)', margin: 0 }}>
                    03 // SKU Margin &amp; Landed Cost Architecture
                  </h3>
                  <span className="stamp-badge">MARGIN-FIRST DISCIPLINE</span>
                </div>
                <p style={{ color: 'var(--noir-muted)', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, maxWidth: '960px' }}>
                  Every silhouette in the collection is modeled from raw manufacturing base up—factoring in cut-and-sew blank making, 5% textile GST, forward freight, a 20% COD return reserve, and payment gateway fees.
                </p>
              </div>

              {/* SKU Unit Economics Table */}
              <div style={{ overflowX: 'auto', border: '1px solid var(--noir-border)' }}>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textAlign: 'left',
                  }}
                >
                  <thead>
                    <tr style={{ background: '#18181F', color: 'var(--noir-amber)', borderBottom: '1px solid var(--noir-border)' }}>
                      <th style={{ padding: '0.85rem 1rem' }}>SILHOUETTE</th>
                      <th style={{ padding: '0.85rem 1rem' }}>FABRIC &amp; SPEC</th>
                      <th style={{ padding: '0.85rem 1rem' }}>MAKING COST</th>
                      <th style={{ padding: '0.85rem 1rem' }}>LANDED COGS</th>
                      <th style={{ padding: '0.85rem 1rem' }}>RETAIL PRICE</th>
                      <th style={{ padding: '0.85rem 1rem' }}>GROSS CM1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UNIT_ECONOMICS_ROWS.map((row) => (
                      <tr key={row.sku} style={{ borderBottom: '1px solid var(--noir-border)', background: 'var(--noir-panel)' }}>
                        <td style={{ padding: '0.8rem 1rem', color: 'var(--noir-text)', fontWeight: 600 }}>{row.sku}</td>
                        <td style={{ padding: '0.8rem 1rem', color: 'var(--noir-muted)' }}>{row.type}</td>
                        <td style={{ padding: '0.8rem 1rem', color: 'var(--noir-muted)' }}>{row.making}</td>
                        <td style={{ padding: '0.8rem 1rem', color: 'var(--noir-muted)' }}>{row.landed}</td>
                        <td style={{ padding: '0.8rem 1rem', color: 'var(--noir-text)', fontWeight: 600 }}>{row.retail}</td>
                        <td style={{ padding: '0.8rem 1rem', color: 'var(--noir-amber)', fontWeight: 700 }}>{row.cm1}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pre-Launch Margin Discipline Callout */}
              <div
                style={{
                  padding: '1.5rem 1.75rem',
                  background: '#101015',
                  border: '1px solid var(--noir-border)',
                  borderLeft: '4px solid var(--noir-amber)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--noir-amber)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  THE STRATEGY BEHIND THE MARGINS
                </div>
                <p style={{ color: 'var(--noir-text)', fontSize: '0.96rem', lineHeight: 1.65, margin: 0 }}>
                  Most D2C brands fail because they launch paid advertising before modeling SKU-level contribution margins. For Sugoi Culture, anchor products like the 360° Sukajan Bomber were engineered specifically for a <strong style={{ color: 'var(--noir-amber)' }}>69.8% gross CM1 (₹2,442 margin/unit)</strong>. This guarantees a substantial margin cushion to sustainably fund customer acquisition and buffer return reserves without bleeding capital.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Colophon Bar */}
        <div
          style={{
            padding: '1rem 2rem',
            borderTop: '1px solid var(--noir-border)',
            background: '#0E0E12',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--noir-muted)',
          }}
        >
          <span>SUGOI CULTURE // ARCHITECTURAL DOSSIER</span>
          <span>PRODUCTION MASTER RESOLUTION: 300 DPI (300, 300)</span>
          <span>ANALYTICS ENGINE: GA4 + MICROSOFT CLARITY</span>
        </div>
      </div>
    </section>
  );
};

export default SugoiCaseStudySpread;
