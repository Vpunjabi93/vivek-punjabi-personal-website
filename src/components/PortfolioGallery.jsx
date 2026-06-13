import React from 'react';
import Interactive3DCard from './Interactive3DCard';

const PortfolioGallery = () => {
  return (
    <section id="story" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        
        {/* Left Column: Origin Story */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="label" style={{ marginBottom: '2rem', color: 'var(--accent-warm)' }}>
            // THE ORIGIN
          </div>
          <h2 className="display" style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>
            From Cold Calls <br />
            <span style={{ color: 'var(--accent-warm)' }}>to GTMs.</span>
          </h2>
          <div style={{ color: 'var(--on-surface-variant)', fontSize: '1.125rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              I started in B2C sales — years of cold calls, objections, and watching in real time which messages actually closed deals and which just sounded good.
            </p>
            <p>
              That's the lens I bring to product marketing now: positioning and copy informed by what converts, not just what reads well in a deck. And because I can code, I build the tooling — personas, GTM audits, interactive demos — instead of just briefing someone else to.
            </p>
          </div>
          <div className="label" style={{ marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
            PMM // BUILDER
          </div>
        </div>

        {/* Right Column: Selected Builds */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="label" style={{ marginBottom: '1rem', color: 'var(--on-surface-variant)' }}>
            Selected Builds
          </div>

          <Interactive3DCard>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Interactive Product Tour Framework</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem' }}>
                A custom React component library for embedding step-by-step, clickable walkthroughs into SaaS onboarding — built to teach product features without adding friction.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>React</span>
                <span className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Framer Motion</span>
              </div>
              <a href="#" style={{ marginTop: '1rem', color: 'var(--on-surface)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--on-surface)', alignSelf: 'flex-start' }}>
                View Project →
              </a>
            </div>
          </Interactive3DCard>

          <Interactive3DCard>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>AI Persona & Positioning Mapper</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem' }}>
                A Node pipeline that parses a product's landing page, runs it through custom LLM prompts, and outputs target personas, friction points, and a product-market-fit read.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Node.js</span>
                <span className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>LLM APIs</span>
              </div>
              <a href="#" style={{ marginTop: '1rem', color: 'var(--on-surface)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--on-surface)', alignSelf: 'flex-start' }}>
                View Repo →
              </a>
            </div>
          </Interactive3DCard>

          <Interactive3DCard>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>This Portfolio</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem' }}>
                The site you're on. Interactive WebGL environment, a live GTM audit pipeline, and fluid physics-based DOM animations.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Three.js</span>
                <span className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>React</span>
              </div>
              <a href="#" style={{ marginTop: '1rem', color: 'var(--on-surface)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--on-surface)', alignSelf: 'flex-start' }}>
                View Source →
              </a>
            </div>
          </Interactive3DCard>

        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
