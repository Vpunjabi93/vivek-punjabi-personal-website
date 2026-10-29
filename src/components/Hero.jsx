import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Target, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

const SYNTHESIS_DOMAINS = [
  {
    id: 'edtech',
    tag: 'EDTECH // CONVERSION SURGERY',
    turnaround: '40 DAYS TO +41% FFR',
    domain: 'High-Ticket Higher Education (IIM Partner)',
    assumption: 'The product fee is too high, and the landing page needs aesthetic redesign.',
    audit: 'Listened to raw sales calls and analyzed VWO scroll/click heatmaps. Found leads wanted the programme but could not justify the career ROI to themselves. Furthermore, users dropped off because the lead form was firing on scroll 1 before proof of return was established.',
    solution: 'Flipped the value sequence: surfaced career outcome data, alumni video proof, and UTM-intent-matched copy within the first two scrolls before any form prompt. Ran a sequential A/B test with 80% statistical power.',
    metric: '+41% FFR',
    metricSubtitle: 'Form Fill Rate Outperformance (4x target)',
    badge: 'CONVERSION',
    targetSection: 'case-studies',
    targetLabel: 'Jump to Monograph No. 01 ↓',
  },
  {
    id: 'b2b-cxo',
    tag: 'ENTERPRISE B2B // AUDIENCE DISCOVERY',
    turnaround: '30 DAYS TO 100% CAPACITY',
    domain: 'C-Suite Executive Programme Launch',
    assumption: 'The brief called for a "CXO Programme," so the entire GTM should target sitting C-suite executives.',
    audit: 'Surveyed 5,000 past candidates and interviewed 120. Uncovered that sitting CXOs already felt established and had low urgency to enroll. The true, high-urgency market was N-2 (VPs and GMs) seeking an aggressive career accelerant to break into the C-suite.',
    solution: 'Pivoted entire positioning, sales masterclasses, and objection-handling battle cards around the 4 resonant drivers: Cohorts, Connections, Alumni Network, and Prestige.',
    metric: '100% SOLD',
    metricSubtitle: 'First cohort filled + Meta CPLs reduced',
    badge: 'POSITIONING',
    targetSection: 'case-studies',
    targetLabel: 'Jump to Monograph No. 02 ↓',
  },
  {
    id: 'biometric-ai',
    tag: 'BIOMETRICS // AUTONOMOUS AI',
    turnaround: '14 DAYS PROTOTYPE TO SYSTEM',
    domain: 'Closed-Loop Biometric Health Coaching',
    assumption: 'Health data belongs in disparate apps (wearables, spreadsheets, calorie logs) with manual review.',
    audit: 'Recognized that biometric tracking without real-time feedback creates cognitive friction and dropped habits. Deconstructed Galaxy Watch webhooks, MuscleWiki workout endpoints, and Notion database schemas.',
    solution: 'Engineered a bi-directional automated loop: logged meals instantly recalculate upcoming macros and adapt dynamically for planned 24-hr fasts, while prescribed exercises automatically pull biomechanical form video demos into daily notes.',
    metric: '100% CLOSED',
    metricSubtitle: 'Zero-friction telemetry & dynamic recalibration',
    badge: 'SYSTEMS',
    targetSection: 'case-studies',
    targetLabel: 'Jump to Monograph No. 03 ↓',
  },
  {
    id: 'streetwear-d2c',
    tag: 'D2C APPAREL // INDUSTRIAL SUPPLY CHAIN',
    turnaround: '3 WEEKS TO 300-DPI ARCHITECTURE',
    domain: 'Sugoi Culture (Streetwear Brand & E-Commerce)',
    assumption: 'Streetwear is just generating cool anime graphics and slapping them onto generic print blanks.',
    audit: 'Audited 541 live website sessions (discovered Airlift caching delayed DOMContentLoaded, breaking WooCommerce event tags and generating 56.7% self-referrals). Diagnosed print-on-demand resolution bottlenecks on 8500×8500px cut-and-sew bomber templates.',
    solution: 'Engineered automated MCP Photoshop pipelines for 35 LPI halftone black knockouts, strict 2.25" cap embroidery digitizing, fixed GA4/Clarity consent triggers, and modeled 69.8% CM1 unit economics.',
    metric: '6.16x ROAS',
    metricSubtitle: '56.7% self-referrals purged · 300 DPI pipeline',
    badge: 'FLAGSHIP',
    targetSection: 'sugoi-case-study',
    targetLabel: 'Jump to Sugoi Culture Centerfold ↓',
  },
];

