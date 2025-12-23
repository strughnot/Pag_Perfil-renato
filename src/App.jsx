import { useState, useEffect } from 'react'
import Header from './components/Header'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Interests from './components/Interests'
import './App.css'

// Un solo componente con selector de tema: light / dark / purple
function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)

    // Quitamos clases anteriores y aplicamos solo la del tema actual
    document.documentElement.classList.remove('dark', 'purple', 'blue')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (theme === 'purple') {
      document.documentElement.classList.add('purple')
    }
    if (theme === 'blue') {
      document.documentElement.classList.add('blue')
    }
  }, [theme])

  const setLight = () => setTheme('light')
  const setDark = () => setTheme('dark')
  const setPurple = () => setTheme('purple')
  const setBlue = () => setTheme('blue')

  return (
    <div className="app">
      <div className="theme-switcher">
        <button
          className={`theme-button ${theme === 'light' ? 'active' : ''}`}
          onClick={setLight}
        >
          ⚪️
        </button>
        <button
          className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
          onClick={setDark}
        >
          ⚫️
        </button>
        <button
          className={`theme-button ${theme === 'purple' ? 'active' : ''}`}
          onClick={setPurple}
        >
          🟣
        </button>
        <button
          className={`theme-button ${theme === 'blue' ? 'active' : ''}`}
          onClick={setBlue}
        >
          🔵
        </button>
      </div>

      <div className="container">
        <Header />
        <WorkExperience />
        <Education />
        <Projects />
        <Skills />
        <Languages />
        <Interests />
        <footer className="footer">
          <p>© {new Date().getFullYear()} . Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  )
}

export default App