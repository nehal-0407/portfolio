import { useId, useState } from 'react'
import ExternalLink from './ExternalLink'

function StatusMark({ status }) {
  // Shape differs per status so it is not conveyed by colour alone; the text label is always shown too.
  const shapes = {
    published: <rect x="1" y="1" width="8" height="8" className="mark-fill" />,
    accepted: (
      <>
        <rect x="1.5" y="1.5" width="7" height="7" className="mark-line" />
        <path d="M1.5 8.5L8.5 1.5V8.5Z" className="mark-fill" />
      </>
    ),
  }
  return (
    <svg className={`status-mark is-${status}`} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      {shapes[status]}
    </svg>
  )
}

export default function Publication({ pub }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const expandable = pub.details.length > 0 || pub.doi

  return (
    <li id={`pub-${pub.id}`} className={`pub reveal${open ? ' is-open' : ''}`}>
      <span className="pub-num" aria-hidden="true">
        [{pub.id}]
      </span>
      <div className="pub-body">
        <h4 className="pub-title">{pub.title}</h4>
        <p className="pub-meta">
          <span className={`status is-${pub.status}`}>
            <StatusMark status={pub.status} />
            {pub.statusLabel}
          </span>
          <span className="meta-sep" aria-hidden="true" />
          <span>{pub.authorPosition}</span>
        </p>
        {pub.venue && <p className="pub-venue">{pub.venue}</p>}
        {pub.summary && <p className="pub-summary">{pub.summary}</p>}

        {expandable && (
          <>
            <button
              type="button"
              className="text-btn pub-toggle"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? 'Hide details' : 'Show details'}
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
            <div id={panelId} className="pub-panel" hidden={!open}>
              {pub.details.length > 0 && (
                <ul className="detail-list">
                  {pub.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
              {pub.doi && (
                <p className="pub-links">
                  <ExternalLink href={pub.doi}>Read the paper (DOI)</ExternalLink>
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </li>
  )
}
