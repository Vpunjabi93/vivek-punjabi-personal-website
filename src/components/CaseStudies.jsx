import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { X, ArrowRight, FileText } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'emba-campaign',
    code: 'MONO-01 // CONV-CRO',
    number: '01',
    metric: '+41% FFR',
    metricLabel: 'Form Fill Rate Surge',
    title: 'Increasing Executive MBA Form Fill Rates by 41% in a Single Campaign',
    tags: ['Conversion & Lifecycle (primary)', 'Narrative & Positioning (secondary)', 'VWO A/B Testing'],
    context: 'EdTech campaign windows run short — typically 90 to 180 days — and high-ticket Executive MBAs carry an industry-standard form fill rate of just 4–5%, driven by the financial and career commitment the product demands. In these products, the margin between a good campaign and a bleeding one comes down to how precisely you understand landing page behaviour, because CTRs and CPLs are downstream of it.',
    problem: 'When the EMBA from an IIM partner slipped in rankings and came to me, it was converting at 1.5% — less than a third of the industry floor. We had high CTRs on search, which told me the ads were reaching the right people. The bleed was happening on the page, not in the funnel above it. CPLs were unsustainable and we couldn\'t afford to keep buying traffic into a broken experience.\n\nThe second challenge was diagnostic: we had GA4 covering quantitative behaviour but no qualitative layer to explain why users were dropping. And the programme itself had no meaningful social proof and no clear differentiator against competitors — two problems that matter a lot when someone is evaluating a product worth lakhs.',
    action: 'My first move was to stop assuming the landing page was the only variable and audit the full conversion chain — which meant going into the sales layer before touching anything on the page.\n\nI pulled the existing lead conversations from Google Search and listened to call recordings. The surface read was that leads didn\'t have the finances. But underneath that, the real issue was that we had almost nothing to give a lead who couldn\'t immediately justify the fee to themselves — no collateral that built the ROI case, no social proof that made the programme feel worth the risk. That finding shaped the entire rebuild strategy: this wasn\'t a UI problem, it was a value communication problem that happened to manifest on the landing page.\n\nFrom performance marketing, I pulled the keyword data — which terms were converting, which were burning spend, and critically, what users were actually expressing intent about when they searched. This fed directly into how I structured the new page.\n\nWith the qualitative gap in mind, I brought in VWO and ran heatmaps, friction maps, and click maps on the existing page. The pattern was clear: users were landing on the page, hunting for something that wasn\'t appearing in the first two scrolls, abandoning the form when it appeared, and then scrolling down to a video — watching it, and coming back to fill the form. The form was firing before we\'d earned it. The video was doing the conversion work, but it was buried.\n\nMy hypothesis: the page needed to front-load proof of career return, put the video where users were already trying to find it, and sequence the form trigger after that value had landed — not before.\n\nThe variant I built did four things:\n• Restructured the page so "return on career" — testimonials, outcome data, video — appeared within the first two scrolls, before any form prompt\n• Created UTM-aware content sections that surfaced copy matching the user\'s original search intent. For example, when someone searched for [e.g. "executive MBA for working professionals"], the relevant section surfaced in their first scroll rather than requiring them to hunt for it\n• Added sequential event tracking across every meaningful interaction — video plays, attribute clicks, CTA taps — so we could map exactly which page elements were enabling form fills, not just whether a fill happened\n• Split traffic 80/20 rather than 50/50, because we were bleeding CPLs and couldn\'t absorb a variant performing worse at scale. I ran this as a sequential test rather than fixed-horizon, with statistical power set at 80% — below that, false positive tolerance would have been unacceptable for a decision of this cost. Minimum target was 10% improvement over baseline FFR.\n\nThe test ran for 40 days.',
    result: 'The variant outperformed the control by 41% on form fill rate — four times the 10% we\'d targeted as the minimum viable improvement.\n\nThe insight that explained it: users searching for a high-ticket Executive MBA are not evaluating a product, they\'re evaluating a career decision. They needed to see return on career — concretely, credibly — before they were willing to give you their details. The original page asked for commitment before delivering justification. The variant flipped that sequence, and the numbers followed.',
    proof: 'VWO Test reports available on request'
  },
  {
    id: 'cxo-gtm',
    code: 'MONO-02 // GTM-RESEARCH',
    number: '02',
    metric: 'N-2 ICP',
    metricLabel: '5,000-Lead Primary Discovery',
    title: 'Building GTM for a CXO Programme — and Discovering the Real Audience Wasn\'t CXOs',
    tags: ['Narrative & Positioning (primary)', 'Conversion & Lifecycle (secondary)', 'User Research'],
    context: 'A first-ever launch of a specialised programme targeting C-suite executives — a category with a naturally limited addressable audience, no existing social proof, and no prior campaign data to draw from. The programme needed a GTM built from scratch: research, positioning, sales enablement, and demand generation all running in parallel against a launch deadline.',
    problem: 'The programme was named and scoped for CXOs. The brief assumed that was the audience. But assumption isn\'t a targeting strategy for a product this expensive and this new — with no prior cohort data, no benchmark CPLs, and no organic word-of-mouth to lean on, going to market with the wrong ICP would mean building every asset, message, and channel around a ghost.\n\nMy problem wasn\'t just "how do we market this." It was "do we actually know who we\'re marketing to?"',
    action: 'Before touching a single asset, I went upstream to the product strategy team to map the ICPs they were building for — so I could translate programme features into audience-relevant value rather than guess at what would land. That conversation surfaced enough ambiguity about the target profile that I pushed for primary research before committing to a positioning direction.\n\nWe ran a survey to 5,000 past candidates from our leadership programmes. 120 responded and were interviewed. The research was designed to surface behavioural drivers — what made this audience evaluate a programme, what messaging themes resonated, what objections they carried — not just demographic confirmation.\n\nThe findings reoriented the entire approach. The messaging buckets that tested strongest were Cohorts, Connections, Alumni Network, and Prestige — status and peer quality over curriculum. More importantly, the research revealed that the audience most motivated to act wasn\'t the CXO tier the programme was named for. It was N-2: VP and GM level executives using the programme as a career accelerant toward the C-suite, not current C-suite validating their position.\n\nThat was the insight I\'d call a failure of the original brief — the product was named and positioned for an audience that turned out to be less motivated to convert than the tier just below it. I flagged this finding and built the GTM around the actual audience the data showed, not the assumed one.\n\nWith the ICP clarified, I built out the full GTM stack:\n• Sales enablement: Themed around the four resonant messaging buckets. Deliverables included in-depth masterclass pitchers, competitive battle cards, single-page programme pitches, and ICP-specific objection cards covering the hesitations the research had surfaced\n• Social proof (from zero): Organised and executed an on-site shoot with programme faculty — compensating for the lack of alumni testimonials on a first-ever launch. The footage served both organic and paid\n• CRM journeys: Planned and deployed sequenced email journeys mapped to each stage of the lead funnel, with messaging adapted to where a lead sat in their evaluation\n• Awareness: Coordinated a press release alongside SEO initiatives to generate organic visibility for a programme that had no search history',
    result: 'The first batch was filled. The GTM assets held up despite the product positioning constraint.\n\nThe video content reduced Meta CPLs and lifted CTRs. The PR and SEO play generated approximately 15% of total lead share — meaningful for a programme with no prior organic footprint. CRM journeys ran at 8% open rate with 10% click-to-open rate across the funnel stages.\n\nThe real result, though, was the audience finding: the N-2 insight should have fed back into product positioning before launch — the programme name and CXO framing was a ceiling on addressable demand. That\'s the thing I\'d do differently: push the research finding harder upstream, earlier, so product positioning and GTM are solving for the same audience before either goes to market.',
    proof: 'sales enablement samples, and CRM performance data available on request.'
  },
  {
    id: 'ai-health-coach',
    code: 'MONO-03 // SYS-TELEMETRY',
    number: '03',
    metric: '100% CLOSED',
    metricLabel: 'Biometric Feedback Architecture',
    title: 'Architecting a Closed-Loop AI Health Coach',
    tags: ['Systems Integration (primary)', 'AI Workflows (secondary)', 'Notion Telemetry'],
    context: 'Health and fitness tracking is notoriously fragmented. We wear smartwatches, log food in generic apps, and track lifts in spreadsheets. Data goes in, but actionable intelligence rarely comes out. I didn\'t just want a dashboard that recorded my data—I needed a system that actively coached me, adjusting my training and diet in real-time based on actual telemetry.',
    problem: 'I engineered a centralized, bi-directional system inside Notion, connecting my Galaxy Watch, diet logs, and external APIs into a single, automated coaching loop.',
    action: '• Dynamic Diet Engineering: I built a two-way macro database. When a meal is logged, the AI evaluates the intake (protein, fats, carbs) against my calorie deficit goals. Instead of just charting the data, the AI actively recalculates my next meal plan and adapts seamlessly for variables like scheduled 24-hour fasts.\n• Automated Training Context: I integrated the MuscleWiki API directly into my workout workflow. As I log prescribed exercises, the system automatically parses the text, fetches the precise biometric video demonstrations, and links them directly into my daily notes.\n• Frictionless Edge-Case Capture: Real life rarely sticks to a script. I designed a mobile "Workout Inbox" to capture ad-hoc, off-program sessions (like an unplanned full-body trainer session). This ensures the AI maintains perfect context of my weekly active minutes without forcing me to fight the UI.',
    result: 'A unified, zero-friction dashboard that merges biometric data (sleep, body fat %, active minutes) with AI-driven dietary and training adjustments. By treating my personal health data with the same systems-thinking I apply to GTM and marketing operations, I eliminated the silos between tracking and coaching.',
    proof: 'View the Live Notion Dashboard',
    link: 'https://app.notion.com/p/Smart-Gym-Coach-39703556308b803dab63ebdccdf7a3f7?source=copy_link',
    image: '/smart-gym-dashboard.png'
  },
  {
    id: 'ai-cheat-code-pmm',
    code: 'MONO-04 // WORKFLOW-LLM',
    number: '04',
    metric: '550B LLM',
    metricLabel: 'Autonomous GTM Pipeline',
    title: 'The AI Cheat Code: Automating the Product Marketing Workflow',
    tags: ['AI Workflows (primary)', 'Growth Engineering (secondary)', 'DOM Scraping'],
    context: 'Product marketing usually involves weeks of manual research: crawling competitor websites, synthesizing audience pain points, and writing positioning documents. I wanted to turn this manual workflow into an automated system that runs in seconds.',
    problem: 'I needed a way to demonstrate my product marketing workflow on this very portfolio—not by talking about it, but by actually executing it live for any user who visits the site.',
    action: '• The AI Console: I built a live, interactive terminal directly into this website (see the Console section above).\n• The GTM Auditor: Under the hood, it takes any company URL you drop into it, scrapes their live DOM, and runs it through a massive LLM to generate a real-time Go-To-Market audit.\n• The System Diagram: I mapped this entire logic into a central visual architecture (The System Behind the Work) where a single "Product Marketing Context" hub informs all downstream channels—CRO, Copywriting, Ads, and Sales.',
    result: 'Instead of a static portfolio that just lists skills, this website acts as a live proof-of-concept. It demonstrates a working AI marketing pipeline that does the heavy lifting of a PMM in real time. It is an AI cheat code for GTM strategy.',
    proof: 'Scroll up to the Live Demo Console to run the audit yourself.'
  }
];

