import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import './styles/globals.css'

// Initialize theme from localStorage or system preference
const initializeTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    document.documentElement.classList.add(stored)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.add('dark') // Default to dark
  }
}

initializeTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
