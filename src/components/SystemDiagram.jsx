import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const NODES = [
  { id: 'cro', label: 'CRO', desc: 'Funnel friction analysis & conversion engineering.', x: 15, y: 25 },
  { id: 'copy', label: 'Copywriting', desc: 'Voice-of-customer verbatim integration.', x: 85, y: 25 },
  { id: 'ads', label: 'Ads', desc: 'Budget allocation & channel logic.', x: 15, y: 75 },
  { id: 'sales', label: 'Sales Enablement', desc: 'Deal-closing collateral & objection handling.', x: 85, y: 75 },
  { id: 'qc', label: 'QC Checklist', desc: 'Automated validation against the core hub.', x: 50, y: 85, isValidation: true }
];

const SystemDiagram = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="system-architecture" style={{ padding: 'clamp(4rem, 8vh, 7rem) 2rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <Reveal style={{ marginBottom: '3rem' }}>
        <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent-warm)' }}>
          // THE SYSTEM BEHIND THE WORK
        </div>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
          color: 'var(--on-surface)', 
          maxWidth: '800px',
          lineHeight: 1.6,
          fontFamily: 'var(--font-mono)'
        }}>
          Marketing often treats channels as disconnected silos. I build centralized systems: a single product context hub that every function inherits from. Insight compounds; positioning never drifts.
        </p>
      </Reveal>

      <div className="diagram-container glass-card" style={{ position: 'relative', padding: isMobile ? '2rem 1rem' : '3rem', minHeight: isMobile ? 'auto' : '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* DESKTOP SVG LINES */}
        {!isMobile && (
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            {/* Defs for arrows */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--glass-border)" />
              </marker>
              <marker id="arrow-active" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent-warm)" />
              </marker>
            </defs>

            {NODES.map(node => {
              const isActive = activeNode === node.id;
              const isQC = node.id === 'qc';
              // Hub is at 50%, 50%
              return (
                <g key={`line-${node.id}`}>
                  {/* For QC, draw a dashed line looping back */}
                  {isQC ? (
                    <path 
                      d={`M ${node.x}% ${node.y}% C 30% 85%, 30% 50%, 45% 50%`}
                      fill="none"
                      stroke={isActive ? 'var(--accent-warm)' : 'var(--glass-border)'}
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      markerEnd={isActive ? 'url(#arrow-active)' : 'url(#arrow)'}
                      style={{ transition: 'stroke 0.3s ease' }}
                    />
                  ) : (
                    <line 
                      x1="50%" y1="50%" 
                      x2={`${node.x}%`} y2={`${node.y}%`}
                      stroke={isActive ? 'var(--accent-warm)' : 'var(--glass-border)'}
                      strokeWidth="2"
                      markerEnd={isActive ? 'url(#arrow-active)' : 'url(#arrow)'}
                      style={{ transition: 'stroke 0.3s ease' }}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        )}

        {/* MOBILE LAYOUT (Vertical Flow) */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', position: 'relative' }}>
            {/* Mobile connecting line */}
            <div style={{ position: 'absolute', left: '1.5rem', top: '3rem', bottom: '2rem', width: '2px', background: 'var(--glass-border)', zIndex: 0 }} />

            {/* Hub Node Mobile */}
            <div className="hub-node" style={{ zIndex: 1, alignSelf: 'flex-start', marginLeft: '0' }}>
              <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem' }}>Source of Truth</div>
              <div>ProductMarketing.md</div>
            </div>

            {/* Spoke Nodes Mobile */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '3rem' }}>
              {NODES.map(node => (
                <div 
                  key={node.id} 
                  className={`spoke-node ${activeNode === node.id ? 'active' : ''} ${node.isValidation ? 'validation-node' : ''}`}
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  style={{ zIndex: 1, position: 'relative' }}
                >
                  {/* Branch line */}
                  <div style={{ position: 'absolute', left: '-3rem', top: '25px', width: '3rem', height: '2px', background: 'var(--glass-border)', zIndex: -1 }} />
                  
                  <div className="spoke-label">{node.label}</div>
                  <AnimatePresence>
                    {activeNode === node.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="spoke-desc"
                      >
                        {node.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* DESKTOP LAYOUT (Absolute positions) */
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            
            {/* Hub Node Desktop */}
            <div 
              className="hub-node"
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
            >
              <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem' }}>Source of Truth</div>
              <div>ProductMarketing.md</div>
            </div>

            {/* Spoke Nodes Desktop */}
            {NODES.map(node => (
              <div 
                key={node.id}
                className={`spoke-node ${activeNode === node.id ? 'active' : ''} ${node.isValidation ? 'validation-node' : ''}`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{ 
                  position: 'absolute', 
                  left: `${node.x}%`, 
                  top: `${node.y}%`, 
                  transform: 'translate(-50%, -50%)',
                  width: '220px'
                }}
              >
                <div className="spoke-label">{node.label}</div>
                <div className="spoke-desc" style={{ 
                  opacity: activeNode === node.id ? 1 : 0, 
                  transform: activeNode === node.id ? 'translateY(0)' : 'translateY(-10px)',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  marginTop: '0.5rem',
                  pointerEvents: 'none'
                }}>
                  {node.desc}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <p style={{ 
        marginTop: '2rem', 
        fontSize: '1rem', 
        color: 'var(--on-surface-variant)', 
        fontFamily: 'var(--font-mono)',
        borderLeft: '2px solid var(--accent-warm)',
        paddingLeft: '1rem'
      }}>
        The result: unified messaging from the first ad impression to the final sales deck.
      </p>

      <style>{`
        .hub-node {
          background: var(--on-surface);
          color: var(--surface);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .spoke-node {
          background: var(--surface-container-low);
          border: 1px solid var(--glass-border);
          padding: 1rem 1.5rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--on-surface);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .spoke-node:hover, .spoke-node.active {
          border-color: var(--accent-warm);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }

        .validation-node {
          border-style: dashed;
          border-width: 2px;
        }

        .spoke-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .validation-node .spoke-label::before {
          content: '⟲';
          color: var(--accent-warm);
          font-size: 1.2rem;
        }

        .spoke-desc {
          font-size: 0.85rem;
          color: var(--on-surface-variant);
          font-weight: 400;
          line-height: 1.4;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .spoke-desc {
            margin-top: 0.5rem;
            opacity: 1 !important;
            transform: none !important;
            position: relative !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SystemDiagram;
