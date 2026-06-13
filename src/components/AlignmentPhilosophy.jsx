import React from 'react';
import Interactive3DCard from './Interactive3DCard';

const AlignmentPhilosophy = () => {
  return (
    <section id="pillars" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      
      <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent-warm)' }}>
          // THE ALIGNMENT PHILOSOPHY
        </div>
        <h2 className="display" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          Two Sides of the Same <span style={{ color: 'var(--accent-warm)' }}>GTM Coin.</span>
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', lineHeight: 1.6 }}>
          Most marketers have never carried a sales number. Most salespeople have never written positioning. I've done both — so the GTM systems I build are designed to convert into pipeline, not just look good in a deck.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Pillar 1 */}
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            <div className="label" style={{ opacity: 0.5 }}>01</div>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Narrative & Positioning</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              I dissect a product and its competitive landscape to define a core narrative that's customer-centric and built to convert — not generic category copy.
            </p>
          </div>
        </Interactive3DCard>

        {/* Pillar 2 */}
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            <div className="label" style={{ opacity: 0.5 }}>02</div>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Conversion & Lifecycle (CRO / BTL)</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              Funnel and landing-page optimization, on-ground BTL execution, and systematically removing friction between interest and purchase.
            </p>
          </div>
        </Interactive3DCard>

        {/* Pillar 3 */}
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            <div className="label" style={{ opacity: 0.5 }}>03</div>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>AI-Native GTM Tooling</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              Custom automation — GTM audit pipelines, sector-specific AI skills, MCP integrations (e.g. GA4), and automation QC systems that keep campaigns honest.
            </p>
          </div>
        </Interactive3DCard>

      </div>
    </section>
  );
};

export default AlignmentPhilosophy;
