import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Interactive3DCard from './Interactive3DCard';
import { generateGTMAudit } from '../utils/openRouter';

const EtchingFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
    <defs>
      <filter id="sun-dry-etching" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
        <feGaussianBlur in="displaced" stdDeviation="0.5" result="blurred" />
        <feMerge>
          <feMergeNode in="blurred" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

const AIConsole = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | complete | error
  const [result, setResult] = useState('');
  const [logs, setLogs] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const logsEndRef = useRef(null);
  const resultContainerRef = useRef(null);
  const isLocked = isInputFocused || status !== 'idle';

  const simulateLogs = () => {
    const sequence = [
      "Executing Jina Proxy & extracting DOM text...",
      "[Skill: product-marketing] Building foundational context & TG...",
      "[Skill: competitor-profiling] Identifying direct market rivals...",
      "[Skill: competitors] Analyzing USP vs alternatives...",
      "[Skill: copywriting] Generating conversion-optimized angles...",
      "Synthesizing 4-step GTM pipeline..."
    ];

    const thoughts = [
      "Parsing semantic tree...",
      "Cross-referencing market baselines...",
      "Isolating conversion bottlenecks...",
      "Weighting brand tone...",
      "Rejecting generic hooks...",
      "Applying psychological triggers...",
      "Formatting final markdown payload..."
    ];
    
    setLogs([]);
    let step = 0;

    const interval = setInterval(() => {
      setLogs(prev => {
        if (step < sequence.length) {
          const newLogs = [...prev, `> ${sequence[step]}`];
          step++;
          return newLogs;
        } else {
          const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
          const newLogs = [...prev, `~ [Thinking] ${randomThought}`];
          // Cap the log array length so it doesn't scroll infinitely
          return newLogs.length > 12 ? newLogs.slice(1) : newLogs;
        }
      });
    }, 1800); 
    return interval;
  };

  const handleRunAudit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus('loading');
    const logInterval = simulateLogs();

    try {
      const data = await generateGTMAudit(url);
      clearInterval(logInterval);
      setResult(data);
      setStatus('complete');
    } catch (err) {
      clearInterval(logInterval);
      setLogs(prev => [...prev, `[ERROR]: ${err.message}`]);
      setStatus('error');
    }
  };

  useEffect(() => {
    if (logsEndRef.current && status === 'loading') {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, status]);



  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <EtchingFilter />
      
      <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
        <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent-warm)' }}>
          // LIVE DEMO
        </div>
        <h2 className="display" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          Drop in a URL. Watch the audit run.
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.125rem', lineHeight: 1.6 }}>
          This isn't a mockup. It's a working pipeline I built — it crawls a homepage, profiles the audience, and outputs positioning or sales collateral in real time. Try it on your own product.
        </p>
      </div>
      
      <Interactive3DCard isLocked={isLocked}>
        <div className="ai-console" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', opacity: 0.8, borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
            <span style={{ fontSize: '0.75rem', marginLeft: 'auto', color: 'var(--on-surface-variant)' }}>pmm_engine_v3.0.1</span>
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: 'url(#sun-dry-etching)', scale: 0.98 }}
                transition={{ duration: 0.5 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <form onSubmit={handleRunAudit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <label className="label">Target System URL / Company Name</label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <input 
                      type="text" 
                      value={url}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="e.g. stripe.com or Notion"
                      style={{
                        flex: 1,
                        padding: '1rem',
                        background: 'rgba(17, 17, 17, 0.03)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '4px',
                        color: 'var(--on-surface)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                    <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Execute <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {(status === 'loading' || status === 'error') && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0, filter: 'url(#sun-dry-etching)' }}
                animate={{ opacity: 1, filter: 'none' }}
                exit={{ opacity: 0 }}
                style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-warm)' }}>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Establishing LLM connection...</span>
                </div>
                
                <div style={{ 
                  padding: '0.75rem 1rem', 
                  borderLeft: '2px solid var(--accent-warm)', 
                  background: 'rgba(255, 127, 80, 0.05)', 
                  marginBottom: '2rem',
                  fontSize: '0.85rem',
                  color: 'var(--on-surface)'
                }}>
                  <strong style={{ color: 'var(--accent-warm)' }}>HEADS UP:</strong> We actually scrape the live website and query a massive 550-Billion parameter LLM to synthesize this teardown. Real work takes compute. This will take roughly 2-3 minutes to generate.
                </div>
                {logs.map((log, index) => {
                  const isThought = log.startsWith('~');
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{ 
                        marginBottom: '0.5rem',
                        opacity: isThought ? 0.6 : 1,
                        color: isThought ? 'var(--on-surface-variant)' : 'inherit',
                        fontStyle: isThought ? 'italic' : 'normal'
                      }}
                    >
                      {log}
                    </motion.div>
                  );
                })}
                <div ref={logsEndRef} />
              </motion.div>
            )}

            {status === 'complete' && (
              <motion.div 
                key="complete"
                initial={{ opacity: 0, filter: 'url(#sun-dry-etching)', scale: 0.95 }}
                animate={{ opacity: 1, filter: 'none', scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                ref={resultContainerRef}
                style={{ 
                  flex: 1, 
                  color: 'var(--on-surface)', 
                  paddingRight: '1rem',
                  lineHeight: 1.8
                }}
                className="markdown-etching"
              >
                <div className="label" style={{ color: 'var(--accent-warm)', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                  // GTM DISSECTION: {url}
                </div>
                <ReactMarkdown>{result}</ReactMarkdown>
                
                <button 
                  onClick={() => { setStatus('idle'); setUrl(''); }}
                  className="btn-outline"
                  style={{ marginTop: '2rem', fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                >
                  Run Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Interactive3DCard>
      
      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .markdown-etching h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .markdown-etching p {
          color: var(--on-surface-variant);
          margin-bottom: 1rem;
        }
        /* Hide scrollbar for cleaner look */
        .markdown-etching::-webkit-scrollbar {
          width: 6px;
        }
        .markdown-etching::-webkit-scrollbar-thumb {
          background: var(--glass-border);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default AIConsole;
