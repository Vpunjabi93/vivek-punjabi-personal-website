import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { X, ArrowRight } from 'lucide-react';

const MotionDiv = motion.div;
const MotionH3 = motion.h3;

const CASE_STUDIES = [
  {
    id: 'emba-campaign',
    code: 'MONO-01 // CONV-CRO',
    number: '01',
    metric: '+41% FFR',
    metricLabel: 'Form Fill Rate Surge (40d Sequential VWO Test)',
    title: 'Increasing Executive MBA Form Fill Rates by 41% in a Single Campaign',
    tags: ['Conversion & Lifecycle (Primary)', 'Positioning & Messaging', 'VWO A/B Testing'],
    artifactCaption: 'FIG 03.1 // CONTROL VS. VARIANT SCROLL ARCHITECTURE',
    context: 'EdTech campaign windows run short — typically 90 to 180 days — and high-ticket Executive MBAs carry an industry-standard form fill rate of just 4–5%, driven by the financial and career commitment the product demands. In these products, the margin between a good campaign and a bleeding one comes down to how precisely you understand landing page behaviour, because CTRs and CPLs are downstream of it.',
    problem: 'When the EMBA from an IIM partner slipped in rankings and came to me, it was converting at 1.5% — less than a third of the industry floor. We had high CTRs on search, which told me the ads were reaching the right people. The bleed was happening on the page, not in the funnel above it. CPLs were unsustainable and we couldn\'t afford to keep buying traffic into a broken experience.\n\nThe second challenge was diagnostic: we had GA4 covering quantitative behaviour but no qualitative layer to explain why users were dropping. And the programme itself had no meaningful social proof and no clear differentiator against competitors — two problems that matter a lot when someone is evaluating a product worth lakhs.',
    action: 'My first move was to stop assuming the landing page was the only variable and audit the full conversion chain — which meant going into the sales layer before touching anything on the page.\n\nI pulled the existing lead conversations from Google Search and listened to call recordings. The surface read was that leads didn\'t have the finances. But underneath that, the real issue was that we had almost nothing to give a lead who couldn\'t immediately justify the fee to themselves — no collateral that built the ROI case, no social proof that made the programme feel worth the risk. That finding shaped the entire rebuild strategy: this wasn\'t a UI problem, it was a value communication problem that happened to manifest on the landing page.\n\nFrom performance marketing, I pulled the keyword data — which terms were converting, which were burning spend, and critically, what users were actually expressing intent about when they searched. This fed directly into how I structured the new page.\n\nWith the qualitative gap in mind, I brought in VWO and ran heatmaps, friction maps, and click maps on the existing page. The pattern was clear: users were landing on the page, hunting for something that wasn\'t appearing in the first two scrolls, abandoning the form when it appeared, and then scrolling down to a video — watching it, and coming back to fill the form. The form was firing before we\'d earned it. The video was doing the conversion work, but it was buried.\n\nMy hypothesis: the page needed to front-load proof of career return, put the video where users were already trying to find it, and sequence the form trigger after that value had landed — not before.\n\nThe variant I built did four things:\n• Restructured the page so "return on career" — testimonials, outcome data, video — appeared within the first two scrolls, before any form prompt\n• Created UTM-aware content sections that surfaced copy matching the user\'s original search intent. For example, when someone searched for "executive MBA for working professionals", the relevant section surfaced in their first scroll rather than requiring them to hunt for it\n• Added sequential event tracking across every meaningful interaction — video plays, attribute clicks, CTA taps — so we could map exactly which page elements were enabling form fills, not just whether a fill happened\n• Split traffic 80/20 rather than 50/50, because we were bleeding CPLs and couldn\'t absorb a variant performing worse at scale. I ran this as a sequential test rather than fixed-horizon, with statistical power set at 80% — below that, false positive tolerance would have been unacceptable for a decision of this cost. Minimum target was 10% improvement over baseline FFR.\n\nThe test ran for 40 days.',
    result: 'The variant outperformed the control by 41% on form fill rate — four times the 10% we\'d targeted as the minimum viable improvement.\n\nThe insight that explained it: users searching for a high-ticket Executive MBA are not evaluating a product, they\'re evaluating a career decision. They needed to see return on career — concretely, credibly — before they were willing to give you their details. The original page asked for commitment before delivering justification. The variant flipped that sequence, and the numbers followed.',
    proof: 'VWO test reports & sequence heatmaps available on request'
  },
  {
    id: 'cxo-gtm',
    code: 'MONO-02 // GTM-RESEARCH',
    number: '02',
    metric: 'N-2 ICP',
    metricLabel: '5,000-Lead Primary Research · 15% Organic/PR Share',
    title: 'Building GTM for a CXO Programme — and Discovering the Real Audience Wasn\'t CXOs',
    tags: ['Narrative & Positioning (Primary)', 'Sales Enablement', 'User Research'],
    artifactCaption: 'FIG 03.2 // ICP DISCOVERY & ENABLEMENT MATRIX',
    context: 'A first-ever launch of a specialised programme targeting C-suite executives — a category with a naturally limited addressable audience, no existing social proof, and no prior campaign data to draw from. The programme needed a GTM built from scratch: research, positioning, sales enablement, and demand generation all running in parallel against a launch deadline.',
    problem: 'The programme was named and scoped for CXOs. The brief assumed that was the audience. But assumption isn\'t a targeting strategy for a product this expensive and this new — with no prior cohort data, no benchmark CPLs, and no organic word-of-mouth to lean on, going to market with the wrong ICP would mean building every asset, message, and channel around a ghost.\n\nMy problem wasn\'t just "how do we market this." It was "do we actually know who we\'re marketing to?"',
    action: 'Before touching a single asset, I went upstream to the product strategy team to map the ICPs they were building for — so I could translate programme features into audience-relevant value rather than guess at what would land. That conversation surfaced enough ambiguity about the target profile that I pushed for primary research before committing to a positioning direction.\n\nWe ran a survey to 5,000 past candidates from our leadership programmes. 120 responded and were interviewed. The research was designed to surface behavioural drivers — what made this audience evaluate a programme, what messaging themes resonated, what objections they carried — not just demographic confirmation.\n\nThe findings reoriented the entire approach. The messaging buckets that tested strongest were Cohorts, Connections, Alumni Network, and Prestige — status and peer quality over curriculum. More importantly, the research revealed that the audience most motivated to act wasn\'t the CXO tier the programme was named for. It was N-2: VP and GM level executives using the programme as a career accelerant toward the C-suite, not current C-suite validating their position.\n\nThat was the insight I\'d call a failure of the original brief — the product was named and positioned for an audience that turned out to be less motivated to convert than the tier just below it. I flagged this finding and built the GTM around the actual audience the data showed, not the assumed one.\n\nWith the ICP clarified, I built out the full GTM stack:\n• Sales enablement: Themed around the four resonant messaging buckets. Deliverables included in-depth masterclass pitches, competitive battle cards, single-page programme pitches, and ICP-specific objection cards covering the hesitations the research had surfaced\n• Social proof (from zero): Organised and executed an on-site shoot with programme faculty — compensating for the lack of alumni testimonials on a first-ever launch. The footage served both organic and paid\n• CRM journeys: Planned and deployed sequenced email journeys mapped to each stage of the lead funnel, with messaging adapted to where a lead sat in their evaluation\n• Awareness: Coordinated a press release alongside SEO initiatives to generate organic visibility for a programme that had no search history',
    result: 'The first batch was filled. The GTM assets held up despite the product positioning constraint.\n\nThe video content reduced Meta CPLs and lifted CTRs. The PR and SEO play generated approximately 15% of total lead share — meaningful for a programme with no prior organic footprint. CRM journeys ran at 8% open rate with 10% click-to-open rate across the funnel stages.\n\nThe real result, though, was the audience finding: the N-2 insight should have fed back into product positioning before launch — the programme name and CXO framing was a ceiling on addressable demand. That\'s the thing I\'d do differently: push the research finding harder upstream, earlier, so product positioning and GTM are solving for the same audience before either goes to market.',
    proof: 'Sales enablement samples & CRM performance logs available on request'
  },
  {
    id: 'ai-health-coach',
    code: 'MONO-03 // SYS-TELEMETRY',
    number: '03',
    metric: '100% CLOSED',
    metricLabel: 'Biometric Feedback Loop (Notion + Galaxy Watch + APIs)',
    title: 'Architecting a Closed-Loop AI Health Coach',
    tags: ['Systems Integration (Primary)', 'AI Workflows', 'Notion Telemetry'],
    artifactCaption: 'FIG 03.3 // LIVE NOTION BIOMETRIC & NUTRITION SYSTEM',
    context: 'Health and fitness tracking is notoriously fragmented. We wear smartwatches, log food in generic apps, and track lifts in spreadsheets. Data goes in, but actionable intelligence rarely comes out. I didn\'t just want a dashboard that recorded my data—I needed a system that actively coached me, adjusting my training and diet in real-time based on actual telemetry.',
    problem: 'I engineered a centralized, bi-directional system inside Notion, connecting my Galaxy Watch, diet logs, and external APIs into a single, automated coaching loop.',
    action: '• Dynamic Diet Engineering: I built a two-way macro database. When a meal is logged, the AI evaluates the intake (protein, fats, carbs) against my calorie deficit goals. Instead of just charting the data, the AI actively recalculates my next meal plan and adapts seamlessly for variables like scheduled 24-hour fasts.\n• Automated Training Context: I integrated the MuscleWiki API directly into my workout workflow. As I log prescribed exercises, the system automatically parses the text, fetches the precise biometric video demonstrations, and links them directly into my daily notes.\n• Frictionless Edge-Case Capture: Real life rarely sticks to a script. I designed a mobile "Workout Inbox" to capture ad-hoc, off-program sessions (like an unplanned full-body trainer session). This ensures the AI maintains perfect context of my weekly active minutes without forcing me to fight the UI.',
    result: 'A unified, zero-friction dashboard that merges biometric data (sleep, body fat %, active minutes) with AI-driven dietary and training adjustments. By treating my personal health data with the same systems-thinking I apply to GTM and marketing operations, I eliminated the silos between tracking and coaching.',
    proof: 'View the Live Notion Dashboard',
    link: 'https://app.notion.com/p/Smart-Gym-Coach-39703556308b803dab63ebdccdf7a3f7?source=copy_link',
    image: './smart-gym-dashboard.png'
  },
  {
    id: 'ai-cheat-code-pmm',
    code: 'MONO-04 // WORKFLOW-LLM',
    number: '04',
    metric: '-50% TAT',
    metricLabel: 'Hub-and-Spoke AI Ecosystem · NotebookLM QC & MCPs',
    title: 'Automating the Product Marketing Workflow with Context-Hub AI Systems',
    tags: ['AI Workflows (Primary)', 'LLM Quality Control', 'Custom MCP Tooling'],
    artifactCaption: 'FIG 03.4 // CONTEXT-HUB & SPOKE AI WORKFLOW TOPOLOGY',
    context: 'Product marketing usually fragments into disconnected silos: copywriters drift from positioning, creative pods bottleneck on manual QA checks, and marketers waste hours pulling analytics across GA4 dashboards before testing a hypothesis.',
    problem: 'Across high-velocity EdTech portfolios at TimesPro, creative pods and product marketers were juggling dozens of programme pitches, landing pages, and ad sets simultaneously—causing collateral bottlenecks, inconsistent positioning across spokes, and slow campaign feedback loops.',
    action: '• Single Product Marketing Context Hub: Built a hub-and-spoke AI architecture where a master positioning context file feeds downstream spokes—copywriting, CRO landing page wireframes, technical SEO audits, ad hooks, and sales enablement.\n• Automated LLM Quality Control (NotebookLM): Institutionalized an LLM-based QC ecosystem auditing creative pod output against programme briefs and messaging pillars before human review.\n• Custom Analytics & Ad Tooling: Built a Python Google Analytics 4 MCP server (published on PyPI) so AI workflows pull real conversion telemetry directly, alongside a Gemini Pro ad-copy scorer (Section 05).',
    result: 'Collateral QA turnaround time (TAT) dropped by 50% across creative pod deliveries while keeping messaging consistent from first ad impression through sales battlecards. The same hub-and-spoke discipline powers my open-source GTM utilities in Section 05.',
    proof: 'Open-source repositories & PyPI package linked in Section 05 below'
  }
];

