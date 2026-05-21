import { ImPointRight } from "react-icons/im";
import { profile } from "../../data/profile";

export function About() {
  const { paragraphs, interests, quote } = profile.about;

  return (
    <section className="section section--about" id="about" aria-labelledby="about-heading">
      <div className="section__inner">
        <h2 className="section__title" id="about-heading">
          About
        </h2>
        <p className="section__lede">
          The narrative thread behind the resume — background, motivations, and how I spend time
          off the keyboard.
        </p>
        <div className="about-grid">
          <div className="about-copy">
            {paragraphs.map((p, i) => (
              <p key={i} className="about-copy__para">
                {p}
              </p>
            ))}
            <aside className="about-aside">
              <p className="about-aside__label">Besides shipping code:</p>
              <ul className="about-interests">
                {interests.map((item) => (
                  <li key={item} className="about-interests__item">
                    <ImPointRight aria-hidden /> {item}
                  </li>
                ))}
              </ul>
              <blockquote className="about-quote">
                <p>{quote}</p>
                <footer>{profile.name}</footer>
              </blockquote>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
