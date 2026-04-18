import React from 'react';
import { useDualMode } from '../context/DualModeContext';
import InteractiveCoin from './InteractiveCoin';

const Hero = () => {
  const { mode } = useDualMode();

  return (
    <section 
      style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}
    >
      <div className="animate-fade-in">
        <div className="label" style={{ marginBottom: '1rem' }}>
          {mode === 'sales' ? 'Execution / Revenue / Impact' : 'Strategy / Growth / AI'}
        </div>
        
        <h1 className="display-lg" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          Architect of <span style={{ color: mode === 'sales' ? 'var(--primary-container)' : 'var(--tertiary-container)', transition: 'color 0.6s' }}>Sovereign Intelligence</span>
        </h1>
        
        <p 
          style={{ 
            fontSize: '1.25rem', 
            maxWidth: '600px', 
            margin: '2rem auto', 
            color: 'var(--secondary)',
            fontWeight: 400
          }}
        >
          {mode === 'sales' 
            ? "Bridging aggressive sales performance with high-yield conversion ecosystems built on ruthless prioritization."
            : "Engineering analytical marketing strategies that maneuver around objections before they arise using AI-native workflows."}
        </p>
        
        <InteractiveCoin />
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn-primary">
            {mode === 'sales' ? 'View Conversions' : 'Explore Strategy'}
          </button>
          <button 
            style={{ 
              background: 'transparent', 
              border: '1px solid var(--glass-border)',
              color: 'var(--on-surface)',
              padding: '0.75rem 1.5rem',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'var(--font-display)'
            }}
          >
            Intelligence Console
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
