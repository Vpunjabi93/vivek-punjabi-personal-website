import React, { createContext, useContext, useState, useEffect } from 'react';

const DualModeContext = createContext();

export const DualModeProvider = ({ children }) => {
  const [mode, setMode] = useState('sales'); // 'sales' or 'marketing'

  const toggleMode = () => {
    setMode((prev) => (prev === 'sales' ? 'marketing' : 'sales'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <DualModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </DualModeContext.Provider>
  );
};

export const useDualMode = () => {
  const context = useContext(DualModeContext);
  if (!context) {
    throw new Error('useDualMode must be used within a DualModeProvider');
  }
  return context;
};
