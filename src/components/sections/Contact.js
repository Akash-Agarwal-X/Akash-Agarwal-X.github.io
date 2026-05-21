import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";

export function Contact() {
  const telHref = profile.links.phone.replace(/[^\d+]/g, "");

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="section__inner">
        <h2 className="section__title" id="contact-heading">
          Let&apos;s talk
        </h2>
        <p className="section__lede">
          Open to software engineering roles that emphasize distributed systems, cloud
          backends, or platform correctness.
        </p>
        <div className="contact-card">
          <p>
            <strong>{profile.location}</strong> — reach out anytime for resumes, referrals,
            or technical deep dives.
          </p>
          <div className="contact-links">
            <a className="link-chip" href={profile.links.email}>
              <FiMail aria-hidden /> Email
            </a>
            <a className="link-chip" href={`tel:${telHref}`}>
              <FiPhone aria-hidden /> {profile.links.phone}
            </a>
            <a
              className="link-chip"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden /> LinkedIn
            </a>
            <a
              className="link-chip"
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
