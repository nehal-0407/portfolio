const GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'Java', 'C', 'C++'],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'Keras', 'TensorFlow'],
  },
  {
    label: 'Libraries',
    items: ['OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    label: 'Tools',
    items: ['Kaggle', 'Google Colab', 'JupyterLab', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <div className="lg:max-w-[280px]">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Stack
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-line-dark border border-line dark:border-line-dark rounded-lg overflow-hidden">
          {GROUPS.map((group) => (
            <div key={group.label} className="bg-surface dark:bg-surface-dark p-6">
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
          ))}
        </div>
      </div>
    </section>
  )
}
