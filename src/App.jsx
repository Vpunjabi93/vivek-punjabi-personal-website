import React, { Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import EditorialMasthead from './components/EditorialMasthead';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import SugoiCaseStudySpread from './components/SugoiCaseStudySpread';
import AIConsole from './components/AIConsole';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Initialize Smooth Scrolling (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden', background: 'var(--surface)' }}>
      <a href="#main-content" className="skip-link">Skip to editorial content</a>
      <CustomCursor />
      
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      
      {/* Newspaper Masthead & Sticky Folio Nav */}
      <EditorialMasthead />

      <main id="main-content">
        {/* Cover Broadsheet: The Learning Velocity Thesis & Interactive Deconstruction Matrix */}
        <Hero />

        {/* Section 02: Historical Case Study Monographs (EdTech +41% FFR, CXO Discovery, AI Health, PMM) */}
        <div id="case-studies">
          <CaseStudies />
        </div>

        {/* Section 03: Flagship Centerfold — Sugoi Culture (D2C Apparel, 300-DPI MCP & Telemetry Surgery) */}
        <div id="sugoi-case-study">
          <SugoiCaseStudySpread />
        </div>

        {/* Section 04: Live AI GTM Terminal & Published Open-Source Instruments */}
        <div id="intelligence">
          <AIConsole />
        </div>

        {/* Section 05: Editorial Colophon / Back Cover Dispatch Desk */}
        <section
          id="contact"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            borderTop: '3px solid var(--on-surface)',
            borderLeft: '1px solid var(--grid-rule)',
            borderRight: '1px solid var(--grid-rule)',
            borderBottom: '3px solid var(--on-surface)',
            background: 'var(--surface-container-low)',
          }}
        >
          {/* Colophon Bar */}
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
            }}
          >
            <span>SECTION 05 // BACK COVER COLOPHON</span>
            <span>STATUS: OPEN TO PRODUCT MARKETING &amp; GTM ROLES</span>
            <span>TRANSMISSION: READY</span>
          </div>

          <div
            style={{
              padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-vermilion)',
                  marginBottom: '1rem',
                  fontWeight: 700,
                }}
              >
                // COLOPHON &amp; DIRECT DISPATCH
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  margin: '0 0 1.5rem',
                  color: 'var(--on-surface)',
                }}
              >
                Let&apos;s Build the Next <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-vermilion)' }}>Growth Monolith.</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  color: 'var(--on-surface)',
                  maxWidth: '560px',
                  margin: 0,
                }}
              >
                I bring an engineer-grade builder mindset to Product Marketing — bridging DOM scrapers, 300-DPI MCP asset pipelines, qualitative CRO heatmaps, and high-converting positioning copy.
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--grid-rule)',
                background: 'var(--surface-paper-bright)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--grid-rule)',
                  paddingBottom: '0.75rem',
                  color: 'var(--on-surface-variant)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>DIRECT DISPATCH DESK</span>
                <span>MUMBAI / REMOTE</span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--on-surface)',
                  margin: 0,
                }}
              >
                Available for Lead / Senior Product Marketing roles, GTM Architecture contracts, and flagship D2C launch consultancies.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <a
                  href="mailto:punjabivivek1993@gmail.com"
                  className="btn-primary"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Initiate Correspondence →
                </a>
                <a
                  href="https://linkedin.com/in/vivekpunjabi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  LinkedIn Dossier ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Archival Footnote Footer */}
      <footer
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '2rem',
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
        <div>© 2026 VIVEK PUNJABI — EDITORIAL BROADSHEET EDITION</div>
        <div>TYPESET IN BODONI MODA, NEWSREADER &amp; JETBRAINS MONO</div>
      </footer>
    </div>
  );
}

export default App;
