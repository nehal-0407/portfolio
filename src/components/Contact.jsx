import Reveal from './Reveal'

const CONTACTS = [
  {
    label: 'Email',
    value: 'neyamul.nehal@gmail.com',
    href: 'mailto:neyamul.nehal@gmail.com',
  },
  {
    label: 'Phone',
    value: '+880 1738-062029',
    href: 'tel:+8801738062029',
  },
  {
    label: 'GitHub',
    value: 'github.com/nehal-0407',
    href: 'https://github.com/nehal-0407',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/neyamul-islam-45b577404',
    href: 'https://www.linkedin.com/in/neyamul-islam-45b577404',
  },
  {
    label: 'Portfolio',
    value: 'neyamul-islam.vercel.app',
    href: 'https://neyamul-islam.vercel.app',
  },
  {
    label: 'Download CV',
    value: 'Neyamul-Islam-CV.pdf',
    href: '/resume.pdf',
    download: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink dark:text-ink-dark max-w-xl">
            Open to research collaborations and AI/ML opportunities.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-line-dark border border-line dark:border-line-dark rounded-lg overflow-hidden">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                download={c.download ? 'Neyamul-Islam-CV.pdf' : undefined}
                target={!c.download && c.href.startsWith('http') ? '_blank' : undefined}
                rel={!c.download && c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-surface dark:bg-surface-dark p-6 hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate dark:text-slate-dark mb-2">
                  {c.label}
                </p>
                <p className="text-base font-medium text-ink dark:text-ink-dark group-hover:text-accent dark:group-hover:text-accent-light transition-colors break-all">
                  {c.value}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
