import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Engineering from './components/Engineering'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Engineering />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
