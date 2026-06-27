import Reveal from './Reveal'

const GROUPS = [
  {
    label: 'Programming',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  {
    label: 'AI & Machine Learning',
    items: [
      'PyTorch',
      'Computer Vision',
      'Deep Learning',
      'CNN',
      'Vision Transformer',
      'Federated Learning',
      'Explainable AI',
      'Grad-CAM',
    ],
  },
  {
    label: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'MySQL'],
  },
  {
    label: 'Web Development',
    items: ['React', 'Node', 'Express', 'MongoDB', 'HTML', 'CSS'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal className="lg:max-w-[280px]">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Stack
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
              <div className="h-full rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent dark:text-accent-light mb-4">
                  {group.label}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-ink dark:text-ink-dark border-b border-dashed border-line dark:border-line-dark pb-2 last:border-none last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
