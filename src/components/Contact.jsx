import { links } from '../data/content'
import ExternalLink from './ExternalLink'
import { whatsappHref } from './FloatingContact'

const ROWS = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, external: false },
  { label: 'WhatsApp', value: links.whatsappDisplay, href: whatsappHref, external: true },
  { label: 'LinkedIn', value: 'in/neyamul-islam-45b577404', href: links.linkedin, external: true },
  { label: 'GitHub', value: 'github.com/nehal-0407', href: links.github, external: true },
  { label: 'Google Scholar', value: 'Scholar profile', href: links.scholar, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="contact-title reveal">
          Open to research collaborations and AI/ML research opportunities.
        </h2>
        <dl className="contact-list reveal">
          {ROWS.map((r) => (
            <div key={r.label} className="contact-row">
              <dt>{r.label}</dt>
              <dd>
                {r.external ? (
                  <ExternalLink href={r.href}>{r.value}</ExternalLink>
                ) : (
                  <a href={r.href}>{r.value}</a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
