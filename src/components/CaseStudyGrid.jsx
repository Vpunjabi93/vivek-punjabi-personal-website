import React from 'react';
import Interactive3DCard from './Interactive3DCard';

const CaseStudyGrid = () => {
  return (
    <div style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <div className="label" style={{ marginBottom: '3rem' }}>
        The Builder Mentality
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Card 1 */}
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <div className="label" style={{ color: 'var(--accent-warm)', marginBottom: '1rem' }}>Strategy to Execution</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>GTM Automation</h2>
              <p style={{ color: 'var(--on-surface-variant)' }}>
                I don't just write briefs. I build automated pipelines that extract value propositions from raw product docs and generate tailored sales collateral instantly.
              </p>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--on-surface)', marginTop: '2rem', opacity: 0.1 }}>
              01
            </div>
          </div>
        </Interactive3DCard>

        {/* Card 2 */}
        <Interactive3DCard>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <div className="label" style={{ color: 'var(--accent-warm)', marginBottom: '1rem' }}>Conversion Engine</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Scale Any Industry</h2>
              <p style={{ color: 'var(--on-surface-variant)' }}>
                Whether it's B2B SaaS or Executive Education, the physics of conversion remain the same. I systematically remove friction and map semantic intent to emotional triggers.
              </p>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--on-surface)', marginTop: '2rem', opacity: 0.1 }}>
              02
            </div>
          </div>
        </Interactive3DCard>

      </div>
    </div>
  );
};

export default CaseStudyGrid;
