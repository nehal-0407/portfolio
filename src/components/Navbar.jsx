import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'conferences', label: 'Conferences' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/75 dark:bg-bg-dark/70 backdrop-blur-xl border-b border-line dark:border-line-dark shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-pad mx-auto flex max-w-6xl items-center justify-between py-4">
        <button
          onClick={() => handleNav('top')}
          className="font-mono text-sm tracking-tight text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-light transition-colors shrink-0"
        >
          N.ISLAM <span className="text-slate dark:text-slate-dark">/ ai-ml</span>
        </button>

        <div className="hidden md:flex items-center gap-5 lg:gap-7 overflow-x-auto">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="whitespace-nowrap text-sm font-medium text-slate dark:text-slate-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="h-9 w-9 grid place-items-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-accent dark:hover:border-accent-light transition-colors"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
              </svg>
            )}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line dark:border-line-dark bg-bg/95 dark:bg-bg-dark/95 backdrop-blur-xl">
          <div className="section-pad mx-auto flex max-w-6xl flex-col py-3">
            {[...LINKS, { id: 'awards', label: 'Awards' }, { id: 'leadership', label: 'Leadership' }].map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="py-2.5 text-left text-sm font-medium text-slate dark:text-slate-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
