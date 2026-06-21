import { useState } from 'react'

function ProfilePhoto() {
  const [errored, setErrored] = useState(false)

  return (
    <div className="animate-fadeUp [animation-delay:120ms] shrink-0">
      <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-2xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark overflow-hidden shadow-sm">
        {!errored ? (
          <img
            src="/profile.jpg"
            alt="Neyamul Islam"
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="h-full w-full grid place-items-center bg-surface-alt dark:bg-surface-dark-alt">
            <span className="font-display text-4xl font-semibold text-slate dark:text-slate-dark">
              NI
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="section-pad pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10">
        <div className="flex-1 min-w-0">
          <p className="eyebrow mb-6 animate-fadeUp">Researcher Profile — AI / ML, Medical Imaging</p>

          <h1 className="font-display font-semibold text-ink dark:text-ink-dark text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl tracking-tight animate-fadeUp [animation-delay:80ms]">
            Neyamul Islam
          </h1>

          <p className="mt-4 font-display text-xl sm:text-2xl text-accent dark:text-accent-light animate-fadeUp [animation-delay:140ms]">
            AI / ML Researcher
          </p>

          <p className="mt-6 max-w-2xl text-lg text-slate dark:text-slate-dark leading-relaxed animate-fadeUp [animation-delay:200ms]">
            Harnessing machine learning and deep learning to advance medical imaging and diagnostics.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fadeUp [animation-delay:260ms]">
            <a
              href="https://github.com/nehal-0407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink dark:bg-ink-dark px-5 py-2.5 text-sm font-medium text-bg dark:text-bg-dark hover:bg-accent dark:hover:bg-accent-light transition-colors"
            >
              View GitHub
            </a>
            <a
              href="mailto:neyamul.nehal@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-line dark:border-line-dark px-5 py-2.5 text-sm font-medium text-ink dark:text-ink-dark hover:border-accent dark:hover:border-accent-light hover:text-accent dark:hover:text-accent-light transition-colors"
            >
              Contact Email
            </a>
            <a
              href="/resume.pdf"
              download="Neyamul-Islam-CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate dark:text-slate-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" />
              </svg>
            </a>
          </div>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  )
}
