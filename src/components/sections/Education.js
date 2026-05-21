import { profile } from "../../data/profile";

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <div className="section__inner">
        <h2 className="section__title" id="education-heading">
          Education
        </h2>
        <p className="section__lede">
          Master&apos;s-level software engineering at ASU alongside separate Pune M.S. and B.S.
          degrees in Computer Science so each credential stays visible.
        </p>
        <div className="edu-list">
          {profile.education.map((edu) => (
            <article key={`${edu.school}-${edu.degree}`} className="edu-card">
              <h3>{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="detail">
                {edu.detail} · {edu.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
