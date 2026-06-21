const PROJECTS = [
  {
    code: 'OvFusionX-Net',
    title:
      'Explainable Deep Learning Model with Attention Mechanism for Early-Stage Ovarian Cancer Classification',
    role: 'First Author',
    status: 'Published',
    doi: '10.1109/QPAIN69676.2026.11546529',
    focus: ['Medical Imaging', 'Explainable AI', 'Deep Learning'],
  },
  {
    code: 'HybridCNN',
    title: 'Attention-Enhanced Explainable Deep Learning for Multi-Class Lung Disease Classification',
    role: 'First Author',
    status: 'Accepted',
    statusNote: 'Upcoming publication',
    doi: null,
    focus: ['Chest X-ray Analysis', 'CNN', 'Explainable AI'],
  },
  {
    code: 'BeanXNet',
    title: 'Deep Hybrid CNN for Bean Leaf Disease Classification with Explainable AI',
    role: 'Second Author',
    status: 'Accepted',
    doi: null,
    focus: ['Agricultural AI', 'Plant Disease Detection', 'CNN'],
  },
]

function StatusPill({ status }) {
  const isPublished = status === 'Published'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-mono uppercase tracking-wide ${
        isPublished
          ? 'border-accent/30 bg-accent/[0.08] text-accent dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light'
          : 'border-line dark:border-line-dark text-slate dark:text-slate-dark'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isPublished ? 'bg-accent dark:bg-accent-light' : 'bg-scan-warm'}`} />
      {status}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="research" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <div className="lg:max-w-[280px]">
          <p className="eyebrow">Research</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Publications
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line dark:divide-line-dark border-t border-b border-line dark:border-line-dark">
          {PROJECTS.map((p, i) => (
            <article
              key={p.code}
              className="group grid grid-cols-1 sm:grid-cols-[3rem_1fr] gap-4 py-8 hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors px-2 -mx-2 rounded-md"
            >
              <span className="font-mono text-sm text-slate dark:text-slate-dark">
                [{String(i + 1).padStart(2, '0')}]
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-ink-dark group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                    {p.code}
                  </h3>
                  <StatusPill status={p.status} />
                </div>

                <p className="text-base leading-relaxed text-ink dark:text-ink-dark max-w-2xl">{p.title}</p>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="font-mono text-xs text-slate dark:text-slate-dark">{p.role}</span>
                  {p.doi ? (
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent dark:text-accent-light hover:underline"
                    >
                      DOI: {p.doi}
                    </a>
                  ) : (
                    p.statusNote && (
                      <span className="font-mono text-xs text-slate dark:text-slate-dark">{p.statusNote}</span>
                    )
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-line dark:border-line-dark px-3 py-1 text-xs text-slate dark:text-slate-dark"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
