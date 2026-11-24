import { Component, lazy, Suspense, type ReactNode } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import RouteScrollManager from "./components/common/RouteScrollManager";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));

function RouteLoading() {
  return (
    <main className="main route-status" aria-busy="true">
      <p role="status">페이지를 불러오는 중입니다.</p>
    </main>
  );
}

class RouteErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="main route-status">
        <h1>페이지를 불러오지 못했습니다</h1>
        <p role="alert">네트워크 연결을 확인한 후 다시 시도해 주세요.</p>
        <div className="route-status__actions">
          <button type="button" onClick={() => window.location.reload()}>다시 시도</button>
          <Link to="/">메인으로 돌아가기</Link>
        </div>
      </main>
    );
  }
}

function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <RouteErrorBoundary key={pathname}>
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <RouteScrollManager />
      </Suspense>
    </RouteErrorBoundary>
  );
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
