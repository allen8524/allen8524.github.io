import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="intro-header text-center" data-aos="fade-up" data-aos-delay="150">
              <h1>화면 뒤의 처리 구조 설계 지향합니다.</h1>
              <p className="subtitle">요청 처리 · 상태 관리 · 데이터 연동</p>
            </div>

            <div className="main-content-wrapper">
              <div className="row align-items-start">
                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="profile-section">
                    <div className="profile-image-container">
                      <img src="assets/img/profile/profile_face.png" className="img-fluid" alt="황민서" />
                    </div>
                    <div className="profile-meta">
                      <div className="location">
                        <i className="bi bi-geo-alt" />
                        <span>서울 노원구</span>
                      </div>
                      <div className="status">
                        <div className="status-indicator" />
                        <span>신입 백엔드 개발자 포지션 지원</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-left" data-aos-delay="250">
                  <div className="content-area">


                    <div className="expertise-grid">
                      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="300">
                        <div className="expertise-icon">
                          <i className="bi bi-lightbulb" />
                        </div>
                        <div className="expertise-content">
                          <h4>백엔드 개발</h4>
                          <p>Spring Boot, Laravel, PHP 기반 예매·주문·관리자 기능 구현</p>
                        </div>
                      </div>

                      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="350">
                        <div className="expertise-icon">
                          <i className="bi bi-phone" />
                        </div>
                        <div className="expertise-content">
                          <h4>데이터 처리</h4>
                          <p>MySQL 중심 DB 설계와 Python 기반 CSV 전처리·분석</p>
                        </div>
                      </div>

                      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="400">
                        <div className="expertise-icon">
                          <i className="bi bi-graph-up" />
                        </div>
                        <div className="expertise-content">
                          <h4>구현 확장</h4>
                          <p>iOS 화면 흐름, Unity 게임 루프, 스터디·문제 풀이 경험</p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-section" data-aos="fade-up" data-aos-delay="500">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="collaboration-text">
                    <h3>구현 전 데이터 구조 우선 확인합니다.</h3>
                    <p>화면에 필요한 값의 저장 위치와 조회 흐름부터 확인하며 개발</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-buttons">
                    <Link to="/#portfolio" className="btn-custom primary">
                      프로젝트
                    </Link>
                    <Link to="/#contact" className="btn-custom secondary">
                      연락처
                    </Link>
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

export default About;
