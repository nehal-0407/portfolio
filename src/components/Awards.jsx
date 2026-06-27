import Reveal from './Reveal'

const ITEMS = [
  {
    title: 'IEEE Published Author',
    detail: 'First-author paper published in IEEE — OvFusionX-Net',
  },
  {
    title: 'National Hackathon Participant',
    detail: 'KYAU National Hackathon',
  },
  {
    title: 'Intra Department Quiz Champion',
    detail: 'CSE Tech Fest, Khwaja Yunus Ali University',
  },
  {
    title: 'Best Performer — Healthcare AI Workshop',
    detail: 'Next-Gen Healthcare AI: Privacy-Preserving Smart Systems',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        <Reveal>
          <p className="eyebrow">Awards</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Recognition
          </h2>
        </Reveal>

        <ul className="max-w-2xl space-y-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <li className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
                <div>
                  <p className="font-medium text-ink dark:text-ink-dark">{item.title}</p>
                  <p className="text-sm text-slate dark:text-slate-dark mt-0.5">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
