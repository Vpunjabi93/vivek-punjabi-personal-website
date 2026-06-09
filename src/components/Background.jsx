import React from 'react';
import { useDualMode } from '../context/DualModeContext';

const Background = () => {
  const { mode } = useDualMode();

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--surface)',
      zIndex: -10,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Decorative gradient blobs */}
      <div 
        style={{ 
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          filter: 'blur(150px)',
          opacity: mode === 'sales' ? 0.12 : 0.06,
          backgroundColor: mode === 'sales' ? 'var(--blood-red)' : 'var(--silver)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: mode === 'sales' ? 'translate(-5%, -5%)' : 'translate(5%, 5%)'
        }}
      />
      <div 
        style={{ 
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          filter: 'blur(130px)',
          opacity: mode === 'sales' ? 0.08 : 0.04,
          backgroundColor: mode === 'sales' ? 'var(--silver)' : 'var(--blood-red)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: mode === 'sales' ? 'translate(0%, 0%)' : 'translate(-10%, -10%)'
        }}
      />
      
      {/* Noise overlay for texture */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />
    </div>
  );
};

export default Background;
