import type { ServiceDetail } from "../types/service";

export const services: ServiceDetail[] = [
  {
    id: "auth",
    title: "인증·권한 및 운영 화면 관리",
    summary: "Spring Security, Laravel 미들웨어, PHP 세션 기반 인증·권한 분리",
    icon: "shield",
    heroTitle: "사용자 기능과 관리자 운영 기능 분리",
    lead:
      "CineFlow는 Spring Security로 사용자·관리자 접근 권한 분리. Laravel 프로젝트는 관리자 미들웨어와 전용 관리 화면 구성. PHP 쇼핑몰은 세션 기반 로그인·로그아웃·회원 화면 접근 제어 구현",
    introTitle: "핵심 구현 내용",
    intro:
      "단순 로그인 구현보다 프로젝트별 운영 구조에 맞춘 접근 제어에 집중. 사용자 화면, 관리자 화면, 비회원 접근, 세션 만료, 권한 없는 접근 흐름 분리",
    features: [
      {
        icon: "user",
        title: "사용자·관리자 권한 분리",
        description: "CineFlow 일반 예매 흐름과 관리자 운영 화면 분리. Spring Security 기준 접근 범위 설정",
      },
      {
        icon: "shield",
        title: "세션과 로그인 상태 처리",
        description: "PHP 쇼핑몰 로그인 성공 시 사용자 식별값 저장. 마이페이지·주문·장바구니 접근 분기",
      },
      {
        icon: "user",
        title: "관리자 미들웨어와 운영 화면",
        description: "e스포츠·베이커리 프로젝트 관리자 라우트와 운영 화면 분리",
      },
      {
        icon: "bug",
        title: "예외 접근 보완",
        description: "세션 만료, URL 직접 접근, 관리자 메뉴 노출 조건 점검",
      },
    ],
    processTitle: "인증·권한 구현 포인트",
    processSteps: [
      { title: "역할 기준 분리", description: "사용자, 비회원, 관리자 접근 화면과 기능 분리" },
      { title: "접근 흐름 설계", description: "로그인 성공·실패, 세션 만료, 권한 없는 접근 경로 정리" },
      { title: "프로젝트별 적용", description: "Spring Security, Laravel 미들웨어, PHP 세션 방식 적용" },
      { title: "운영 화면 검증", description: "관리자 URL 접근, 메뉴 노출 조건, 비로그인 차단 확인" },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "film",
        title: "CineFlow",
        description: "영화·극장·상영일정·예매 운영 화면과 사용자 예매 흐름 권한 분리",
      },
      {
        icon: "controller",
        title: "e스포츠 포털",
        description: "공개 조회 화면과 관리자 팀·선수·경기·뉴스 관리 화면 분리",
      },
      {
        icon: "cart",
        title: "쇼핑몰·베이커리",
        description: "PHP 세션 로그인과 Laravel 관리자 화면 기준 접근 제어",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["Spring Security 권한 분리", "Laravel 관리자 미들웨어", "PHP 세션 로그인", "관리자 화면 접근 제어"],
      },
      {
        title: "점검한 흐름",
        items: ["비회원 접근 제한", "세션 만료 처리", "관리자 URL 차단", "사용자/관리자 메뉴 노출 조건"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "Spring Security 기반 권한 분리", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "관리자 미들웨어와 운영 화면 접근 제어", projectId: "esports" },
      { label: "쇼핑몰 판매관리 사이트", description: "세션 기반 로그인과 회원 기능 접근 제어", projectId: "shopping" },
    ],
  },
  {
    id: "order",
    title: "예매·주문 상태 흐름 관리",
    summary: "예매·주문 단계별 상태와 조회 기준 연결",
    icon: "ticket",
    heroTitle: "화면 단계와 상태 데이터 기준 통일",
    lead:
      "CineFlow는 영화 선택, 상영일정 선택, 좌석 선택, 결제, 예매 완료·조회·취소를 같은 예매 상태 기준으로 연결. 쇼핑몰은 장바구니, 주문서, 주문번호, 주문 마스터/상세 저장, 관리자 주문 조회를 같은 주문번호로 연결",
    introTitle: "핵심 구현 내용",
    intro:
      "예매·주문 흐름은 단계가 나뉘어 선택값과 저장 기준이 어긋나기 쉬움. 예매번호·주문번호·상영일정·좌석·결제 상태를 기준 데이터로 정리",
    features: [
      {
        icon: "ticket",
        title: "CineFlow 예매 상태 연결",
        description: "상영일정, 좌석, 결제수단, 예매 완료 데이터를 하나의 예매 흐름으로 연결",
      },
      {
        icon: "cart",
        title: "쇼핑몰 주문번호 기준 저장",
        description: "장바구니 데이터를 주문서로 전달 후 주문 마스터 1건과 주문 상세 N건 저장",
      },
      {
        icon: "box",
        title: "재고·판매 데이터 연결",
        description: "베이커리 제품 ID 기준 재고 수량과 판매 내역 연결",
      },
      {
        icon: "bug",
        title: "예외 상황 대응",
        description: "좌석 기준 누락, 주문 중복, 품절 상품 주문, 누락 데이터 조회 흐름 점검",
      },
    ],
    processTitle: "상태 흐름 구현 포인트",
    processSteps: [
      { title: "기준 식별자 정의", description: "예매번호, 주문번호, 제품 ID 기준값 설정" },
      { title: "단계별 데이터 전달", description: "선택 화면에서 저장 화면까지 필요한 값 유지" },
      { title: "조회 기준 통일", description: "사용자 조회와 관리자 조회 기준 일치" },
      { title: "예외 흐름 검증", description: "중복 요청, 누락 데이터, 취소·조회 흐름 점검" },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "film",
        title: "CineFlow",
        description: "상영일정, 좌석, 결제, 예매 완료·조회·취소 상태 연결",
      },
      {
        icon: "cart",
        title: "쇼핑몰 판매관리",
        description: "주문번호 중심 사용자 주문 내역과 관리자 주문 처리 연결",
      },
      {
        icon: "shop",
        title: "베이커리 판매관리",
        description: "제품 ID 기준 재고·판매 데이터 연결과 누락 데이터 대응",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["예매 상태 기준 설계", "주문 마스터/상세 분리", "제품 ID 기반 재고·판매 연결", "회원·비회원 조회 분기"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "상영일정·좌석·결제·예매 조회 흐름 연결", projectId: "cineflow" },
      { label: "쇼핑몰 판매관리 사이트", description: "주문번호 기준 주문 마스터/상세 저장", projectId: "shopping" },
      { label: "베이커리 판매관리 웹사이트", description: "제품 기준 재고·판매 현황 관리", projectId: "bakery" },
    ],
  },
  {
    id: "board",
    title: "콘텐츠·관리자 데이터 운영",
    summary: "뉴스·패치노트·팀·선수·경기·상영일정 운영 데이터 관리",
    icon: "document",
    heroTitle: "사용자 조회 화면과 관리자 운영 화면 분리",
    lead:
      "e스포츠 포털은 뉴스, 패치노트, 팀, 선수, 경기 데이터를 관리자 등록과 사용자 조회 흐름으로 분리. CineFlow는 영화, 극장, 상영관, 상영일정, 예매 데이터를 관리자 화면에서 운영",
    introTitle: "핵심 구현 내용",
    intro:
      "단순 CRUD보다 관리자 입력 데이터가 사용자 화면에 노출되는 기준에 집중. 목록, 상세, 순위, 예매, 운영 화면 목적별 등록·수정·조회 기준 분리",
    features: [
      {
        icon: "document",
        title: "뉴스·패치노트 콘텐츠 관리",
        description: "뉴스·공지·패치노트 등록/수정/삭제, slug 상세 라우팅, 썸네일 관리",
      },
      {
        icon: "trophy",
        title: "팀·선수·경기 데이터 운영",
        description: "팀, 선수, 경기 일정, 경기 결과 관리와 finished 경기 기준 순위 집계",
      },
      {
        icon: "film",
        title: "영화·상영일정 운영",
        description: "CineFlow 관리자 화면에서 영화, 극장, 상영관, 상영일정 관리",
      },
      {
        icon: "search",
        title: "검색·정렬·페이징 기준 정리",
        description: "검색 조건, 정렬 기준, 빈 결과 안내, 페이지 이동 흐름 분리",
      },
    ],
    processTitle: "운영 데이터 구현 포인트",
    processSteps: [
      { title: "데이터 성격 분류", description: "관리 데이터와 사용자 조회 데이터 분리" },
      { title: "관리자 입력 검증", description: "필수 입력, 썸네일, 상태 값, 날짜·일정 점검" },
      { title: "사용자 조회 연결", description: "목록·상세·예매·순위 화면 노출 기준 통일" },
      { title: "운영 상태 반영", description: "경기 결과, 상영 일정, 콘텐츠 수정 조건 확인" },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "controller",
        title: "e스포츠 포털",
        description: "뉴스·팀·선수·경기 데이터를 관리자 화면과 사용자 화면으로 연결",
      },
      {
        icon: "film",
        title: "CineFlow",
        description: "영화·극장·상영일정·예매 운영 데이터와 예매 흐름 연결",
      },
      {
        icon: "shop",
        title: "베이커리",
        description: "제품 등록, 재고 관리, 판매 내역 확인 중심 관리자 화면 구성",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["Laravel Blade 관리자 화면", "slug 상세 라우팅", "검색·정렬·페이징", "상영일정·경기 결과 상태 관리"],
      },
    ],
    relatedProjects: [
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "뉴스·팀·선수·경기 데이터 운영", projectId: "esports" },
      { label: "CineFlow 영화 예매 관리 시스템", description: "영화·극장·상영일정 운영 데이터 연결", projectId: "cineflow" },
      { label: "베이커리 판매관리 웹사이트", description: "제품·재고·판매 데이터 관리자 화면 정리", projectId: "bakery" },
    ],
  },
  {
    id: "database",
    title: "DB 설계·마이그레이션 및 분석 데이터 처리",
    summary: "JPA·Flyway·MySQL·Python 전처리 기반 데이터 구조 정리",
    icon: "database",
    heroTitle: "기능 요구사항을 테이블·마이그레이션·분석 데이터로 구체화",
    lead:
      "CineFlow는 JPA 엔티티와 Flyway 마이그레이션으로 예매·상영일정·회원·관리 데이터 운영. Laravel/PHP 프로젝트는 MySQL 관계와 JOIN 조회 구현. Cine21 분석은 CSV 전처리 후 PCA·상관분석·회귀분석 수행",
    introTitle: "핵심 구현 내용",
    intro:
      "웹 서비스용 관계형 DB 설계와 분석용 데이터 전처리 경험 정리. PK/FK, 상태 값, 조회 조건, seed 데이터, 마이그레이션, 정규화·PCA·회귀분석 처리",
    features: [
      {
        icon: "database",
        title: "관계형 데이터 모델링",
        description: "회원·상품·주문, 팀·선수·경기, 영화·극장·상영일정 데이터 구조 분리",
      },
      {
        icon: "database",
        title: "Flyway 마이그레이션과 seed 데이터",
        description: "CineFlow 테이블 변경 이력과 초기 데이터 관리",
      },
      {
        icon: "search",
        title: "JOIN·집계·상태 조회",
        description: "순위 집계, 주문번호 조회, 제품별 재고·판매 조회 조건 정리",
      },
      {
        icon: "chart",
        title: "분석 데이터 전처리",
        description: "Cine21 CSV 결측값·이상치 처리, 정규화, PCA·상관분석·회귀분석 수행",
      },
    ],
    processTitle: "데이터 설계·처리 포인트",
    processSteps: [
      { title: "기능 기준 모델링", description: "화면 기능과 업무 흐름 기준 엔티티·관계 분리" },
      { title: "상태·키 기준 통일", description: "예매번호, 주문번호, 제품 ID, 경기 상태 기준 명확화" },
      { title: "마이그레이션·조회 구현", description: "테이블 변경 이력, 초기 데이터, JOIN 조회, 집계 조건 구현" },
      { title: "분석용 데이터 정리", description: "CSV 결측값·이상치·스케일 차이 전처리" },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "film",
        title: "CineFlow",
        description: "JPA와 Flyway 기반 예매·상영일정·좌석·관리자 운영 데이터 관리",
      },
      {
        icon: "database",
        title: "Laravel/PHP 프로젝트",
        description: "쇼핑몰, e스포츠, 베이커리 MySQL 관계와 JOIN·집계 조회 적용",
      },
      {
        icon: "chart",
        title: "Movie PCA 분석",
        description: "Cine21 CSV 전처리, PCA, 상관분석, 선형회귀 결과 정리",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: ["JPA 엔티티 설계", "Flyway 마이그레이션", "MySQL 관계형 설계", "pandas·scikit-learn 전처리"],
      },
    ],
    relatedProjects: [
      { label: "CineFlow 영화 예매 관리 시스템", description: "예매·상영일정·좌석 데이터 관리", projectId: "cineflow" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "경기 결과와 순위 집계 처리", projectId: "esports" },
      { label: "Cine21 영화 데이터 PCA·회귀 분석", description: "CSV 전처리와 PCA·회귀분석 수행", projectId: "movie-analysis" },
    ],
  },
];

export function getServiceDetail(serviceId: string) {
  return services.find((service) => service.id === serviceId);
}
