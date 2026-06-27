import Reveal from './Reveal'

const PROJECTS = [
  {
    name: 'Online Marketplace',
    role: 'UI/UX Designer & Documentation Lead',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    points: [
      'Designed user-centered UI/UX wireframes and interfaces for a full-stack online marketplace.',
      'Prepared Software Requirements Specification (SRS), Software Design Documentation (SDD), and project documentation following software engineering practices.',
      'Collaborated with the development team throughout the software development lifecycle.',
    ],
    githubHref: 'https://github.com/nehal-0407/online-market-place',
  },
  {
    name: 'KYAU Tuition App',
    role: 'UI/UX Designer',
    stack: [],
    points: [
      'Engineered the UI/UX architecture prioritizing clean typography, negative space, and optimized user workflows to connect university students with targeted retake courses.',
    ],
    githubHref: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal className="lg:max-w-[420px]">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Software & Design
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="h-full flex flex-col rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-dark">{p.name}</h3>
                <p className="font-mono text-xs text-slate dark:text-slate-dark mt-1">{p.role}</p>

                {p.stack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line dark:border-line-dark px-3 py-1 text-xs text-slate dark:text-slate-dark"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-4 space-y-2 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-slate dark:text-slate-dark">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-line dark:border-line-dark pt-4">
                  {p.githubHref ? (
                    <a
                      href={p.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-light transition-colors"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.88-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                      </svg>
                      View Repository
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate/60 dark:text-slate-dark/60">
                      Private Project
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
