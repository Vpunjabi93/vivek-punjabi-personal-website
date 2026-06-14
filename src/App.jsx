import React, { Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import AIConsole from './components/AIConsole';
import PortfolioGallery from './components/PortfolioGallery';
import AlignmentPhilosophy from './components/AlignmentPhilosophy';
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
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden' }}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <CustomCursor />
      
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      
      {/* Floating Header */}
      <header
        className="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '1.5rem 2rem',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(244, 244, 240, 0.72)',
          borderBottom: '1px solid var(--glass-border)'
        }}
      >
        <div className="site-brand" style={{ fontWeight: 900, fontSize: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--on-surface)' }}>
          VIVEK PUNJABI <span aria-hidden="true" style={{ color: 'var(--accent-warm)', marginLeft: '0.5rem' }}>//</span>
        </div>

        <nav className="site-nav" aria-label="Primary" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#intelligence" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Console</a>
          <a href="#story" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Story & Builds</a>
          <a href="#pillars" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Pillars</a>
          <a href="#contact" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Connect</a>
        </nav>
      </header>

      <main id="main-content" style={{ paddingTop: '80px' }}>
        <Hero />

        <div id="intelligence" style={{ position: 'relative', marginTop: 'clamp(2rem, 6vh, 5rem)' }}>
          <AIConsole />
        </div>

        <div style={{ marginTop: 'clamp(2rem, 6vh, 5rem)' }}>
          <PortfolioGallery />
        </div>

        <div style={{ marginTop: 'clamp(2rem, 6vh, 5rem)' }}>
          <AlignmentPhilosophy />
        </div>

        <section id="contact" style={{ padding: 'clamp(5rem, 12vh, 9rem) 2rem 8rem', background: 'var(--surface-container-low)', textAlign: 'center', position: 'relative', zIndex: 10, borderTop: '1px solid var(--glass-border)' }}>
          <div className="label" style={{ color: 'var(--accent-warm)' }}>Connect</div>
          <h2 style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', margin: '2rem 0', fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Open to <span style={{ color: 'var(--accent-warm)' }}>New Opportunities.</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', marginBottom: '3rem' }}>
            I'm currently looking for my next Product Marketing role — somewhere I can bring this same builder mindset to positioning, conversion, and GTM systems.<br/>If that sounds like a fit, let's connect.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => window.location.href = 'mailto:punjabivivek1993@gmail.com'}>
              Get In Touch
            </button>
            <button className="btn-outline" onClick={() => window.open('https://linkedin.com/in/vivekpunjabi', '_blank')}>
              LinkedIn Profile
            </button>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.7, position: 'relative', zIndex: 10, background: 'var(--surface)' }}>
        <div className="label" style={{ textTransform: 'none' }}>© 2026 Vivek Punjabi — PMM with a Builder Mindset</div>
      </footer>
    </div>
  );
}

export default App;
