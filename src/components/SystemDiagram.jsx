import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Reveal from './Reveal';

const VIEW_W = 1000;
const VIEW_H = 600;
const HUB = { x: 500, y: 300 };

const NODES = [
  { id: 'cro', label: 'CRO', desc: 'Funnel friction analysis & conversion engineering.', cx: 200, cy: 150 },
  { id: 'copy', label: 'Copywriting', desc: 'Voice-of-customer verbatim integration.', cx: 800, cy: 150 },
  { id: 'ads', label: 'Ads', desc: 'Budget allocation & channel logic.', cx: 180, cy: 450 },
  { id: 'sales', label: 'Sales Enablement', desc: 'Deal-closing collateral & objection handling.', cx: 820, cy: 450 },
  { id: 'qc', label: 'QC Checklist', desc: 'Automated validation against the core hub.', cx: 500, cy: 520, isValidation: true }
];

// Interactive node with draggable physics and real-time SVG curve updating
const InteractiveNode = ({ node, activeNode, setActiveNode, isMobile }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const isActive = activeNode === node.id;

  // Compute smooth bezier curve
  const pathD = useTransform([x, y], ([latestX, latestY]) => {
    const endX = node.cx + latestX;
    const endY = node.cy + latestY;
    
    if (node.isValidation) {
      // Loop back to hub for QC
      return `M ${endX} ${endY} C ${endX - 80} ${endY + 60}, ${HUB.x - 80} ${HUB.y + 60}, ${HUB.x} ${HUB.y}`;
    }
    // S-curve from Hub to Node
    return `M ${HUB.x} ${HUB.y} C ${HUB.x} ${endY}, ${endX} ${HUB.y}, ${endX} ${endY}`;
  });

  if (isMobile) {
    return (
      <div 
        className={`spoke-node glass-card ${isActive ? 'active' : ''} ${node.isValidation ? 'validation-node' : ''}`}
        onClick={() => setActiveNode(isActive ? null : node.id)}
        style={{ position: 'relative', zIndex: 1, padding: '1rem', width: '100%', marginBottom: '1rem' }}
      >
        <div className="spoke-label">{node.label}</div>
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="spoke-desc" style={{ marginTop: '0.5rem' }}>{node.desc}</div>
        </motion.div>
      </div>
    );
  }

  return (
    <g>
      {/* Dynamic Connecting Line */}
      <motion.path 
        d={pathD} 
        fill="none" 
        stroke={isActive ? 'var(--accent-warm)' : 'var(--glass-border)'} 
        strokeWidth={isActive ? "3" : "2"}
        strokeDasharray={node.isValidation ? "6 8" : "none"}
        style={{ zIndex: 0 }}
      />
      {/* If validation node and active, show a pulsing stream */}
      {node.isValidation && isActive && (
        <motion.path 
          d={pathD} 
          fill="none" 
          stroke="var(--accent-warm)" 
          strokeWidth="3"
          strokeDasharray="4 12"
          className="pulse-stream-anim"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Draggable HTML Card embedded in SVG */}
      <foreignObject x={node.cx - 125} y={node.cy - 40} width="250" height="200" style={{ overflow: 'visible', zIndex: 10 }}>
        {/* Continuous ambient float wrapper */}
        <motion.div 
          animate={{ y: [0, -8, 0] }} 
          transition={{ repeat: Infinity, duration: 3 + (node.cx % 3), ease: "easeInOut" }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Draggable physics node */}
          <motion.div
            style={{ x, y, width: '100%' }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.3}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className={`spoke-node glass-card ${isActive ? 'active' : ''} ${node.isValidation ? 'validation-node' : ''}`}
          >
            <div className="spoke-label" style={{ userSelect: 'none', cursor: 'grab' }}>{node.label}</div>
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
              style={{ position: 'absolute', top: '100%', left: 0, width: '100%', marginTop: '0.5rem', pointerEvents: 'none' }}
            >
              <div className="spoke-desc">{node.desc}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </foreignObject>
    </g>
  );
};

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
    <section id="system-architecture" style={{ padding: 'clamp(4rem, 8vh, 7rem) 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
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

      <div style={{ position: 'relative', width: '100%', minHeight: isMobile ? 'auto' : '650px', display: 'flex', justifyContent: 'center' }}>
        
        {isMobile ? (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="hub-node" style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem' }}>Source of Truth</div>
              <div>ProductMarketing.md</div>
            </div>
            <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--glass-border)' }}>
              {NODES.map(node => (
                <InteractiveNode key={node.id} node={node} activeNode={activeNode} setActiveNode={setActiveNode} isMobile={true} />
              ))}
            </div>
          </div>
        ) : (
          <div style={{ width: '100%', maxWidth: '1000px', position: 'relative', aspectRatio: '1000/600' }}>
            <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'visible' }}>
              
              {/* Hub Glow Effect */}
              <defs>
                <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent-warm)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="var(--accent-warm)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={HUB.x} cy={HUB.y} r="80" fill="url(#hub-glow)" />

              {/* Render Nodes and connections */}
              {NODES.map(node => (
                <InteractiveNode key={node.id} node={node} activeNode={activeNode} setActiveNode={setActiveNode} isMobile={false} />
              ))}

              {/* Hub Node DOM superimposed */}
              <foreignObject x={HUB.x - 140} y={HUB.y - 45} width="280" height="90" style={{ overflow: 'visible', zIndex: 20 }}>
                <div className="hub-node" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem' }}>Source of Truth</div>
                  <div>ProductMarketing.md</div>
                </div>
              </foreignObject>
            </svg>
          </div>
        )}
      </div>

      <p style={{ 
        marginTop: isMobile ? '2rem' : '4rem', 
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
          border-radius: 8px;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1rem;
        }

        .spoke-node {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--on-surface);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          background: var(--glass-fill);
        }

        .spoke-node:hover, .spoke-node.active {
          border-color: var(--accent-warm);
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }

        .spoke-node:active {
          cursor: grabbing !important;
        }

        .validation-node {
          border-style: dashed !important;
          border-width: 2px !important;
        }

        .spoke-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
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
          text-align: center;
          padding: 0.5rem;
          background: var(--surface);
          border-radius: 6px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        @keyframes flow {
          to { stroke-dashoffset: -24; }
        }
        .pulse-stream-anim {
          animation: flow 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SystemDiagram;
