import type { Project, ProjectFilter } from "../types/project";

export type ProjectFilterOption = {
  label: string;
  value: ProjectFilter | "all";
};

export const projectFilters: ProjectFilterOption[] = [
  { label: "전체", value: "all" },
  { label: "Spring", value: "spring" },
  { label: "Laravel", value: "laravel" },
  { label: "PHP", value: "php" },
  { label: "데이터분석", value: "data" },
  { label: "모바일·게임", value: "etc" },
];

export const projects: Project[] = [
  {
    id: "cineflow",
    title: "CineFlow 영화 예매 관리 시스템",
    category: "대표 프로젝트 · Spring Boot",
    year: "2026",
    summary: "Spring Boot와 Thymeleaf로 구현한 영화 예매 웹 애플리케이션입니다.",
    description:
      "CineFlow는 Spring Boot와 Thymeleaf로 구현한 영화 예매 웹 애플리케이션입니다. 영화 탐색, 빠른예매, 좌석 선택, 결제 흐름, 예매 조회·취소를 DB 상태 기준으로 연결하고, 관리자 화면에서 영화·극장·상영관·상영일정·예매 데이터를 운영하도록 구성했습니다.",
    image: "assets/img/portfolio/cineflow-main-thumb.png",
    previewImage: "assets/img/portfolio/cineflow-main-hero.png",
    techStack: ["Java", "Spring Boot", "Thymeleaf", "JPA", "Spring Security", "Flyway", "MySQL", "H2"],
    features: [
      "영화 탐색·빠른예매",
      "좌석·상영일정·예매 상태 연결",
      "결제 상태 저장",
      "회원·비회원 조회 분기",
      "관리자 운영",
      "Security 권한 분리",
      "Flyway",
    ],
    githubUrl: "https://github.com/allen8524/cineflow-spring-boot",
    detailUrl: "/projects/cineflow",
    filter: "spring",
    type: "web",
  },
  {
    id: "esports",
    title: "e스포츠 포털 및 경기관리 웹사이트",
    category: "대표 프로젝트 · Laravel",
    year: "2025.12",
    summary: "경기 결과 상태를 기준으로 순위 집계 기준을 분리한 Laravel 기반 프로젝트입니다.",
    description:
      "경기 결과가 finished 상태인 경우에만 순위에 반영되도록 집계 기준을 분리한 Laravel 기반 프로젝트입니다. 팀별 경기 데이터로 승/패·승률·득실차를 계산해 순위표를 갱신하고, 관리자 인증·미들웨어 접근 제어와 slug 기반 뉴스 상세 라우팅이 같은 권한 기준으로 동작하게 했습니다.",
    image: "assets/img/portfolio/esports_main.png",
    previewImage: "assets/img/portfolio/esports_main.png",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    features: [
      "finished 경기만 반영하는 순위 집계",
      "팀별 승·패·승률·득실차 계산",
      "관리자 인증·미들웨어",
      "slug·썸네일 기반 뉴스 관리",
    ],
    githubUrl: "https://github.com/allen8524/esports-portal-management",
    detailUrl: "/projects/esports",
    filter: "laravel",
    type: "web",
  },
  {
    id: "shopping",
    title: "쇼핑몰 판매관리 사이트",
    category: "대표 프로젝트 · PHP",
    year: "2025.06",
    summary: "PHP와 Bootstrap 기반으로 구축한 쇼핑몰 판매관리 프로젝트입니다.",
    description:
      "PHP와 Bootstrap 기반으로 구축한 쇼핑몰 판매관리 프로젝트입니다. 주문번호를 생성한 뒤 주문 마스터 1건과 주문 상세 N건을 저장하고, 사용자 주문 조회와 관리자 주문 관리가 같은 주문번호를 참조하도록 구현했습니다.",
    image: "assets/img/portfolio/shopping_main.png",
    previewImage: "assets/img/portfolio/shopping_main.png",
    techStack: ["PHP", "Bootstrap", "MySQL"],
    features: ["상품 조회", "장바구니", "주문·결제 처리", "관리자 페이지"],
    githubUrl: "https://github.com/allen8524/shopping-mall-management-php",
    detailUrl: "/projects/shopping",
    filter: "php",
    type: "web",
  },
  {
    id: "bakery",
    title: "베이커리 판매관리 웹사이트",
    category: "대표 프로젝트 · Laravel",
    year: "2025.12",
    summary: "Laravel 기반의 베이커리 판매관리 프로젝트입니다.",
    description:
      "Laravel 기반의 베이커리 판매관리 프로젝트입니다. 제품 ID를 기준으로 재고 수량과 판매 내역을 조회하고, 관리자 화면에서 제품별 재고·판매 상태를 함께 확인하도록 구성했습니다.",
    image: "assets/img/portfolio/portfolio-portrait-3.webp",
    previewImage: "assets/img/portfolio/portfolio-portrait-3.webp",
    techStack: ["Laravel", "Bootstrap", "MySQL"],
    features: ["제품 등록", "재고 관리", "판매 내역 확인", "관리자 화면 기능"],
    githubUrl: "https://github.com/allen8524/bakery-sales-management-laravel",
    detailUrl: "/projects/bakery",
    filter: "laravel",
    type: "web",
  },
  {
    id: "movie-analysis",
    title: "Cine21 영화 데이터 PCA·회귀 분석",
    category: "데이터 분석 · Python",
    year: "2026",
    summary: "Cine21 영화 CSV 데이터를 PCA·상관분석·선형회귀로 분석했습니다.",
    description:
      "Cine21 영화 CSV 데이터를 결측값·이상치 처리 후 정규화하고, PCA·상관분석·선형회귀로 평점과 관객 수 지표의 관계를 분석했습니다. PC1 설명분산비, R², MSE와 시각화 이미지를 남겨 분석 결과를 수치와 그래프로 확인할 수 있게 했습니다.",
    image:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png",
    previewImage:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png",
    techStack: ["Python", "pandas", "scikit-learn", "statsmodels", "matplotlib"],
    features: ["결측값 처리", "이상치 완화", "MinMax 정규화", "PCA 차원 축소", "상관분석", "PC1 기반 선형회귀"],
    githubUrl: "https://github.com/allen8524/movie-pca-rating-analysis",
    detailUrl: "/projects/movie-analysis",
    filter: "data",
    type: "data-analysis",
  },
  {
    id: "undead-survivor",
    title: "Undead Survivor 모바일 생존 게임",
    category: "모바일 게임 · Unity/C#",
    year: "2026",
    summary: "Unity와 C#으로 제작한 Android 생존형 액션 게임입니다.",
    description:
      "Unity와 C#으로 제작한 Android 생존형 액션 게임입니다. 캐릭터 선택, 자동 공격, 적 스폰, 레벨업 보상, 생존/사망 결과 화면을 구현하고, PoolManager로 적과 투사체를 재사용해 반복 생성 비용을 줄였습니다.",
    image: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
    previewImage:
      "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
    techStack: ["Unity", "C#", "Android", "Object Pooling"],
    features: ["플레이어 이동", "자동 공격", "적 스폰", "오브젝트 풀링", "레벨업 보상", "생존·사망 결과 처리"],
    githubUrl: "https://github.com/allen8524/undead-survivor-unity",
    detailUrl: "/projects/undead-survivor",
    filter: "etc",
    type: "game",
  },
  {
    id: "healthyup",
    title: "HealthyUp iOS 건강관리 앱",
    category: "iOS 앱 · Swift",
    year: "2026",
    summary: "UIKit과 Storyboard 기반 iOS 건강관리 앱입니다.",
    description:
      "UIKit과 Storyboard 기반 iOS 건강관리 앱입니다. BMI 입력값 검증과 성별 기준 판정을 처리하고, 결과 확인 이후 운동 정보 WebView, 로컬 운동 영상 재생, 운동 계획 설정 화면으로 이어지는 탭 구조를 구현했습니다.",
    image: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png",
    previewImage: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png",
    techStack: ["Swift", "UIKit", "Storyboard", "WebKit", "AVKit"],
    features: ["BMI 계산", "입력 검증", "성별 기준 분기", "운동 정보 WebView", "운동 영상 재생", "운동 계획 설정"],
    githubUrl: "https://github.com/allen8524/healthyup-ios",
    detailUrl: "/projects/healthyup",
    filter: "etc",
    type: "mobile-app",
  },
];
