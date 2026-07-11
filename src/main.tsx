import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import { ThemeProvider } from './theme/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider><LanguageProvider><App /></LanguageProvider></ThemeProvider>
    </HashRouter>
  </StrictMode>,
)
