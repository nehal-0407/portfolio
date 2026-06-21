import { useEffect, useState } from 'react'

// Signature element: a thin top-of-page indicator that fills as the visitor
// reads down the page, echoing the left-to-right sweep of a diagnostic scan
// and the cool-to-warm gradient of a Grad-CAM attention map.
export default function ScanProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-line dark:bg-line-dark z-[60]" aria-hidden="true">
      <div
        className="h-full bg-scan-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
