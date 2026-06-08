import { Link } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";

function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="not-found section">
          <div className="container">
            <div className="not-found__content">
              <p className="not-found__eyebrow">404</p>
              <h1>프로젝트를 찾을 수 없습니다</h1>
              <p>요청한 프로젝트 상세 페이지가 없거나 아직 React 데이터로 등록되지 않았습니다.</p>
              <Link to="/" className="portfolio-link primary">
                메인으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default NotFoundPage;
