import React from 'react';
import Interactive3DCard from './Interactive3DCard';
import Reveal from './Reveal';

const AlignmentPhilosophy = () => {
  return (
    <section id="pillars" style={{ padding: 'clamp(4rem, 8vh, 7rem) 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

      <Reveal style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent-warm)' }}>
          // THE ALIGNMENT PHILOSOPHY
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
          Two Sides of the Same <span style={{ color: 'var(--accent-warm)' }}>GTM Coin.</span>
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', lineHeight: 1.6 }}>
          Most marketers have never carried a sales number. Most salespeople have never written positioning. I've done both — so the GTM systems I build are designed to convert into pipeline, not just look good in a deck.
        </p>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

        {/* Pillar 1 */}
        <Reveal delay={0.05}>
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            <div className="label" style={{ opacity: 0.5 }}>01</div>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Narrative & Positioning</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              I dissect a product and its competitive landscape to define a core narrative that's customer-centric and built to convert — not generic category copy.
            </p>
          </div>
        </Interactive3DCard>
        </Reveal>

        {/* Pillar 2 */}
        <Reveal delay={0.12}>
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            <div className="label" style={{ opacity: 0.5 }}>02</div>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Conversion & Lifecycle (CRO / BTL)</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              Funnel and landing-page optimization, on-ground BTL execution, and systematically removing friction between interest and purchase.
            </p>
          </div>
        </Interactive3DCard>
        </Reveal>

        {/* Pillar 3 */}
        <Reveal delay={0.18}>
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
            <div className="label" style={{ opacity: 0.5 }}>03</div>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>AI-Native GTM Tooling</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              Custom automation — GTM audit pipelines, sector-specific AI skills, MCP integrations (e.g. GA4), and automation QC systems that keep campaigns honest.
            </p>
          </div>
        </Interactive3DCard>
        </Reveal>

      </div>
    </section>
  );
};

export default AlignmentPhilosophy;
