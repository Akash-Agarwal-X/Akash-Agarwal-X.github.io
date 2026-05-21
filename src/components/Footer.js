import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>
          © {year} {profile.name}. Built as a lightweight React site for clarity and speed.
        </span>
        <span>
          <a href={profile.links.github}>GitHub</a>
          {" · "}
          <a href={profile.links.linkedin}>LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
