import { links, person } from '../data/content'
import ExternalLink from './ExternalLink'
import { whatsappHref } from './FloatingContact'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{person.name}</p>
          <p className="meta">{person.role}</p>
        </div>
        <ul className="footer-links" aria-label="Elsewhere">
          <li>
            <ExternalLink href={links.github}>GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={links.scholar}>Google Scholar</ExternalLink>
          </li>
          <li>
            <a href={`mailto:${links.email}`}>Email</a>
          </li>
          <li>
            <ExternalLink href={whatsappHref}>WhatsApp</ExternalLink>
          </li>
        </ul>
        <p className="meta footer-copy">© {new Date().getFullYear()} {person.name}</p>
      </div>
    </footer>
  )
}
