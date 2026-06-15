import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const MaskedText = ({ children, delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.div
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: '0%' }}
        transition={{
          type: 'spring',
          stiffness: 90,
          damping: 18,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const HEADLINES = [
  {
    key: 'intersection',
    lead: 'I sit at the intersection of',
    accent: 'Marketing, Strategy, and Sales.',
    accentColor: 'var(--accent-warm)',
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Respect reduced-motion: don't auto-cycle the headline.
    if (reduce) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reduce]);

  const current = HEADLINES[index];

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>

        <div className="label" style={{ marginBottom: '2rem', color: 'var(--on-surface-variant)' }}>
          <MaskedText delay={0.1}>ROLE // PRODUCT MARKETING MANAGER — GTM SYSTEMS BUILDER</MaskedText>
        </div>

        {/*
          Reserved-height stage with absolutely-positioned, crossfading variants.
          This prevents both the blank-frame flash and the layout reflow that the
          previous mode="wait" vertical-slide swap produced.
        */}
        <h1
          className="display-lg hero-headline"
          style={{ position: 'relative', marginBottom: '2.5rem', color: 'var(--on-surface)' }}
        >
          {/* Invisible spacer reserves the tallest variant's height to lock layout */}
          <span aria-hidden="true" style={{ visibility: 'hidden', display: 'block' }}>
            I sit at the intersection of <br /> Marketing, Strategy, and Sales.
          </span>
          <AnimatePresence>
            <motion.span
              key={current.key}
              initial={reduce ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -24, filter: 'blur(6px)' }}
              transition={{ duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              {current.lead} <br />
              <span style={{ color: current.accentColor }}>{current.accent}</span>
            </motion.span>
          </AnimatePresence>
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '700px',
            color: 'var(--on-surface-variant)',
            fontWeight: 400,
            lineHeight: 1.6,
            marginBottom: '3.5rem',
          }}
        >
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            I'm a Product Marketing Manager who builds. Years in B2C sales taught me what actually moves people to buy. Now I bring that into positioning and conversion copy — and because I can code, I don't stop at the brief. I build the personas, the demos, and the GTM tooling myself.
          </motion.span>
        </p>

        <motion.div
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="btn-primary" onClick={() => {
            const el = document.getElementById('case-studies');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Proof of Work
          </button>
          <button className="btn-outline" onClick={() => window.location.href = 'mailto:punjabivivek1993@gmail.com'}>
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
