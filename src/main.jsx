import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DualModeProvider } from './context/DualModeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DualModeProvider>
      <App />
    </DualModeProvider>
  </StrictMode>,
)
