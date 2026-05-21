import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";

export function Hero() {
  const resumePath = `${process.env.PUBLIC_URL}/${profile.resume.fileName}`.replace(
    /([^:]\/)\/+/g,
    "$1"
  );

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden />
          Sharedmemory.ai · Backend · Reliable systems
        </p>
        <h1 className="hero__title" id="hero-title">
          {profile.name}
        </h1>
        <p className="hero__headline">{profile.headline}</p>

        {profile.startup ? (
          <div
            className="hero__startup-card"
            role="region"
            aria-label={`Current venture: ${profile.startup.name}`}
          >
            <div className="hero__startup-top">
              <span className="hero__startup-pill">Founded {profile.startup.foundedMonth}</span>
              <span className="hero__startup-meta">{profile.startup.role}</span>
              {profile.startup.website ? (
                <a
                  className="hero__startup-site"
                  href={profile.startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site →
                </a>
              ) : null}
            </div>
            <p className="hero__startup-name">{profile.startup.name}</p>
            <p className="hero__startup-tagline">{profile.startup.tagline}</p>
          </div>
        ) : null}

        {profile.summary?.trim() ? (
          <p className="hero__summary">{profile.summary.trim()}</p>
        ) : null}

        <div className="hero__actions">
          <a className="btn btn--primary" href={resumePath} download={profile.resume.fileName}>
            <FiDownload aria-hidden /> {profile.resume.label}
          </a>
          <a className="btn btn--ghost" href={profile.links.email}>
            <FiMail aria-hidden /> Email me
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-hidden /> LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-hidden /> GitHub
          </a>
        </div>

        <ul className="hero__highlights" aria-label="Selected impact">
          {profile.highlights.map((item) => (
            <li key={item} className="hero__highlight">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
