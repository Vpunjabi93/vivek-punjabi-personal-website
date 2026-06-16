import React, { useState } from 'react';
import Interactive3DCard from './Interactive3DCard';
import Reveal from './Reveal';

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('core');

  const coreProjects = [
    {
      title: "Interactive Product Tour Framework",
      desc: "A custom React component library for embedding step-by-step, clickable walkthroughs into SaaS onboarding — built to teach product features without adding friction.",
      tech: ["React", "Framer Motion"],
      link: "#",
      linkText: "View Project →"
    },
    {
      title: "AI Persona & Positioning Mapper",
      desc: "A Node pipeline that parses a product's landing page, runs it through custom LLM prompts, and outputs target personas, friction points, and a product-market-fit read.",
      tech: ["Node.js", "LLM APIs"],
      link: "#",
      linkText: "View Repo →"
    },
    {
      title: "This Portfolio",
      desc: "The site you're on. Interactive WebGL environment, a live GTM audit pipeline, and fluid physics-based DOM animations.",
      tech: ["Three.js", "React"],
      link: "#",
      linkText: "View Source →"
    }
  ];

  const hobbyProjects = [
    {
      title: "Google Analytics MCP Server",
      desc: "A Model Context Protocol (MCP) server published on PyPI. Connects LLMs directly to Google Analytics 4 APIs, enabling conversational AI agents to pull real-time data, query reports, and analyze conversion funnels.",
      tech: ["Python", "GA4 API", "PyPI", "GCP"],
      link: "https://github.com/Vpunjabi93/GA4-MCP",
      linkText: "View PyPI & Repo →"
    },
    {
      title: "Google & Meta Ads Scorer",
      desc: "A responsive campaign dashboard that evaluates Responsive Search Ads under character length limits and uses Gemini Pro API to reverse-engineer brand creative patterns, scoring new copy for win probability.",
      tech: ["JavaScript", "Gemini API", "Responsive UI"],
      link: "https://github.com/Vpunjabi93/ad-ctr-evaluator",
      linkText: "View Code →"
    },
    {
      title: "Monte Carlo Game Simulator",
      desc: "An ensemble card game simulation engine that runs thousands of randomized Monte Carlo matches to analyze card draw rates, predict turn-by-turn arrival distributions, and test deck consistency.",
      tech: ["JavaScript", "Probability Math", "Simulation"],
      link: "https://github.com/Vpunjabi93/tcgp-deck-builder",
      linkText: "View Simulator →"
    }
  ];

  const currentProjects = activeTab === 'core' ? coreProjects : hobbyProjects;

  return (
    <section id="story" style={{ padding: 'clamp(4rem, 8vh, 7rem) 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

        {/* Left Column: Origin Story */}
        <Reveal style={{ display: 'flex', flexDirection: 'column' }}>
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
        </Reveal>

        {/* Right Column: Selected Builds */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Section Header with Tabs */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            borderBottom: '1px solid var(--glass-border)',
            paddingBottom: '0.75rem',
            marginBottom: '1rem'
          }}>
            <div className="label" style={{ color: 'var(--on-surface-variant)', margin: 0 }}>
              Selected Builds
            </div>
            
            {/* Tabs Selector */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => setActiveTab('core')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'core' ? 'var(--accent-warm)' : 'var(--on-surface-variant)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: activeTab === 'core' ? 600 : 400,
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  background: activeTab === 'core' ? 'var(--glass-fill)' : 'transparent',
                  border: activeTab === 'core' ? '1px solid var(--glass-border)' : '1px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                [ CORE ]
              </button>
              <button 
                onClick={() => setActiveTab('hobby')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'hobby' ? 'var(--accent-warm)' : 'var(--on-surface-variant)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: activeTab === 'hobby' ? 600 : 400,
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  background: activeTab === 'hobby' ? 'var(--glass-fill)' : 'transparent',
                  border: activeTab === 'hobby' ? '1px solid var(--glass-border)' : '1px solid transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                [ HOBBY & THINKING ]
              </button>
            </div>
          </div>

          {/* Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {currentProjects.map((proj, index) => (
              <Reveal key={`${activeTab}-${index}`} delay={index * 0.08}>
                <Interactive3DCard>
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{proj.title}</h3>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {proj.desc}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="label" style={{ fontSize: '0.7rem', background: 'rgba(17,17,17,0.05)', padding: '4px 8px', borderRadius: '4px' }}>{t}</span>
                      ))}
                    </div>
                    <a 
                      href={proj.link} 
                      target={proj.link !== '#' ? "_blank" : undefined}
                      rel={proj.link !== '#' ? "noopener noreferrer" : undefined}
                      style={{ 
                        marginTop: '1rem', 
                        color: 'var(--on-surface)', 
                        fontWeight: 600, 
                        textDecoration: 'none', 
                        borderBottom: '1px solid var(--on-surface)', 
                        alignSelf: 'flex-start',
                        transition: 'color 0.2s, border-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-warm)';
                        e.currentTarget.style.borderColor = 'var(--accent-warm)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--on-surface)';
                        e.currentTarget.style.borderColor = 'var(--on-surface)';
                      }}
                    >
                      {proj.linkText}
                    </a>
                  </div>
                </Interactive3DCard>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
