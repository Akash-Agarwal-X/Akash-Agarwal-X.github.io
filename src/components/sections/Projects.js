import { FiExternalLink, FiGithub } from "react-icons/fi";
import { profile } from "../../data/profile";

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="section__inner">
        <h2 className="section__title" id="projects-heading">
          Featured projects
        </h2>
        <p className="section__lede">
          Shipments you can click through — RAG infrastructure, agent-memory tooling, and a
          team-built orchestrator with a public codebase.
        </p>
        <div className="project-grid">
          {profile.projects.map((p) => (
            <article key={p.name} className="project-card">
              {p.badge ? <p className="project-card__badge">{p.badge}</p> : null}
              <h3>{p.name}</h3>
              <time dateTime={String(p.period)}>{p.period}</time>
              <p>{p.description}</p>
              <div className="pill-row" aria-label="Technologies">
                {p.tech.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
              {p.links?.length ? (
                <div className="project-card__links">
                  {p.links.map((lnk) => {
                    const Icon =
                      lnk.label.toLowerCase().includes("github") ||
                      (lnk.href && lnk.href.includes("github.com"))
                        ? FiGithub
                        : FiExternalLink;
                    return (
                      <a
                        key={lnk.href}
                        className="link-chip"
                        href={lnk.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon aria-hidden /> {lnk.label}
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
