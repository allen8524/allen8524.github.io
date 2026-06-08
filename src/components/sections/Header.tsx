import { useState } from "react";
import { homeMarkup } from "../../data/homeMarkup";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

        if (target.closest(".header-toggle")) {
          setIsOpen((current) => !current);
        }

        if (target.closest("#navmenu a")) {
          setIsOpen(false);
        }
      }}
      dangerouslySetInnerHTML={{ __html: headerHtml }}
    />
  );
}

export default Header;
