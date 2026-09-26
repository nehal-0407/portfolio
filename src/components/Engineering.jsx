import { featuredProjects, otherProjects } from '../data/content'
import ExternalLink from './ExternalLink'
import Section from './Section'

function Tools({ tools }) {
  if (!tools.length) return null
  return (
    <ul className="tools" aria-label="Tools">
      {tools.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Featured({ p }) {
  return (
    <article className="project reveal">
      <div className="project-head">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-sub">{p.subtitle}</p>
      </div>
      <p className="project-text">{p.text}</p>
      <Tools tools={p.tools} />

      {p.previewPdf === null && (
        <div className="preview-slot" role="note">
          <p>Dashboard preview PDF not added yet.</p>
        </div>
      )}

      <div className="project-actions">
        {p.demo && (
          <ExternalLink href={p.demo} className="btn btn-primary btn-sm">
            Live demo
          </ExternalLink>
        )}
        {p.previewPdf && (
          <ExternalLink href={p.previewPdf} className="btn btn-primary btn-sm">
            Dashboard preview
          </ExternalLink>
        )}
        <ExternalLink href={p.repo} className="btn btn-secondary btn-sm">
          GitHub
        </ExternalLink>
      </div>
    </article>
  )
}

export default function Engineering() {
  return (
    <Section
      id="engineering"
      title="Engineering"
      intro="Alongside model research, I build working software: analytics dashboards from cleaned data, and interface design and documentation for team projects."
    >
      <div className="projects">
        {featuredProjects.map((p) => (
          <Featured key={p.title} p={p} />
        ))}
      </div>

      <div className="subsection" aria-labelledby="other-title">
        <h3 id="other-title" className="sub-heading reveal">
          Design and documentation
        </h3>
        <ul className="other-list">
          {otherProjects.map((p) => (
            <li key={p.title} className="other reveal">
              <div className="other-head">
                <h4 className="other-title">{p.title}</h4>
                <p className="meta">{p.role}</p>
              </div>
              <div>
                <p>{p.text}</p>
                <Tools tools={p.tools} />
                {p.repo && (
                  <p className="other-link">
                    <ExternalLink href={p.repo}>Repository on GitHub</ExternalLink>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
