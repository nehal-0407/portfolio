import { achievements, courses, specialization } from '../data/content'
import ExternalLink from './ExternalLink'
import Section from './Section'

export default function Credentials() {
  return (
    <Section id="credentials" title="Credentials">
      <article className="spec reveal">
        <div className="spec-head">
          <h3 className="spec-title">{specialization.title}</h3>
          <p className="meta">{specialization.provider}, specialization of three courses</p>
        </div>
        <p>{specialization.text}</p>
        <ol className="spec-courses">
          {specialization.courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
        <p>
          <ExternalLink href={specialization.verify} className="text-link">
            Verify credential
          </ExternalLink>
        </p>
      </article>

      <div className="cred-cols">
        <div className="reveal">
          <h3 className="sub-heading">Courses</h3>
          <ul className="cred-list">
            {courses.map((c) => (
              <li key={c.title}>
                <p className="cred-main">{c.title}</p>
                <p className="meta">{c.provider}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <h3 className="sub-heading">Achievements</h3>
          <ul className="cred-list">
            {achievements.map((a) => (
              <li key={a}>
                <p className="cred-main">{a}</p>
              </li>
            ))}
          </ul>
          <p className="meta cred-note">
            Full conference details are listed under <a href="#conf-title">Research</a>.
          </p>
        </div>
      </div>
    </Section>
  )
}
