import type { ServiceDetail } from "../types/service";

export const services: ServiceDetail[] = [
  {
    id: "auth",
    title: "회원 및 권한 관리",
    summary:
      "쇼핑몰과 CineFlow 프로젝트에서 로그인 상태, 회원 기능, 관리자 권한을 분리하고 접근 흐름을 관리했습니다.",
    icon: "bi-palette",
    heroTitle: "회원가입부터 관리자 접근 제어까지 인증/인가 흐름을 설계하고 적용했습니다",
    lead:
      "쇼핑몰 판매관리 프로젝트에서 로그인·로그아웃, 회원 정보 조회/수정, 세션 유지 흐름을 단계별로 나눠 적용했습니다. 사용자/관리자 분기를 두어 관리자 페이지 접근 제어와 인증 상태별 화면 처리를 분리했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "쇼핑몰 프로젝트에서 실제로 사용한 인증 로직을 기준으로 로그인 세션 확인, 사용자/관리자 권한 분기, 관리자 URL 접근 제어를 공통 조건으로 처리했습니다.",
    features: [
      {
        icon: "bi-person-plus",
        title: "회원가입/로그인 흐름",
        description:
          "회원가입 입력 검증, 중복 계정 확인, 로그인 실패 메시지 처리를 적용했습니다. 로그인 성공 시 사용자 식별값을 세션에 저장해 이후 권한 분기와 화면 표시 기준으로 사용했습니다.",
      },
      {
        icon: "bi-shield-lock",
        title: "세션 처리 및 상태 유지",
        description:
          "로그인 상태에서는 마이페이지·주문·장바구니로 이동하고, 세션이 없으면 로그인 페이지로 이동하도록 분기했습니다. 로그아웃 시 세션을 정리해 인증 상태 변경이 즉시 반영되게 했습니다.",
      },
      {
        icon: "bi-person-gear",
        title: "권한 분기와 관리자 접근 제어",
        description:
          "사용자/관리자 권한을 분리해 관리 메뉴는 관리자 계정에만 노출했습니다. 관리자 URL 직접 접근 시에도 세션과 권한 값을 함께 검사해 우회 접근을 막았습니다.",
      },
      {
        icon: "bi-bug",
        title: "문제 해결 경험",
        description:
          "세션 만료 직후 이전 화면이 잠깐 보이던 문제를 재현해 페이지 진입 시 공통 인증 체크를 먼저 수행하도록 실행 순서를 변경했습니다.",
      },
    ],
    processTitle: "인증/인가 구현 포인트",
    processSteps: [
      { title: "요구사항 분리", description: "회원 기능과 관리자 기능을 먼저 분리하고 각 화면에서 필요한 권한 범위를 정의했습니다." },
      { title: "세션 기준 설계", description: "로그인 유지 기준, 만료 처리, 로그아웃 동작을 먼저 설계해 상태 꼬임을 줄였습니다." },
      { title: "권한 체크 공통화", description: "페이지 단위로 권한 확인 로직을 통일해 우회 접근과 중복 코드를 함께 줄였습니다." },
      { title: "예외 흐름 검증", description: "로그인 실패, 세션 만료, 비정상 접근 시 메시지와 이동 경로를 점검했습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      {
        icon: "bi-diagram-3",
        title: "적용 프로젝트",
        description:
          "쇼핑몰 판매관리 사이트를 중심으로 로그인/회원 세션 흐름을 연결했고, e스포츠 포털과 베이커리 프로젝트에서는 관리자 화면 접근 분기 기준을 같은 방식으로 적용했습니다.",
      },
      {
        icon: "bi-window",
        title: "관련 기능 화면",
        description: "로그인, 회원가입, 마이페이지, 관리자 로그인, 관리자 관리 화면을 기준으로 접근 범위를 분리했습니다.",
      },
    ],
    sideInfo: [
      { title: "주 사용 기술", items: ["PHP 세션 기반 로그인 상태 확인", "사용자/관리자 화면 분리", "관리자 URL 진입 시 권한 검사", "Laravel 인증 흐름과 미들웨어 구조"] },
      { title: "구현 포인트", items: ["회원가입 중복 검사", "로그인/세션 저장", "사용자/관리자 메뉴 분리", "관리자 직접 접근 차단"] },
    ],
    relatedProjects: [
      { label: "쇼핑몰 판매관리 사이트", description: "로그인/로그아웃, 세션 유지, 회원 정보 처리와 주문 화면 접근 제어를 연결한 프로젝트입니다.", projectId: "shopping" },
      { label: "베이커리 판매관리 웹사이트", description: "관리자 계정 기준으로 제품·재고 관리 메뉴 접근을 분리했습니다.", projectId: "bakery" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "공개 조회 화면과 관리 기능 화면을 분리했습니다.", projectId: "esports" },
    ],
  },
  {
    id: "order",
    title: "주문·예매 상태 관리",
    summary:
      "쇼핑몰의 장바구니·주문 저장 흐름과 CineFlow의 상영 일정·좌석·예매 완료 흐름을 상태 기준으로 연결했습니다.",
    icon: "bi-code-slash",
    heroTitle: "상품 선택부터 주문 완료까지 주문 데이터가 끊기지 않게 구현했습니다",
    lead:
      "쇼핑몰 판매관리 프로젝트에서 장바구니, 주문서, 주문 저장, 관리자 주문 처리를 단계별로 나눠 적용했습니다. 사용자 화면에서 생성된 주문이 주문번호 기준으로 관리자 화면에서 확인·처리되도록 주문 마스터/상세 구조를 함께 사용했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "장바구니 데이터를 주문서로 전달하고 주문 저장 시 주문번호를 생성해, 관리자 주문 처리 화면에서 같은 주문번호로 조회되도록 구현했습니다.",
    features: [
      { icon: "bi-bag-check", title: "상품 선택 및 상세 조회", description: "상품 목록/상세 화면에서 옵션·수량 선택값이 장바구니 또는 주문서에 바로 반영되게 처리했습니다." },
      { icon: "bi-cart3", title: "장바구니 처리와 수량 변경", description: "상품 ID·수량·금액을 저장하고 수량 변경·선택 삭제 시 합계가 즉시 다시 계산되게 했습니다." },
      { icon: "bi-receipt", title: "주문 처리 및 상태 관리", description: "주문번호를 생성하고 주문 마스터/상세 데이터를 분리해 저장했습니다. 사용자 주문 내역과 관리자 주문 처리 화면이 같은 상태 값을 조회하도록 맞췄습니다." },
      { icon: "bi-exclamation-triangle", title: "예외 케이스 대응", description: "로그인 세션 없이 주문서에 접근한 경우, 품절 상품 주문, 동일 요청 재전송을 각각 검증했습니다." },
    ],
    processTitle: "주문 기능 구현 포인트",
    processSteps: [
      { title: "주문 플로우 정의", description: "상품 상세 → 장바구니 → 주문서 → 주문 완료 흐름을 먼저 고정했습니다." },
      { title: "상태 데이터 설계", description: "장바구니 JSON 구조와 주문 마스터/주문 상세 테이블, 주문 상태 값을 함께 정의했습니다." },
      { title: "화면/DB 동기화", description: "사용자 주문 저장 후 관리자 주문 처리 화면에서도 주문번호 기준으로 같은 주문 데이터가 조회되도록 맞췄습니다." },
      { title: "예외 상황 점검", description: "로그인 만료, 비정상 수량, 중복 요청 상황을 테스트하며 처리 로직을 보완했습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      { icon: "bi-diagram-3", title: "적용 프로젝트", description: "쇼핑몰 판매관리 사이트에서 상품 선택부터 주문 저장까지 흐름을 나누어 처리했습니다." },
      { icon: "bi-film", title: "예매 상태 연결", description: "CineFlow에서는 상영 일정, 좌석 선택, 결제수단 선택, 예매 완료·취소 흐름을 상태 기준으로 연결했습니다." },
    ],
    sideInfo: [
      { title: "주 사용 기술", items: ["주문번호 기준 저장", "주문 마스터/상세 분리", "상태 값 기준 화면 동기화", "중복 요청과 예외 상황 검증"] },
    ],
    relatedProjects: [
      { label: "쇼핑몰 판매관리 사이트", description: "주문번호 중심으로 사용자 주문과 관리자 주문 조회를 연결했습니다.", projectId: "shopping" },
      { label: "CineFlow 영화 예매 관리 시스템", description: "상영 일정·좌석·결제·예매 상태를 하나의 흐름으로 연결했습니다.", projectId: "cineflow" },
    ],
  },
  {
    id: "board",
    title: "게시판 및 콘텐츠 관리",
    summary:
      "e스포츠 포털에서 뉴스·공지·패치노트와 팀·선수·경기 데이터를 관리자 등록과 사용자 조회 기준으로 분리했습니다.",
    icon: "bi-phone",
    heroTitle: "사용자 화면과 운영 화면을 함께 고려해 게시판 기능을 구현했습니다",
    lead:
      "e스포츠 포털 및 경기관리 웹사이트에서 뉴스·공지·패치노트와 팀/선수/경기 데이터를 관리자 등록과 사용자 조회 흐름으로 나눠 적용했습니다. 검색·정렬·페이징·이미지 업로드를 포함해 콘텐츠 관리 기능을 화면별로 구현했습니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "단순 게시판 CRUD를 넘어 콘텐츠 등록과 사용자 조회 기능을 분리 구현했습니다. 관리자 입력 데이터가 목록·상세·랭킹 화면에 어떤 조건으로 노출되는지 프로젝트 구조에 맞춰 정리했습니다.",
    features: [
      { icon: "bi-journal-text", title: "게시판 CRUD", description: "뉴스·공지·패치노트 등록/수정/삭제와 상세 조회를 적용하고 콘텐츠 유형별 입력값 검증을 두었습니다." },
      { icon: "bi-list-ul", title: "목록, 검색, 정렬, 페이징", description: "콘텐츠 목록과 팀/선수/경기 일정 화면에 검색·정렬·페이징 조건을 분리 적용했습니다." },
      { icon: "bi-folder-check", title: "콘텐츠 관리 및 첨부 흐름", description: "관리자 화면에서 대표 이미지와 본문 데이터를 함께 저장하고 업로드 확장자와 필수 입력을 점검했습니다." },
      { icon: "bi-tools", title: "문제 해결 경험", description: "수정한 콘텐츠가 사용자 목록에 즉시 반영되지 않던 문제를 조회 조건과 정렬 쿼리 점검으로 해결했습니다." },
    ],
    processTitle: "게시판 구현 포인트",
    processSteps: [
      { title: "정보 구조 설계", description: "카테고리, 목록, 상세 화면의 이동 흐름을 먼저 설계했습니다." },
      { title: "CRUD 기능 구현", description: "작성·수정·삭제·조회 기능을 권한 조건별로 나눠 적용했습니다." },
      { title: "검색/페이징 최적화", description: "목록 탐색 편의성을 위해 검색 조건과 페이지 이동 로직을 분리 구현했습니다." },
      { title: "운영 기능 보완", description: "관리자 콘텐츠 관리와 첨부 처리 검증으로 운영 안정성을 높였습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      { icon: "bi-diagram-3", title: "적용 프로젝트", description: "e스포츠 포털에서는 뉴스/패치노트/공지 흐름을 중심으로 적용했습니다." },
      { icon: "bi-image", title: "관련 기능 화면", description: "관리자 등록 화면, 사용자 목록, 상세 페이지, 경기 일정 조회 화면의 조건을 분리했습니다." },
    ],
    sideInfo: [
      { title: "주 사용 기술", items: ["Laravel 라우팅", "Blade 화면 구성", "검색·정렬·페이징", "이미지 업로드 검증"] },
    ],
    relatedProjects: [
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "뉴스·경기·팀·선수 데이터를 사용자 화면과 관리자 화면으로 분리했습니다.", projectId: "esports" },
    ],
  },
  {
    id: "database",
    title: "DB 설계 및 연동",
    summary:
      "예매·경기·주문 데이터를 관계형 구조로 나누고, CSV 데이터는 분석 가능한 형태로 전처리했습니다.",
    icon: "bi-megaphone",
    heroTitle: "기능 요구사항을 테이블 구조와 조회 쿼리로 구체화했습니다",
    lead:
      "쇼핑몰, e스포츠 포털, 베이커리 프로젝트에서 화면 기능이 요구하는 데이터를 관계형 구조로 설계했습니다. 회원/상품/주문, 팀/선수/경기 결과, 제품/재고/판매 데이터를 PK/FK로 연결한 방식을 프로젝트별로 설명합니다.",
    introTitle: "핵심 구현 내용",
    intro:
      "단순 테이블 생성이 아니라 화면 요구사항에 맞춰 데이터 관계를 분리한 경험을 중심으로 설명합니다. 관리자 화면과 사용자 화면이 같은 데이터를 다른 목적에서 조회하는 구조를 프로젝트별로 맞췄습니다.",
    features: [
      { icon: "bi-diagram-3", title: "테이블 관계 설계와 정규화", description: "회원·상품·주문·주문상세를 분리해 주문 마스터/상세 구조를 만들고 PK/FK로 묶어 중복 저장을 줄였습니다." },
      { icon: "bi-search", title: "CRUD 및 조회 쿼리 흐름", description: "팀, 선수, 경기 일정, 경기 결과, 순위 집계 데이터를 JOIN으로 조회하고 검색·정렬·페이징 조건을 분리했습니다." },
      { icon: "bi-link-45deg", title: "웹 기능과 DB 연동", description: "제품·재고·판매 데이터를 분리 저장하고, 관리자 화면에서 같은 제품 키로 조회하게 했습니다." },
      { icon: "bi-shield-check", title: "예외 처리와 데이터 일관성", description: "주문상세 누락, 순위 집계 불일치, 재고 음수 같은 예외를 확인해 검증 로직을 적용했습니다." },
    ],
    processTitle: "DB 설계/연동 구현 포인트",
    processSteps: [
      { title: "요구사항 기반 모델링", description: "화면 기능을 기준으로 엔터티와 관계를 정의하고 ERD를 먼저 작성했습니다." },
      { title: "정규화 및 키 설계", description: "중복 데이터를 줄이고 PK/FK 기준을 명확히 정리했습니다." },
      { title: "쿼리/연동 구현", description: "CRUD와 JOIN 조회를 적용하고 컨트롤러-서비스-DB 사이 데이터 기준을 통일했습니다." },
      { title: "무결성 검증", description: "예외 입력과 연관 데이터 변경 시나리오를 점검해 일관성을 보완했습니다." },
    ],
    evidenceTitle: "프로젝트 적용 근거",
    evidence: [
      { icon: "bi-diagram-3", title: "적용 프로젝트", description: "쇼핑몰 판매관리 사이트, e스포츠 포털, 베이커리 관리 프로젝트에서 화면 요구사항에 맞춰 데이터 구조를 분리했습니다." },
      { icon: "bi-bar-chart", title: "분석 데이터 처리", description: "Movie PCA에서는 CSV 데이터를 결측값·이상치 처리 후 분석 가능한 형태로 변환했습니다." },
    ],
    sideInfo: [
      { title: "주 사용 기술", items: ["MySQL 테이블 설계", "PK/FK 관계 정리", "JOIN 조회", "CSV 전처리와 분석 데이터 구성"] },
    ],
    relatedProjects: [
      { label: "쇼핑몰 판매관리 사이트", description: "주문 마스터/상세 구조를 통해 주문 데이터를 분리했습니다.", projectId: "shopping" },
      { label: "e스포츠 포털 및 경기관리 웹사이트", description: "팀·선수·경기 결과와 순위 집계를 관계형 데이터로 관리했습니다.", projectId: "esports" },
      { label: "베이커리 판매관리 웹사이트", description: "제품·재고·판매 데이터를 제품 키 기준으로 연결했습니다.", projectId: "bakery" },
    ],
  },
];

export function getServiceDetail(serviceId: string) {
  return services.find((service) => service.id === serviceId);
}
