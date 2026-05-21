import { profile } from "../../data/profile";

function SkillCard({ title, items }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="pill-row">
        {items.map((item) => (
          <span key={item} className="pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { languages, backend, cloud, data, quality, aiAssist } = profile.skills;
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="section__inner">
        <h2 className="section__title" id="skills-heading">
          Technical skills
        </h2>
        <p className="section__lede">
          Primarily JVM and Python backends, plus the AWS/GCP toolchain for shipping and
          observing production systems end to end.
        </p>
        <div className="skill-grid">
          <SkillCard title="Languages" items={languages} />
          <SkillCard title="Backend & distributed systems" items={backend} />
          <SkillCard title="Cloud & infrastructure" items={cloud} />
          <SkillCard title="Data & observability" items={data} />
          <SkillCard title="Quality & full-stack" items={quality} />
          <SkillCard title="Modern development workflow" items={aiAssist} />
        </div>
      </div>
    </section>
  );
}
