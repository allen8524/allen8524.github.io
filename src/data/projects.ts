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
    summary: "Spring Boot 기반 영화 예매 웹 애플리케이션",
    description:
      "영화 탐색, 빠른예매, 좌석 선택, 결제, 예매 조회·취소 흐름 구현. 관리자 화면에서 영화·극장·상영일정·예매 데이터 운영",
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
    summary: "Laravel 기반 경기·뉴스·순위 관리 프로젝트",
    description:
      "finished 경기만 순위에 반영. 팀별 승·패·승률·득실차 집계, 관리자 인증·미들웨어, slug 기반 뉴스 상세 라우팅 구현",
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
    summary: "PHP 기반 쇼핑몰 주문·관리 프로젝트",
    description:
      "상품 조회, 장바구니, 주문·결제, 관리자 주문 관리 구현. 주문번호 기준으로 주문 마스터와 상세 데이터 연결",
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
    summary: "Laravel 기반 재고·판매 관리 프로젝트",
    description:
      "제품 등록, 재고 관리, 판매 내역, 매입·매출 장부 확인 구현. 제품 ID 기준으로 재고와 판매 상태 연결",
    image:
      "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
    previewImage:
      "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
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
    summary: "Cine21 영화 CSV 기반 PCA·회귀 분석",
    description:
      "결측값·이상치 처리, 정규화, PCA, 상관분석, 선형회귀 수행. PC1 설명분산비, R², MSE와 시각화 결과 정리",
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
    summary: "Unity 기반 Android 생존형 액션 게임",
    description:
      "캐릭터 선택, 자동 공격, 적 스폰, 레벨업 보상, 생존·사망 결과 처리 구현. Object Pooling으로 반복 생성 비용 절감",
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
    summary: "UIKit 기반 iOS 건강관리 앱",
    description:
      "BMI 계산·입력 검증·성별 기준 분기 구현. 운동 정보 WebView, 로컬 영상 재생, 운동 계획 설정 화면 연결",
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
