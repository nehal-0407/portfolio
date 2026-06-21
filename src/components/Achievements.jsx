const ITEMS = [
  {
    title: 'Conference Presenter',
    detail: 'Presented research at 3 international conferences',
  },
  {
    title: 'Champion — Intra-Department Quiz Competition',
    detail: 'CSE Tech Fest, Khwaja Yunus Ali University',
  },
  {
    title: 'Participant — KYAU National Hackathon',
    detail: 'Khwaja Yunus Ali University',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        <div>
          <p className="eyebrow">Achievements</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Recognition
          </h2>
        </div>

        <ul className="max-w-2xl space-y-5">
          {ITEMS.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <div>
                <p className="font-medium text-ink dark:text-ink-dark">{item.title}</p>
                <p className="text-sm text-slate dark:text-slate-dark mt-0.5">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
