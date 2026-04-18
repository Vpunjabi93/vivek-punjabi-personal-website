import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Database } from 'lucide-react';

const AIConsole = () => {
  const [logs, setLogs] = useState([
    { id: 1, type: 'status', text: 'Initializing Sovereign Intelligence System...' },
    { id: 2, type: 'load', text: '> Loading AI Personas: Analytical | Strategic | Aggressive' }
  ]);

  const workflows = [
    { name: 'Emotion to Conversions', icon: <Cpu size={16} />, desc: 'Mapping semantic intent to emotional triggers.' },
    { name: 'Multidoc Quality Check', icon: <Database size={16} />, desc: 'Cross-referencing specs for narrative consistency.' },
    { name: 'GTM Excellence', icon: <Terminal size={16} />, desc: 'Automated GTM collateral from raw product briefs.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLog = { 
          id: Date.now(), 
          type: 'process', 
          text: `[${new Date().toLocaleTimeString()}] Optimizing conversion loop...` 
        };
        return [...prev.slice(-4), newLog];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="label" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        AI-Native Workflows
      </div>
      
      <div className="ai-console">
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', opacity: 0.5 }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
          <span style={{ fontSize: '0.75rem', marginLeft: 'auto' }}>sov_intel_v2.0.4</span>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          {logs.map(log => (
            <div key={log.id} style={{ marginBottom: '0.5rem', opacity: log.type === 'status' ? 0.9 : 0.6 }}>
              {log.text}
            </div>
          ))}
          <div className="cursor" style={{ width: '8px', height: '16px', backgroundColor: 'var(--primary)', display: 'inline-block', verticalAlign: 'middle', animation: 'blink 1s infinite' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {workflows.map((flow, i) => (
            <div 
              key={i} 
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                padding: '1.25rem', 
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: 'var(--on-surface)' }}>
                {flow.icon}
                <span style={{ fontWeight: 600 }}>{flow.name}</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>{flow.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default AIConsole;
