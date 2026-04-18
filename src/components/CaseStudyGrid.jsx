import React from 'react';
import { useDualMode } from '../context/DualModeContext';
import { ArrowUpRight, TrendingUp, Users, Target } from 'lucide-react';

const CaseStudyGrid = () => {
  const { mode } = useDualMode();

  const salesCase = {
    title: "Webinar Hosting to Conversions",
    metric: "40%",
    label: "Immediate Close Rate Increase",
    description: "Engineered a seamless transition from top-of-funnel educational webinars to direct sales pipeline.",
    tags: ["Sales Enablement", "Funnel Optimization"]
  };

  const marketingCase = {
    title: "Increasing FFRs by 30%",
    metric: "+30%",
    label: "Final Form Rate Uplift",
    description: "Optimized bottom-funnel conversion narratives, systematically removing friction for executive education leads.",
    tags: ["GTM Strategy", "Conversion Optimization"]
  };

  const current = mode === 'sales' ? salesCase : marketingCase;

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="label" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        Current Focus: {mode.toUpperCase()} MODE
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Main Metric Card */}
        <div className="glass-card" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{current.title}</h2>
              <p style={{ color: 'var(--secondary)', maxWidth: '500px' }}>{current.description}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--mode-accent)', lineHeight: 1 }}>
                {current.metric}
              </div>
              <div className="label">{current.label}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            {current.tags.map((tag, i) => (
              <span key={i} style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', border: '1px solid var(--glass-border)', opacity: 0.6 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Supporting Cards */}
        <div className="glass-card section-split">
          <Users color="var(--mode-accent)" style={{ marginBottom: '1rem' }} />
          <h3>Target Audience</h3>
          <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Hiring managers and founders scouting early PMM or RevOps hires.
          </p>
        </div>

        <div className="glass-card section-split">
          <Target color="var(--mode-accent)" style={{ marginBottom: '1rem' }} />
          <h3>Vision</h3>
          <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Presenting as a savvy PMM with strong sales foundations and an AI-native mindset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyGrid;
