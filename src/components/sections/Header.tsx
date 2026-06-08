import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Home", icon: "bi-house" },
  { id: "about", label: "About", icon: "bi-person" },
  { id: "resume", label: "Resume", icon: "bi-file-earmark-text" },
  { id: "portfolio", label: "Projects", icon: "bi-images" },
  { id: "services", label: "Skills", icon: "bi-hdd-stack" },
  { id: "testimonials", label: "Troubleshooting", icon: "bi-tools" },
  { id: "contact", label: "Contact", icon: "bi-envelope" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return undefined;
    }

    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));
      let current = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= window.scrollY + 220) {
          current = section;
        }
      }

      setActiveSection(current?.id ?? "hero");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  const moveToSection = (sectionId: string) => {
    setIsOpen(false);
    navigate({ pathname: "/", hash: `#${sectionId}` });

    if (isHome) {
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column justify-content-between${isOpen ? " header-show" : ""}`}
    >
      <button
        type="button"
        className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      />

      <div className="header-top">
        <div className="profile-img">
          <img src="assets/img/profile/profile_face.png" alt="" className="img-fluid" />
        </div>

        <Link to="/" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Minseo Hwang</h1>
        </Link>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={activeSection === item.id ? "active" : undefined}
                onClick={() => moveToSection(item.id)}
              >
                <i className={`bi ${item.icon} navicon`} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="social-links text-center">
        <a
          href="https://www.instagram.com/min._.seo_o/"
          className="instagram"
          title="Instagram"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram" />
        </a>
        <a
          href="https://github.com/allen8524"
          className="github"
          title="GitHub"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github" />
        </a>
        <a
          href="https://allen8524.tistory.com/"
          className="tistory"
          title="Tistory"
          aria-label="Tistory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-journal-text" />
        </a>
      </div>
    </header>
  );
}

export default Header;
