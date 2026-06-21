const LEADERSHIP = [
  {
    role: 'Media and Publicity Secretary',
    org: 'KYAU Computer Club',
  },
  {
    role: 'Organizing Secretary',
    org: 'KYAU Computer Club',
  },
]

const CERTS = [
  {
    name: 'Data Science Fundamentals with Python and SQL Specialization',
    issuer: 'Coursera',
  },
  {
    name: 'Data Science and Machine Learning Zero to Mastery',
    issuer: 'Skill Jobs BD',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark mb-8">
            Roles
          </h2>
          <ul className="space-y-4">
            {LEADERSHIP.map((item) => (
              <li key={item.role} className="border-l-2 border-accent dark:border-accent-light pl-4">
                <p className="font-medium text-ink dark:text-ink-dark">{item.role}</p>
                <p className="text-sm text-slate dark:text-slate-dark mt-0.5">{item.org}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark mb-8">
            Coursework
          </h2>
          <ul className="space-y-4">
            {CERTS.map((c) => (
              <li key={c.name} className="border-l-2 border-line dark:border-line-dark pl-4">
                <p className="font-medium text-ink dark:text-ink-dark">{c.name}</p>
                <p className="text-sm text-slate dark:text-slate-dark mt-0.5">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