const Hero = () => {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const active = SYNTHESIS_DOMAINS[activeDomainIdx];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cover"
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        borderLeft: '1px solid var(--grid-rule)',
        borderRight: '1px solid var(--grid-rule)',
        borderBottom: '3px solid var(--on-surface)',
        background: 'var(--surface)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Editorial Header Strip */}
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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--on-surface)', fontWeight: 700 }}>
          <span style={{ width: '6px', height: '6px', background: 'var(--accent-vermilion)', display: 'inline-block' }} />
          SPECIAL BROADSHEET INVESTIGATION // SECTION 01
        </span>
        <span>THE VELOCITY OF SYNTHESIS</span>
        <span>MUMBAI HQ // GLOBAL TRANSMISSION</span>
      </div>

      {/* Main Cover Title Block */}
      <div
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3.5rem)',
          borderBottom: '1px solid var(--grid-rule)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '4px 10px',
            border: '1px solid var(--on-surface)',
            background: 'var(--surface-paper-bright)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '1.75rem',
          }}
        >
          <span style={{ width: '6px', height: '6px', background: 'var(--accent-vermilion)' }} />
          THE LEARNING VELOCITY THESIS
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 6.2vw, 5.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.035em',
            lineHeight: 1.04,
            maxWidth: '1200px',
            margin: '0 0 2rem',
            color: 'var(--on-surface)',
          }}
        >
          Most GTM teams rely on playbooks from five years ago.{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-vermilion)' }}>
            My edge is the speed at which I deconstruct unfamiliar systems.
          </span>
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            maxWidth: '1200px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
              lineHeight: 1.6,
              color: 'var(--on-surface)',
              margin: 0,
            }}
          >
            I don&apos;t require a multi-month runway to produce leverage. Give me an unfamiliar domain—whether it&apos;s high-ticket higher education conversion, C-suite executive targeting, biometric AI telemetry, or industrial cut-and-sew garment manufacturing. In weeks, I deconstruct its underlying physics, isolate the hidden friction, and engineer a self-reinforcing growth engine.
          </p>

          <div
            style={{
              padding: '1.5rem',
              background: 'var(--surface-paper-bright)',
              border: '1px solid var(--grid-rule)',
              borderLeft: '4px solid var(--on-surface)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-vermilion)', fontWeight: 700 }}>
              // THE CORE COMPETENCY
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--on-surface)' }}>
              Mastery isn&apos;t about memorizing static channel rules; it&apos;s a compression problem. When you understand how to audit raw behavior from first principles, every new market becomes solvable.
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Domain Synthesis Instrument */}
      <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-vermilion)', fontWeight: 700 }}>
              // PROOF OF SYNTHESIS
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '0.25rem 0 0', letterSpacing: '-0.02em' }}>
              Four Unfamiliar Systems. Four Engineered Turnarounds.
            </h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--on-surface-variant)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            SELECT DOMAIN TO EXAMINE THE DECONSTRUCTION
          </div>
        </div>

        {/* Tab Selector Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1px',
            background: 'var(--grid-rule)',
            border: '1px solid var(--grid-rule)',
            marginBottom: '2rem',
          }}
        >
          {SYNTHESIS_DOMAINS.map((item, idx) => {
            const isSelected = activeDomainIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveDomainIdx(idx)}
                style={{
                  padding: '1.25rem 1.25rem',
                  background: isSelected ? 'var(--on-surface)' : 'var(--surface)',
                  color: isSelected ? '#FFFFFF' : 'var(--on-surface)',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', opacity: isSelected ? 0.7 : 0.6 }}>
                    0{idx + 1} // {item.badge}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--accent-vermilion)' : 'var(--on-surface-variant)',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.3 }}>
                  {item.domain}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', opacity: isSelected ? 0.8 : 0.5, letterSpacing: '0.05em' }}>
                  {item.turnaround}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deconstruction Display Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              border: '2px solid var(--on-surface)',
              background: 'var(--surface-paper-bright)',
              boxShadow: '8px 8px 0px rgba(17, 17, 17, 0.08)',
            }}
          >
            {/* Top Specimen Bar */}
            <div
              style={{
                padding: '0.85rem 1.5rem',
                borderBottom: '1px solid var(--grid-rule)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'var(--surface-container-low)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--accent-vermilion)' }}>{active.tag}</span>
                <span style={{ opacity: 0.4 }}>|</span>
                <span>{active.domain}</span>
              </div>
              <div style={{ fontWeight: 700, color: 'var(--on-surface)' }}>
                {active.turnaround}
              </div>
            </div>

            {/* 3-Column Anatomy Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 0,
              }}
            >
              {/* Column 1: The Incumbent Assumption */}
              <div
                style={{
                  padding: '2rem 1.75rem',
                  borderRight: '1px solid var(--grid-rule)',
                  borderBottom: '1px solid var(--grid-rule)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', background: '#9CA3AF' }} />
                  I. THE INCUMBENT ASSUMPTION
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>
                  &ldquo;{active.assumption}&rdquo;
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9CA3AF', letterSpacing: '0.08em' }}>
                  STATUS QUO AT INTAKE
                </div>
              </div>

              {/* Column 2: The First-Principles Audit */}
              <div
                style={{
                  padding: '2rem 1.75rem',
                  borderRight: '1px solid var(--grid-rule)',
                  borderBottom: '1px solid var(--grid-rule)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: 'rgba(200, 40, 30, 0.02)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-vermilion)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--accent-vermilion)' }} />
                  II. THE RAPID AUDIT &amp; REALITY
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--on-surface)' }}>
                  {active.audit}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-vermilion)', letterSpacing: '0.08em', fontWeight: 600 }}>
                  HIDDEN FRICTION IDENTIFIED
                </div>
              </div>

              {/* Column 3: The Engineered Solution & Outcome */}
              <div
                style={{
                  padding: '2rem 1.75rem',
                  borderBottom: '1px solid var(--grid-rule)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: 'var(--surface-paper-bright)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--on-surface)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--on-surface)' }} />
                  III. THE ENGINEERED SYSTEM
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--on-surface)' }}>
                  {active.solution}
                </div>
                <div
                  style={{
                    marginTop: 'auto',
                    padding: '1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--grid-rule)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-vermilion)' }}>
                      {active.metric}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--on-surface-variant)' }}>
                      {active.metricSubtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div
              style={{
                padding: '1rem 1.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                background: 'var(--surface-container-low)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--on-surface-variant)', letterSpacing: '0.08em' }}>
                EVIDENCE VERIFIED THROUGH QUALITATIVE &amp; QUANTITATIVE TELEMETRY
              </div>
              <button
                onClick={() => scrollTo(active.targetSection)}
                style={{
                  background: 'var(--on-surface)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {active.targetLabel}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
