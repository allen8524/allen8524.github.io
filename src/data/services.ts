import type { ServiceDetail } from "../types/service";

export const services: ServiceDetail[] = [
  {
    id: "auth",
    title: "인증 · 권한 관리",
    summary: "로그인 · 세션 · 관리자 접근 분리",
    icon: "shield",
    heroTitle: "접근 권한을 분리하는 구조",
    image: "assets/img/portfolio/cineflow-admin.png",
    imageAlt: "CineFlow 관리자 접근 권한 분리 화면",
    features: [
      {
        icon: "shield",
        title: "로그인 · 로그아웃 · 세션 만료 기준 정리",
      },
      {
        icon: "user",
        title: "사용자 · 관리자 라우트와 메뉴 분리",
      },
      {
        icon: "bug",
        title: "비로그인 · 권한 없음 · 직접 URL 접근 제한",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "역할 나누기", description: "회원, 비회원, 관리자 범위 분리." },
      { title: "라우트 보호", description: "권한이 필요한 화면에 인증 조건 적용." },
      { title: "차단 확인", description: "정상 이동과 예외 접근 함께 점검." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "예매 권한 · 관리자 접근 분리" },
      { icon: "controller", title: "e스포츠 포털", description: "Laravel 관리자 미들웨어" },
      { icon: "cart", title: "쇼핑몰", description: "PHP 세션 로그인" },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["Spring Security", "Laravel Middleware", "PHP Session", "Access Control"],
      },
      {
        title: "확인 항목",
        items: ["로그인/로그아웃", "세션 만료", "권한 없는 접근"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "Spring Security", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "관리자 미들웨어", projectId: "esports" },
      { label: "쇼핑몰 판매관리 사이트", description: "PHP 세션", projectId: "shopping" },
    ],
  },
  {
    id: "order",
    title: "예매 · 주문 흐름 관리",
    summary: "예매번호 · 주문번호 기준 저장 흐름 연결",
    icon: "ticket",
    heroTitle: "상태값으로 이어지는 예매 · 주문 흐름",
    image: "assets/img/portfolio/cineflow-booking-gallery.png",
    imageAlt: "CineFlow 빠른예매와 좌석 선택 진행 화면",
    features: [
      {
        icon: "ticket",
        title: "예매번호 · 주문번호 기준 저장 · 조회",
      },
      {
        icon: "cart",
        title: "주문 마스터 · 상세 항목 분리 저장",
      },
      {
        icon: "bug",
        title: "결제 완료 · 조회 · 취소 값 유지",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "기준값 선택", description: "예매번호, 주문번호, 제품 ID 중 중심 키 지정." },
      { title: "단계값 전달", description: "좌석, 결제수단, 주문 항목을 저장 단계까지 유지." },
      { title: "조회 기준 통일", description: "사용자와 관리자 조회 기준 일치." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "예매번호 · 좌석 · 결제 연결" },
      { icon: "cart", title: "쇼핑몰", description: "주문번호 · 주문 상세 저장" },
      { icon: "shop", title: "베이커리", description: "제품 ID · 재고 · 판매 확인" },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["JPA", "MySQL", "PHP", "Laravel"],
      },
      {
        title: "확인 항목",
        items: ["예매번호", "주문번호", "좌석", "결제 결과"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "예매 기준", projectId: "cineflow" },
      { label: "쇼핑몰 판매관리 사이트", description: "주문 기준", projectId: "shopping" },
      { label: "베이커리 판매관리 웹사이트", description: "제품 기준", projectId: "bakery" },
    ],
  },
  {
    id: "board",
    title: "관리자 데이터 운영",
    summary: "영화 · 경기 · 뉴스 · 제품 · 재고 CRUD 운영",
    icon: "document",
    heroTitle: "운영 데이터를 관리하는 기준",
    image: "assets/img/portfolio/cineflow-admin-gallery.png",
    imageAlt: "CineFlow 관리자 상영일정 데이터 운영 화면",
    features: [
      {
        icon: "document",
        title: "등록 · 목록 · 수정 · 삭제 동작 분리",
      },
      {
        icon: "search",
        title: "필수값 · 날짜 · 상태값 · 이미지 조건 확인",
      },
      {
        icon: "trophy",
        title: "공개 여부 · 종료 경기 · 재고 표시 조건 정리",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "대상 정의", description: "영화, 경기, 뉴스, 제품 단위 분리." },
      { title: "입력 규칙", description: "필수 필드와 수정 가능 값 제한." },
      { title: "노출 확인", description: "필요한 화면에만 저장값 표시." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "영화 · 극장 · 상영일정 운영" },
      { icon: "controller", title: "e스포츠 포털", description: "뉴스 · 팀 · 선수 · 경기 운영" },
      { icon: "shop", title: "베이커리", description: "제품 · 재고 · 판매 운영" },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["Thymeleaf", "Laravel Blade", "MySQL", "Bootstrap"],
      },
      {
        title: "확인 항목",
        items: ["필수 입력", "수정 범위", "공개 여부"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "영화 운영", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "콘텐츠 운영", projectId: "esports" },
      { label: "베이커리 판매관리 웹사이트", description: "제품 운영", projectId: "bakery" },
    ],
  },
  {
    id: "database",
    title: "DB 설계 및 데이터 처리",
    summary: "JPA · Flyway · MySQL · CSV 분석 데이터 정리",
    icon: "database",
    heroTitle: "기능 요구사항을 데이터 구조로 정리",
    image: "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png",
    imageAlt: "Cine21 영화 데이터 상관관계 분석 결과 화면",
    features: [
      {
        icon: "database",
        title: "PK · FK · 상태값 · 조회 조건 분리",
      },
      {
        icon: "database",
        title: "Flyway 변경 이력 · 초기 데이터 관리",
      },
      {
        icon: "chart",
        title: "CSV 정제 후 PCA · 회귀분석 수행",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "키 정의", description: "기능에 필요한 기준 키 선정." },
      { title: "관계 설계", description: "조회와 저장 기준에 맞춰테이블 연결." },
      { title: "입력 정제", description: "결측값, 이상치, 스케일 차이 처리." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "JPA · Flyway" },
      { icon: "controller", title: "e스포츠 포털", description: "MySQL JOIN · 집계" },
      { icon: "chart", title: "Movie PCA", description: "CSV 전처리 · PCA · 회귀분석" },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["JPA/Flyway", "MySQL JOIN", "pandas", "scikit-learn"],
      },
      {
        title: "확인 항목",
        items: ["PK/FK", "마이그레이션", "CSV 품질"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "JPA/Flyway", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "JOIN · 집계", projectId: "esports" },
      { label: "Cine21 영화 데이터 PCA · 회귀 분석", description: "CSV 분석", projectId: "movie-analysis" },
    ],
  },
];

export function getServiceDetail(serviceId: string) {
  return services.find((service) => service.id === serviceId);
}
