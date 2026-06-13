import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Interactive3DCard = ({ children, className = '', isLocked = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (isLocked) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  React.useEffect(() => {
    if (isLocked) {
      x.set(0);
      y.set(0);
    }
  }, [isLocked, x, y]);

  return (
    <div className="perspective-container" style={{ display: 'flex', width: '100%', height: '100%' }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          width: '100%',
        }}
        className={`glass-card ${className}`}
      >
        <div style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Interactive3DCard;
