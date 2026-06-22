import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/app.css";
import "./styles/portfolio.css";
import "./styles/project-detail.css";
import "./styles/project-detail-title-adjustment.css";
import "./styles/service-detail.css";
import "./styles/troubleshooting.css";

const rootElement = document.getElementById("root");

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
