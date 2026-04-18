import React from 'react';
import { useDualMode } from '../context/DualModeContext';

const Background = () => {
  const { mode } = useDualMode();

  return (
    <div className="fixed inset-0 -z-10 bg-surface overflow-hidden">
      {/* Decorative gradient blobs */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-20 transition-all duration-1000"
        style={{ 
          backgroundColor: mode === 'sales' ? 'var(--primary-container)' : 'var(--tertiary-container)',
          transform: mode === 'sales' ? 'translate(-10%, -10%)' : 'translate(10%, 10%)'
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-10 transition-all duration-1000"
        style={{ 
          backgroundColor: mode === 'sales' ? 'var(--tertiary)' : 'var(--primary)',
          transform: mode === 'sales' ? 'translate(0%, 0%)' : 'translate(-20%, -20%)'
        }}
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};

export default Background;