const CaseStudies = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section
      id="case-studies"
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
        <span>SECTION 06 // HISTORICAL MONOGRAPHS</span>
        <span>PEER-REVIEWED EVIDENCE: 4 DOSSIERS</span>
        <span>INDEX REF: MONO-01 → 04</span>
      </div>

      <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 2rem', borderBottom: '1px solid var(--grid-rule)' }}>
        <Reveal>
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
            // RIGOROUS DOCUMENTATION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              margin: '0 0 1rem',
              color: 'var(--on-surface)',
            }}
          >
            Historical Case Studies in <span style={{ fontStyle: 'italic', fontWeight: 400 }}>GTM Architecture.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: 'var(--on-surface-variant)',
              maxWidth: '720px',
              margin: 0,
            }}
          >
            Deep qualitative and quantitative investigations into conversion surgery, audience discovery, closed-loop telemetry, and automated marketing intelligence.
          </p>
        </Reveal>
      </div>

      {/* Grid of Monograph Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 0,
          borderBottom: '3px solid var(--on-surface)',
        }}
      >
        {CASE_STUDIES.map((study, idx) => (
          <motion.div
            layoutId={`card-${study.id}`}
            key={study.id}
            onClick={() => setSelectedId(study.id)}
            style={{
              padding: '2.5rem 2rem',
              cursor: 'pointer',
              borderRight: (idx % 2 === 0) ? '1px solid var(--grid-rule)' : 'none',
              borderBottom: '1px solid var(--grid-rule)',
              background: 'var(--surface)',
              transition: 'background 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
            }}
            whileHover={{ background: 'var(--surface-paper-bright)' }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: 'var(--on-surface-variant)',
                }}
              >
                <span>{study.code}</span>
                <span
                  style={{
                    color: 'var(--accent-vermilion)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                  }}
                >
                  {study.metric}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {study.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.06em',
                      padding: '3px 8px',
                      background: 'var(--surface-container-low)',
                      border: '1px solid var(--grid-rule)',
                      color: 'var(--on-surface)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.h3
                layoutId={`title-${study.id}`}
                style={{
                  fontSize: '1.5rem',
                  margin: '0 0 1rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: 'var(--on-surface)',
                }}
              >
                {study.title}
              </motion.h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'var(--on-surface-variant)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  margin: 0,
                }}
              >
                {study.context}
              </p>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--grid-rule)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--on-surface)',
                fontWeight: 600,
              }}
            >
              <span>Examine Dossier</span>
              <ArrowRight size={14} style={{ color: 'var(--accent-vermilion)' }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dossier Modal */}
      <AnimatePresence>
        {selectedId && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(17, 17, 17, 0.7)',
                backdropFilter: 'blur(6px)',
              }}
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              style={{
                width: '100%',
                maxWidth: '850px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1001,
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                background: '#FAF8F4',
                border: '3px solid var(--on-surface)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {(() => {
                const study = CASE_STUDIES.find((s) => s.id === selectedId);
                return (
                  <>
                    {/* Modal Sticky Top Header */}
                    <div
                      style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        padding: '1.25rem 2rem',
                        borderBottom: '2px solid var(--on-surface)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: '#FAF8F4',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            letterSpacing: '0.12em',
                            fontWeight: 700,
                            padding: '3px 8px',
                            background: 'var(--on-surface)',
                            color: '#FFFFFF',
                          }}
                        >
                          {study.code}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            letterSpacing: '0.08em',
                            color: 'var(--on-surface-variant)',
                            textTransform: 'uppercase',
                          }}
                        >
                          ARCHIVAL DOSSIER // VIVEK PUNJABI
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedId(null)}
                        style={{
                          background: 'none',
                          border: '1px solid var(--grid-rule)',
                          cursor: 'pointer',
                          padding: '0.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          color: 'var(--on-surface)',
                        }}
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div style={{ padding: '2.5rem 2.5rem 3.5rem', color: 'var(--on-surface)' }} className="case-study-content">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.68rem',
                              letterSpacing: '0.08em',
                              padding: '3px 8px',
                              background: 'var(--surface-container-low)',
                              border: '1px solid var(--grid-rule)',
                              textTransform: 'uppercase',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.h3
                        layoutId={`title-${study.id}`}
                        style={{
                          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                          margin: '0 0 2rem',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 900,
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {study.title}
                      </motion.h3>

                      {/* Summary Banner */}
                      <div
                        style={{
                          padding: '1.25rem 1.5rem',
                          background: 'var(--surface-paper-bright)',
                          border: '1px solid var(--grid-rule)',
                          borderLeft: '4px solid var(--accent-vermilion)',
                          marginBottom: '2.5rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem',
                        }}
                      >
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>
                            PRIMARY IMPACT METRIC
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-vermilion)' }}>
                            {study.metric}
                          </div>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--on-surface)' }}>
                          {study.metricLabel}
                        </div>
                      </div>

                      <div className="section">
                        <h4>I. Context & Baseline</h4>
                        <p>{study.context}</p>
                      </div>

                      <div className="section">
                        <h4>II. The Core Problem</h4>
                        <p>
                          {study.problem.split('\n\n').map((paragraph, i) => (
                            <span key={i} style={{ display: 'block', marginBottom: '1rem' }}>
                              {paragraph}
                            </span>
                          ))}
                        </p>
                      </div>

                      <div className="section">
                        <h4>III. Architecture & Execution</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {study.action.split('\n').map((paragraph, i) => (
                            <span key={i} style={{ display: 'block' }}>
                              {paragraph}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="section">
                        <h4>IV. Quantified Outcome</h4>
                        <p>
                          {study.result.split('\n\n').map((paragraph, i) => (
                            <span key={i} style={{ display: 'block', marginBottom: '1rem' }}>
                              {paragraph}
                            </span>
                          ))}
                        </p>
                      </div>

                      {study.image && (
                        <div className="section">
                          <img
                            src={study.image}
                            alt="Dashboard Overview"
                            style={{ width: '100%', border: '1px solid var(--grid-rule)' }}
                          />
                        </div>
                      )}

                      <div
                        className="section"
                        style={{
                          borderTop: '1px solid var(--grid-rule)',
                          paddingTop: '1.5rem',
                          marginTop: '2.5rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem',
                        }}
                      >
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>
                            VERIFICATION & PROOF
                          </div>
                          {study.link ? (
                            <a
                              href={study.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: 'var(--accent-vermilion)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.85rem',
                                textDecoration: 'underline',
                                fontWeight: 700,
                              }}
                            >
                              {study.proof} ↗
                            </a>
                          ) : (
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>
                              {study.proof}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .case-study-content .section {
          margin-bottom: 2.25rem;
        }
        .case-study-content h4 {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          color: var(--on-surface);
          border-bottom: 1px solid var(--grid-rule);
          padding-bottom: 0.4rem;
        }
        .case-study-content p, .case-study-content span {
          line-height: 1.65;
          color: var(--on-surface);
          font-family: var(--font-serif);
          font-size: 1.05rem;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
