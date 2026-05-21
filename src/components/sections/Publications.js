import { profile } from "../../data/profile";
import { MediaSpotlightCard } from "../MediaSpotlightCard";
import { publicAsset } from "../../utils/paths";

export function Publications() {
  return (
    <section
      className="section"
      id="publications"
      aria-labelledby="publications-heading"
    >
      <div className="section__inner">
        <h2 className="section__title" id="publications-heading">
          Publications
        </h2>
        <p className="section__lede">
          Research snapshots that pair systems thinking with applied AI narratives — mirrored from
          your prior portfolio links.
        </p>
        <div className="media-grid">
          {profile.publications.map((pub) => (
            <MediaSpotlightCard
              key={pub.title}
              title={pub.title}
              subtitle={pub.subtitle}
              description={pub.description}
              imageSrc={pub.image ? publicAsset(pub.image) : undefined}
              link={pub.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
