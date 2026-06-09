import React from 'react';
import { useDualMode } from '../context/DualModeContext';
import InteractiveCoin from './InteractiveCoin';

const Hero = () => {
  const { mode } = useDualMode();

  return (
    <section 
      style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Role Badge */}
        <div 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: 'var(--on-surface-variant)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.35rem 0.85rem',
            borderRadius: '100px',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          ROLE // GTM & AUTOMATION ENGINEER
        </div>

        {/* Editorial Subtitle */}
        <div 
          className="label" 
          style={{ 
            marginBottom: '1.5rem', 
            color: 'var(--mode-accent)',
            transition: 'color 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {mode === 'sales' ? 'B2C Sales Alignment / Persona Mapping / AI Analysis' : 'Product Positioning / Conversion Copywriting / Interactive Demos'}
        </div>
        
        {/* Massive Serif Headline */}
        <h1 
          className="display-lg" 
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto 2rem auto',
            fontStyle: mode === 'sales' ? 'normal' : 'italic',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {mode === 'sales' ? (
            <>Arm your sales teams with <span style={{ color: 'var(--mode-accent)', transition: 'color 0.6s' }}>custom AI</span>.</>
          ) : (
            <>Position SaaS narratives with <span style={{ color: 'var(--mode-accent)', transition: 'color 0.6s' }}>custom code</span>.</>
          )}
        </h1>
        
        {/* Geist Body Copy */}
        <p 
          style={{ 
            fontSize: '1.2rem', 
            maxWidth: '750px', 
            margin: '0 auto 3rem auto', 
            color: 'var(--on-surface-variant)',
            fontWeight: 300,
            lineHeight: 1.7
          }}
        >
          I am a Product Marketing Manager (PMM) who speaks developer—not fluently, but I get things done. I write conversion-focused narratives, build interactive product tours, and experiment with AI to map product-market fit.
        </p>
        
        {/* Interactive Dual-Mode Trigger */}
        <div 
          style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', 
            letterSpacing: '0.1em', 
            opacity: 0.5, 
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          [ Select Active Mode ]
        </div>
        <InteractiveCoin />
        
        {/* Premium CTAs */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button 
            className="btn-primary"
            onClick={() => {
              document.getElementById('console-demo')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Run AI GTM Pipeline
          </button>
          <button 
            className="btn-secondary"
            onClick={() => {
              const email = 'vivek@example.com';
              const subject = encodeURIComponent('Request for GTM Dissection');
              const body = encodeURIComponent('Hi Vivek,\n\nI would like to request a free GTM dissection for my company.');
              window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
            }}
          >
            Get Free GTM Dissection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
