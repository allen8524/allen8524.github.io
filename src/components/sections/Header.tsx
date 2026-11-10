import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

const navItems = [
  { id: "hero", label: "홈", icon: "bi-house" },
  { id: "about", label: "소개", icon: "bi-person" },
  { id: "resume", label: "이력 및 활동", icon: "bi-file-earmark-text" },
  { id: "portfolio", label: "프로젝트", icon: "bi-images" },
  { id: "services", label: "개발 역량", icon: "bi-hdd-stack" },
  { id: "testimonials", label: "트러블슈팅", icon: "bi-tools" },
  { id: "contact", label: "연락처", icon: "bi-envelope" },
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

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      let current = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= window.scrollY + 220) {
          current = section;
        }
      }

      setActiveSection(current?.id ?? "hero");
    };

    const scheduleActiveSectionUpdate = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrame = null;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", scheduleActiveSectionUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleActiveSectionUpdate);
      window.removeEventListener("resize", scheduleActiveSectionUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [isHome]);

  const moveToSection = (sectionId: string) => {
    setIsOpen(false);
    navigate({ pathname: "/", hash: `#${sectionId}` });

    if (isHome) {
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView();
      }, 0);
    }
  };

  return (
    <>
      <header
        id="header"
        className={`site-topbar${isOpen ? " is-open" : ""}`}
      >
        <button
          type="button"
          className={`site-topbar-menu-toggle bi ${isOpen ? "bi-x" : "bi-list"}`}
          aria-label="메뉴 열기/닫기"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        />

        <div className="header-top">
          <div className="profile-img">
            <img src="assets/img/profile/profile_face.png" alt="" className="img-fluid" />
          </div>

          <Link to="/" className="logo d-flex align-items-center justify-content-center">
            <span className="sitename">황민서</span>
          </Link>
        </div>

        <div className="header-navigation-stack">
          <nav id="navmenu" className="site-topbar-nav" aria-label="주 메뉴">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={activeSection === item.id ? "active" : undefined}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    onClick={() => moveToSection(item.id)}
                  >
                    <i className={`bi ${item.icon} navicon`} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <ThemeToggle />
      </header>
    </>
  );
}

export default Header;
