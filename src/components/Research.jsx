import { conferences, links, publications, researchThreads } from '../data/content'
import ExternalLink from './ExternalLink'
import Publication from './Publication'
import Section from './Section'

export default function Research() {
  return (
    <Section
      id="research"
      title="Research"
      intro="Deep learning for medical images, with attention to why a model makes its prediction and how to train it when data cannot leave the institution that holds it."
    >
      <div className="scholar reveal">
        <p>Indexed publications are listed on my Google Scholar profile.</p>
        <ExternalLink href={links.scholar} className="btn btn-secondary">
          View Google Scholar
        </ExternalLink>
      </div>

      <div className="subsection" aria-labelledby="pubs-title">
        <h3 id="pubs-title" className="sub-heading reveal">
          Publications
        </h3>
        <ol className="pub-list">
          {publications.map((p) => (
            <Publication key={p.id} pub={p} />
          ))}
        </ol>
      </div>

      <div className="subsection" aria-labelledby="work-title">
        <h3 id="work-title" className="sub-heading reveal">
          Research work
        </h3>
        <div>
          {researchThreads.map((t) => (
            <article key={t.title} className="thread reveal">
              <h4 className="thread-title">{t.title}</h4>
              <p>{t.text}</p>
              <p className="meta thread-methods">{t.methods.join(', ')}</p>
              <p className="thread-refs">
                <span className="sr-only">Related publications: </span>
                {t.papers.map((n) => (
                  <a key={n} href={`#pub-${n}`} aria-label={`Publication ${n}`}>
                    [{n}]
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="subsection" aria-labelledby="conf-title">
        <h3 id="conf-title" className="sub-heading reveal">
          Conferences
        </h3>
        <ul className="conf-list">
          {conferences.map((c) => (
            <li key={c.short} className="conf reveal">
              <p className="conf-short">{c.short}</p>
              <div>
                <p className="conf-name">{c.name}</p>
                <p className="meta">
                  {c.host}
                  <span className="meta-sep" aria-hidden="true" />
                  {c.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
