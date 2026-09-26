import { useEffect } from 'react'

// Adds .is-visible to every .reveal element once it enters the viewport.
// Elements are only hidden when <html> has .can-reveal, which is set here, so the
// page stays readable if this code never runs. Reduced-motion users get no transition
// (handled in CSS).
export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (!('IntersectionObserver' in window)) return
    root.classList.add('can-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
