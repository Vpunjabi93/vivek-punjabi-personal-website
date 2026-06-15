import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const ARCHETYPES = [
  {
    id: 'data',
    title: "Data & Optimization",
    tools: [
      { name: "GA4", icon: "https://cdn.simpleicons.org/googleanalytics" },
      { name: "Data Studio", icon: "https://cdn.simpleicons.org/looker" },
      { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel" },
      { name: "VWO", icon: "https://cdn.simpleicons.org/vwo" }
    ]
  },
  {
    id: 'ai',
    title: "AI & Development",
    tools: [
      { name: "Claude Code", icon: "https://cdn.simpleicons.org/anthropic" },
      { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
      { name: "Kling AI", text: "Kling" },
      { name: "Google Stitch", icon: "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2026/03/google-stitch-logo.png?q=70&fit=contain&w=420&dpr=1", invert: false },
      { name: "Antigravity", icon: "https://antigravity.google/favicon.ico", text: "AG" }
    ]
  },
  {
    id: 'design',
    title: "Design & Ops",
    tools: [
      { name: "Asana", icon: "https://cdn.simpleicons.org/asana" },
      { name: "Adobe Firefly", icon: "https://cdn.simpleicons.org/adobe" },
      { name: "Canva", icon: "https://cdn.simpleicons.org/canva" }
    ]
  }
];

const PulsingLine = () => (
  <div className="pulsing-line-container">
    <svg width="100%" height="2" preserveAspectRatio="none">
      <line x1="0" y1="1" x2="100%" y2="1" stroke="var(--glass-border)" strokeWidth="2" />
      <line 
        x1="0" y1="1" x2="100%" y2="1" 
        stroke="var(--accent-warm)" 
        strokeWidth="2"
        strokeDasharray="8 12"
        className="pulse-line-anim"
      />
    </svg>
  </div>
);

const ToolEcosystem = () => {
  return (
    <section id="tools" style={{ padding: 'clamp(4rem, 8vh, 7rem) 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <Reveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent-warm)' }}>
          // THE TOOL ECOSYSTEM
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
          Full-Stack <span style={{ color: 'var(--accent-warm)' }}>Marketing Infrastructure.</span>
        </h2>
      </Reveal>

      <div className="ecosystem-container">
        {ARCHETYPES.map((archetype, index) => (
          <React.Fragment key={archetype.id}>
            <motion.div 
              className="ecosystem-node glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="node-header">
                <h3>{archetype.title}</h3>
              </div>
              <div className="tools-grid">
                {archetype.tools.map((tool) => (
                  <div key={tool.name} className="tool-card">
                    <div className="tool-icon">
                      {tool.icon ? (
                        <img 
                          src={tool.icon} 
                          alt={tool.name} 
                          style={{ 
                            width: '24px', 
                            height: '24px', 
                            objectFit: 'contain',
                            filter: tool.invert === false ? 'none' : 'drop-shadow(0px 0px 8px rgba(255,255,255,0.1))'
                          }} 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <span className="fallback-text" style={{ display: tool.icon ? 'none' : 'block', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1px' }}>
                        {tool.text || tool.name.substring(0,2)}
                      </span>
                    </div>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {index < ARCHETYPES.length - 1 && (
              <PulsingLine />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .ecosystem-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .ecosystem-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 280px;
        }

        .node-header h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin: 0;
          color: var(--on-surface);
          text-align: center;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 1rem;
        }

        .tool-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 0.5rem;
          background: var(--surface-container-low);
          border-radius: 8px;
          border: 1px solid var(--glass-border);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-warm);
        }

        .tool-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
        }

        .tool-name {
          font-size: 0.75rem;
          color: var(--on-surface-variant);
          text-align: center;
          font-family: var(--font-mono);
        }

        .pulsing-line-container {
          width: 80px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        @keyframes pulse-flow {
          from {
            stroke-dashoffset: 40;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .pulse-line-anim {
          animation: pulse-flow 1.5s linear infinite;
        }

        @media (max-width: 900px) {
          .ecosystem-container {
            flex-direction: column;
            gap: 2rem;
          }
          .pulsing-line-container {
            width: 2px;
            height: 60px;
          }
          .pulsing-line-container svg {
            width: 2px;
            height: 100%;
          }
          .pulsing-line-container line {
            x1: 1;
            y1: 0;
            x2: 1;
            y2: 100%;
          }
          @keyframes pulse-flow-vertical {
            from {
              stroke-dashoffset: 40;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .pulse-line-anim {
            animation: pulse-flow-vertical 1.5s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default ToolEcosystem;
