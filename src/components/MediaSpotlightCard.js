import { FiExternalLink } from "react-icons/fi";

export function MediaSpotlightCard({ title, subtitle, description, imageSrc, imageAlt, link }) {
  return (
    <article className="media-card">
      {imageSrc ? (
        <div className="media-card__thumb">
          <img src={imageSrc} alt={imageAlt || title} loading="lazy" />
        </div>
      ) : null}
      <div className="media-card__body">
        <h3 className="media-card__title">{title}</h3>
        {subtitle ? (
          <p className="media-card__subtitle">
            <span>{subtitle}</span>
          </p>
        ) : null}
        <p className="media-card__desc">{description}</p>
        {link?.href ? (
          <a
            className="btn btn--ghost media-card__link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden /> {link.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}
