import React, { useState } from 'react';
import { useDualMode } from '../context/DualModeContext';
import { Briefcase, Zap } from 'lucide-react';

const InteractiveCoin = () => {
  const { mode, toggleMode } = useDualMode();
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    toggleMode();
    setTimeout(() => setIsRotating(false), 600);
  };

  return (
    <div className="coin-container" onClick={handleClick} style={{ cursor: 'pointer', perspective: '1000px', width: '120px', height: '120px', margin: '2rem auto' }}>
      <div 
        className={`coin ${mode}`}
        style={{ 
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transformStyle: 'preserve-3d',
          transform: mode === 'marketing' ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side: Sales (Red) */}
        <div 
          className="coin-face sales"
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--primary-container)',
            borderRadius: '50%',
            border: '4px solid var(--secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--secondary)',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 0 30px rgba(178, 34, 34, 0.4)'
          }}
        >
          <Zap size={48} strokeWidth={2.5} />
        </div>

        {/* Back Side: Marketing (Teal) */}
        <div 
          className="coin-face marketing"
          style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--tertiary-container)',
            borderRadius: '50%',
            border: '4px solid var(--secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--on-surface)',
            transform: 'rotateY(180deg)',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 0 30px rgba(38, 102, 88, 0.4)'
          }}
        >
          <Briefcase size={48} strokeWidth={2.5} />
        </div>
      </div>
      <div className="label" style={{ marginTop: '1rem', opacity: 0.6 }}>
        Click to Flip
      </div>
    </div>
  );
};

export default InteractiveCoin;
