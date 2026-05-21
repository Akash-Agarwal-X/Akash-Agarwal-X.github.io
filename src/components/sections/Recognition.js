import { FiAward, FiExternalLink, FiGithub } from "react-icons/fi";
import { profile } from "../../data/profile";

export function Recognition() {
  const { recognition } = profile;

  return (
    <section className="section" id="recognition" aria-labelledby="recognition-heading">
      <div className="section__inner">
        <h2 className="section__title" id="recognition-heading">
          Honors, scores & open source
        </h2>
        <p className="section__lede">
          Competitions and employer recognition sit next to standout academic outcomes. Peer-reviewed
          papers stay in Publications above; live hackathon demos are linked below and in Featured
          projects.
        </p>

        <h3 className="subsection-title">Academic performance</h3>
        <div className="score-grid">
          {recognition.academicScores.map((row) => (
            <article key={row.label} className="score-card">
              <p className="score-card__value">{row.value}</p>
              <p className="score-card__label">{row.label}</p>
              <p className="score-card__meta">
                {row.issuer} · {row.note}
              </p>
            </article>
          ))}
        </div>

        <h3 className="subsection-title">Awards & competitions</h3>
        <ul className="honor-list">
          {recognition.awards.map((item) => (
            <li key={item.title} className="honor-list__item">
              <FiAward aria-hidden className="honor-list__icon" />
              <div>
                <p className="honor-list__title">
                  <strong>{item.title}</strong>
                  <span className="honor-list__year">{item.year}</span>
                </p>
                {item.issuer ? (
                  <p className="honor-list__issuer">{item.issuer}</p>
                ) : null}
                <p className="honor-list__desc">{item.description}</p>
                {item.link?.href ? (
                  <a
                    className="link-chip honor-list__link"
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink aria-hidden /> {item.link.label}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <h3 className="subsection-title">GitHub collaborations</h3>
        <ul className="oss-list">
          {recognition.openSource.map((repo) => (
            <li key={repo.href} className="oss-list__item">
              <FiGithub aria-hidden />
              <div>
                <a href={repo.href} target="_blank" rel="noopener noreferrer">
                  {repo.title}
                </a>
                <p>{repo.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
