import { profile } from "../data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#blogs", label: "Blogs" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#recognition", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const resumePath = `${process.env.PUBLIC_URL}/${profile.resume.fileName}`.replace(
    /([^:]\/)\/+/g,
    "$1"
  );

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top">
          {profile.name}
        </a>
        <div className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary nav__cta"
            href={resumePath}
            download={profile.resume.fileName}
          >
            {profile.resume.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
