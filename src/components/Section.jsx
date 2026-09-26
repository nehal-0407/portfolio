// Shared section layout: a heading rail on the left (sticky on wide screens) and the
// section body on the right. On small screens the rail stacks above the body.
export default function Section({ id, title, intro, children }) {
  const headingId = `${id}-title`
  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container section-grid">
        <header className="section-rail reveal">
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
