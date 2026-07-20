import type { ServiceIconKey } from "../../types/service";

function renderServiceIcon(icon: ServiceIconKey) {
  switch (icon) {
    case "shield":
      return (
        <>
          <path d="M12 3.75 6.25 6.1v5.15c0 3.65 2.42 6.98 5.75 8 3.33-1.02 5.75-4.35 5.75-8V6.1L12 3.75Z" />
          <path d="m9.4 12.1 1.7 1.7 3.6-3.7" />
        </>
      );

    case "user":
      return (
        <>
          <circle cx="10" cy="8.2" r="2.3" />
          <path d="M5.4 17.6c.55-2.55 2.28-4 4.6-4 1.24 0 2.28.4 3.06 1.16" />
          <circle cx="16.7" cy="15.7" r="2.05" />
          <path d="m15.7 15.8.72.72 1.32-1.44" />
        </>
      );

    case "bug":
      return (
        <>
          <path d="M8.2 8.4h7.6v6.2a3.8 3.8 0 0 1-7.6 0V8.4Z" />
          <path d="M9.4 5.4 11 7.2h2l1.6-1.8" />
          <path d="M5.4 10.2h2.8M15.8 10.2h2.8M5.4 14.4h2.8M15.8 14.4h2.8M12 8.4v10" />
        </>
      );

    case "cart":
    case "shop":
      return (
        <>
          <path d="M6.2 7.3h11.2l-1.1 6.2H8L6.2 4.8H4.4" />
          <circle cx="9.2" cy="17.2" r="1.1" />
          <circle cx="15.2" cy="17.2" r="1.1" />
        </>
      );

    case "film":
      return (
        <>
          <rect x="5" y="6" width="14" height="12" rx="2" />
          <path d="M8 6v12M16 6v12M5 10h3M16 10h3M5 14h3M16 14h3" />
        </>
      );

    case "database":
      return (
        <>
          <ellipse cx="12" cy="6.4" rx="5.7" ry="2.4" />
          <path d="M6.3 6.4v8.8c0 1.3 2.55 2.4 5.7 2.4s5.7-1.1 5.7-2.4V6.4" />
          <path d="M6.3 10.8c0 1.3 2.55 2.4 5.7 2.4s5.7-1.1 5.7-2.4" />
        </>
      );

    case "chart":
      return (
        <>
          <path d="M5.3 18.2h13.4" />
          <path d="M7.2 15.8v-4.2M12 15.8V7.2M16.8 15.8v-6" />
        </>
      );

    case "trophy":
      return (
        <>
          <path d="M8 5.4h8v3.4a4 4 0 0 1-8 0V5.4Z" />
          <path d="M8 7H5.8c0 2.6 1.5 4 3.4 4.2M16 7h2.2c0 2.6-1.5 4-3.4 4.2" />
          <path d="M12 12.8v3.4M9.2 18.2h5.6" />
        </>
      );

    case "ticket":
      return (
        <>
          <path d="M5.4 8.2h13.2v2.35a1.45 1.45 0 0 0 0 2.9v2.35H5.4v-2.35a1.45 1.45 0 0 0 0-2.9V8.2Z" />
          <path d="M9 8.4v7.2M12 10.4h3.4M12 13.6h2.4" />
        </>
      );

    case "box":
      return (
        <>
          <path d="m12 4.8 6.1 3.2-6.1 3.2L5.9 8 12 4.8Z" />
          <path d="M5.9 8v7.2l6.1 3.2 6.1-3.2V8M12 11.2v7.2" />
        </>
      );

    case "search":
      return (
        <>
          <circle cx="10.5" cy="10.5" r="4.6" />
          <path d="m14 14 4.1 4.1" />
          <path d="M8.3 10.3h4.4M10.5 8.1v4.4" />
        </>
      );

    case "controller":
      return (
        <>
          <path d="M7.4 10.4h9.2c1.8 0 3 1.3 3.1 3.2l.1 2.1c.05 1.1-.75 1.9-1.8 1.9-.72 0-1.16-.32-1.68-.88l-1.05-1.12H8.73l-1.05 1.12c-.52.56-.96.88-1.68.88-1.05 0-1.85-.8-1.8-1.9l.1-2.1c.1-1.9 1.3-3.2 3.1-3.2Z" />
          <path d="M8 12.8v2.4M6.8 14h2.4" />
          <circle cx="15.6" cy="13.2" r=".55" />
          <circle cx="17.2" cy="14.8" r=".55" />
        </>
      );

    case "document":
    default:
      return (
        <>
          <path d="M6.2 7.2h11.6v9.6H6.2z" />
          <path d="M8.7 10h6.6M8.7 13h4.6" />
        </>
      );
  }
}

function ServiceFeatureIcon({ icon }: { icon: ServiceIconKey }) {
  return (
    <span className="service-feature-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">{renderServiceIcon(icon)}</svg>
    </span>
  );
}

export default ServiceFeatureIcon;
