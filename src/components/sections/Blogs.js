import { profile } from "../../data/profile";
import { MediaSpotlightCard } from "../MediaSpotlightCard";
import { publicAsset } from "../../utils/paths";

export function Blogs() {
  return (
    <section className="section" id="blogs" aria-labelledby="blogs-heading">
      <div className="section__inner">
        <h2 className="section__title" id="blogs-heading">
          Writing & blogs
        </h2>
        <p className="section__lede">
          Articles on reliability, QA automation, and practical AI-assisted engineering workflows.
        </p>
        <div className="media-grid">
          {profile.blogs.map((post) => (
            <MediaSpotlightCard
              key={post.title}
              title={post.title}
              subtitle={post.subtitle}
              description={post.description}
              imageSrc={post.image ? publicAsset(post.image) : undefined}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
