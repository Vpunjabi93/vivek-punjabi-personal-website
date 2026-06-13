import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  // High-performance motion values for cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for smooth follow effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (target.closest('.ai-console')) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (
        !target.closest('.ai-console') &&
        (target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('glass-card') ||
        target.closest('.glass-card'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'var(--on-surface)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      animate={{
        scale: isHidden ? 0 : (isHovering ? 2.5 : 1),
        opacity: isHidden ? 0 : (isHovering ? 0.8 : 1),
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div 
        style={{
          width: '4px',
          height: '4px',
          backgroundColor: 'var(--surface)',
          borderRadius: '50%',
        }}
        animate={{
          opacity: isHovering ? 0 : 1
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
