import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Database, Play, CheckCircle, RefreshCw, Download } from 'lucide-react';
import { useDualMode } from '../context/DualModeContext';
import { runGTMAuditPipeline, getCleanDomainName, crawlWebsite } from '../services/geminiService';
import CrawlerScanner3D from './3DCrawlerScanner';

const AIConsole = () => {
  const { mode } = useDualMode();
  const [urlInput, setUrlInput] = useState('');
  const [status, setStatus] = useState('idle'); // idle, running, completed
  const [pipelineStage, setPipelineStage] = useState('idle'); // idle, crawling, synthesizing, completed
  const [logs, setLogs] = useState([]);
  const [pipelineOutput, setPipelineOutput] = useState(null);
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Reset output when switching modes so we don't try to render incompatible data schemas
  useEffect(() => {
    setUrlInput('');
    setStatus('idle');
    setPipelineStage('idle');
    setLogs([]);
    setPipelineOutput(null);
  }, [mode]);

  const handleRun = async (e) => {
    e.preventDefault();
    if (!urlInput) return;

    setStatus('running');
    setPipelineStage('crawling');
    const cleanName = getCleanDomainName(urlInput);
    
    setLogs([{
      time: new Date().toLocaleTimeString(),
      type: 'system',
      text: `Connecting to target domain: ${urlInput}...`
    }]);

    const addLog = (type, text, delay = 1000) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          setLogs(prev => [...prev, {
            time: new Date().toLocaleTimeString(),
            type,
            text
          }]);
          resolve();
        }, delay);
      });
    };

    try {
      await addLog('system', `Initiating crawler stage on ${urlInput}...`, 600);
      await addLog('research', `Crawling homepage via CORS gateway...`, 1000);
      
      // Perform the actual client-side crawl
      const crawledText = await crawlWebsite(urlInput);
      
      if (crawledText) {
        await addLog('research', `Successfully crawled homepage content (${crawledText.length} characters parsed).`, 800);
      } else {
        await addLog('research', `CORS crawl blocked/failed, relying on Google Search grounding fallback...`, 800);
      }

      setPipelineStage('synthesizing');

      if (mode === 'sales') {
        await addLog('audit', `Initializing Product Marketing GTM extraction for ${cleanName}...`, 800);
        await addLog('audit', `Mapping target customer profiles and B2C behavioral pain points...`, 1000);
        await addLog('audit', `Analyzing competitor landscape and key battleground features...`, 1000);
        await addLog('system', `Compiling extracted details into structured background Markdown context (.md)...`, 800);
        
        // Trigger the background service call with the crawled text
        const result = await runGTMAuditPipeline(urlInput, crawledText, mode);

        await addLog('brief', `Applying B2C sales alignment frameworks (Benefit-driven, outcome-focused)...`, 1000);
        await addLog('brief', `Synthesizing customized Competitor Comparison Battlecard & Pitch One-Pager...`, 1200);
        await addLog('output', `B2C sales alignment collateral and pitch assets generation complete.`, 800);

        setPipelineOutput(result);
      } else {
        await addLog('audit', `Initializing Product Marketing GTM extraction for ${cleanName}...`, 800);
        await addLog('audit', `Mapping target customer profiles, psychographics, and shopping motivators...`, 1000);
        await addLog('audit', `Analyzing competitor landscape and customer friction points...`, 1000);
        await addLog('system', `Compiling extracted details into structured background Markdown context (.md)...`, 800);
        
        // Trigger the background service call with the crawled text
        const result = await runGTMAuditPipeline(urlInput, crawledText, mode);

        await addLog('brief', `Applying copywriting conversion frameworks (Clarity over Cleverness)...`, 1000);
        await addLog('brief', `Synthesizing customized above-the-fold copywriting assets & creative copies...`, 1200);
        await addLog('output', `GTM positioning assets and copywriting drafts generation complete.`, 800);

        setPipelineOutput(result);
      }
      setStatus('completed');
      setPipelineStage('completed');
    } catch (err) {
      console.error(err);
      setLogs(prev => [...prev, {
        time: new Date().toLocaleTimeString(),
        type: 'system',
        text: 'Error: Pipeline execution failed. Please try again.'
      }]);
      setStatus('completed');
      setPipelineStage('completed');
    }
  };

  const handleReset = () => {
    setUrlInput('');
    setStatus('idle');
    setPipelineStage('idle');
    setLogs([]);
    setPipelineOutput(null);
  };

  const handleDownloadMd = () => {
    if (!pipelineOutput) return;
    const cleanName = getCleanDomainName(urlInput);
    
    let markdownText = '';
    
    if (mode === 'sales') {
      markdownText = `# GTM Sales Enablement Report: ${cleanName}
*Generated on: ${new Date().toLocaleDateString()}*

## 1. Core Product Brief
${pipelineOutput.productBrief}

## 2. Estimated User Profiles
${pipelineOutput.userProfiles.map(p => `- ${p}`).join('\n')}

## 3. Pain Points Solved
${pipelineOutput.painPoints.map(p => `- ${p}`).join('\n')}

## 4. Product-Tied Marketing Insights
${pipelineOutput.insights.map(i => `- ${i}`).join('\n')}

## 5. Competitor Comparison Battlecard (vs ${pipelineOutput.comparisonCard.competitorName})

### Why We Win (Key Differentiators):
${pipelineOutput.comparisonCard.keyDifferentiators.map(d => `- ${d}`).join('\n')}

### Feature-by-Feature Comparison:
| Feature | Us (${cleanName}) | Them (${pipelineOutput.comparisonCard.competitorName}) |
| :--- | :--- | :--- |
${pipelineOutput.comparisonCard.battlegroundFeatures.map(f => `| ${f.feature} | ${f.us} | ${f.them} |`).join('\n')}

### Objection Handling Script:
* **Objection:** "${pipelineOutput.comparisonCard.objectionHandling.objection}"
* **Response:** "${pipelineOutput.comparisonCard.objectionHandling.response}"

## 6. Pitch One-Pager (B2C Landing-Page Hook)

### Problem Statement:
${pipelineOutput.onePager.problemStatement}

### Solution Overview:
${pipelineOutput.onePager.solutionOverview}

### Key Differentiators:
${pipelineOutput.onePager.differentiators.map(d => `- ${d}`).join('\n')}

### Customer Proof Point:
> ${pipelineOutput.onePager.proofPoint}

### Next Step Call-To-Action:
**${pipelineOutput.onePager.cta}**
`;
    } else {
      markdownText = `# GTM Positioning & Copywriting Audit: ${cleanName}
*Generated on: ${new Date().toLocaleDateString()}*

## 1. Core Product Brief
${pipelineOutput.productBrief}

## 2. Estimated User Profiles
${pipelineOutput.userProfiles.map(p => `- ${p}`).join('\n')}

## 3. Pain Points Solved
${pipelineOutput.painPoints.map(p => `- ${p}`).join('\n')}

## 4. Product-Tied Marketing Insights
${pipelineOutput.insights.map(i => `- ${i}`).join('\n')}

## 5. Landing Page First Fold Copy
### Headline:
${pipelineOutput.firstFoldCopy.headline}

### Subheadline:
${pipelineOutput.firstFoldCopy.subheadline}

### Primary CTA:
${pipelineOutput.firstFoldCopy.cta}

## 6. Paid Marketing Creative Assets (4 Copy Variants)
${pipelineOutput.creativeAssets.map((asset, index) => `### Asset ${index + 1}: ${asset.title}
- **Hook:** ${asset.hook}
- **Body:** ${asset.body}
- **CTA:** ${asset.cta}
`).join('\n')}
`;
    }

    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const suffix = mode === 'sales' ? 'sales_enablement' : 'gtm_audit';
    link.setAttribute('download', `${cleanName.toLowerCase()}_${suffix}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="console-demo" className="section-split" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <div className="label" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          Interactive Proof
        </div>
        <h2 className="headline-lg" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          See the AI GTM <span style={{ color: 'var(--mode-accent)' }}>Workflow</span> in Action
        </h2>

        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Left Column: 3D Scanner Simulation */}
            <div className="console-split-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CrawlerScanner3D stage={pipelineStage} mode={mode} />
              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.65rem', 
                color: 'var(--on-surface-variant)', 
                opacity: 0.5, 
                marginTop: '-0.5rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {pipelineStage === 'idle' ? 'SYSTEM READY // CRAWLER OFFLINE' : 
                 pipelineStage === 'crawling' ? 'ESTABLISHING HANDSHAKE // SCRAPING HTML' : 
                 pipelineStage === 'synthesizing' ? 'MODEL STREAM // RUNNING NEMOTRON AI' : 
                 'INTELLIGENCE REPORT GENERATED'}
              </div>
            </div>

            {/* Right Column: Console Input Form or Active Logs */}
            <div style={{ width: '100%' }}>
              {status === 'idle' && (
                <form onSubmit={handleRun} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    Enter your product URL to scan the page. The PMM pipeline will crawl, extract customer profiles, map friction points, and output copywriting drafts or competitor comparison briefs.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <input 
                      type="text" 
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="e.g. stripe.com or myproduct.io"
                      style={{
                        flex: 1,
                        minWidth: '220px',
                        backgroundColor: 'var(--surface-container-lowest)',
                        border: '1px solid rgba(199, 198, 198, 0.2)',
                        padding: '0.85rem 1.1rem',
                        color: 'var(--on-surface)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        borderRadius: '4px'
                      }}
                      required
                    />
                    <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem' }}>
                      <Play size={16} /> Run GTM Pipeline
                    </button>
                  </div>
                </form>
              )}

              {status !== 'idle' && (
                <div className="ai-console">
                  {/* Header */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', opacity: 0.5, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                    <span style={{ fontSize: '0.65rem', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>gtm_automator_v3.2.sh</span>
                  </div>

                  {/* Logs */}
                  <div style={{ minHeight: '160px', maxHeight: '200px', overflowY: 'auto', fontSize: '0.8rem', lineHeight: '1.4' }}>
                    {logs.map((log, idx) => (
                      <div key={idx} style={{ marginBottom: '0.4rem', color: log.type === 'system' ? '#8e9192' : log.type === 'output' ? 'var(--mode-accent)' : 'var(--on-surface)' }}>
                        <span style={{ opacity: 0.5, marginRight: '0.4rem' }}>[{log.time}]</span>
                        <span style={{ color: 'var(--mode-accent)', marginRight: '0.4rem', fontWeight: 600 }}>{`$ [${log.type}]`}</span>
                        {log.text}
                      </div>
                    ))}
                    {status === 'running' && (
                      <div>
                        <span style={{ opacity: 0.5, marginRight: '0.4rem' }}>[{new Date().toLocaleTimeString()}]</span>
                        <span style={{ color: 'var(--mode-accent)', marginRight: '0.4rem', fontWeight: 600 }}>$ [exec]</span>
                        Processing...
                        <span className="terminal-cursor" />
                      </div>
                    )}
                    <div ref={logEndRef} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Output Results */}
          {status === 'completed' && pipelineOutput && (
                <div className="animate-fade-in" style={{ borderTop: '1px solid rgba(199, 198, 198, 0.15)', paddingTop: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--mode-accent)', fontWeight: 600, marginBottom: '2rem', fontSize: '1.1rem', fontFamily: 'var(--font-mono)' }}>
                    <CheckCircle size={20} /> GTM AUDIT & POSITIONING BRIEF GENERATED
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    {/* 1. Core Product Brief */}
                    <div>
                      <div className="label" style={{ fontSize: '0.75rem', marginBottom: '0.75rem', opacity: 0.6 }}>1. Core Product Brief</div>
                      <div style={{ 
                        background: 'rgba(255,255,255,0.02)', 
                        padding: '1.25rem 1.5rem', 
                        borderRadius: '4px', 
                        borderLeft: '4px solid var(--mode-accent)',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        color: 'var(--on-surface-variant)',
                        fontStyle: 'italic'
                      }}>
                        "{pipelineOutput?.productBrief}"
                      </div>
                    </div>

                    {/* 2, 3, 4. Profiles, Pain Points, Insights */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {/* User Profiles */}
                      <div style={{ background: 'rgba(255,255,255,0.01)', padding: '1.25rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                        <div className="label" style={{ fontSize: '0.7rem', marginBottom: '1rem', opacity: 0.6 }}>2. Estimated User Profiles</div>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>
                          {pipelineOutput?.userProfiles?.map((profile, i) => (
                            <li key={i} style={{ lineHeight: 1.5 }}>{profile}</li>
                          )) || <li style={{ listStyleType: 'none', marginLeft: '-1.2rem', opacity: 0.5 }}>No profiles generated</li>}
                        </ul>
                      </div>

                      {/* Pain Points */}
                      <div style={{ background: 'rgba(255,255,255,0.01)', padding: '1.25rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                        <div className="label" style={{ fontSize: '0.7rem', marginBottom: '1rem', opacity: 0.6 }}>3. Pain Points Solved</div>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>
                          {pipelineOutput?.painPoints?.map((point, i) => (
                            <li key={i} style={{ lineHeight: 1.5 }}>{point}</li>
                          )) || <li style={{ listStyleType: 'none', marginLeft: '-1.2rem', opacity: 0.5 }}>No pain points generated</li>}
                        </ul>
                      </div>

                      {/* Insights */}
                      <div style={{ background: 'rgba(255,255,255,0.01)', padding: '1.25rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                        <div className="label" style={{ fontSize: '0.7rem', marginBottom: '1rem', opacity: 0.6 }}>4. Product-Tied Insights</div>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>
                          {pipelineOutput?.insights?.map((insight, i) => (
                            <li key={i} style={{ lineHeight: 1.5 }}>{insight}</li>
                          )) || <li style={{ listStyleType: 'none', marginLeft: '-1.2rem', opacity: 0.5 }}>No insights generated</li>}
                        </ul>
                      </div>
                    </div>

                    {/* 5. Competitor Comparison Battlecard / Landing Page first fold copy */}
                    {mode === 'sales' ? (
                      <div>
                        <div className="label" style={{ fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.6 }}>
                          5. Competitor Comparison Battlecard (vs {pipelineOutput?.comparisonCard?.competitorName})
                        </div>
                        <div style={{
                          background: 'rgba(255,255,255,0.01)',
                          border: '1px solid rgba(199, 198, 198, 0.1)',
                          borderRadius: '6px',
                          padding: '1.75rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.75rem'
                        }}>
                          {/* Differentiators */}
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--mode-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                              Why We Win (Key Differentiators)
                            </div>
                            <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--on-surface-variant)' }}>
                              {pipelineOutput?.comparisonCard?.keyDifferentiators?.map((diff, idx) => (
                                <li key={idx} style={{ lineHeight: 1.5 }}>{diff}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Battleground features table */}
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--mode-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                              Battleground Features
                            </div>
                            <div style={{ overflowX: 'auto' }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                                <thead>
                                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                    <th style={{ padding: '0.75rem 0.5rem', color: 'var(--on-surface)', fontWeight: 600, width: '25%' }}>Feature</th>
                                    <th style={{ padding: '0.75rem 0.5rem', color: 'var(--mode-accent)', fontWeight: 600, width: '37.5%' }}>Us ({getCleanDomainName(urlInput)})</th>
                                    <th style={{ padding: '0.75rem 0.5rem', color: '#ff5f56', fontWeight: 600, width: '37.5%' }}>Them ({pipelineOutput?.comparisonCard?.competitorName})</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {pipelineOutput?.comparisonCard?.battlegroundFeatures?.map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                      <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600, color: 'var(--on-surface)' }}>{row.feature}</td>
                                      <td style={{ padding: '0.75rem 0.5rem', color: 'var(--on-surface-variant)', lineHeight: 1.4, background: 'rgba(255,255,255,0.02)' }}>{row.us}</td>
                                      <td style={{ padding: '0.75rem 0.5rem', color: 'var(--on-surface-variant)', lineHeight: 1.4 }}>{row.them}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Objection handling */}
                          <div style={{
                            background: 'rgba(0,0,0,0.15)',
                            borderLeft: '4px solid #ffbd2e',
                            padding: '1.25rem 1.5rem',
                            borderRadius: '4px'
                          }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffbd2e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                              Objection Handler
                            </div>
                            <div style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                              <span style={{ opacity: 0.6, fontWeight: 600 }}>Objection: </span>
                              <span style={{ color: 'var(--on-surface)', fontStyle: 'italic' }}>"{pipelineOutput?.comparisonCard?.objectionHandling?.objection}"</span>
                            </div>
                            <div style={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--on-surface-variant)' }}>
                              <span style={{ opacity: 0.6, fontWeight: 600 }}>Talk Track: </span>
                              <span>{pipelineOutput?.comparisonCard?.objectionHandling?.response}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="label" style={{ fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.6 }}>5. Landing Page (First Fold Copy)</div>
                        <div style={{ 
                          background: 'rgba(0,0,0,0.2)', 
                          padding: '2rem', 
                          borderRadius: '4px', 
                          border: '1px solid rgba(199, 198, 198, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                          gap: '1.25rem'
                        }}>
                          <div style={{ 
                            fontSize: '1.75rem', 
                            fontWeight: 700, 
                            fontFamily: 'var(--font-serif)',
                            maxWidth: '750px',
                            lineHeight: 1.3,
                            color: 'var(--on-surface)'
                          }}>
                            {pipelineOutput?.firstFoldCopy?.headline}
                          </div>
                          <div style={{ 
                            fontSize: '1rem', 
                            color: 'var(--on-surface-variant)', 
                            maxWidth: '600px',
                            lineHeight: 1.6
                          }}>
                            {pipelineOutput?.firstFoldCopy?.subheadline}
                          </div>
                          <button 
                            className="btn-primary" 
                            style={{ pointerEvents: 'none', marginTop: '0.5rem', padding: '0.75rem 1.75rem' }}
                          >
                            {pipelineOutput?.firstFoldCopy?.cta}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 6. Creative Assets Copy / B2C One-Pager Landing-Page Hook */}
                    {mode === 'sales' ? (
                      <div>
                        <div className="label" style={{ fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.6 }}>
                          6. B2C Pitch One-Pager (Conversion Focus)
                        </div>
                        <div style={{
                          background: 'rgba(255,255,255,0.01)',
                          border: '1px solid rgba(199, 198, 198, 0.1)',
                          borderRadius: '6px',
                          padding: '2rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.5rem'
                        }}>
                          <div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>The Problem</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--on-surface)', lineHeight: 1.4 }}>
                              {pipelineOutput?.onePager?.problemStatement}
                            </div>
                          </div>

                          <div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>Solution Overview</div>
                            <div style={{ fontSize: '0.95rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                              {pipelineOutput?.onePager?.solutionOverview}
                            </div>
                          </div>

                          <div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Key Differentiators</div>
                            <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>
                              {pipelineOutput?.onePager?.differentiators?.map((diff, idx) => (
                                <li key={idx} style={{ lineHeight: 1.4 }}>{diff}</li>
                              ))}
                            </ul>
                          </div>

                          <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            borderLeft: '4px solid var(--mode-accent)',
                            padding: '1rem 1.25rem',
                            borderRadius: '4px',
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            color: 'var(--on-surface-variant)'
                          }}>
                            "{pipelineOutput?.onePager?.proofPoint}"
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                            <button className="btn-primary" style={{ pointerEvents: 'none', padding: '0.75rem 2rem' }}>
                              {pipelineOutput?.onePager?.cta}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="label" style={{ fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.6 }}>6. Paid Marketing Creative Assets (4 Copy Variants)</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                          {pipelineOutput?.creativeAssets?.map((asset, i) => (
                            <div 
                              key={i} 
                              style={{ 
                                background: 'rgba(255,255,255,0.01)', 
                                padding: '1.25rem', 
                                borderRadius: '4px', 
                                borderTop: '2.5px solid var(--mode-accent)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                fontSize: '0.85rem'
                              }}
                            >
                              <div className="label" style={{ fontSize: '0.65rem', opacity: 0.7 }}>{asset.title}</div>
                              <div style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--on-surface)' }}>"{asset.hook}"</div>
                              <div style={{ color: 'var(--on-surface-variant)', lineHeight: 1.4, flex: 1 }}>{asset.body}</div>
                              <div style={{ 
                                marginTop: '0.5rem',
                                borderTop: '1px solid rgba(255,255,255,0.05)', 
                                paddingTop: '0.5rem',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                                color: 'var(--mode-accent)',
                                fontWeight: 600
                              }}>
                                CTA: {asset.cta}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                    <button 
                      onClick={handleDownloadMd} 
                      className="btn-primary" 
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
                    >
                      <Download size={16} /> Download Markdown Report
                    </button>
                    <button 
                      onClick={handleReset} 
                      className="btn-secondary" 
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
                    >
                      <RefreshCw size={14} /> Analyze Another Product
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
  );
};

export default AIConsole;
