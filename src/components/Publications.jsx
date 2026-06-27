import Reveal from './Reveal'

const PUBLICATIONS = [
  {
    code: 'OvFusionX-Net',
    title:
      'Explainable Hybrid Deep Learning Model with Attention Mechanism for Early-Stage Ovarian Cancer Classification',
    role: 'First Author',
    status: 'IEEE Published',
    published: true,
    conference: 'IEEE QPAIN 2026',
    highlight: '98.48% classification accuracy',
    paperHref: 'https://doi.org/10.1109/QPAIN69676.2026.11546529',
    githubHref: 'https://github.com/nehal-0407',
  },
  {
    code: 'HybridCNN',
    title:
      'Attention-Enhanced Explainable Deep Learning Approach for Multi-Class Lung Disease Classification from Chest X-Ray Images',
    role: 'First Author',
    status: 'Accepted',
    published: false,
    conference: null,
    highlight: null,
    paperHref: null,
    githubHref: 'https://github.com/nehal-0407',
  },
  {
    code: 'BeanXNet',
    title: 'A Deep Hybrid CNN Approach for Bean Leaf Disease Classification with Explainable AI',
    role: 'Second Author',
    status: 'Accepted',
    published: false,
    conference: null,
    highlight: null,
    paperHref: null,
    githubHref: 'https://github.com/nehal-0407',
  },
]

function StatusBadge({ status, published }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-mono uppercase tracking-wide ${
        published
          ? 'border-accent/30 bg-accent/[0.08] text-accent dark:border-accent-light/30 dark:bg-accent-light/10 dark:text-accent-light'
          : 'border-line dark:border-line-dark text-slate dark:text-slate-dark'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${published ? 'bg-accent dark:bg-accent-light' : 'bg-scan-warm'}`} />
      {status}
    </span>
  )
}

export default function Publications() {
  return (
    <section id="publications" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal className="lg:max-w-[420px]">
          <p className="eyebrow">Publications</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Peer-Reviewed Papers
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PUBLICATIONS.map((p, i) => (
            <Reveal key={p.code} delay={i * 90}>
              <article className="h-full flex flex-col rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-dark">
                    {p.code}
                  </h3>
                  <StatusBadge status={p.status} published={p.published} />
                </div>

                <p className="text-sm leading-relaxed text-ink dark:text-ink-dark flex-1">{p.title}</p>

                {p.highlight && (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent dark:text-accent-light">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 17l6-6 4 4 8-8" />
                    </svg>
                    {p.highlight}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate dark:text-slate-dark">
                  <span>{p.role}</span>
                  {p.conference && (
                    <>
                      <span className="text-line dark:text-line-dark">/</span>
                      <span>{p.conference}</span>
                    </>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-5 border-t border-line dark:border-line-dark pt-4">
                  {p.paperHref ? (
                    <a
                      href={p.paperHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent dark:text-accent-light hover:underline"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />
                      </svg>
                      View Paper
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate/60 dark:text-slate-dark/60 cursor-default">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />
                      </svg>
                      Paper Pending
                    </span>
                  )}
                  <a
                    href={p.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.88-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
