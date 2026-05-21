import { profile } from "../../data/profile";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="section__inner">
        <h2 className="section__title" id="experience-heading">
          Experience
        </h2>
        <p className="section__lede">
          Products and platforms from founding-stage startup work through hyperscale AWS
          internals — focused on correctness, throughput, and operability under failure.
        </p>
        <div className="timeline">
          {profile.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="job">
              <header className="job__header">
                <h3 className="job__company">{job.company}</h3>
              </header>
              <div className="job__meta">
                <span className="job__title">{job.title}</span>
                <span aria-hidden="true">·</span>
                <span>{job.period}</span>
                <span aria-hidden="true">·</span>
                <span>{job.location}</span>
              </div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
