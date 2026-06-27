import Reveal from './Reveal'

const RESEARCH_AREAS = [
  'Deep Learning',
  'Explainable AI (XAI)',
  'Computer Vision',
  'Medical Image Analysis',
  'Federated Learning',
]

export default function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Background
          </h2>
        </Reveal>

        <Reveal delay={80} className="max-w-2xl">
          <p className="text-lg leading-relaxed text-slate dark:text-slate-dark">
            Final-year Computer Science and Engineering student with research experience in Deep
            Learning, Explainable AI (XAI), Medical Image Analysis, and Computer Vision. First-author
            IEEE published researcher focused on developing trustworthy AI systems for healthcare
            applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {RESEARCH_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line dark:border-line-dark px-3 py-1 text-xs font-mono text-slate dark:text-slate-dark hover:border-accent dark:hover:border-accent-light hover:text-accent dark:hover:text-accent-light transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
