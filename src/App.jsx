import { useEffect, useState } from 'react'
import ScanProgress from './components/ScanProgress'
import WhatsAppButton from './components/WhatsAppButton'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = window.localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen">
      <ScanProgress />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
