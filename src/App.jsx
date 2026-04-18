import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import AIConsole from './components/AIConsole';
import CaseStudyGrid from './components/CaseStudyGrid';
import { useDualMode } from './context/DualModeContext';

function App() {
  const { mode } = useDualMode();

  return (
    <div className="app-container">
      <Background />
      
      {/* Floating Header */}
      <header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          width: '100%', 
          padding: '1.5rem 2rem', 
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(8px)',
          background: 'rgba(19, 19, 19, 0.5)',
          borderBottom: '1px solid var(--glass-border)'
        }}
      >
        <div style={{ fontWeight: 900, fontSize: '1.25rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
          VIVEK PUNJABI <span style={{ color: 'var(--mode-accent)', marginLeft: '0.5rem' }}>//</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#intelligence" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Intelligence</a>
          <a href="#career" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Career</a>
          <a href="#contact" className="label" style={{ textDecoration: 'none', fontSize: '0.75rem' }}>Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        
        <div id="intelligence" className="section-split" style={{ padding: '4rem 0' }}>
          <AIConsole />
        </div>

        <CaseStudyGrid />

        <section id="career" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '1rem' }}>Timeline</div>
          <h2 className="display-lg" style={{ fontSize: '3rem' }}>Path to <span style={{ color: 'var(--mode-accent)' }}>Sovereignty</span></h2>
          <p style={{ marginTop: '2rem', color: 'var(--secondary)', maxWidth: '600px', margin: '2rem auto' }}>
            A career forged in sales performance, refined by analytical marketing strategy, and accelerated by AI-native workflows.
          </p>
          <div className="glass-card" style={{ maxWidth: '800px', margin: '4rem auto', textAlign: 'left' }}>
            <div style={{ borderLeft: '2px solid var(--mode-accent)', paddingLeft: '2rem' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div className="label" style={{ color: 'var(--mode-accent)' }}>Current</div>
                <h3 style={{ fontSize: '1.5rem' }}>Product Marketing Specialist</h3>
                <p style={{ color: 'var(--secondary)' }}>Solving high-stake GTM challenges with AI precision.</p>
              </div>
              <div>
                <div className="label">Origins</div>
                <h3 style={{ fontSize: '1.5rem' }}>Sales Development & Performance</h3>
                <p style={{ color: 'var(--secondary)' }}>Building the foundation of ruthless prioritization and conversion focus.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: '8rem 2rem', background: 'var(--surface-container-low)', textAlign: 'center' }}>
          <div className="label">Connect</div>
          <h2 style={{ fontSize: '4rem', margin: '2rem 0' }}>Deploy <span style={{ color: 'var(--mode-accent)' }}>Excellence.</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button className="btn-primary" onClick={() => window.location.href = 'mailto:vivek@example.com'}>Email</button>
            <button className="btn-primary" onClick={() => window.open('https://linkedin.com/in/vivekpunjabi', '_blank')}>LinkedIn</button>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', opacity: 0.5 }}>
        <div className="label">© 2026 Vivek Punjabi — All rights reserved. Built with Sovereign Intelligence.</div>
      </footer>
    </div>
  );
}

export default App;
