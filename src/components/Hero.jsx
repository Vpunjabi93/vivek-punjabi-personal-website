import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MaskedText = ({ children, delay = 0 }) => {
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ 
          type: "spring", 
          stiffness: 70, 
          damping: 20, 
          delay: delay 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [isMarketing, setIsMarketing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMarketing(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: '0 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        <div className="label" style={{ marginBottom: '2rem', color: 'var(--on-surface-variant)' }}>
          <MaskedText delay={0.1}>ROLE // PRODUCT MARKETING MANAGER — GTM SYSTEMS BUILDER</MaskedText>
        </div>
        
        <h1 className="display-lg" style={{ marginBottom: '2rem', color: 'var(--on-surface)', minHeight: '120px' }}>
          <div style={{ overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              {isMarketing ? (
                <motion.div
                  key="marketing"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  Position SaaS narratives with <br />
                  <span style={{ color: 'var(--accent-warm)' }}>custom code.</span>
                </motion.div>
              ) : (
                <motion.div
                  key="sales"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  Arm your sales teams with <br />
                  <span style={{ color: 'var(--accent-cool)' }}>custom AI.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </h1>
        
        <p 
          style={{ 
            fontSize: '1.25rem', 
            maxWidth: '700px', 
            color: 'var(--on-surface-variant)',
            fontWeight: 400,
            lineHeight: 1.6,
            marginBottom: '4rem'
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            I'm a Product Marketing Manager who builds. Years in B2C sales taught me what actually moves people to buy. Now I bring that into positioning and conversion copy — and because I can code, I don't stop at the brief. I build the personas, the demos, and the GTM tooling myself.
          </motion.span>
        </p>
        
        <motion.div 
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <button className="btn-primary" onClick={() => {
            const el = document.getElementById('intelligence');
            if(el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Run AI GTM Pipeline
          </button>
          <button className="btn-outline" onClick={() => window.location.href='mailto:punjabivivek1993@gmail.com'}>
            Get Free GTM Dissection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
