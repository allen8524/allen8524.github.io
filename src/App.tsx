import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import RouteScrollManager from "./components/common/RouteScrollManager";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));

function App() {
  return (
    <HashRouter>
      <RouteScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
