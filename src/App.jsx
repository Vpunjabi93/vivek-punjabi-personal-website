import React, { Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import EditorialMasthead from './components/EditorialMasthead';
import Hero from './components/Hero';
import ExperienceAndStack from './components/ExperienceAndStack';
import CaseStudies from './components/CaseStudies';
import SugoiCaseStudySpread from './components/SugoiCaseStudySpread';
import OpenSourceTools from './components/OpenSourceTools';
import Endorsements from './components/Endorsements';
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
        {/* Section 01: Above-the-Fold Value Prop, Portrait, Impact Ledger & Operating Laws */}
        <Hero />

        {/* Section 02: Career Progression (Sales -> TimesPro PMM -> Sugoi) & Scannable Tool Stack */}
        <ExperienceAndStack />

        {/* Section 03: Historical Case Study Monographs with Blueprint Diagrams & Notion Dashboard */}
        <CaseStudies />

        {/* Section 04: Flagship Crucible — Sugoi Culture (GA4/Clarity Recovery, 300-DPI MCP & Margins) */}
        <SugoiCaseStudySpread />

        {/* Section 05: Verified Open-Source Tools & Published Packages */}
        <OpenSourceTools />

        {/* Peer & Manager Endorsements (LinkedIn Verified Recommendations) */}
        <Endorsements />

        {/* Section 06: Editorial Colophon / Back Cover Dispatch & Resume Desk */}
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
            <span>SECTION 06 // BACK COVER COLOPHON</span>
            <span>STATUS: OPEN TO PRODUCT MARKETING &amp; GTM LEAD ROLES</span>
            <span>EDTECH · B2B SAAS · D2C</span>
          </div>

          <div
            style={{
              padding: 'clamp(3.5rem, 8vw, 5.5rem) clamp(1.15rem, 5vw, 4rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
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
                  fontSize: 'clamp(2.35rem, 5vw, 4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  margin: '0 0 1.35rem',
                  color: 'var(--on-surface)',
                }}
              >
                Ready to Scale Your Next{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-vermilion)' }}>
                  GTM Engine.
                </span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.18rem',
                  lineHeight: 1.6,
                  color: 'var(--on-surface)',
                  maxWidth: '580px',
                  margin: 0,
                }}
              >
                From 100K+ EdTech product launches and VWO conversion surgery to custom Python MCPs and AI quality
                systems—I bring sales-tested empathy and technical execution into one Product Marketing seat.
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--on-surface)',
                background: 'var(--surface-paper-bright)',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.35rem',
                boxShadow: '6px 6px 0px rgba(17, 17, 17, 0.9)',
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
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <span>DIRECT DISPATCH &amp; CV DESK</span>
                <span>MUMBAI / REMOTE READY</span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--on-surface)',
                  margin: 0,
                }}
              >
                Open to <strong>Senior / Lead Product Marketing</strong> roles (especially EdTech &amp; B2B SaaS) and
                high-impact <strong>GTM &amp; CRO consulting</strong> engagements.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.85rem', marginTop: '0.25rem' }}>
                <a
                  href="mailto:punjabivivek1993@gmail.com"
                  className="btn-primary"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  Email Vivek →
                </a>
                <a
                  href="./Vivek_Punjabi_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  Download Resume (PDF) ↗
                </a>
                <a
                  href="https://linkedin.com/in/vivekpunjabi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  LinkedIn Profile ↗
                </a>
                <a
                  href="https://github.com/Vpunjabi93"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  GitHub (@Vpunjabi93) ↗
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
        <div>TYPESET IN BODONI MODA, NEWSREADER, HANKEN GROTESK &amp; JETBRAINS MONO</div>
      </footer>
    </div>
  );
}

export default App;
