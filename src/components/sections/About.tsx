import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="intro-header text-center">
              <h1>화면 뒤의 처리 구조를 설계합니다.</h1>
              <p className="subtitle">요청 처리 · 상태 관리 · 데이터 연동</p>
            </div>

            <div className="main-content-wrapper">
              <div className="row align-items-start">
                <div className="col-lg-4">
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

                <div className="col-lg-8">
                  <div className="content-area">


                    <div className="expertise-grid">
                      <div className="expertise-item">
                        <div className="expertise-icon">
                          <i className="bi bi-database-check" />
                        </div>
                        <div className="expertise-content">
                          <h4>데이터 구조 우선</h4>
                          <p>기능 구현 전에 필요한 데이터와 테이블 관계, 조회 기준을 먼저 확인합니다.</p>
                        </div>
                      </div>

                      <div className="expertise-item">
                        <div className="expertise-icon">
                          <i className="bi bi-diagram-3" />
                        </div>
                        <div className="expertise-content">
                          <h4>상태 흐름 연결</h4>
                          <p>요청부터 저장, 조회, 수정까지 데이터 상태가 이어지는 과정을 기준으로 구현합니다.</p>
                        </div>
                      </div>

                      <div className="expertise-item">
                        <div className="expertise-icon">
                          <i className="bi bi-search" />
                        </div>
                        <div className="expertise-content">
                          <h4>문제 원인 추적</h4>
                          <p>화면 오류만 수정하지 않고 요청값, 서비스 로직, DB 상태를 순서대로 확인합니다.</p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-section">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="collaboration-text">
                    <h3>구현 전 데이터 구조와 처리 순서를 먼저 확인합니다.</h3>
                    <p>필요한 값의 저장 위치와 요청부터 응답까지의 흐름을 기준으로 개발합니다.</p>
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
