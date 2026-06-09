import React from 'react';
import { useDualMode } from '../context/DualModeContext';
import { Target, Cpu, ShieldAlert, Award, FileText, ChevronRight } from 'lucide-react';

const CaseStudyGrid = () => {
  const { mode } = useDualMode();

  // Metrics database
  const metrics = {
    sales: [
      { metric: '40%', label: 'Immediate Close Rate Increase', desc: 'Engineered a transition from top-of-funnel educational webinars to direct sales pipeline.' },
      { metric: '14 Days', label: 'Brief-to-Outbound Speed', desc: 'Custom AI agents automated target research and copy, cutting GTM timeline in half.' }
    ],
    marketing: [
      { metric: '+30%', label: 'Form Conversion Rate Uplift', desc: 'Optimized bottom-funnel conversion narratives, systematically removing checkout friction.' },
      { metric: '80%', label: 'Research Overhead Reduced', desc: 'Automated competitive audits and competitor intelligence using custom LLM pipelines.' }
    ]
  };

  const pillars = [
    {
      title: "Narrative & Positioning Engine",
      icon: <Target size={24} style={{ color: 'var(--mode-accent)', transition: 'color 0.6s' }} />,
      desc: "I dissect your SaaS product and competitor ecosystem to define a high-converting core narrative. No generic copy—just clean, customer-centric value propositions."
    },
    {
      title: "AI-Native GTM Pipelines",
      icon: <Cpu size={24} style={{ color: 'var(--mode-accent)', transition: 'color 0.6s' }} />,
      desc: "I code custom AI automation systems (using OpenRouter and developer APIs) that crawl target homepages, run automated competitor research, and output tailored collateral."
    },
    {
      title: "Sales Enablement & CRO",
      icon: <Award size={24} style={{ color: 'var(--mode-accent)', transition: 'color 0.6s' }} />,
      desc: "I bridge marketing and outbound sales by building comparison battlecards, pitch leave-behinds, and objection handling playbooks that reps actually use."
    }
  ];

  return (
    <div style={{ padding: '0 2rem var(--stack-xl) 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Narrative Section - The Bridge */}
      <div style={{ margin: '0 auto var(--stack-xl) auto', maxWidth: '800px', textAlign: 'center' }}>
        <div className="label" style={{ marginBottom: '1.5rem', color: 'var(--mode-accent)', transition: 'color 0.6s' }}>
          The Alignment Philosophy
        </div>
        <h2 className="headline-lg" style={{ marginBottom: '2rem' }}>
          Two Sides of the Same <span style={{ fontStyle: 'italic' }}>GTM</span> Coin
        </h2>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
          Most marketers don't know how to sell. Most salespeople don't know how to scale. Having executed outbound prospecting and deal-closing in sales, alongside positioning and messaging in marketing, I build GTM pipelines that are optimized for both.
        </p>
      </div>

      {/* 3 Pillars Section */}
      <div style={{ marginBottom: 'var(--stack-xl)' }}>
        <div className="label" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          Core Execution Pillars
        </div>
        <div className="architectural-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="architectural-grid-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '4px', border: '1px solid rgba(199, 198, 198, 0.1)' }}>
                  {pillar.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', opacity: 0.3 }}>0{idx + 1}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{pillar.title}</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies & Metrics */}
      <div>
        <div className="label" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          {mode.toUpperCase()} MODE IMPACT
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem' 
        }}>
          {metrics[mode].map((item, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '2rem', padding: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <div className="label" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>CASE STUDY</div>
                <h4 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{item.label}</h4>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
              <div className="metric-value-container">
                <div className="metric-value-text">
                  {item.metric}
                </div>
                <span className="label" style={{ fontSize: '0.65rem', opacity: 0.5 }}>Verified Impact</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CaseStudyGrid;
