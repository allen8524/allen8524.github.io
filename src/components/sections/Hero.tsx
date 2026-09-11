import { recentAchievements } from "../../data/awards";
import { projects } from "../../data/projects";
import { resumeActivities } from "../../data/resume";

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row hero-layout align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>
                <span className="headline-line">기능과 데이터를 잇는</span>
                <span className="accent-text">백엔드 개발자</span>
              </h1>

              <p className="hero-description portfolio-intro-text">
                <span>Spring Boot · Laravel · PHP 기반 웹 프로젝트</span>
                <span>예매 · 주문 · 게시판 · 관리자 및 DB 연동 구현</span>
              </p>

              <div className="hero-summary">
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{projects.length}</span>
                  <span className="stat-label">프로젝트</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{recentAchievements.length}</span>
                  <span className="stat-label">수상 경험</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{resumeActivities.length}</span>
                  <span className="stat-label">교내 활동</span>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="hero-profile-shell">
                  <img
                    src="assets/img/profile/profile_face.png"
                    alt="황민서 백엔드 개발자 포트폴리오"
                    className="img-fluid main-image"
                  />
                  <div className="hero-profile-meta">
                    <div className="hero-profile-meta__location">
                      <i className="bi bi-geo-alt" aria-hidden="true" />
                      <span>서울 노원구</span>
                    </div>
                    <div className="hero-profile-meta__status">
                      <span className="hero-profile-meta__indicator" aria-hidden="true" />
                      <span>신입 백엔드 개발자 포지션 지원</span>
                    </div>
                  </div>
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
                  <a
                    href="assets/files/Hwang_Minseo_Resume.pdf"
                    className="floating-card card-3 hero-resume-card"
                    download="Hwang_Minseo_Resume.pdf"
                    aria-label="이력서 PDF 다운로드"
                  >
                    <i className="bi bi-download" aria-hidden="true" />
                    <span>이력서 다운로드</span>
                  </a>
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
