import Reveal from './Reveal'

const CONFERENCES = [
  {
    name: '2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking',
    short: 'IEEE QPAIN 2026',
    host: 'Chittagong University of Engineering & Technology (CUET)',
    role: 'Presenter',
  },
  {
    name: 'International Conference on Electrical, Computer and Communication Technologies',
    short: 'ECCT 2026',
    host: 'Dhaka International University (DIU)',
    role: 'Presented Paper',
  },
  {
    name: '2nd International Conference on Frontiers in Science: Innovation & Technology for Greener Industry',
    short: 'ICFS:ITGI',
    host: 'Bangladesh University of Engineering and Technology (BUET)',
    role: 'Presenter',
  },
  {
    name: 'International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure 2026',
    short: 'PECTCII 2026',
    host: 'Pabna University of Science & Technology (PUST)',
    role: 'Presenter',
  },
]

export default function Conferences() {
  return (
    <section id="conferences" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal className="lg:max-w-[280px]">
          <p className="eyebrow">Conferences</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Presentations
          </h2>
        </Reveal>

        <div className="mt-12 relative pl-8 sm:pl-10">
          <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-line dark:bg-line-dark" />

          <ul className="space-y-10">
            {CONFERENCES.map((c, i) => (
              <Reveal key={c.short} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-1.5 h-2.5 w-2.5 rounded-full bg-accent dark:bg-accent-light ring-4 ring-bg dark:ring-bg-dark" />
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                      {c.short}
                    </span>
                    <span className="rounded-full border border-line dark:border-line-dark px-2.5 py-0.5 text-[0.7rem] text-slate dark:text-slate-dark">
                      {c.role}
                    </span>
                  </div>
                  <p className="text-base font-medium text-ink dark:text-ink-dark max-w-2xl leading-snug">
                    {c.name}
                  </p>
                  <p className="text-sm text-slate dark:text-slate-dark mt-1">{c.host}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
