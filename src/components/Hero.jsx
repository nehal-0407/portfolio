import { education, links, person, publications } from '../data/content'
import ExternalLink from './ExternalLink'
import HeroVisual from './HeroVisual'

// Counts are derived from the publication list, so they cannot drift from it.
function paperTally() {
  const count = (s) => publications.filter((p) => p.status === s).length
  return [
    { n: count('published'), label: 'published' },
    { n: count('accepted'), label: 'accepted' },
  ].filter((t) => t.n > 0)
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <img
            className="hero-portrait load-1"
            src="/profile.webp"
            alt="Portrait of Neyamul Islam"
            width="720"
            height="956"
            fetchpriority="high"
            decoding="async"
          />
          <p className="eyebrow load-1">{person.eyebrow}</p>
          <h1 id="hero-title" className="hero-title load-2">
            {person.name}
          </h1>
          <p className="hero-role load-3">{person.role}</p>
          <p className="hero-affil load-3">
            <span className="hero-affil-inst">{education.institution}</span>
            <span className="meta-sep" aria-hidden="true" />
            <span>{education.degree}</span>
          </p>
          <p className="hero-intro load-3">{person.intro}</p>

          <div className="hero-actions load-4">
            <ExternalLink href={links.cv} className="btn btn-primary">
              View CV
            </ExternalLink>
            <a href={links.cv} download={links.cvDownloadName} className="btn btn-secondary">
              Download CV
            </a>
          </div>

          <ul className="hero-links load-4" aria-label="Profiles">
            <li>
              <ExternalLink href={links.scholar}>Google Scholar</ExternalLink>
            </li>
            <li>
              <ExternalLink href={links.github}>GitHub</ExternalLink>
            </li>
            <li>
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
            </li>
          </ul>
        </div>

        <div className="hero-visual load-3">
          <HeroVisual />
        </div>
      </div>

      <div className="container">
        <dl className="signals load-4">
          <div>
            <dt>Research areas</dt>
            <dd>
              <ul>
                {person.signals.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Papers</dt>
            <dd>
              <ul>
                {paperTally().map((t) => (
                  <li key={t.label}>
                    <span className="tally-n">{t.n}</span> {t.label}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
