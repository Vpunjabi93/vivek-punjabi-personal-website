import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { X } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'emba-campaign',
    title: 'Increasing Executive MBA Form Fill Rates by 41% in a Single Campaign',
    tags: ['Conversion & Lifecycle (primary)', 'Narrative & Positioning (secondary)'],
    context: 'EdTech campaign windows run short — typically 90 to 180 days — and high-ticket Executive MBAs carry an industry-standard form fill rate of just 4–5%, driven by the financial and career commitment the product demands. In these products, the margin between a good campaign and a bleeding one comes down to how precisely you understand landing page behaviour, because CTRs and CPLs are downstream of it.',
    problem: 'When the EMBA from an IIM partner slipped in rankings and came to me, it was converting at 1.5% — less than a third of the industry floor. We had high CTRs on search, which told me the ads were reaching the right people. The bleed was happening on the page, not in the funnel above it. CPLs were unsustainable and we couldn\'t afford to keep buying traffic into a broken experience.\n\nThe second challenge was diagnostic: we had GA4 covering quantitative behaviour but no qualitative layer to explain why users were dropping. And the programme itself had no meaningful social proof and no clear differentiator against competitors — two problems that matter a lot when someone is evaluating a product worth lakhs.',
    action: 'My first move was to stop assuming the landing page was the only variable and audit the full conversion chain — which meant going into the sales layer before touching anything on the page.\n\nI pulled the existing lead conversations from Google Search and listened to call recordings. The surface read was that leads didn\'t have the finances. But underneath that, the real issue was that we had almost nothing to give a lead who couldn\'t immediately justify the fee to themselves — no collateral that built the ROI case, no social proof that made the programme feel worth the risk. That finding shaped the entire rebuild strategy: this wasn\'t a UI problem, it was a value communication problem that happened to manifest on the landing page.\n\nFrom performance marketing, I pulled the keyword data — which terms were converting, which were burning spend, and critically, what users were actually expressing intent about when they searched. This fed directly into how I structured the new page.\n\nWith the qualitative gap in mind, I brought in VWO and ran heatmaps, friction maps, and click maps on the existing page. The pattern was clear: users were landing on the page, hunting for something that wasn\'t appearing in the first two scrolls, abandoning the form when it appeared, and then scrolling down to a video — watching it, and coming back to fill the form. The form was firing before we\'d earned it. The video was doing the conversion work, but it was buried.\n\nMy hypothesis: the page needed to front-load proof of career return, put the video where users were already trying to find it, and sequence the form trigger after that value had landed — not before.\n\nThe variant I built did four things:\n• Restructured the page so "return on career" — testimonials, outcome data, video — appeared within the first two scrolls, before any form prompt\n• Created UTM-aware content sections that surfaced copy matching the user\'s original search intent. For example, when someone searched for [e.g. "executive MBA for working professionals"], the relevant section surfaced in their first scroll rather than requiring them to hunt for it\n• Added sequential event tracking across every meaningful interaction — video plays, attribute clicks, CTA taps — so we could map exactly which page elements were enabling form fills, not just whether a fill happened\n• Split traffic 80/20 rather than 50/50, because we were bleeding CPLs and couldn\'t absorb a variant performing worse at scale. I ran this as a sequential test rather than fixed-horizon, with statistical power set at 80% — below that, false positive tolerance would have been unacceptable for a decision of this cost. Minimum target was 10% improvement over baseline FFR.\n\nThe test ran for 40 days.',
    result: 'The variant outperformed the control by 41% on form fill rate — four times the 10% we\'d targeted as the minimum viable improvement.\n\nThe insight that explained it: users searching for a high-ticket Executive MBA are not evaluating a product, they\'re evaluating a career decision. They needed to see return on career — concretely, credibly — before they were willing to give you their details. The original page asked for commitment before delivering justification. The variant flipped that sequence, and the numbers followed.',
    proof: 'VWO Test reports available on request'
  },
  {
    id: 'cxo-gtm',
    title: 'Building GTM for a CXO Programme — and Discovering the Real Audience Wasn\'t CXOs',
    tags: ['Narrative & Positioning (primary)', 'Conversion & Lifecycle (secondary)'],
    context: 'A first-ever launch of a specialised programme targeting C-suite executives — a category with a naturally limited addressable audience, no existing social proof, and no prior campaign data to draw from. The programme needed a GTM built from scratch: research, positioning, sales enablement, and demand generation all running in parallel against a launch deadline.',
    problem: 'The programme was named and scoped for CXOs. The brief assumed that was the audience. But assumption isn\'t a targeting strategy for a product this expensive and this new — with no prior cohort data, no benchmark CPLs, and no organic word-of-mouth to lean on, going to market with the wrong ICP would mean building every asset, message, and channel around a ghost.\n\nMy problem wasn\'t just "how do we market this." It was "do we actually know who we\'re marketing to?"',
    action: 'Before touching a single asset, I went upstream to the product strategy team to map the ICPs they were building for — so I could translate programme features into audience-relevant value rather than guess at what would land. That conversation surfaced enough ambiguity about the target profile that I pushed for primary research before committing to a positioning direction.\n\nWe ran a survey to 5,000 past candidates from our leadership programmes. 120 responded and were interviewed. The research was designed to surface behavioural drivers — what made this audience evaluate a programme, what messaging themes resonated, what objections they carried — not just demographic confirmation.\n\nThe findings reoriented the entire approach. The messaging buckets that tested strongest were Cohorts, Connections, Alumni Network, and Prestige — status and peer quality over curriculum. More importantly, the research revealed that the audience most motivated to act wasn\'t the CXO tier the programme was named for. It was N-2: VP and GM level executives using the programme as a career accelerant toward the C-suite, not current C-suite validating their position.\n\nThat was the insight I\'d call a failure of the original brief — the product was named and positioned for an audience that turned out to be less motivated to convert than the tier just below it. I flagged this finding and built the GTM around the actual audience the data showed, not the assumed one.\n\nWith the ICP clarified, I built out the full GTM stack:\n• Sales enablement: Themed around the four resonant messaging buckets. Deliverables included in-depth masterclass pitchers, competitive battle cards, single-page programme pitches, and ICP-specific objection cards covering the hesitations the research had surfaced\n• Social proof (from zero): Organised and executed an on-site shoot with programme faculty — compensating for the lack of alumni testimonials on a first-ever launch. The footage served both organic and paid\n• CRM journeys: Planned and deployed sequenced email journeys mapped to each stage of the lead funnel, with messaging adapted to where a lead sat in their evaluation\n• Awareness: Coordinated a press release alongside SEO initiatives to generate organic visibility for a programme that had no search history',
    result: 'The first batch was filled. The GTM assets held up despite the product positioning constraint.\n\nThe video content reduced Meta CPLs and lifted CTRs. The PR and SEO play generated approximately 15% of total lead share — meaningful for a programme with no prior organic footprint. CRM journeys ran at 8% open rate with 10% click-to-open rate across the funnel stages.\n\nThe real result, though, was the audience finding: the N-2 insight should have fed back into product positioning before launch — the programme name and CXO framing was a ceiling on addressable demand. That\'s the thing I\'d do differently: push the research finding harder upstream, earlier, so product positioning and GTM are solving for the same audience before either goes to market.',
    proof: 'sales enablement samples, and CRM performance data available on request.'
  }
];

