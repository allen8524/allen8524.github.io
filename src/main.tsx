import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/app.css";
import "./styles/portfolio.css";
import "./styles/project-detail.css";
import "./styles/project-gallery-fan.css";
import "./styles/project-detail-density.css";
import "./styles/service-detail.css";
import "./styles/detail-hero-glow.css";
import "./styles/troubleshooting.css";
import "./styles/sidebar-balance.css";
import "./styles/theme-toggle.css";
import "./styles/footer-wave.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