/* ── Visual Artifact Blueprint Renderer (Strict Grounded Diagrams) ─────── */
const CaseArtifactPreview = ({ study, compact = false }) => {
  if (study.id === 'ai-health-coach' && study.image) {
    return (
      <div
        style={{
          border: '1px solid var(--grid-rule)',
          background: '#111113',
          overflow: 'hidden',
          marginTop: compact ? '1.1rem' : 0,
        }}
      >
        <div
          style={{
            padding: '0.4rem 0.75rem',
            borderBottom: '1px solid #272730',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#E58E26',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>{study.artifactCaption}</span>
          <span>LIVE SYSTEM CAPTURE</span>
        </div>
        <img
          src={study.image}
          alt="Smart Gym Coach Notion Dashboard showing meal tracking, daily biometrics, and AI coach feedback"
          style={{
            width: '100%',
            height: compact ? '145px' : 'auto',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
          }}
        />
      </div>
    );
  }

  if (study.id === 'emba-campaign') {
    return (
      <div
        style={{
          border: '1px solid var(--grid-rule)',
          background: 'var(--surface-container-low)',
          padding: compact ? '0.85rem' : '1.25rem',
          marginTop: compact ? '1.1rem' : 0,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: 'var(--accent-vermilion)',
            fontWeight: 700,
            marginBottom: '0.65rem',
          }}
        >
          {study.artifactCaption}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
          <div style={{ border: '1px solid var(--grid-rule)', background: 'var(--surface)', padding: '0.65rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--ink-muted)', fontWeight: 700 }}>
              CONTROL (1.5% FFR)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--on-surface)', marginTop: '0.3rem', lineHeight: 1.45 }}>
              1. Generic Hero
              <br />
              2. Premature Form → Drop
              <br />
              3. Buried Proof Video
            </div>
          </div>
          <div style={{ border: '1px solid var(--accent-vermilion)', background: 'var(--surface-paper-bright)', padding: '0.65rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--accent-vermilion)', fontWeight: 700 }}>
              VARIANT (+41% FFR · 40D)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--on-surface)', marginTop: '0.3rem', lineHeight: 1.45 }}>
              1. UTM Intent Match
              <br />
              2. Career ROI + Video Promoted
              <br />
              3. Earned Form Trigger
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (study.id === 'cxo-gtm') {
    return (
      <div
        style={{
          border: '1px solid var(--grid-rule)',
          background: 'var(--surface-container-low)',
          padding: compact ? '0.85rem' : '1.25rem',
          marginTop: compact ? '1.1rem' : 0,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: 'var(--accent-vermilion)',
            fontWeight: 700,
            marginBottom: '0.65rem',
          }}
        >
          {study.artifactCaption}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.64rem' }}>
          <span style={{ padding: '4px 7px', border: '1px solid var(--grid-rule)', background: 'var(--surface)' }}>
            5,000 Surveyed
          </span>
          <span>→</span>
          <span style={{ padding: '4px 7px', border: '1px solid var(--grid-rule)', background: 'var(--surface)' }}>
            120 Interviews
          </span>
          <span>→</span>
          <span style={{ padding: '4px 7px', border: '1px solid var(--accent-vermilion)', background: 'var(--surface-paper-bright)', fontWeight: 700, color: 'var(--accent-vermilion)' }}>
            Pivot: N-2 VP/GM ICP
          </span>
        </div>
        {!compact && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem', marginTop: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
            {['01 COHORTS & PEERS', '02 CONNECTIONS', '03 ALUMNI NETWORK', '04 PRESTIGE SIGNAL'].map((p) => (
              <div key={p} style={{ padding: '0.5rem 0.65rem', border: '1px solid var(--grid-rule)', background: 'var(--surface-paper-bright)' }}>
                {p}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        border: '1px solid var(--grid-rule)',
        background: 'var(--surface-container-low)',
        padding: compact ? '0.85rem' : '1.25rem',
        marginTop: compact ? '1.1rem' : 0,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.08em',
          color: 'var(--accent-vermilion)',
          fontWeight: 700,
          marginBottom: '0.65rem',
        }}
      >
        {study.artifactCaption}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontFamily: 'var(--font-mono)', fontSize: '0.64rem' }}>
        <div style={{ padding: '0.45rem 0.7rem', background: 'var(--on-surface)', color: '#fff', fontWeight: 700, textAlign: 'center' }}>
          SOURCE HUB: ProductMarketing.md (ICP · Positioning · Proof)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.4rem', textAlign: 'center' }}>
          <span style={{ padding: '4px', border: '1px solid var(--grid-rule)', background: 'var(--surface-paper-bright)' }}>
            CRO Pages
          </span>
          <span style={{ padding: '4px', border: '1px solid var(--grid-rule)', background: 'var(--surface-paper-bright)' }}>
            Ad Scorer
          </span>
          <span style={{ padding: '4px', border: '1px solid var(--grid-rule)', background: 'var(--surface-paper-bright)' }}>
            Battlecards
          </span>
        </div>
        <div style={{ padding: '0.35rem 0.65rem', border: '1px dashed var(--accent-vermilion)', color: 'var(--accent-vermilion)', fontWeight: 700, textAlign: 'center' }}>
          ⟲ FEEDBACK GATE: NotebookLM QC (-50% TAT) + GA4 MCP
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    if (selectedId) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedId]);

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
        <span style={{ color: 'var(--on-surface)', fontWeight: 700 }}>
          SECTION 03 // HISTORICAL MONOGRAPHS
        </span>
        <span>CHALLENGE → STRATEGY → ARTIFACT → OUTCOME</span>
        <span>4 SELECTED CASE STUDIES</span>
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
              fontSize: 'clamp(2.35rem, 5vw, 3.85rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              margin: '0 0 1rem',
              color: 'var(--on-surface)',
            }}
          >
            Selected Case Studies in <span style={{ fontStyle: 'italic', fontWeight: 400 }}>GTM Architecture.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: 'var(--on-surface-variant)',
              maxWidth: '760px',
              margin: 0,
            }}
          >
            Click any dossier below to inspect the full methodology, architectural diagrams, hypotheses tested, and quantified commercial impact.
          </p>
        </Reveal>
      </div>

      {/* Grid of Monograph Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 0,
          borderBottom: '3px solid var(--on-surface)',
        }}
      >
        {CASE_STUDIES.map((study, idx) => (
          <MotionDiv
            layoutId={`card-${study.id}`}
            key={study.id}
            className={idx % 2 === 0 ? 'responsive-col-border' : undefined}
            onClick={() => setSelectedId(study.id)}
            style={{
              padding: '2.25rem 2rem',
              cursor: 'pointer',
              borderRight: idx % 2 === 0 ? '1px solid var(--grid-rule)' : 'none',
              borderBottom: '1px solid var(--grid-rule)',
              background: 'var(--surface)',
              transition: 'background 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            whileHover={{ background: 'var(--surface-paper-bright)' }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '1.1rem',
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
                    fontSize: '0.78rem',
                  }}
                >
                  {study.metric}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.1rem' }}>
                {study.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.63rem',
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

              <MotionH3
                layoutId={`title-${study.id}`}
                style={{
                  fontSize: '1.45rem',
                  margin: '0 0 0.85rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: 'var(--on-surface)',
                }}
              >
                {study.title}
              </MotionH3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
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

              {/* Inline Visual Artifact Blueprint / Screenshot */}
              <CaseArtifactPreview study={study} compact={true} />
            </div>

            <div
              style={{
                marginTop: '1.75rem',
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
              <span>Examine Full Dossier</span>
              <ArrowRight size={14} style={{ color: 'var(--accent-vermilion)' }} />
            </div>
          </MotionDiv>
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
            <MotionDiv
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

            <MotionDiv
              layoutId={`card-${selectedId}`}
              style={{
                width: '100%',
                maxWidth: '860px',
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
                        padding: '1.15rem 2rem',
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
                        type="button"
                        aria-label="Close case study modal"
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

                    <div style={{ padding: '2.25rem 2.5rem 3.5rem', color: 'var(--on-surface)' }} className="case-study-content">
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

                      <MotionH3
                        layoutId={`title-${study.id}`}
                        style={{
                          fontSize: 'clamp(1.75rem, 4vw, 2.45rem)',
                          margin: '0 0 1.75rem',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 900,
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {study.title}
                      </MotionH3>

                      {/* Summary Banner */}
                      <div
                        style={{
                          padding: '1.25rem 1.5rem',
                          background: 'var(--surface-paper-bright)',
                          border: '1px solid var(--grid-rule)',
                          borderLeft: '4px solid var(--accent-vermilion)',
                          marginBottom: '2rem',
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

                      {/* Full Modal Visual Artifact / Diagram */}
                      <div style={{ marginBottom: '2.25rem' }}>
                        <CaseArtifactPreview study={study} compact={false} />
                      </div>

                      <div className="section">
                        <h4>I. Context &amp; Baseline</h4>
                        <p>{study.context}</p>
                      </div>

                      <div className="section">
                        <h4>II. The Core Problem</h4>
                        <div>
                          {study.problem.split('\n\n').map((paragraph, i) => (
                            <p key={i} style={{ marginBottom: '1rem' }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="section">
                        <h4>III. Architecture &amp; Execution</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {study.action.split('\n').map((paragraph, i) => (
                            <p key={i} style={{ margin: 0 }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="section">
                        <h4>IV. Quantified Outcome</h4>
                        <div>
                          {study.result.split('\n\n').map((paragraph, i) => (
                            <p key={i} style={{ marginBottom: '1rem' }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div
                        className="section"
                        style={{
                          borderTop: '1px solid var(--grid-rule)',
                          paddingTop: '1.5rem',
                          marginTop: '2.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem',
                        }}
                      >
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>
                            VERIFICATION &amp; PROOF
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
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .case-study-content .section {
          margin-bottom: 2.15rem;
        }
        .case-study-content h4 {
          font-family: var(--font-mono);
          font-size: 0.84rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          color: var(--on-surface);
          border-bottom: 1px solid var(--grid-rule);
          padding-bottom: 0.4rem;
        }
        .case-study-content p {
          line-height: 1.65;
          color: var(--on-surface);
          font-family: var(--font-body);
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
