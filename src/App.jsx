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
      <CustomCursor />
      
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      
      {/* Floating Header */}
      <header 
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
          background: 'rgba(244, 244, 240, 0.7)',
          borderBottom: '1px solid var(--glass-border)'
        }}
      >
        <div style={{ fontWeight: 900, fontSize: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--on-surface)' }}>
          VIVEK PUNJABI <span style={{ color: 'var(--accent-warm)', marginLeft: '0.5rem' }}>//</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#intelligence" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Console</a>
          <a href="#story" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Story & Builds</a>
          <a href="#pillars" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Pillars</a>
          <a href="#contact" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Connect</a>
        </nav>
      </header>

      <main style={{ paddingTop: '80px' }}>
        <Hero />
        
        <div id="intelligence" style={{ position: 'relative', marginTop: '15vh' }}>
          <AIConsole />
        </div>

        <div style={{ marginTop: '15vh' }}>
          <PortfolioGallery />
        </div>

        <div style={{ marginTop: '15vh' }}>
          <AlignmentPhilosophy />
        </div>

        <section id="contact" style={{ padding: '15vh 2rem 8rem', background: 'var(--surface-container-low)', textAlign: 'center', position: 'relative', zIndex: 10, borderTop: '1px solid var(--glass-border)' }}>
          <div className="label" style={{ color: 'var(--accent-warm)' }}>Deployment</div>
          <h2 style={{ fontSize: '4rem', margin: '2rem 0', fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '-0.04em' }}>
            Deploy <span style={{ color: 'var(--accent-warm)' }}>GTM Automation.</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', marginBottom: '3rem' }}>
            Need positioning, conversion copy, or a custom GTM pipeline built for your product?<br/>Let's talk.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button className="btn-primary" onClick={() => window.location.href = 'mailto:punjabivivek1993@gmail.com'}>
              Deploy Pipeline
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