const CaseStudies = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="case-studies" style={{ padding: 'clamp(4rem, 8vh, 7rem) 2rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <Reveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="label" style={{ marginBottom: '1rem', color: 'var(--accent-warm)' }}>
          // PROOF OF WORK
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
          Case Studies in <span style={{ color: 'var(--accent-warm)' }}>GTM & Growth.</span>
        </h2>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {CASE_STUDIES.map((study) => (
          <motion.div
            layoutId={`card-${study.id}`}
            key={study.id}
            onClick={() => setSelectedId(study.id)}
            style={{
              background: 'rgba(17, 17, 17, 0.03)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              padding: '2.5rem',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ y: -4, borderColor: 'var(--on-surface-variant)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {study.tags.map(tag => (
                <span key={tag} className="label" style={{ fontSize: '0.7rem', padding: '6px 10px', background: 'var(--surface-container-low)', borderRadius: '4px', textTransform: 'none' }}>
                  {tag}
                </span>
              ))}
            </div>
            <motion.h3 layoutId={`title-${study.id}`} style={{ fontSize: '1.75rem', margin: 0, fontFamily: 'var(--font-display)' }}>
              {study.title}
            </motion.h3>
            <p style={{ marginTop: '1.5rem', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              Read full case study →
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(244, 244, 240, 0.8)', backdropFilter: 'blur(8px)' }}
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '800px',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1001,
                padding: '0',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {(() => {
                const study = CASE_STUDIES.find(s => s.id === selectedId);
                return (
                  <>
                    <div style={{ position: 'sticky', top: 0, background: 'var(--surface)', zIndex: 10, padding: '2.5rem 2.5rem 1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                          {study.tags.map(tag => (
                            <span key={tag} className="label" style={{ fontSize: '0.7rem', padding: '4px 8px', background: 'var(--surface-container-low)', borderRadius: '4px', textTransform: 'none' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.h3 layoutId={`title-${study.id}`} style={{ fontSize: '2rem', margin: 0, fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
                          {study.title}
                        </motion.h3>
                      </div>
                      <button 
                        onClick={() => setSelectedId(null)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--on-surface-variant)' }}
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div style={{ padding: '2.5rem', color: 'var(--on-surface)' }} className="case-study-content">
                      <div className="section">
                        <h4>Context</h4>
                        <p>{study.context}</p>
                      </div>

                      <div className="section">
                        <h4>The Problem</h4>
                        <p>{study.problem.split('\n\n').map((paragraph, i) => <span key={i} style={{ display: 'block', marginBottom: '1rem' }}>{paragraph}</span>)}</p>
                      </div>

                      <div className="section">
                        <h4>What I Did</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {study.action.split('\n').map((paragraph, i) => (
                            <span key={i} style={{ display: 'block' }}>{paragraph}</span>
                          ))}
                        </div>
                      </div>

                      <div className="section">
                        <h4>Result</h4>
                        <p>{study.result.split('\n\n').map((paragraph, i) => <span key={i} style={{ display: 'block', marginBottom: '1rem' }}>{paragraph}</span>)}</p>
                      </div>

                      <div className="section" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', marginTop: '2rem' }}>
                        <h4 style={{ color: 'var(--accent-warm)' }}>Proof</h4>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{study.proof}</p>
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
          margin-bottom: 2.5rem;
        }
        .case-study-content h4 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--on-surface);
          letter-spacing: -0.02em;
        }
        .case-study-content p, .case-study-content span {
          line-height: 1.6;
          color: var(--on-surface-variant);
          font-size: 1.05rem;
        }
        /* Custom scrollbar for modal */
        .case-study-content::-webkit-scrollbar {
          width: 8px;
        }
        .case-study-content::-webkit-scrollbar-thumb {
          background: var(--glass-border);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
