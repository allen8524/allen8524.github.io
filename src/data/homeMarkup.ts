export const homeMarkup = {
  header: `<header id="header" class="header dark-background d-flex flex-column justify-content-between">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="header-top">
      <div class="profile-img">
        <img src="assets/img/profile/profile_face.png" alt="" class="img-fluid">
      </div>

      <a href="index.html" class="logo d-flex align-items-center justify-content-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.webp" alt=""> -->
        <h1 class="sitename">황민서</h1>
      </a>

    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#hero" class="active"><i class="bi bi-house navicon"></i>홈</a></li>
        <li><a href="#about"><i class="bi bi-person navicon"></i> 소개</a></li>
        <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i> 이력 및 활동</a></li>
        <li><a href="#portfolio"><i class="bi bi-images navicon"></i> 프로젝트</a></li>
        <li><a href="#services"><i class="bi bi-hdd-stack navicon"></i> 개발 역량</a></li>
        <li><a href="#testimonials"><i class="bi bi-tools navicon"></i> 트러블슈팅</a></li>
        <li><a href="#contact"><i class="bi bi-envelope navicon"></i> 연락처</a></li>
      </ul>
    </nav>

    <div class="social-links text-center">
      <a href="https://www.instagram.com/min._.seo_o/" class="instagram" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
      <a href="https://github.com/allen8524" class="github" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
      <a href="https://allen8524.tistory.com/" class="tistory" title="Tistory" aria-label="Tistory" target="_blank" rel="noopener noreferrer"><i class="bi bi-journal-text"></i></a>
    </div>
  </header>`,
  hero: `<section id="hero" class="hero section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row hero-layout align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 data-aos="fade-up" data-aos-delay="200">
                <span class="headline-line">기능과 데이터를 잇는</span>
                <span class="accent-text">백엔드 개발자</span>
              </h1>
              <p class="hero-description portfolio-intro-text" data-aos="fade-up" data-aos-delay="300">
                <span>Spring Boot · Laravel · PHP 기반 프로젝트에서</span>
                <span>예매·주문·게시판·관리자 기능을 구현했습니다.</span>
                <span>DB 연동부터 서비스 로직까지 데이터 흐름을 정리했고,</span>
                <span>데이터 분석·iOS·Unity 프로젝트도 확장 경험으로 함께 담았습니다.</span>
              </p>
              <div class="hero-actions" data-aos="fade-up" data-aos-delay="400">
                <a href="#portfolio" class="btn-primary">프로젝트</a>
                <a href="assets/files/Hwang_Minseo_Resume.pdf" class="btn-secondary" download="Hwang_Minseo_Resume.pdf" title="이력서" aria-label="이력서">이력서</a>
                <a href="#contact" class="btn-secondary">연락처</a>
              </div>
              <div class="hero-stats" data-aos="fade-up" data-aos-delay="500">
                <div class="stat-item">
                  <span class="stat-number">7</span>
                  <span class="stat-label">주요 프로젝트</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">4</span>
                  <span class="stat-label">수상 경험</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">3</span>
                  <span class="stat-label">학내 활동</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="hero-image" data-aos="fade-up" data-aos-delay="300">
              <div class="image-wrapper">
                <div class="hero-profile-shell">
                  <img src="assets/img/profile/profile_face.png" alt="황민서 백엔드 개발자 포트폴리오" class="img-fluid main-image">
                </div>
                <div class="hero-card-stack">
                  <div class="floating-card card-1">
                    <i class="bi bi-server"></i>
                    <span>Spring Boot · Laravel</span>
                  </div>
                  <div class="floating-card card-2">
                    <i class="bi bi-database"></i>
                    <span>DB · 데이터 흐름</span>
                  </div>
                  <div class="floating-card card-3">
                    <i class="bi bi-diagram-3"></i>
                    <span>API · 서비스 로직</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section><!-- /Hero Section -->`,
  about: `<section id="about" class="about section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row justify-content-center">
          <div class="col-lg-10">

            <div class="intro-header text-center" data-aos="fade-up" data-aos-delay="150">
              <h1>화면 뒤의 처리 구조를 설계하는 일을 좋아합니다.</h1>
              <p class="subtitle">요청 처리 · 상태 관리 · 데이터 연동</p>
            </div>

            <div class="main-content-wrapper">
              <div class="row align-items-start">

                <div class="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div class="profile-section">
                    <div class="profile-image-container">
                      <img src="assets/img/profile/profile_face.png" class="img-fluid" alt="황민서">
                    </div>
                    <div class="profile-meta">
                      <div class="location">
                        <i class="bi bi-geo-alt"></i>
                        <span>서울 노원구</span>
                      </div>
                      <div class="status">
                        <div class="status-indicator"></div>
                        <span>신입 백엔드 개발자 포지션 지원</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8" data-aos="fade-left" data-aos-delay="250">
                  <div class="content-area">

                    <div class="story-block">
                      <p class="lead-text">회원가입, 주문, 예매, 게시판처럼 화면 뒤에서 상태와 데이터를 연결하는 과정에 흥미를 느껴 백엔드 개발을 지향하게 됐습니다.</p>

                      <p>웹 프로젝트에서는 DB 설계·연동과 관리자 기능을 중심으로 개발했고, CineFlow에서는 예매 흐름과 권한 분리를 다뤘습니다. Movie PCA, HealthyUp, Undead Survivor는 데이터 처리와 모바일 화면 흐름, 게임 루프를 경험한 확장 프로젝트로 정리했습니다.</p>
                    </div>

                    <div class="expertise-grid">
                      <div class="expertise-item" data-aos="zoom-in" data-aos-delay="300">
                        <div class="expertise-icon">
                          <i class="bi bi-lightbulb"></i>
                        </div>
                        <div class="expertise-content">
                          <h4>백엔드 개발</h4>
                          <p>Spring Boot, Laravel, PHP 기반 예매·주문·관리자 기능 구현</p>
                        </div>
                      </div>

                      <div class="expertise-item" data-aos="zoom-in" data-aos-delay="350">
                        <div class="expertise-icon">
                          <i class="bi bi-phone"></i>
                        </div>
                        <div class="expertise-content">
                          <h4>데이터 처리</h4>
                          <p>MySQL 중심 DB 설계와 Python 기반 CSV 전처리·분석 경험</p>
                        </div>
                      </div>

                      <div class="expertise-item" data-aos="zoom-in" data-aos-delay="400">
                        <div class="expertise-icon">
                          <i class="bi bi-graph-up"></i>
                        </div>
                        <div class="expertise-content">
                          <h4>구현 확장</h4>
                          <p>iOS 앱 화면 흐름, Unity 게임 루프, 스터디/문제 풀이 경험</p>
                        </div>
                      </div>
                    </div>

                    <div class="philosophy-quote" data-aos="fade-up" data-aos-delay="450">
                      <p>기능이 늘어날수록 요청 순서와 데이터 구조를 먼저 정리하려고 합니다.</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <div class="bottom-section" data-aos="fade-up" data-aos-delay="500">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="collaboration-text">
                    <h3>구현 전에 데이터 구조를 먼저 봅니다</h3>
                    <p>화면에서 필요한 값이 어디서 저장되고 어떻게 조회되는지부터 확인하며 개발합니다.</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="action-buttons">
                    <a href="#portfolio" class="btn-custom primary">프로젝트</a>
                    <a href="#contact" class="btn-custom secondary">연락처</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section><!-- /About Section -->`,
  stats: `<section id="stats" class="stats section light-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row justify-content-center">
          <div class="col-lg-10">

            <div class="stats-grid">
              <div class="stat-item" data-aos="fade-up" data-aos-delay="200">
                <div class="stat-number">
                  <span data-purecounter-start="0" data-purecounter-end="7" data-purecounter-duration="1" class="purecounter">7</span>
                </div>
                <p class="stat-label">주요 프로젝트</p>
              </div>

              <div class="stat-item" data-aos="fade-up" data-aos-delay="300">
                <div class="stat-number">
                  <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" class="purecounter">4</span>
                </div>
                <p class="stat-label">수상 경험</p>
              </div>

              <div class="stat-item" data-aos="fade-up" data-aos-delay="400">
                <div class="stat-number">
                  <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1" class="purecounter">1</span>
                </div>
                <p class="stat-label">취득 자격증</p>
              </div>
            </div>

            <div class="achievements-row" data-aos="fade-up" data-aos-delay="500">
              <div class="achievement">
                <div class="achievement-icon">
                  <i class="bi bi-trophy"></i>
                </div>
                <div class="achievement-content">
                  <h4>Laravel 웹 솔루션 경진대회</h4>
                  <p>2025.12 수상</p>
                </div>
              </div>

              <div class="achievement">
                <div class="achievement-icon">
                  <i class="bi bi-star"></i>
                </div>
                <div class="achievement-content">
                  <h4>AWS 활용능력 경진대회</h4>
                  <p>2025.12 수상</p>
                </div>
              </div>

              <div class="achievement">
                <div class="achievement-icon">
                  <i class="bi bi-gem"></i>
                </div>
                <div class="achievement-content">
                  <h4>온라인 쇼핑몰개발 경진대회</h4>
                  <p>2025.06 수상</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section><!-- /Stats Section -->`,
  skills: `<section id="skills" class="skills section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>사용 기술 및 경험</h2>
        <p>백엔드 기능을 중심으로 데이터 분석, 모바일, 게임 프로젝트에서 사용한 기술을 함께 정리했습니다.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row">
          <div class="col-lg-8">
            <div class="skills-container">

              <div class="skill-category skills-animation" data-aos="fade-up" data-aos-delay="200">
                <div class="category-header">
                  <h3 class="category-title">백엔드</h3>
                  <p class="category-subtitle">웹 서비스 기능 구현에 직접 사용한 기술</p>
                </div>
                <div class="skills-list">
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">Java · Spring Boot</span>
                      <span class="skill-percentage">JPA, Security, Thymeleaf 기반 예매 흐름 구현</span>
                    </div>
                  </div>
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">PHP · Laravel</span>
                      <span class="skill-percentage">CRUD, 관리자 기능, 주문·콘텐츠 관리 구현</span>
                    </div>
                  </div>
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">회원/주문/예매/게시판 기능</span>
                      <span class="skill-percentage">프로젝트 적용 경험</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category skills-animation" data-aos="fade-up" data-aos-delay="250">
                <div class="category-header">
                  <h3 class="category-title">데이터베이스 · 데이터 처리</h3>
                  <p class="category-subtitle">데이터 저장 구조와 분석 입력 데이터를 다뤄본 경험</p>
                </div>
                <div class="skills-list">
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">MySQL · H2 · Oracle</span>
                      <span class="skill-percentage">테이블 설계, CRUD, 조회 흐름 관리</span>
                    </div>
                  </div>
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">JPA · Flyway · SQL</span>
                      <span class="skill-percentage">엔티티 매핑, 마이그레이션, DB 변경 이력 관리</span>
                    </div>
                  </div>
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">Python · pandas · scikit-learn</span>
                      <span class="skill-percentage">CSV 전처리, PCA, 상관분석, 회귀분석 경험</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category skills-animation" data-aos="fade-up" data-aos-delay="300">
                <div class="category-header">
                  <h3 class="category-title">프론트엔드 · 모바일 · 도구</h3>
                  <p class="category-subtitle">화면 구성과 모바일·게임 구현에 사용한 기술</p>
                </div>
                <div class="skills-list">
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">HTML · CSS · JavaScript</span>
                      <span class="skill-percentage">반응형 페이지와 기본 인터랙션 구성</span>
                    </div>
                  </div>
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">Swift · UIKit · WebKit · AVKit</span>
                      <span class="skill-percentage">iOS 탭 화면, BMI 계산, WebView, 영상 재생 구현</span>
                    </div>
                  </div>
                  <div class="skill-row">
                    <div class="skill-info">
                      <span class="skill-name">Unity · C# · GitHub</span>
                      <span class="skill-percentage">게임 루프, 오브젝트 풀링, 코드 저장소 정리 경험</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="col-lg-4">
            <div class="skills-sidebar">

              <div class="expertise-highlight" data-aos="fade-up" data-aos-delay="350">
                <div class="highlight-icon">
                  <i class="bi bi-trophy"></i>
                </div>
                <h4 class="highlight-title">학습 및 프로젝트 집중 기간</h4>
                <div class="experience-number">
                  <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" class="purecounter">4</span>
                  <span class="experience-label">년+</span>
                </div>
                <p class="highlight-description">CS 스터디와 개인 프로젝트를 병행하며 요청 처리, DB 연동, 데이터 전처리 경험을 꾸준히 쌓았습니다.</p>
              </div>

              <div class="technologies-section" data-aos="fade-up" data-aos-delay="400">
                <h5 class="tech-title">주요 기술</h5>
                <div class="tech-stack">
                  <div class="tech-item">
                    <i class="bi bi-filetype-js"></i>
                    <span>Java</span>
                  </div>
                  <div class="tech-item">
                    <i class="bi bi-code-square"></i>
                    <span>Spring Boot</span>
                  </div>
                  <div class="tech-item">
                    <i class="bi bi-server"></i>
                    <span>Laravel</span>
                  </div>
                  <div class="tech-item">
                    <i class="bi bi-cloud"></i>
                    <span>MySQL</span>
                  </div>
                  <div class="tech-item">
                    <i class="bi bi-palette"></i>
                    <span>Python</span>
                  </div>
                  <div class="tech-item">
                    <i class="bi bi-diagram-3"></i>
                    <span>Swift</span>
                  </div>
                </div>
              </div>

              <div class="achievements-section" data-aos="fade-up" data-aos-delay="450">
                <h5 class="achievements-title">최근 성과</h5>
                <div class="achievement-list">
                  <div class="achievement-item">
                    <div class="achievement-date">2026</div>
                    <div class="achievement-text">정보처리산업기사 취득 준비 중</div>
                  </div>
                  <div class="achievement-item">
                    <div class="achievement-date">2025</div>
                    <div class="achievement-text">Laravel 웹 솔루션 경진대회 수상</div>
                  </div>
                  <div class="achievement-item">
                    <div class="achievement-date">2025</div>
                    <div class="achievement-text">AWS 서비스 활용능력 경진대회 수상</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section><!-- /Skills Section -->`,
  resume: `<section id="resume" class="resume section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>이력 및 활동</h2>
        <p>학습 과정, 활동 기간, 자격·수상 이력과 프로젝트 확장 경험을 한눈에 볼 수 있게 정리했습니다.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-start justify-content-center resume-content-row">
          <div class="col-lg-5 resume-column" data-aos="fade-right" data-aos-delay="200">
            <div class="professional-journey resume-panel">
              <div class="section-intro resume-panel-header">
                <div class="icon-wrapper resume-panel-icon">
                  <i class="bi bi-briefcase-fill"></i>
                </div>
                <h2>활동 및 경험</h2>
                <p>스터디, 학내 활동, 프로젝트를 통해 CS 기초와 백엔드 중심 구현 경험을 함께 쌓았습니다.</p>
                <span class="section-kicker">주요 경험 요약</span>
              </div>
              <div class="resume-panel-body">
                <div class="experience-timeline resume-timeline">
                <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="position-meta">
                      <span class="timeline-year">2026.03 - 진행 중</span>
                    </div>
                    <h3>국가근로</h3>
                    <h4>인덕대학교 도서관</h4>
                    <p>인덕대학교 도서관에서 국가근로로 근무하며 맡은 업무를 성실하게 수행하고 있습니다.</p>
                    <div class="key-achievements">
                      <span class="achievement-tag">책임감</span>
                      <span class="achievement-tag">성실함</span>
                      <span class="achievement-tag">협업</span>
                    </div>
                  </div>
                </div>

                <div class="timeline-item" data-aos="fade-up" data-aos-delay="350">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="position-meta">
                      <span class="timeline-year">2025.03 - 2026.09</span>
                    </div>
                    <h3>인덕대학교 코드어택 스터디 동아리</h3>
                    <h4>CS 및 자격증 스터디</h4>
                    <p>정보처리산업기사 준비와 함께 자료구조, 운영체제, 네트워크 학습 및 알고리즘 문제 풀이를 이어가고 있습니다.</p>
                  </div>
                </div>

                <div class="timeline-item" data-aos="fade-up" data-aos-delay="375">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="position-meta">
                      <span class="timeline-year">2026.05 - 진행 중</span>
                    </div>
                    <h3>인덕대학교 INDEV 프로젝트 동아리</h3>
                    <h4>팀 프로젝트 및 CS</h4>
                    <p>AI 기반 소상공인 직원 채용 및 스케줄 관리 플랫폼을 팀 프로젝트 주제로 진행하며, 매출 패턴과 직원 선호도를 반영한 스케줄 자동 생성, 구인 공고 자동 작성, 인건비 시뮬레이션 기능을 기획·구현합니다.</p>
                  </div>
                </div>

                <div class="timeline-item" data-aos="fade-up" data-aos-delay="400">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div class="position-meta">
                      <span class="timeline-year">2022.03 - 2022.12</span>
                    </div>
                    <h3>인덕대학교 IFP 스터디 동아리</h3>
                    <h4>알고리즘 · 기초 프로그래밍</h4>
                    <p>Notion 기반 자료 정리와 코드 리뷰, 문제 풀이 공유를 통해 협업 및 문제 해결 역량을 강화했습니다.</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 resume-column" data-aos="fade-left" data-aos-delay="200">
            <div class="education-skills resume-panel">
              <div class="section-intro resume-panel-header">
                <div class="icon-wrapper resume-panel-icon">
                  <i class="bi bi-mortarboard-fill"></i>
                </div>
                <h2>학력 및 자격</h2>
                <p>학력과 자격, 수상 이력을 중심으로 학습 과정을 정리했습니다.</p>
              </div>
              <div class="resume-panel-body">
                <div class="education-grid resume-education-list">
                <div class="education-card primary" data-aos="zoom-in" data-aos-delay="300">
                  <div class="education-header">
                    <div class="degree-icon">
                      <i class="bi bi-award"></i>
                    </div>
                    <div class="degree-info">
                      <h3>컴퓨터소프트웨어학과</h3>
                      <p class="institution">인덕대학교</p>
                      <span class="graduation-year">2022.03 - 2027.02</span>
                    </div>
                  </div>
                  <div class="education-details">
                    <p>백엔드 웹 프로젝트를 중심으로 예매·주문·콘텐츠 관리 기능을 구현하고, 데이터 분석·모바일·게임 프로젝트로 구현 범위를 확장했습니다.</p>
                    <div class="honors">
                      <span class="honor-badge">학점 4.0</span>
                    </div>
                  </div>
                </div>

                <div class="education-card" data-aos="zoom-in" data-aos-delay="350">
                  <div class="education-header">
                    <div class="degree-icon">
                      <i class="bi bi-laptop"></i>
                    </div>
                    <div class="degree-info">
                      <h3>자동화기계과</h3>
                      <p class="institution">인덕과학기술고등학교</p>
                      <span class="graduation-year">2019.03 - 2022.01</span>
                    </div>
                  </div>
                  <div class="education-details">
                    <p>기초 공학 역량을 바탕으로 문제 해결 중심의 학습 태도를 갖추었습니다.</p>
                  </div>
                </div>

                <div class="certification-section" data-aos="fade-up" data-aos-delay="400">
                  <h4>자격증 및 수상</h4>
                  <div class="certifications">
                    <div class="cert-item">
                      <i class="bi bi-patch-check"></i>
                      <div class="cert-details">
                        <span class="cert-name">정보처리산업기사</span>
                        <span class="cert-provider">한국산업인력공단 • 2026.09 예정</span>
                      </div>
                    </div>
                    <div class="cert-item">
                      <i class="bi bi-patch-check"></i>
                      <div class="cert-details">
                        <span class="cert-name">컴퓨터응용선반기능사</span>
                        <span class="cert-provider">한국산업인력공단 • 2021.07</span>
                      </div>
                    </div>
                    <div class="cert-item">
                      <i class="bi bi-patch-check"></i>
                      <div class="cert-details">
                        <span class="cert-name">온라인 쇼핑몰개발 경진대회 포함 수상 4회</span>
                        <span class="cert-provider">인덕대학교 • 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section><!-- /Resume Section -->`,
  portfolio: `<section id="portfolio" class="portfolio section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>프로젝트</h2>
        <p>백엔드 웹 프로젝트를 중심으로, 데이터 분석·모바일·게임 프로젝트까지 구현 흐름과 GitHub 근거를 함께 정리했습니다.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div class="filters-wrapper" data-aos="fade-up" data-aos-delay="200">
            <ul class="portfolio-filters isotope-filters">
              <li data-filter="*" class="filter-active">전체</li>
              <li data-filter=".filter-spring">Spring</li>
              <li data-filter=".filter-laravel">Laravel</li>
              <li data-filter=".filter-php">PHP</li>
              <li data-filter=".filter-data">데이터분석</li>
              <li data-filter=".filter-etc">모바일·게임</li>
            </ul>
          </div>

          <div class="row gy-5 portfolio-container isotope-container" data-aos="fade-up" data-aos-delay="300">

            <div class="col-lg-6 portfolio-item isotope-item filter-spring">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/cineflow-main-thumb.png" class="img-fluid" alt="CineFlow 영화 예매 메인 화면 썸네일" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/cineflow-main-hero.png" class="glightbox action-btn preview-btn" title="CineFlow 영화 예매 메인 화면 썸네일"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/cineflow-spring-boot" class="action-btn" title="CineFlow 영화 예매 관리 시스템 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-cineflow.html" class="action-btn details-btn" title="CineFlow 영화 예매 관리 시스템 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">대표 프로젝트 · Spring Boot</span>
                    <span class="portfolio-year">2026</span>
                  </div>
                  <h3 class="portfolio-title">CineFlow 영화 예매 관리 시스템</h3>
                  <p class="portfolio-description">CineFlow는 Spring Boot와 Thymeleaf로 구현한 영화 예매 웹 애플리케이션입니다. 영화 탐색, 빠른예매, 좌석 선택, 결제 흐름, 예매 조회·취소를 DB 상태 기준으로 연결하고, 관리자 화면에서 영화·극장·상영관·상영일정·예매 데이터를 운영하도록 구성했습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>Java · Spring Boot · Thymeleaf · JPA · Spring Security · Flyway · MySQL · H2</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>영화 탐색·빠른예매 / 좌석·상영일정·예매 상태 연결 / 결제 상태 저장 / 회원·비회원 조회 분기 / 관리자 운영 / Security 권한 분리 / Flyway</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-cineflow.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/cineflow-spring-boot" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-6 portfolio-item isotope-item filter-laravel">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/esports_main.png" class="img-fluid" alt="e스포츠 포털 및 경기관리 웹사이트" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/esports_main.png" class="glightbox action-btn preview-btn" title="e스포츠 포털 및 경기관리 웹사이트"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/esports-portal-management" class="action-btn" title="e스포츠 포털 및 경기관리 웹사이트 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-esports.html" class="action-btn details-btn" title="e스포츠 포털 및 경기관리 웹사이트 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">대표 프로젝트 · Laravel</span>
                    <span class="portfolio-year">2025.12</span>
                  </div>
                  <h3 class="portfolio-title">e스포츠 포털 및 경기관리 웹사이트</h3>
                  <p class="portfolio-description">경기 결과가 <code>finished</code> 상태인 경우에만 순위에 반영되도록 집계 기준을 분리한 Laravel 기반 프로젝트입니다. 팀별 경기 데이터로 승/패·승률·득실차를 계산해 순위표를 갱신하고, 관리자 인증·미들웨어 접근 제어와 slug 기반 뉴스 상세 라우팅이 같은 권한 기준으로 동작하게 했습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>Laravel · Bootstrap · MySQL</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>finished 경기만 반영하는 순위 집계 / 팀별 승·패·승률·득실차 계산 / 관리자 인증·미들웨어 / slug·썸네일 기반 뉴스 관리</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-esports.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/esports-portal-management" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-6 portfolio-item isotope-item filter-php">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/shopping_main.png" class="img-fluid" alt="쇼핑몰 판매관리 사이트" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/shopping_main.png" class="glightbox action-btn preview-btn" title="쇼핑몰 판매관리 사이트"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/shopping-mall-management-php" class="action-btn" title="쇼핑몰 판매관리 사이트 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-details.html" class="action-btn details-btn" title="쇼핑몰 판매관리 사이트 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">대표 프로젝트 · PHP</span>
                    <span class="portfolio-year">2025.06</span>
                  </div>
                  <h3 class="portfolio-title">쇼핑몰 판매관리 사이트</h3>
                  <p class="portfolio-description">PHP와 Bootstrap 기반으로 구축한 쇼핑몰 판매관리 프로젝트입니다. 주문번호를 생성한 뒤 주문 마스터 1건과 주문 상세 N건을 저장하고, 사용자 주문 조회와 관리자 주문 관리가 같은 주문번호를 참조하도록 구현했습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>PHP · Bootstrap · MySQL</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>상품 조회 / 장바구니 / 주문·결제 처리 / 관리자 페이지</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-details.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/shopping-mall-management-php" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-6 portfolio-item isotope-item filter-laravel">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="assets/img/portfolio/portfolio-portrait-3.webp" class="img-fluid" alt="베이커리 판매관리 웹사이트" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-portrait-3.webp" class="glightbox action-btn preview-btn" title="베이커리 판매관리 웹사이트"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/bakery-sales-management-laravel" class="action-btn" title="베이커리 판매관리 웹사이트 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-bakery.html" class="action-btn details-btn" title="베이커리 판매관리 웹사이트 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">대표 프로젝트 · Laravel</span>
                    <span class="portfolio-year">2025.12</span>
                  </div>
                  <h3 class="portfolio-title">베이커리 판매관리 웹사이트</h3>
                  <p class="portfolio-description">Laravel 기반의 베이커리 판매관리 프로젝트입니다. 제품 ID를 기준으로 재고 수량과 판매 내역을 조회하고, 관리자 화면에서 제품별 재고·판매 상태를 함께 확인하도록 구성했습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>Laravel · Bootstrap · MySQL</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>제품 등록 / 재고 관리 / 판매 내역 확인 / 관리자 화면 기능</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-bakery.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/bakery-sales-management-laravel" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-6 portfolio-item isotope-item filter-data">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png" class="img-fluid" alt="Cine21 영화 데이터 상관관계 히트맵" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png" class="glightbox action-btn preview-btn" title="Cine21 영화 데이터 상관관계 히트맵"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/movie-pca-rating-analysis" class="action-btn" title="Cine21 영화 데이터 PCA·회귀 분석 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-movie-analysis.html" class="action-btn details-btn" title="Cine21 영화 데이터 PCA·회귀 분석 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">데이터 분석 · Python</span>
                    <span class="portfolio-year">2026</span>
                  </div>
                  <h3 class="portfolio-title">Cine21 영화 데이터 PCA·회귀 분석</h3>
                  <p class="portfolio-description">Cine21 영화 CSV 데이터를 결측값·이상치 처리 후 정규화하고, PCA·상관분석·선형회귀로 평점과 관객 수 지표의 관계를 분석했습니다. PC1 설명분산비, R², MSE와 시각화 이미지를 남겨 분석 결과를 수치와 그래프로 확인할 수 있게 했습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>Python · pandas · scikit-learn · statsmodels · matplotlib</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>결측값 처리 / 이상치 완화 / MinMax 정규화 / PCA 차원 축소 / 상관분석 / PC1 기반 선형회귀</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-movie-analysis.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/movie-pca-rating-analysis" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-6 portfolio-item isotope-item filter-etc">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png" class="img-fluid" alt="Undead Survivor 모바일 생존 게임 플레이 화면" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png" class="glightbox action-btn preview-btn" title="Undead Survivor 게임 플레이 화면"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/undead-survivor-unity" class="action-btn" title="Undead Survivor 모바일 생존 게임 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-undead-survivor.html" class="action-btn details-btn" title="Undead Survivor 모바일 생존 게임 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">모바일 게임 · Unity/C#</span>
                    <span class="portfolio-year">2026</span>
                  </div>
                  <h3 class="portfolio-title">Undead Survivor 모바일 생존 게임</h3>
                  <p class="portfolio-description">Unity와 C#으로 제작한 Android 생존형 액션 게임입니다. 캐릭터 선택, 자동 공격, 적 스폰, 레벨업 보상, 생존/사망 결과 화면을 구현하고, PoolManager로 적과 투사체를 재사용해 반복 생성 비용을 줄였습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>Unity · C# · Android · Object Pooling</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>플레이어 이동 / 자동 공격 / 적 스폰 / 오브젝트 풀링 / 레벨업 보상 / 생존·사망 결과 처리</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-undead-survivor.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/undead-survivor-unity" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-6 portfolio-item isotope-item filter-etc">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <img src="https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png" class="img-fluid" alt="HealthyUp iOS BMI 계산 결과 화면" loading="lazy">
                  <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                      <a href="https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png" class="glightbox action-btn preview-btn" title="HealthyUp BMI 계산 결과 화면"><i class="bi bi-eye"></i></a>
                      <a href="https://github.com/allen8524/healthyup-ios" class="action-btn" title="HealthyUp iOS 건강관리 앱 GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                      <a href="portfolio-healthyup.html" class="action-btn details-btn" title="HealthyUp iOS 건강관리 앱 상세 보기"><i class="bi bi-arrow-up-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="portfolio-content">
                  <div class="portfolio-meta">
                    <span class="portfolio-category">iOS 앱 · Swift</span>
                    <span class="portfolio-year">2026</span>
                  </div>
                  <h3 class="portfolio-title">HealthyUp iOS 건강관리 앱</h3>
                  <p class="portfolio-description">UIKit과 Storyboard 기반 iOS 건강관리 앱입니다. BMI 입력값 검증과 성별 기준 판정을 처리하고, 결과 확인 이후 운동 정보 WebView, 로컬 운동 영상 재생, 운동 계획 설정 화면으로 이어지는 탭 구조를 구현했습니다.</p>
                  <div class="portfolio-proof-list">
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">사용 기술</span>
                      <p>Swift · UIKit · Storyboard · WebKit · AVKit</p>
                    </div>
                    <div class="portfolio-proof-item">
                      <span class="portfolio-proof-label">핵심 기능</span>
                      <p>BMI 계산 / 입력 검증 / 성별 기준 분기 / 운동 정보 WebView / 운동 영상 재생 / 운동 계획 설정</p>
                    </div>
                  </div>
                  <div class="portfolio-cta">
                    <a href="portfolio-healthyup.html" class="portfolio-link primary">상세보기</a>
                    <a href="https://github.com/allen8524/healthyup-ios" class="portfolio-link secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

          </div><!-- End Portfolio Container -->

        </div>

      </div>

    </section><!-- /Portfolio Section -->`,
  services: `<section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>개발 역량</h2>
        <p>프로젝트에서 직접 구현한 백엔드 중심 기능 범위를 정리했습니다.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-5">

          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div class="service-item">
              <div class="service-icon">
                <i class="bi bi-palette"></i>
              </div>
              <div class="service-content">
                <h3><a href="service-auth.html">회원 및 권한 관리</a></h3>
                <p>쇼핑몰과 CineFlow 프로젝트에서 로그인 상태, 회원 기능, 관리자 권한을 분리하고 세션 또는 Spring Security 기준으로 접근 흐름을 관리했습니다.</p>
                <a href="service-auth.html" class="read-more">
                  <span>자세히 보기</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="250">
            <div class="service-item">
              <div class="service-icon">
                <i class="bi bi-code-slash"></i>
              </div>
              <div class="service-content">
                <h3><a href="service-order.html">주문·예매 상태 관리</a></h3>
                <p>쇼핑몰에서는 장바구니와 주문 저장 흐름을, CineFlow에서는 상영 일정 선택부터 좌석 선택, 결제수단 선택, 예매 완료·취소 흐름을 상태 기준으로 연결했습니다.</p>
                <a href="service-order.html" class="read-more">
                  <span>자세히 보기</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="300">
            <div class="service-item">
              <div class="service-icon">
                <i class="bi bi-phone"></i>
              </div>
              <div class="service-content">
                <h3><a href="service-board.html">게시판 및 콘텐츠 관리</a></h3>
                <p>e스포츠 포털에서 뉴스·공지·패치노트와 팀·선수·경기 데이터를 관리자 등록과 사용자 조회 기준으로 분리했습니다.</p>
                <a href="service-board.html" class="read-more">
                  <span>자세히 보기</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="350">
            <div class="service-item">
              <div class="service-icon">
                <i class="bi bi-megaphone"></i>
              </div>
              <div class="service-content">
                <h3><a href="service-database.html">DB 설계 및 연동</a></h3>
                <p>Spring Boot·Laravel·PHP 프로젝트에서 예매·경기·주문 데이터를 관계형 구조로 나누고, Movie PCA에서는 CSV 데이터를 전처리해 분석 가능한 형태로 변환했습니다.</p>
                <a href="service-database.html" class="read-more">
                  <span>자세히 보기</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section><!-- /Services Section -->`,
  troubleshooting: `<section id="testimonials" class="testimonials section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>트러블슈팅</h2>
        <p>프로젝트 구현 중 마주친 문제를 원인과 해결 결과 중심으로 정리했습니다.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="troubleshooting-lab">
          <div class="trouble-nav nav" role="tablist" aria-label="트러블슈팅 사례 탭">
            <button class="trouble-nav-item active" id="trouble-tab-shopping" data-bs-toggle="tab" data-bs-target="#trouble-panel-shopping" type="button" role="tab" aria-controls="trouble-panel-shopping" aria-selected="true">
              <span class="trouble-nav-label">쇼핑몰 판매관리</span>
              <span class="trouble-nav-keyword">주문 흐름 정합성</span>
              <span class="trouble-nav-stack">PHP · Bootstrap · MySQL</span>
            </button>
            <button class="trouble-nav-item" id="trouble-tab-esports" data-bs-toggle="tab" data-bs-target="#trouble-panel-esports" type="button" role="tab" aria-controls="trouble-panel-esports" aria-selected="false">
              <span class="trouble-nav-label">e스포츠 포털/관리</span>
              <span class="trouble-nav-keyword">순위 반영 지연 개선</span>
              <span class="trouble-nav-stack">Laravel · Blade · MySQL · Ajax</span>
            </button>
            <button class="trouble-nav-item" id="trouble-tab-bakery" data-bs-toggle="tab" data-bs-target="#trouble-panel-bakery" type="button" role="tab" aria-controls="trouble-panel-bakery" aria-selected="false">
              <span class="trouble-nav-label">베이커리 판매관리</span>
              <span class="trouble-nav-keyword">누락 데이터 예외 대응</span>
              <span class="trouble-nav-stack">Laravel · Blade · MySQL</span>
            </button>
            <button class="trouble-nav-item" id="trouble-tab-cineflow" data-bs-toggle="tab" data-bs-target="#trouble-panel-cineflow" type="button" role="tab" aria-controls="trouble-panel-cineflow" aria-selected="false">
              <span class="trouble-nav-label">CineFlow</span>
              <span class="trouble-nav-keyword">예매 상태 정합성</span>
              <span class="trouble-nav-stack">Spring Boot · JPA · Security · MySQL</span>
            </button>
          </div>

          <div class="tab-content trouble-stage">
            <article class="trouble-panel tab-pane fade show active" id="trouble-panel-shopping" role="tabpanel" aria-labelledby="trouble-tab-shopping" tabindex="0">
              <div class="trouble-case">
                <header class="trouble-case-head">
                  <p class="trouble-case-stack">PHP · Bootstrap · MySQL</p>
                  <h3>쇼핑몰 판매관리 프로젝트</h3>
                  <p>장바구니·주문 데이터 흐름을 기준으로 사용자 주문과 관리자 주문 조회 기준을 일치시킨 사례입니다.</p>
                </header>
                <ol class="trouble-flow">
                  <li><span>문제 상황</span><p>장바구니에서 주문서로 이동할 때 상품 정보가 누락되어 주문 저장 기준이 화면 흐름과 맞지 않았습니다.</p></li>
                  <li><span>원인 분석</span><p>장바구니 기준과 주문 저장 기준이 분리되어 데이터 키가 일치하지 않았습니다.</p></li>
                  <li><span>수정 방향</span><p>주문번호를 중심으로 <code>cart.php</code> → <code>order.php</code> → <code>order_ok.php</code> 흐름을 재정렬했습니다.</p></li>
                  <li><span>결과</span><p>사용자 주문 내역과 관리자 주문 조회 기준이 안정적으로 일치했습니다.</p></li>
                </ol>
              </div>
              <aside class="trouble-evidence" aria-label="근거와 파일 흐름">
                <h4>근거 & 저장 흐름</h4>
                <p class="trouble-evidence-note">화면 흐름과 저장 기준을 같은 주문번호 축으로 맞춰 누락 구간을 제거했습니다.</p>
                <div class="trouble-pipeline">
                  <span><code>cart.php</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>order.php</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>order_ok.php</code></span>
                </div>
                <ul class="trouble-tags"><li>장바구니 기준 정렬</li><li>주문번호 중심 저장</li><li>관리자 조회 일치</li></ul>
              </aside>
            </article>

            <article class="trouble-panel tab-pane fade" id="trouble-panel-esports" role="tabpanel" aria-labelledby="trouble-tab-esports" tabindex="0">
              <div class="trouble-case">
                <header class="trouble-case-head">
                  <p class="trouble-case-stack">Laravel · Blade · MySQL · Ajax</p>
                  <h3>e스포츠 포털 및 경기관리 프로젝트</h3>
                  <p>경기 결과 저장 이후 순위표 반영 지연을 응답 규격 통일과 집계 정렬 기준 정비로 해결한 사례입니다.</p>
                </header>
                <ol class="trouble-flow">
                  <li><span>문제 상황</span><p>경기 결과를 저장해도 순위표 갱신 시점이 늦어 사용자 화면과 관리자 화면의 상태가 다르게 보였습니다.</p></li>
                  <li><span>원인 분석</span><p>Ajax 응답 형식과 순위 계산 집계 조건이 일관되지 않아 갱신 트리거가 분산되었습니다.</p></li>
                  <li><span>수정 방향</span><p>JSON 응답 규격을 통일하고 경기 상태를 <code>finished</code> 기준으로 정렬해 집계 시점을 고정했습니다.</p></li>
                  <li><span>결과</span><p>경기 목록과 순위표가 같은 기준으로 갱신되어 실시간 운영 시 신뢰도를 높였습니다.</p></li>
                </ol>
              </div>
              <aside class="trouble-evidence" aria-label="근거와 파일 흐름">
                <h4>근거 & 처리 흐름</h4>
                <p class="trouble-evidence-note">라우팅 응답과 관리자 매치 화면의 집계 조건을 통일해 동기화를 안정화했습니다.</p>
                <div class="trouble-pipeline">
                  <span><code>routes/web.php</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>admin/matches</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>rank update</code></span>
                </div>
                <ul class="trouble-tags"><li>JSON 응답 통일</li><li>finished 정렬</li><li>순위표 동기화</li></ul>
              </aside>
            </article>

            <article class="trouble-panel tab-pane fade" id="trouble-panel-bakery" role="tabpanel" aria-labelledby="trouble-tab-bakery" tabindex="0">
              <div class="trouble-case">
                <header class="trouble-case-head">
                  <p class="trouble-case-stack">Laravel · Blade · MySQL</p>
                  <h3>베이커리 판매관리 프로젝트</h3>
                  <p>누락 데이터가 있는 상황에서도 조회 화면을 안정적으로 유지하도록 조회 키와 예외 분기를 정리한 사례입니다.</p>
                </header>
                <ol class="trouble-flow">
                  <li><span>문제 상황</span><p>재고·판매 조회 시 제품 기준 키가 맞지 않아 빈 값 또는 예외가 발생했고 화면 신뢰도가 떨어졌습니다.</p></li>
                  <li><span>원인 분석</span><p>제품·재고·판매 데이터를 연결하는 조회 키가 화면별로 다르게 사용되었습니다.</p></li>
                  <li><span>수정 방향</span><p>제품 중심 조회 조건으로 통일하고 null 분기 처리로 누락 데이터 시에도 응답을 보장했습니다.</p></li>
                  <li><span>결과</span><p>데이터 누락 구간에서도 관리자 화면이 끊기지 않고 동일한 UI 흐름을 유지했습니다.</p></li>
                </ol>
              </div>
              <aside class="trouble-evidence" aria-label="근거와 파일 흐름">
                <h4>근거 & 조회 흐름</h4>
                <p class="trouble-evidence-note">조회 키를 제품 단위로 통일해 누락 데이터 상황에서도 안정적인 화면 응답을 유지했습니다.</p>
                <div class="trouble-pipeline">
                  <span><code>Controllers</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>Views</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>Migrations</code></span>
                </div>
                <ul class="trouble-tags"><li>조회 키 통일</li><li>null 분기 처리</li><li>화면 응답 유지</li></ul>
              </aside>
            </article>

            <article class="trouble-panel tab-pane fade" id="trouble-panel-cineflow" role="tabpanel" aria-labelledby="trouble-tab-cineflow" tabindex="0">
              <div class="trouble-case">
                <header class="trouble-case-head">
                  <p class="trouble-case-stack">Java · Spring Boot · Thymeleaf · JPA · Security</p>
                  <h3>CineFlow 영화 예매 관리 시스템</h3>
                  <p>상영 일정, 좌석 선택, 결제, 예매 조회가 같은 예매 상태 기준으로 이어지도록 조정한 사례입니다.</p>
                </header>
                <ol class="trouble-flow">
                  <li><span>문제 상황</span><p>상영 일정 선택 후 좌석·결제 단계로 이동할 때 선택값이 분리되어 예매 완료와 조회 화면의 상태 기준이 흔들리는 문제가 있었습니다.</p></li>
                  <li><span>원인 분석</span><p>영화, 상영 일정, 좌석, 결제 정보가 단계별 파라미터로 전달되어 저장 이후 기준 데이터가 명확히 묶이지 않았습니다.</p></li>
                  <li><span>수정 방향</span><p><code>BookingController</code>와 <code>BookingService</code>에서 상영 일정과 좌석 정보를 예매 엔티티 기준으로 묶고, 완료·조회·취소 흐름이 같은 <code>bookingId</code> 상태를 참조하도록 정리했습니다.</p></li>
                  <li><span>결과</span><p>사용자 예매 완료, 회원·비회원 조회, 관리자 예매 관리가 같은 예매 상태를 기준으로 확인되도록 개선했습니다.</p></li>
                </ol>
              </div>
              <aside class="trouble-evidence" aria-label="근거와 처리 흐름">
                <h4>근거 & 처리 흐름</h4>
                <p class="trouble-evidence-note">예매 생성 이후 조회와 취소가 같은 예약 식별자와 상태값을 참조하도록 흐름을 맞췄습니다.</p>
                <div class="trouble-pipeline">
                  <span><code>BookingController</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>BookingService</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>Booking</code></span><i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                  <span><code>bookingId</code></span>
                </div>
                <ul class="trouble-tags"><li>예매 상태 연결</li><li>좌석 선택 기준 유지</li><li>조회·취소 흐름 일치</li></ul>
              </aside>
            </article>
          </div>
        </div>
      </div>

    </section><!-- /Troubleshooting Section -->`,
  contact: `<section id="contact" class="contact section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>연락처</h2>
        <p>채용·협업 문의는 이메일로 가장 빠르게 확인하며, GitHub와 블로그에서 작업 내용을 이어서 보실 수 있습니다.</p>
      </div><!-- End Section Title -->

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5">

            <div class="info-item">
              <div class="info-icon">
                <i class="bi bi-chat-dots"></i>
              </div>
              <div class="info-content">
                <h4>연락처 안내</h4>
                <p>필요한 채널만 빠르게 확인할 수 있도록 핵심 연락처와 작업 링크를 한곳에 정리했습니다.</p>
              </div>
            </div>

            <div class="contact-details">

              <div class="detail-item">
                <div class="detail-icon">
                  <i class="bi bi-envelope-open"></i>
                </div>
                <div class="detail-content">
                  <span class="detail-label">이메일</span>
                  <a href="mailto:minseo8524@naver.com" class="detail-value text-decoration-none">minseo8524@naver.com</a>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon">
                  <i class="bi bi-github"></i>
                </div>
                <div class="detail-content">
                  <span class="detail-label">GitHub</span>
                  <a href="https://github.com/allen8524" class="detail-value text-decoration-none" target="_blank" rel="noopener noreferrer">github.com/allen8524</a>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon">
                  <i class="bi bi-journal-text"></i>
                </div>
                <div class="detail-content">
                  <span class="detail-label">블로그</span>
                  <a href="https://allen8524.tistory.com/" class="detail-value text-decoration-none" target="_blank" rel="noopener noreferrer">allen8524.tistory.com</a>
                </div>
              </div>

            </div>

          </div>

          <div class="col-lg-7">
            <div class="form-wrapper">
              <div class="form-header">
                <h3>바로 연락하기</h3>
                <p>이메일 복사와 메일 보내기, GitHub·블로그 바로가기를 한 번에 사용할 수 있습니다.</p>
              </div>

              <div class="form-group">
                <label for="contactEmailAddress">이메일</label>
                <input type="text" id="contactEmailAddress" value="minseo8524@naver.com" readonly aria-label="이메일 주소">
              </div>

              <div class="row g-3">
                <div class="col-md-6">
                  <button type="button" class="submit-btn w-100 justify-content-center copy-trigger" data-copy-text="minseo8524@naver.com" data-copy-message="이메일 주소가 복사되었습니다" aria-label="이메일 주소 복사">
                    <span>이메일 복사</span>
                    <i class="bi bi-copy"></i>
                  </button>
                </div>
                <div class="col-md-6">
                  <a href="mailto:minseo8524@naver.com" class="submit-btn w-100 justify-content-center" aria-label="이메일 앱 열기">
                    <span>메일 보내기</span>
                    <i class="bi bi-envelope-arrow-up"></i>
                  </a>
                </div>
                <div class="col-md-6">
                  <a href="https://github.com/allen8524" class="submit-btn w-100 justify-content-center" target="_blank" rel="noopener noreferrer" aria-label="GitHub 바로가기">
                    <span>GitHub 바로가기</span>
                    <i class="bi bi-github"></i>
                  </a>
                </div>
                <div class="col-md-6">
                  <a href="https://allen8524.tistory.com/" class="submit-btn w-100 justify-content-center" target="_blank" rel="noopener noreferrer" aria-label="블로그 바로가기">
                    <span>블로그 보기</span>
                    <i class="bi bi-journal-text"></i>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section><!-- /Contact Section -->`,
  footer: `<footer id="footer" class="footer light-background">
    <div class="container">
      <h3 class="sitename">황민서</h3>
      <p>예매, 주문, 콘텐츠 관리, DB 연동을 중심으로 데이터 분석·모바일·게임 프로젝트까지 구현 흐름을 정리했습니다.</p>
      <div class="social-links d-flex justify-content-center">
        <a href="https://www.instagram.com/min._.seo_o/" class="instagram" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
        <a href="https://github.com/allen8524" class="github" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
        <a href="https://allen8524.tistory.com/" class="tistory" title="Tistory" aria-label="Tistory" target="_blank" rel="noopener noreferrer"><i class="bi bi-journal-text"></i></a>
      </div>
      <div class="container">
        <div class="copyright">
          <span>저작권</span> <strong class="px-1 sitename">황민서</strong> <span>모든 권리 보유</span>
        </div>
      </div>
    </div>
  </footer>`,
  scrollTop: `<a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>`,
  preloader: `<div id="preloader"></div>`,
} as const;
