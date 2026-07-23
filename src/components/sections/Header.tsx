import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScrollHamster from "../common/ScrollHamster";
import ThemeToggle from "../common/ThemeToggle";

const HAMSTER_VISIBILITY_STORAGE_KEY = "portfolio-hamster-visible";

const navItems = [
  { id: "hero", label: "홈", icon: "bi-house" },
  { id: "about", label: "소개", icon: "bi-person" },
  { id: "resume", label: "이력 및 활동", icon: "bi-file-earmark-text" },
  { id: "portfolio", label: "프로젝트", icon: "bi-images" },
  { id: "services", label: "개발 역량", icon: "bi-hdd-stack" },
  { id: "testimonials", label: "트러블슈팅", icon: "bi-tools" },
  { id: "contact", label: "연락처", icon: "bi-envelope" },
];

function getInitialHamsterVisibility() {
  if (typeof window === "undefined") {
    return true;
  }

  try {
    return window.localStorage.getItem(HAMSTER_VISIBILITY_STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHamsterVisible, setIsHamsterVisible] = useState(getInitialHamsterVisibility);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    try {
      window.localStorage.setItem(
        HAMSTER_VISIBILITY_STORAGE_KEY,
        String(isHamsterVisible),
      );
    } catch {
      // Keep the toggle functional even when storage access is blocked.
    }
  }, [isHamsterVisible]);

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
    <>
      <header
        id="header"
        className={`header dark-background d-flex flex-column${isOpen ? " header-show" : ""}`}
      >
        <button
          type="button"
          className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
          aria-label="사이드 메뉴 열기/닫기"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        />

        <div className="header-top">
          <div className="profile-img">
            <img src="assets/img/profile/profile_face.png" alt="" className="img-fluid" />
          </div>

          <Link to="/" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">황민서</h1>
          </Link>
        </div>

        <div className="header-navigation-stack">
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
        </div>

        <div
          className={`header-hamster-control${isHamsterVisible ? "" : " is-disabled"}`}
        >
          <div id="header-hamster-visual" className="header-hamster-visual">
            {isHamsterVisible ? (
              <div className="header-hamster">
                <ScrollHamster />
              </div>
            ) : null}
          </div>

          <div className="hamster-toggle">
            <label
              className="hamster-toggle__lever"
              title={isHamsterVisible ? "햄스터 끄기" : "햄스터 켜기"}
            >
              <input
                id="hamster-switch"
                className="hamster-toggle__input"
                type="checkbox"
                role="switch"
                checked={isHamsterVisible}
                aria-label={isHamsterVisible ? "햄스터 숨기기" : "햄스터 표시하기"}
                aria-controls="header-hamster-visual"
                onChange={(event) => setIsHamsterVisible(event.target.checked)}
              />

              <span className="hamster-toggle__handle-wrapper" aria-hidden="true">
                <span className="hamster-toggle__handle">
                  <span className="hamster-toggle__handle-knob">
                    <span className="hamster-toggle__knob-face" />
                  </span>
                  <span className="hamster-toggle__handle-bar-wrapper">
                    <span className="hamster-toggle__handle-bar" />
                  </span>
                </span>
              </span>

              <span className="hamster-toggle__base" aria-hidden="true">
                <span className="hamster-toggle__base-inside" />
              </span>
            </label>
          </div>
        </div>
      </header>
      <ThemeToggle />
    </>
  );
}

export default Header;
