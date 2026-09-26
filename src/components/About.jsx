import { education, interests, person, skills } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about-lead reveal">
        <p className="lead">{person.about}</p>
      </div>

      <div className="about-facts reveal">
        <div className="fact">
          <h3 className="sub-title">Education</h3>
          <p className="fact-inst">{education.institution}</p>
          <p>{education.degree}</p>
          <p className="meta">
            {education.years}
            <span className="meta-sep" aria-hidden="true" />
            CGPA {education.cgpa}
          </p>
        </div>
        <div className="fact">
          <h3 className="sub-title">Research interests</h3>
          <ul className="plain-list">
            {interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="skills reveal">
        <h3 className="sub-title">Technical skills</h3>
        <dl className="taxonomy">
          {skills.map((g) => (
            <div key={g.group} className="taxonomy-row">
              <dt>{g.group}</dt>
              <dd>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
