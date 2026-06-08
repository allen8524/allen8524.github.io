import type { ServiceDetail } from "../types/service";

export const services: ServiceDetail[] = [
  {
    id: "auth",
    title: "인증·권한 및 운영 화면 관리",
    summary:
      "CineFlow의 Spring Security 권한 분리, Laravel 관리자 미들웨어, PHP 세션 기반 로그인 흐름을 프로젝트별로 적용했습니다.",
    icon: "bi-shield-check",
    heroTitle: "사용자 기능과 관리자 운영 기능을 권한 기준으로 분리했습니다",
    lead:
      "CineFlow에서는 Spring Security 기반 사용자/관리자 접근 권한을 분리했고, Laravel 프로젝트에서는 관리자 미들웨어와 전용 관리 화면을 구성했습니다. PHP 쇼핑몰 프로젝트에서는 세션 기반 로그인·로그아웃·회원 화면 접근 제어를 구현해 인증 상태가 화면 흐름에 바로 반영되도록 정리했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "단순 로그인 구현이 아니라 프로젝트별 운영 구조에 맞춰 사용자 화면, 관리자 화면, 비회원 접근, 세션 만료, 권한 없는 접근을 나눠 처리했습니다. 현재 포트폴리오의 웹 프로젝트들은 모두 사용자 조회 기능과 관리자 운영 기능을 분리하는 방향으로 정리되어 있습니다.",
    features: [
      {
        icon: "bi-person-check",
        title: "사용자·관리자 권한 분리",
        description:
          "CineFlow에서는 일반 사용자 예매 흐름과 관리자 영화·극장·상영일정 운영 화면을 분리하고, Spring Security 기준으로 접근 범위를 나눴습니다.",
      },
      {
        icon: "bi-shield-lock",
        title: "세션과 로그인 상태 처리",
        description:
          "PHP 쇼핑몰에서는 로그인 성공 시 사용자 식별값을 세션에 저장하고, 마이페이지·주문·장바구니 접근 여부를 로그인 상태 기준으로 분기했습니다.",
      },
      {
        icon: "bi-person-gear",
        title: "관리자 미들웨어와 운영 화면",
        description:
          "e스포츠 포털과 베이커리 프로젝트에서는 관리자 전용 라우트와 관리 화면을 분리해 팀·선수·경기·뉴스·제품·재고 데이터를 운영할 수 있게 구성했습니다.",
      },
      {
        icon: "bi-bug",
        title: "예외 접근과 상태 꼬임 보완",
        description:
          "세션 만료, 권한 없는 URL 직접 접근, 관리자 메뉴 노출 조건을 점검해 사용자 화면과 관리자 화면이 뒤섞이지 않도록 접근 기준을 정리했습니다.",
      },
    ],
    processTitle: "인증·권한 구현 포인트",
    processSteps: [
      { title: "역할 기준 분리", description: "사용자, 비회원, 관리자가 접근해야 하는 화면과 기능을 먼저 분리했습니다." },
      { title: "접근 흐름 설계", description: "로그인 성공·실패, 세션 만료, 권한 없는 접근 시 이동 경로와 안내 기준을 정리했습니다." },
      { title: "프로젝트별 적용", description: "Spring Security, Laravel 미들웨어, PHP 세션처럼 프로젝트 스택에 맞는 인증 방식을 적용했습니다." },
      { title: "운영 화면 검증", description: "관리자 URL 직접 접근, 메뉴 노출 조건, 비로그인 접근 차단 여부를 반복 확인했습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "bi-film",
        title: "CineFlow",
        description:
          "영화·극장·상영관·상영일정·예매 데이터 운영 화면과 사용자 예매 흐름을 권한 기준으로 분리했습니다.",
      },
      {
        icon: "bi-controller",
        title: "e스포츠 포털",
        description:
          "공개 조회 화면과 관리자 팀·선수·경기·뉴스 관리 화면을 Laravel 라우팅과 미들웨어 기준으로 구분했습니다.",
      },
      {
        icon: "bi-cart-check",
        title: "쇼핑몰·베이커리",
        description:
          "PHP 세션 로그인과 Laravel 관리자 화면을 통해 사용자 기능과 운영 기능의 접근 기준을 분리했습니다.",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["Spring Security 권한 분리", "Laravel 관리자 미들웨어", "PHP 세션 기반 로그인", "관리자 전용 화면 접근 제어"],
      },
      {
        title: "점검한 흐름",
        items: ["비회원 접근 제한", "세션 만료 처리", "관리자 URL 직접 접근 차단", "사용자/관리자 메뉴 노출 조건"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "Spring Security 기반 사용자/관리자 접근 권한 분리를 적용했습니다.", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "관리자 미들웨어와 운영 화면 접근 제어를 구성했습니다.", projectId: "esports" },
      { label: "쇼핑몰 판매관리 사이트", description: "세션 기반 로그인과 회원 기능 접근 제어를 구현했습니다.", projectId: "shopping" },
    ],
  },
  {
    id: "order",
    title: "예매·주문 상태 흐름 관리",
    summary:
      "CineFlow의 상영일정·좌석·결제·예매 조회 흐름과 쇼핑몰의 장바구니·주문 저장 흐름을 상태 기준으로 연결했습니다.",
    icon: "bi-diagram-3",
    heroTitle: "화면 단계가 바뀌어도 같은 상태 데이터를 참조하도록 흐름을 맞췄습니다",
    lead:
      "CineFlow에서는 영화 선택, 상영일정 선택, 좌석 선택, 결제수단 저장, 예매 완료·조회·취소가 같은 예매 상태를 기준으로 이어지도록 구성했습니다. 쇼핑몰 프로젝트에서는 장바구니, 주문서, 주문번호 생성, 주문 마스터/상세 저장, 관리자 주문 조회가 같은 주문번호를 참조하게 정리했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "예매와 주문은 화면이 여러 단계로 나뉘기 때문에 중간 단계의 선택값이 저장 기준과 어긋나기 쉽습니다. 현재 포트폴리오에서는 예매번호·주문번호·상영일정·좌석·결제 상태처럼 흐름을 이어주는 기준 데이터를 중심으로 상태 정합성을 맞춘 경험을 강조했습니다.",
    features: [
      {
        icon: "bi-ticket-perforated",
        title: "CineFlow 예매 상태 연결",
        description:
          "상영일정, 좌석, 결제수단, 예매 완료 데이터를 하나의 예매 흐름으로 묶고 회원·비회원 조회와 관리자 예매 관리가 같은 상태를 참조하도록 정리했습니다.",
      },
      {
        icon: "bi-cart3",
        title: "쇼핑몰 주문번호 기준 저장",
        description:
          "장바구니 데이터를 주문서로 전달한 뒤 주문번호를 생성하고, 주문 마스터 1건과 주문 상세 N건을 분리 저장했습니다.",
      },
      {
        icon: "bi-box-seam",
        title: "재고·판매 데이터 연결",
        description:
          "베이커리 프로젝트에서는 제품 ID를 기준으로 재고 수량과 판매 내역을 연결해 관리자 화면에서 제품별 상태를 함께 확인하도록 구성했습니다.",
      },
      {
        icon: "bi-exclamation-triangle",
        title: "예외 상황 대응",
        description:
          "좌석 선택 기준 누락, 주문 중복 요청, 품절 상품 주문, 누락 데이터 조회 같은 예외 흐름을 점검해 화면과 DB 상태가 어긋나지 않게 보완했습니다.",
      },
    ],
    processTitle: "상태 흐름 구현 포인트",
    processSteps: [
      { title: "기준 식별자 정의", description: "예매번호, 주문번호, 제품 ID처럼 화면과 DB를 이어주는 기준 값을 먼저 정했습니다." },
      { title: "단계별 데이터 전달", description: "선택 화면에서 저장 화면까지 필요한 값이 끊기지 않도록 파라미터와 저장 구조를 정리했습니다." },
      { title: "조회 기준 통일", description: "사용자 조회와 관리자 조회가 같은 상태 값을 기준으로 결과를 보여주도록 맞췄습니다." },
      { title: "예외 흐름 검증", description: "중복 요청, 누락 데이터, 취소·조회 흐름을 점검하며 상태 꼬임을 줄였습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "bi-film",
        title: "CineFlow",
        description:
          "상영 일정, 좌석 선택, 결제수단 저장, 예매 완료·조회·취소가 같은 예매 상태를 기준으로 이어지도록 구성했습니다.",
      },
      {
        icon: "bi-bag-check",
        title: "쇼핑몰 판매관리",
        description:
          "주문번호 중심으로 사용자 주문 내역과 관리자 주문 처리 화면이 같은 주문 데이터를 조회하도록 만들었습니다.",
      },
      {
        icon: "bi-shop",
        title: "베이커리 판매관리",
        description:
          "제품 ID 기준으로 재고와 판매 데이터를 연결하고, 누락 데이터가 있어도 관리자 화면 흐름이 끊기지 않도록 처리했습니다.",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["예매 상태 기준 설계", "주문 마스터/상세 분리", "제품 ID 기반 재고·판매 연결", "회원·비회원 조회 분기"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "상영일정·좌석·결제·예매 조회 상태를 하나의 흐름으로 연결했습니다.", projectId: "cineflow" },
      { label: "쇼핑몰 판매관리 사이트", description: "주문번호 기준 주문 마스터/상세 저장 구조를 구현했습니다.", projectId: "shopping" },
      { label: "베이커리 판매관리 웹사이트", description: "제품 기준 재고·판매 현황을 관리자 화면에서 확인하도록 구성했습니다.", projectId: "bakery" },
    ],
  },
  {
    id: "board",
    title: "콘텐츠·관리자 데이터 운영",
    summary:
      "e스포츠 포털의 뉴스·패치노트·팀·선수·경기 데이터와 CineFlow의 영화·극장·상영일정 운영 데이터를 관리자 기준으로 관리했습니다.",
    icon: "bi-layout-text-window-reverse",
    heroTitle: "사용자 조회 화면과 관리자 운영 화면을 분리해 데이터를 관리했습니다",
    lead:
      "e스포츠 포털에서는 뉴스, 패치노트, 팀, 선수, 경기 일정, 경기 결과 데이터를 관리자 등록과 사용자 조회 흐름으로 나눠 구현했습니다. CineFlow에서는 영화, 극장, 상영관, 상영일정, 예매 데이터를 관리자 화면에서 운영하고 사용자는 예매 흐름에서 필요한 데이터만 조회하도록 구성했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "단순 게시판 CRUD보다 관리자 입력 데이터가 사용자 화면에 어떤 기준으로 노출되는지를 더 중요하게 다뤘습니다. 콘텐츠 목록, 상세 페이지, 경기 순위, 상영일정, 관리자 운영 화면처럼 데이터가 사용되는 목적에 따라 등록·수정·조회 기준을 분리했습니다.",
    features: [
      {
        icon: "bi-newspaper",
        title: "뉴스·패치노트 콘텐츠 관리",
        description:
          "e스포츠 포털에서 뉴스·공지·패치노트 등록/수정/삭제와 slug 기반 상세 라우팅, 썸네일 관리 흐름을 구현했습니다.",
      },
      {
        icon: "bi-trophy",
        title: "팀·선수·경기 데이터 운영",
        description:
          "팀, 선수, 경기 일정, 경기 결과 데이터를 관리자 화면에서 관리하고 finished 경기만 순위표에 반영되도록 집계 기준을 분리했습니다.",
      },
      {
        icon: "bi-camera-reels",
        title: "영화·상영일정 운영",
        description:
          "CineFlow 관리자 화면에서 영화, 극장, 상영관, 상영일정을 등록·관리하고 사용자 예매 화면과 연결되도록 구성했습니다.",
      },
      {
        icon: "bi-search",
        title: "검색·정렬·페이징 기준 정리",
        description:
          "목록 탐색 화면에서 검색 조건, 정렬 기준, 빈 결과 안내, 페이지 이동 흐름이 깨지지 않도록 조회 조건을 분리했습니다.",
      },
    ],
    processTitle: "운영 데이터 구현 포인트",
    processSteps: [
      { title: "데이터 성격 분류", description: "콘텐츠, 경기 데이터, 상영일정처럼 운영자가 관리할 데이터와 사용자가 조회할 데이터를 분리했습니다." },
      { title: "관리자 입력 검증", description: "필수 입력, 이미지·썸네일, 상태 값, 날짜·일정 정보를 등록 전에 점검했습니다." },
      { title: "사용자 조회 연결", description: "관리자에서 저장한 데이터가 목록·상세·예매·순위 화면에 같은 기준으로 노출되게 맞췄습니다." },
      { title: "운영 중 상태 반영", description: "경기 결과, 상영 일정, 콘텐츠 수정이 사용자 화면에 반영되는 조건을 확인했습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "bi-controller",
        title: "e스포츠 포털",
        description:
          "뉴스·패치노트·팀·선수·경기 데이터를 관리자 화면에서 관리하고 사용자 목록·상세·순위 화면으로 연결했습니다.",
      },
      {
        icon: "bi-film",
        title: "CineFlow",
        description:
          "영화·극장·상영관·상영일정·예매 데이터를 관리자 화면에서 운영하고 사용자 예매 흐름과 연결했습니다.",
      },
      {
        icon: "bi-shop-window",
        title: "베이커리",
        description:
          "제품 등록, 재고 관리, 판매 내역 확인을 관리자 화면 중심으로 구성했습니다.",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["Laravel Blade 관리자 화면", "slug 기반 상세 라우팅", "검색·정렬·페이징", "상영일정·경기 결과 상태 관리"],
      },
    ],
    relatedProjects: [
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "뉴스·팀·선수·경기 데이터를 관리자 화면과 사용자 화면으로 분리했습니다.", projectId: "esports" },
      { label: "CineFlow 영화 예매 관리 시스템", description: "영화·극장·상영일정 운영 데이터를 예매 흐름과 연결했습니다.", projectId: "cineflow" },
      { label: "베이커리 판매관리 웹사이트", description: "제품·재고·판매 데이터를 관리자 운영 화면 중심으로 정리했습니다.", projectId: "bakery" },
    ],
  },
  {
    id: "database",
    title: "DB 설계·마이그레이션 및 분석 데이터 처리",
    summary:
      "JPA·Flyway 기반 예매 데이터, MySQL 관계형 데이터, Python 분석용 CSV 전처리를 프로젝트 목적에 맞게 정리했습니다.",
    icon: "bi-database-check",
    heroTitle: "화면 기능이 요구하는 데이터를 테이블·마이그레이션·분석 데이터로 구체화했습니다",
    lead:
      "CineFlow에서는 JPA 엔티티와 Flyway 마이그레이션으로 예매·상영일정·회원·관리 데이터를 관리했고, Laravel/PHP 프로젝트에서는 MySQL 테이블 관계와 JOIN 조회를 구현했습니다. Cine21 영화 데이터 분석 프로젝트에서는 CSV 데이터를 결측값·이상치 처리 후 PCA·상관분석·회귀분석에 사용할 수 있는 형태로 전처리했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "현재 포트폴리오의 데이터 역량은 웹 서비스용 관계형 DB 설계와 데이터 분석용 전처리 경험을 함께 보여주는 방향입니다. 기능 구현에서는 PK/FK, 상태 값, 조회 조건, seed 데이터, 마이그레이션을 다뤘고, 분석 프로젝트에서는 정규화·PCA·회귀분석을 위한 데이터 품질 정리를 수행했습니다.",
    features: [
      {
        icon: "bi-diagram-3",
        title: "관계형 데이터 모델링",
        description:
          "회원·상품·주문·주문상세, 팀·선수·경기 결과, 영화·극장·상영관·상영일정처럼 화면 기능이 요구하는 데이터를 관계형 구조로 분리했습니다.",
      },
      {
        icon: "bi-arrow-repeat",
        title: "Flyway 마이그레이션과 seed 데이터",
        description:
          "CineFlow에서 영화, 극장, 상영관, 좌석, 예매 관련 테이블 변경 이력과 초기 데이터를 마이그레이션 기준으로 관리했습니다.",
      },
      {
        icon: "bi-search",
        title: "JOIN·집계·상태 조회",
        description:
          "e스포츠 포털의 finished 경기 기준 순위 집계, 쇼핑몰 주문번호 조회, 베이커리 제품별 재고·판매 조회처럼 목적별 조회 조건을 정리했습니다.",
      },
      {
        icon: "bi-bar-chart-line",
        title: "분석 데이터 전처리",
        description:
          "Cine21 영화 CSV 데이터를 결측값·이상치 처리 후 정규화하고 PCA·상관분석·PC1 기반 선형회귀를 수행할 수 있게 구성했습니다.",
      },
    ],
    processTitle: "데이터 설계·처리 포인트",
    processSteps: [
      { title: "기능 기준 모델링", description: "화면 기능과 업무 흐름을 먼저 정리한 뒤 필요한 엔티티와 관계를 나눴습니다." },
      { title: "상태·키 기준 통일", description: "예매번호, 주문번호, 제품 ID, 경기 상태처럼 조회와 저장의 기준 값을 명확히 했습니다." },
      { title: "마이그레이션·조회 구현", description: "테이블 변경 이력, 초기 데이터, JOIN 조회, 집계 조건을 프로젝트 구조에 맞춰 구현했습니다." },
      { title: "분석용 데이터 정리", description: "CSV 데이터는 결측값·이상치·스케일 차이를 처리한 뒤 분석 모델에 사용할 수 있게 전처리했습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "bi-film",
        title: "CineFlow",
        description:
          "JPA와 Flyway를 사용해 예매·상영일정·좌석·관리자 운영 데이터를 DB 변경 이력 기준으로 관리했습니다.",
      },
      {
        icon: "bi-database",
        title: "Laravel/PHP 프로젝트",
        description:
          "쇼핑몰, e스포츠 포털, 베이커리 프로젝트에서 MySQL 테이블 관계와 JOIN·집계 조회를 적용했습니다.",
      },
      {
        icon: "bi-graph-up",
        title: "Movie PCA 분석",
        description:
          "Cine21 영화 CSV를 전처리한 뒤 PCA, 상관분석, 선형회귀 결과를 수치와 시각화로 정리했습니다.",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["JPA 엔티티 설계", "Flyway 마이그레이션", "MySQL 관계형 설계", "pandas·scikit-learn 분석 전처리"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "예매·상영일정·좌석·관리 데이터를 JPA와 Flyway 기준으로 관리했습니다.", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "경기 결과와 순위 집계를 관계형 데이터와 상태 조건으로 처리했습니다.", projectId: "esports" },
      { label: "Cine21 영화 데이터 PCA·회귀 분석", description: "CSV 전처리와 PCA·회귀분석을 통해 분석용 데이터 처리 흐름을 정리했습니다.", projectId: "movie-analysis" },
    ],
  },
];

export function getServiceDetail(serviceId: string) {
  return services.find((service) => service.id === serviceId);
}
