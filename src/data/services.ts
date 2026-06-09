import type { ServiceDetail } from "../types/service";

export const services: ServiceDetail[] = [
  {
    id: "auth",
    title: "인증·권한 관리",
    summary: "로그인, 세션, 사용자/관리자 접근 분리를 구현합니다.",
    icon: "shield",
    heroTitle: "접근 권한을 명확히 분리",
    lead:
      "로그인 이후 사용자가 갈 수 있는 화면과 관리자만 다루는 기능을 분리합니다. 세션 만료와 직접 URL 접근도 함께 점검합니다.",
    introTitle: "할 수 있는 일",
    intro:
      "서비스 역할에 맞춰 인증 방식과 접근 범위를 정리합니다. 구현보다 운영 중 막아야 할 경로를 먼저 확인합니다.",
    features: [
      {
        icon: "shield",
        title: "로그인 흐름 구성",
        description: "성공, 실패, 로그아웃, 세션 만료 후 이동을 정리합니다.",
      },
      {
        icon: "user",
        title: "역할별 접근 분리",
        description: "사용자와 관리자 메뉴, 라우트, 기능 접근을 구분합니다.",
      },
      {
        icon: "bug",
        title: "예외 경로 점검",
        description: "비로그인, 권한 없음, 직접 URL 접근을 차단합니다.",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "역할 정의", description: "회원, 비회원, 관리자의 접근 범위를 먼저 나눕니다." },
      { title: "라우트 보호", description: "권한이 필요한 화면에 인증 조건을 적용합니다." },
      { title: "접근 확인", description: "정상 이동과 차단 케이스를 함께 점검합니다." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "Spring Security 권한 분리" },
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
    title: "예매·주문 흐름 관리",
    summary: "예매번호·주문번호 기준으로 좌석, 결제, 상세 저장을 연결합니다.",
    icon: "ticket",
    heroTitle: "예매와 주문 기준 정리",
    lead:
      "좌석, 결제, 주문 상세처럼 단계마다 생기는 값을 하나의 기준 식별자로 묶습니다. 완료 후 조회와 취소까지 같은 기준으로 확인합니다.",
    introTitle: "할 수 있는 일",
    intro:
      "중간 화면의 선택값이 저장 단계에서 어긋나지 않도록 필요한 키를 유지합니다. 여러 건이 연결되는 상세 항목은 기준 데이터와 분리합니다.",
    features: [
      {
        icon: "ticket",
        title: "기준 번호 설계",
        description: "예매번호와 주문번호를 생성, 전달, 조회 기준으로 사용합니다.",
      },
      {
        icon: "cart",
        title: "다건 상세 저장",
        description: "주문 마스터와 상세 항목, 좌석 목록처럼 묶이는 데이터를 분리합니다.",
      },
      {
        icon: "bug",
        title: "완료 후 검증",
        description: "결제 완료, 조회, 취소에 필요한 값이 남는지 확인합니다.",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "기준값 선택", description: "예매번호, 주문번호, 제품 ID 중 중심 키를 정합니다." },
      { title: "단계값 유지", description: "선택한 좌석, 결제수단, 주문 항목을 저장 단계까지 전달합니다." },
      { title: "조회 점검", description: "완료 이후 사용자와 관리자가 같은 기준으로 찾는지 확인합니다." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "예매번호·좌석·결제 연결" },
      { icon: "cart", title: "쇼핑몰", description: "주문번호·주문 상세 저장" },
      { icon: "shop", title: "베이커리", description: "제품 ID·재고·판매 확인" },
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
    summary: "영화, 경기, 뉴스, 제품, 재고 데이터를 CRUD로 운영합니다.",
    icon: "document",
    heroTitle: "운영 데이터를 다루는 방식",
    lead:
      "관리자가 입력한 데이터가 목록, 상세, 통계 화면에서 쓰이도록 기준을 맞춥니다. 등록, 수정, 삭제, 공개 여부를 짧은 단위로 점검합니다.",
    introTitle: "할 수 있는 일",
    intro:
      "관리 대상별 필수 입력값과 노출 조건을 정리합니다. 사용자 화면 설명은 줄이고 운영 작업 범위만 다룹니다.",
    features: [
      {
        icon: "document",
        title: "CRUD 구성",
        description: "등록, 목록, 수정, 삭제 동작을 관리 대상별로 분리합니다.",
      },
      {
        icon: "search",
        title: "입력값 검증",
        description: "필수값, 날짜, 상태값, 이미지 입력 조건을 확인합니다.",
      },
      {
        icon: "trophy",
        title: "노출 기준 정리",
        description: "공개 여부, 종료 경기, 재고 표시처럼 보여줄 조건을 정합니다.",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "관리 대상 정의", description: "영화, 경기, 뉴스, 제품처럼 다룰 단위를 나눕니다." },
      { title: "입력 규칙 적용", description: "필수 필드와 수정 가능한 값을 제한합니다." },
      { title: "노출 조건 확인", description: "저장한 값이 필요한 화면에만 보이는지 확인합니다." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "영화·극장·상영일정 운영" },
      { icon: "controller", title: "e스포츠 포털", description: "뉴스·팀·선수·경기 운영" },
      { icon: "shop", title: "베이커리", description: "제품·재고·판매 운영" },
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
    summary: "JPA, Flyway, MySQL, CSV 전처리와 분석 데이터를 정리합니다.",
    icon: "database",
    heroTitle: "저장 구조와 분석 입력 정리",
    lead:
      "서비스 기능은 테이블과 관계로, 분석 작업은 정리된 입력 데이터로 구체화합니다. 변경 이력과 조회 조건을 함께 확인합니다.",
    introTitle: "할 수 있는 일",
    intro:
      "웹 프로젝트에서는 관계와 키를 먼저 정하고, 분석 프로젝트에서는 결측값과 스케일을 먼저 정리합니다. 필요한 만큼만 모델링하고 조회 기준을 명확히 둡니다.",
    features: [
      {
        icon: "database",
        title: "엔티티·테이블 설계",
        description: "기능 기준으로 PK, FK, 상태값, 조회 조건을 나눕니다.",
      },
      {
        icon: "database",
        title: "마이그레이션 관리",
        description: "Flyway로 테이블 변경 이력과 초기 데이터를 정리합니다.",
      },
      {
        icon: "chart",
        title: "분석 전처리",
        description: "CSV 결측값, 이상치, 정규화 후 PCA와 회귀분석을 수행합니다.",
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      { title: "키·관계 정의", description: "기능에서 필요한 기준 키와 테이블 관계를 먼저 정합니다." },
      { title: "변경 이력 관리", description: "스키마 변경과 seed 데이터를 재현 가능하게 유지합니다." },
      { title: "분석 입력 정제", description: "결측값, 이상치, 스케일 차이를 처리한 뒤 분석합니다." },
    ],
    evidenceTitle: "대표 근거",
    evidence: [
      { icon: "film", title: "CineFlow", description: "JPA·Flyway" },
      { icon: "controller", title: "e스포츠 포털", description: "MySQL JOIN·집계" },
      { icon: "chart", title: "Movie PCA", description: "CSV 전처리·PCA·회귀분석" },
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
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "JOIN·집계", projectId: "esports" },
      { label: "Cine21 영화 데이터 PCA·회귀 분석", description: "CSV 분석", projectId: "movie-analysis" },
    ],
  },
];

export function getServiceDetail(serviceId: string) {
  return services.find((service) => service.id === serviceId);
}
