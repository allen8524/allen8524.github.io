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
              <h1>페이지를 찾을 수 없습니다</h1>
              <p>요청한 주소가 없거나 현재 React 라우팅에 등록되지 않은 페이지입니다.</p>
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
