import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { homeMarkup } from "../../data/homeMarkup";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const headerHtml = homeMarkup.header
    .replace(
      'class="header dark-background d-flex flex-column justify-content-between"',
      `class="header dark-background d-flex flex-column justify-content-between${isOpen ? " header-show" : ""}"`,
    )
    .replace(
      'class="header-toggle d-xl-none bi bi-list"',
      `class="header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`,
    );

  return (
    <div
      onClick={(event) => {
        const target = event.target as HTMLElement;
        const navLink = target.closest("#navmenu a");

        if (target.closest(".header-toggle")) {
          setIsOpen((current) => !current);
        }

        if (navLink instanceof HTMLAnchorElement) {
          setIsOpen(false);

          const href = navLink.getAttribute("href");

          if (href?.startsWith("#")) {
            event.preventDefault();
            navigate({ pathname: "/", hash: href });
          }
        }
      }}
      dangerouslySetInnerHTML={{ __html: headerHtml }}
    />
  );
}

export default Header;
