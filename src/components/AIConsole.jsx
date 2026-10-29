import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Loader2, Terminal, Code2, Layers, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Interactive3DCard from './Interactive3DCard';
import { generateGTMAudit } from '../utils/openRouter';

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
      "Establishing headless socket to target DOM...",
      "[Skill: product-marketing] Extracting value proposition & ICP tags...",
      "[Skill: competitor-profiling] Cross-referencing category rivals...",
      "[Skill: cro] Scanning above-the-fold CTA friction & hero clarity...",
      "[Skill: copywriting] Generating conversion-grade counter-narrative...",
      "Synthesizing 4-step GTM teardown..."
    ];

    const thoughts = [
      "Parsing semantic DOM nodes...",
      "Analyzing headline-to-proof velocity...",
      "Isolating qualitative conversion friction...",
      "Synthesizing counter-positioning angles...",
      "Weighting buyer psychology...",
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
    <section
      id="intelligence"
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        borderLeft: '1px solid var(--grid-rule)',
        borderRight: '1px solid var(--grid-rule)',
        background: 'var(--surface)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Editorial Header Row */}
      <div
        style={{
          padding: '0.65rem 2rem',
          borderBottom: '1px solid var(--grid-rule)',
          borderTop: '3px solid var(--on-surface)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--on-surface-variant)',
          background: 'var(--surface-container-low)',
        }}
      >
        <span>SECTION 04 // LIVE COMPUTATIONAL TELEMETRY</span>
        <span>ENGINE: 550B PARAMETER LLM + JINA DOM SCRAPER</span>
        <span>STATUS: LIVE &amp; ARMED</span>
      </div>

      <div
        style={{
          padding: 'clamp(2.5rem, 5vw, 4rem) 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
          borderBottom: '1px solid var(--grid-rule)',
        }}
      >
        {/* Left Column: Context & Prompt */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-vermilion)',
              marginBottom: '0.75rem',
              fontWeight: 700,
            }}
          >
            // REAL-TIME AUDITING
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              margin: '0 0 1.25rem',
              color: 'var(--on-surface)',
            }}
          >
            Drop In Any URL. <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Watch the GTM Audit Run.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: 'var(--on-surface-variant)',
              marginBottom: '1.75rem',
            }}
          >
            This isn&apos;t a static mockup — it is an active pipeline. Feed in any company domain and watch it parse the live DOM, evaluate positioning against rivals, and generate high-impact messaging angles in real time.
          </p>

          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'var(--surface-paper-bright)',
              border: '1px solid var(--grid-rule)',
              borderLeft: '3px solid var(--accent-vermilion)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: 1.5,
              color: 'var(--on-surface)',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: 'var(--accent-vermilion)' }}>
              NOTE ON COMPUTE:
            </div>
            We crawl the live HTML and route it through a 550B LLM. A comprehensive teardown takes ~60-90 seconds to synthesize.
          </div>
        </div>

        {/* Right Column: 3D Interactive Console Slip */}
        <div>
          <Interactive3DCard isLocked={isLocked}>
            <div
              style={{
                background: 'var(--surface-paper-bright)',
                border: '2px solid var(--on-surface)',
                boxShadow: '8px 8px 0px rgba(17, 17, 17, 0.1)',
                padding: '1.75rem',
                minHeight: '360px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--grid-rule)',
                  paddingBottom: '0.75rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={14} style={{ color: 'var(--accent-vermilion)' }} />
                  <span style={{ fontWeight: 700 }}>GTM_AUDIT_CONSOLE_v3.2</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: status === 'loading' ? '#F59E0B' : '#10B981', display: 'inline-block' }} />
                  <span style={{ color: 'var(--on-surface-variant)' }}>
                    {status === 'loading' ? 'PROCESSING' : 'LISTENING'}
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>
                      <span style={{ color: 'var(--accent-vermilion)', fontWeight: 700 }}>$</span> ready --target-url=<span className="console-caret">▋</span>
                    </div>

                    <form onSubmit={handleRunAudit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <label
                        htmlFor="gtm-url-input"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--on-surface-variant)',
                        }}
                      >
                        Target Domain or Brand
                      </label>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <input
                          id="gtm-url-input"
                          type="text"
                          value={url}
                          onFocus={() => setIsInputFocused(true)}
                          onBlur={() => setIsInputFocused(false)}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="e.g. stripe.com or linear.app"
                          style={{
                            flex: 1,
                            minWidth: '220px',
                            padding: '0.85rem 1rem',
                            border: '1px solid var(--grid-rule)',
                            background: '#FFFFFF',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            color: 'var(--on-surface)',
                            outline: 'none',
                          }}
                        />
                        <button
                          type="submit"
                          className="btn-primary"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Execute Audit <ArrowRight size={14} />
                        </button>
                      </div>
                    </form>

                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '1rem',
                        borderTop: '1px dashed var(--grid-rule)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--on-surface-variant)',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>PRE-LOADED PROBES: LINEAR · STRIPE · NOTION</span>
                      <span>UTF-8 // JSON-LD READY</span>
                    </div>
                  </motion.div>
                )}

                {(status === 'loading' || status === 'error') && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--on-surface)' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                        color: 'var(--accent-vermilion)',
                        fontWeight: 700,
                      }}
                    >
                      <Loader2 className="animate-spin" size={16} />
                      <span>DISSECTING DOM &amp; QUERYING LLM SYNTHESIS...</span>
                    </div>

                    <div
                      style={{
                        background: '#111111',
                        color: '#34D399',
                        padding: '1rem',
                        border: '1px solid #333333',
                        minHeight: '180px',
                        maxHeight: '260px',
                        overflowY: 'auto',
                        fontSize: '0.75rem',
                        lineHeight: 1.6,
                        marginBottom: '1rem',
                      }}
                    >
                      {logs.map((log, index) => {
                        const isThought = log.startsWith('~');
                        return (
                          <div
                            key={index}
                            style={{
                              opacity: isThought ? 0.7 : 1,
                              color: isThought ? '#9CA3AF' : '#34D399',
                              fontStyle: isThought ? 'italic' : 'normal',
                            }}
                          >
                            {log}
                          </div>
                        );
                      })}
                      <div ref={logsEndRef} />
                    </div>

                    {status === 'error' && (
                      <div style={{ color: '#EF4444', marginBottom: '1rem' }}>
                        Error occurred during audit execution.
                      </div>
                    )}
                  </motion.div>
                )}

                {status === 'complete' && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    ref={resultContainerRef}
                    style={{ flex: 1, color: 'var(--on-surface)' }}
                    className="audit-result-markdown"
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-vermilion)',
                        marginBottom: '1rem',
                        borderBottom: '1px solid var(--grid-rule)',
                        paddingBottom: '0.5rem',
                        fontWeight: 700,
                      }}
                    >
                      // SYNTHESIS REPORT FOR: {url}
                    </div>

                    <div
                      style={{
                        maxHeight: '400px',
                        overflowY: 'auto',
                        paddingRight: '0.5rem',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                      }}
                    >
                      <ReactMarkdown>{result}</ReactMarkdown>
                    </div>

                    <button
                      onClick={() => {
                        setStatus('idle');
                        setUrl('');
                      }}
                      className="btn-outline"
                      style={{
                        marginTop: '1.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                      }}
                    >
                      Audit Another Target →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Interactive3DCard>
        </div>
      </div>

      {/* Open Source Instruments */}
      <div
        style={{
          padding: '2.5rem 2rem 3.5rem',
          borderBottom: '3px solid var(--on-surface)',
          background: 'var(--surface-paper-bright)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-vermilion)', fontWeight: 700 }}>
              // OPEN SOURCE INSTRUMENTS
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, margin: '0.25rem 0 0', color: 'var(--on-surface)' }}>
              Published Tools &amp; Telemetry Repositories
            </h3>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--on-surface-variant)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            VERIFIED GITHUB &amp; PYPI REPOSITORIES
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Card 1: GA4 MCP Server */}
          <div style={{ border: '1px solid var(--grid-rule)', padding: '1.5rem', background: 'var(--surface)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--on-surface-variant)', marginBottom: '0.75rem' }}>
                PYPI PACKAGE // MODEL CONTEXT PROTOCOL
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, margin: '0 0 0.75rem' }}>
                Google Analytics 4 MCP Server
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--on-surface-variant)', margin: 0 }}>
                Engineered and published a Python Model Context Protocol server enabling LLMs to execute real-time GA4 queries, conversion tracking, and session diagnostics directly inside agent runtimes.
              </p>
            </div>
            <a
              href="https://github.com/Vpunjabi93/GA4-MCP"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-vermilion)',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              View PyPI &amp; Repo ↗
            </a>
          </div>

          {/* Card 2: Ad CTR Evaluator */}
          <div style={{ border: '1px solid var(--grid-rule)', padding: '1.5rem', background: 'var(--surface)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--on-surface-variant)', marginBottom: '0.75rem' }}>
                GROWTH AUTOMATION // GEMINI API
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, margin: '0 0 0.75rem' }}>
                Google &amp; Meta Ads Scorer
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--on-surface-variant)', margin: 0 }}>
                Automated RSA character-limit validator and scoring compiler powered by Gemini Pro API, testing advertising copy drafts against historical high-converting hooks.
              </p>
            </div>
            <a
              href="https://github.com/Vpunjabi93/ad-ctr-evaluator"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-vermilion)',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              View Code &amp; Architecture ↗
            </a>
          </div>

          {/* Card 3: Monte Carlo Simulator */}
          <div style={{ border: '1px solid var(--grid-rule)', padding: '1.5rem', background: 'var(--surface)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--on-surface-variant)', marginBottom: '0.75rem' }}>
                STOCHASTIC MODELING // JAVASCRIPT
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, margin: '0 0 0.75rem' }}>
                Monte Carlo Game Simulator
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--on-surface-variant)', margin: 0 }}>
                Engineered a probabilistic simulation engine running 10,000+ randomized trials to calculate exact turn-by-turn draw probabilities and optimize decision trees in complex competitive systems.
              </p>
            </div>
            <a
              href="https://github.com/Vpunjabi93/tcgp-deck-builder"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-vermilion)',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Launch Simulator ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .console-caret {
          animation: caret-blink 1s steps(1) infinite;
        }
        @keyframes caret-blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        .audit-result-markdown h3 {
          font-family: var(--font-display);
          font-size: 1.15rem;
          margin: 1.25rem 0 0.5rem;
          color: var(--on-surface);
        }
        .audit-result-markdown p {
          font-family: var(--font-sans);
          color: var(--on-surface-variant);
          margin-bottom: 0.75rem;
        }
        .audit-result-markdown ul {
          padding-left: 1.25rem;
          margin-bottom: 1rem;
        }
        .audit-result-markdown li {
          margin-bottom: 0.35rem;
        }
      `}</style>
    </section>
  );
};

export default AIConsole;
