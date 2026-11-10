import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/app.css";
import "./styles/about.css";
import "./styles/resume-layout.css";
import "./styles/portfolio.css";
import "./styles/troubleshooting.css";
import "./styles/theme-toggle.css";
import "./styles/footer-wave.css";
import "./styles/scroll-top-jelly.css";
import "./styles/topbar.css";
import "./styles/contact.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
