import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row hero-layout align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 data-aos="fade-up" data-aos-delay="200">
                <span className="headline-line">기능과 데이터를 잇는</span>
                <span className="accent-text">백엔드 개발자</span>
              </h1>

              <p className="hero-description portfolio-intro-text" data-aos="fade-up" data-aos-delay="300">
                <span>Spring Boot · Laravel · PHP 기반 프로젝트에서</span>
                <span>예매·주문·게시판·관리자 기능을 구현했습니다.</span>
                <span>DB 연동부터 서비스 로직까지 데이터 흐름을 정리했고,</span>
                <span>데이터 분석·iOS·Unity 프로젝트도 확장 경험으로 함께 담았습니다.</span>
              </p>

              <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                <Link to="/#portfolio" className="btn-primary">
                  프로젝트
                </Link>
                <a
                  href="assets/files/Hwang_Minseo_Resume.pdf"
                  className="btn-secondary"
                  download="Hwang_Minseo_Resume.pdf"
                  title="이력서"
                  aria-label="이력서"
                >
                  이력서
                </a>
                <Link to="/#contact" className="btn-secondary">
                  연락처
                </Link>
              </div>

              <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">주요 프로젝트</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">수상 경험</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">학내 활동</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrapper">
                <div className="hero-profile-shell">
                  <img
                    src="assets/img/profile/profile_face.png"
                    alt="황민서 백엔드 개발자 포트폴리오"
                    className="img-fluid main-image"
                  />
                </div>
                <div className="hero-card-stack">
                  <div className="floating-card card-1">
                    <i className="bi bi-server" />
                    <span>Spring Boot · Laravel</span>
                  </div>
                  <div className="floating-card card-2">
                    <i className="bi bi-database" />
                    <span>DB · 데이터 흐름</span>
                  </div>
                  <div className="floating-card card-3">
                    <i className="bi bi-diagram-3" />
                    <span>API · 서비스 로직</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
