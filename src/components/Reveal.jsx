import React from 'react';
import { motion } from 'framer-motion';

/**
 * Lightweight scroll-reveal wrapper.
 * Fades + lifts its children into view once, with a gentle editorial easing.
 * Honors prefers-reduced-motion by collapsing the offset.
 */
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Reveal = ({ children, delay = 0, y = 28, className = '', style }) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
