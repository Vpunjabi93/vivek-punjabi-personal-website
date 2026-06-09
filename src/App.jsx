import React, { useEffect } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import AIConsole from './components/AIConsole';
import CaseStudyGrid from './components/CaseStudyGrid';
import PortfolioGallery from './components/PortfolioGallery';
import { useDualMode } from './context/DualModeContext';

function App() {
  const { mode } = useDualMode();

  // Scroll reveal Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Fade-in once
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup observer
    return () => {
      revealElements.forEach((el) => {
        try {
          observer.unobserve(el);
        } catch (e) {}
      });
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Dynamic Background */}
      <Background />
      
      {/* Floating Header */}
      <header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0,
          right: 0,
          padding: '1.25rem 3rem', 
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          background: 'rgba(19, 19, 19, 0.4)',
          borderBottom: '1px solid rgba(199, 198, 198, 0.08)'
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '1.1rem', fontFamily: 'var(--font-mono)', letterSpacing: '-0.02em', color: 'var(--on-surface)' }}>
          VIVEK PUNJABI <span style={{ color: 'var(--mode-accent)', marginLeft: '0.5rem', transition: 'color 0.6s' }}>//</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '2.5rem' }}>
          <a href="#console-demo" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem', color: 'var(--on-surface-variant)', transition: 'color 0.3s' }}>Console</a>
          <a href="#portfolio-gallery" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem', color: 'var(--on-surface-variant)', transition: 'color 0.3s' }}>Story & Builds</a>
          <a href="#pillars" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem', color: 'var(--on-surface-variant)', transition: 'color 0.3s' }}>Pillars</a>
          <a href="#contact" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem', color: 'var(--on-surface-variant)', transition: 'color 0.3s' }}>Connect</a>
        </nav>
      </header>

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: GTM Console Demo */}
        <AIConsole />
        
        {/* Section 3: Origin Story & Selected Builds */}
        <PortfolioGallery />
        
        {/* Section 4: GTM Pillars & Case Studies */}
        <div id="pillars" className="section-base scroll-reveal">
          <CaseStudyGrid />
        </div>

        {/* Section 5: Contact Footer */}
        <section id="contact" className="section-split scroll-reveal" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="label" style={{ color: 'var(--mode-accent)', marginBottom: '1.5rem', transition: 'color 0.6s' }}>Deployment</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
            Deploy <span style={{ color: 'var(--mode-accent)', transition: 'color 0.6s' }}>GTM Automation</span>.
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Ready to scale your SaaS positioning with interactive demos and custom GTM pipelines? Let's connect.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => window.location.href = 'mailto:vivek@example.com?subject=GTM%20Dissection'}>
              Deploy Pipeline
            </button>
            <button className="btn-secondary" onClick={() => window.open('https://www.linkedin.com/in/vivek-punjabi/', '_blank')}>
              LinkedIn Profile
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(199, 198, 198, 0.05)', opacity: 0.4 }}>
        <div className="label" style={{ fontSize: '0.7rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
          <span>© 2026 Vivek Punjabi — PMM with a Builder Mindset</span>
          <a 
            href="https://github.com/Vpunjabi93" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--mode-accent)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            GitHub Profile
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
