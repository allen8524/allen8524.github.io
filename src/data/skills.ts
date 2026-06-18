export const skillsSection = {
  title: "사용 기술 및 경험",
  description: "백엔드 기능을 중심으로 데이터 분석, 모바일, 게임 프로젝트에서 사용한 기술을 함께 정리했습니다.",
} as const;

export const skillCategories = [
  {
    id: "backend",
    delay: 200,
    title: "백엔드",
    subtitle: "웹 서비스 기능 구현에 직접 사용한 기술",
    skills: [
      {
        id: "java-spring-boot",
        name: "Java · Spring Boot",
        detail: "JPA, Security, Thymeleaf 기반 예매 흐름 구현",
      },
      {
        id: "php-laravel",
        name: "PHP · Laravel",
        detail: "CRUD, 관리자 기능, 주문 · 콘텐츠 관리 구현",
      },
      {
        id: "business-features",
        name: "회원/주문/예매/게시판 기능",
        detail: "프로젝트 적용 경험",
      },
    ],
  },
  {
    id: "database-data",
    delay: 250,
    title: "데이터베이스 · 데이터 처리",
    subtitle: "데이터 저장 구조와 분석 입력 데이터를 다뤄본 경험",
    skills: [
      {
        id: "mysql-h2-oracle",
        name: "MySQL · H2 · Oracle",
        detail: "테이블 설계, CRUD, 조회 흐름 관리",
      },
      {
        id: "jpa-flyway-sql",
        name: "JPA · Flyway · SQL",
        detail: "엔티티 매핑, 마이그레이션, DB 변경 이력 관리",
      },
      {
        id: "python-data",
        name: "Python · pandas · scikit-learn",
        detail: "CSV 전처리, PCA, 상관분석, 회귀분석 경험",
      },
    ],
  },
  {
    id: "frontend-mobile-tools",
    delay: 300,
    title: "프론트엔드 · 모바일 · 도구",
    subtitle: "화면 구성과 모바일 · 게임 구현에 사용한 기술",
    skills: [
      {
        id: "html-css-js",
        name: "HTML · CSS · JavaScript",
        detail: "반응형 페이지와 기본 인터랙션 구성",
      },
      {
        id: "swift-uikit",
        name: "Swift · UIKit · WebKit · AVKit",
        detail: "iOS 탭 화면, BMI 계산, WebView, 영상 재생 구현",
      },
      {
        id: "unity-github",
        name: "Unity · C# · GitHub",
        detail: "게임 루프, 오브젝트 풀링, 코드 저장소 정리 경험",
      },
    ],
  },
] as const;

export const skillsHighlight = {
  icon: "bi bi-trophy",
  title: "학습 및 프로젝트 집중 기간",
  years: 4,
  label: "년+",
  description: "CS 스터디와 개인 프로젝트를 병행하며 요청 처리, DB 연동, 데이터 전처리 경험을 꾸준히 쌓았습니다.",
} as const;

export const technologies = [
  { id: "java", icon: "bi bi-filetype-js", name: "Java" },
  { id: "spring-boot", icon: "bi bi-code-square", name: "Spring Boot" },
  { id: "laravel", icon: "bi bi-server", name: "Laravel" },
  { id: "mysql", icon: "bi bi-cloud", name: "MySQL" },
  { id: "python", icon: "bi bi-palette", name: "Python" },
  { id: "swift", icon: "bi bi-diagram-3", name: "Swift" },
] as const;
