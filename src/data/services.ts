import type { ServiceDetail } from "../types/service";

export const services: ServiceDetail[] = [
  {
    id: "auth",
    title: "인증 · 권한 관리",
    summary: "Spring Security · 세션 인증 · BCrypt · 관리자 권한 제어",
    introduction: "로그인 세션 관리와 사용자 · 관리자 접근 권한 분리",
    icon: "shield",
    relatedIcons: ["user", "document"],
    image: "assets/img/portfolio/cineflow-login.png",
    imageAlt: "CineFlow 로그인 화면",
    features: [
      {
        icon: "shield",
        title: "관리자 경로 접근 제한",
        description:
          "마이페이지와 예매 API는 로그인 필수, 관리자 경로는 ADMIN 역할만 허용",
        source: {
          label: "SecurityConfig.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/config/SecurityConfig.java",
        },
      },
      {
        icon: "user",
        title: "계정 조회와 비밀번호 검증",
        description:
          "로그인 ID로 계정과 역할 조회, BCrypt 해시로 비밀번호 검증",
        source: {
          label: "UserService.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/service/UserService.java",
        },
      },
      {
        icon: "bug",
        title: "로그아웃 후 인증 상태 정리",
        description:
          "로그아웃 시 서버 세션 무효화, JSESSIONID 삭제 후 로그인 화면 이동",
        source: {
          label: "SecurityConfig.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/config/SecurityConfig.java",
        },
      },
    ],
    processTitle: "인증 흐름",
    processSteps: [
      { title: "로그인", icon: "bi-box-arrow-in-right" },
      { title: "접근 권한 확인", icon: "bi-shield-check" },
      { title: "로그아웃", icon: "bi-box-arrow-right" },
    ],
    evidenceTitle: "적용 프로젝트",
    evidence: [
      {
        icon: "film",
        title: "CineFlow",
        description: "Spring Security · BCrypt · 세션 인증",
      },
      {
        icon: "controller",
        title: "e스포츠 포털",
        description: "auth·admin 미들웨어 · 세션 재발급",
      },
      { icon: "cart", title: "쇼핑몰", description: "PHP 세션 로그인" },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: [
          "Spring Security · formLogin",
          "UserDetailsService · GrantedAuthority",
          "BCryptPasswordEncoder",
          "CSRF · HttpSession",
        ],
      },
      {
        title: "확인 항목",
        items: [
          "보호 경로의 비로그인 접근",
          "ADMIN 역할 없는 관리자 접근",
          "로그아웃 후 세션·쿠키 정리",
        ],
      },
    ],
    relatedProjects: [
      {
        label: "CineFlow 영화 예매 관리 시스템",
        description: "Spring Security",
        projectId: "cineflow",
      },
      {
        label: "e스포츠 포털 및 경기관리 웹사이트",
        description: "관리자 미들웨어",
        projectId: "esports",
      },
      {
        label: "쇼핑몰 판매관리 사이트",
        description: "PHP 세션",
        projectId: "shopping",
      },
    ],
  },
  {
    id: "order",
    title: "예매 · 주문 흐름 관리",
    summary: "Spring @Transactional · JPA 비관적 잠금 · 예매 상태 전이",
    introduction: "좌석 선택부터 예매 확정 · 취소까지 좌석과 결제 상태 관리",
    icon: "ticket",
    relatedIcons: ["cart", "box"],
    image: "assets/img/portfolio/cineflow-booking-gallery.png",
    imageAlt: "CineFlow 빠른예매와 좌석 선택 진행 화면",
    features: [
      {
        icon: "ticket",
        title: "@Transactional · 예매 일괄 저장",
        description:
          "BookingService에서 예매 · 좌석 상태 · 결제 결과를 한 트랜잭션으로 처리",
        source: {
          label: "BookingService.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/service/BookingService.java",
        },
      },
      {
        icon: "database",
        title: "PESSIMISTIC_WRITE · 좌석 잠금",
        description:
          "예약 처리 전 @Lock(PESSIMISTIC_WRITE)로 좌석 잠금",
        source: {
          label: "ScheduleSeatRepository.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/repository/ScheduleSeatRepository.java",
        },
      },
      {
        icon: "bug",
        title: "취소 권한 · 좌석 상태 복원",
        description:
          "취소 권한과 상태 확인 후 결제 취소 · 좌석 해제 · 잔여 수량 갱신",
        source: {
          label: "BookingService.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/service/BookingService.java",
        },
      },
    ],
    processTitle: "예매 처리 흐름",
    processSteps: [
      {
        title: "좌석 잠금",
        description:
          "좌석 잠금 후 예약 가능 여부 확인",
      },
      {
        title: "예매 저장",
        description: "예매 · 좌석 내역과 결제 결과를 한 트랜잭션으로 저장",
      },
    ],
    alternateProcess: {
      title: "예매 취소",
      description: "취소 권한과 조건 확인 후 결제 취소 및 좌석 해제",
    },
    evidenceTitle: "적용 프로젝트",
    evidence: [
      {
        icon: "film",
        title: "CineFlow",
        description: "예매번호 · 좌석 · 결제 연결",
      },
      {
        icon: "cart",
        title: "쇼핑몰",
        description: "주문번호 · 주문 상세 저장",
      },
      {
        icon: "shop",
        title: "베이커리",
        description: "제품 ID · 재고 · 판매 확인",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: [
          "Spring @Transactional",
          "JPA · PESSIMISTIC_WRITE",
          "Booking · BookingSeat 엔티티",
          "BookingStatus · PaymentStatus",
        ],
      },
      {
        title: "확인 항목",
        items: [
          "동일 좌석 예약 충돌",
          "회원 예매 소유자 확인",
          "취소 후 좌석·예매 상태 일치",
        ],
      },
    ],
    relatedProjects: [
      {
        label: "CineFlow 영화 예매 관리 시스템",
        description: "예매 기준",
        projectId: "cineflow",
      },
      {
        label: "쇼핑몰 판매관리 사이트",
        description: "주문 기준",
        projectId: "shopping",
      },
      {
        label: "베이커리 판매관리 웹사이트",
        description: "제품 기준",
        projectId: "bakery",
      },
    ],
  },
  {
    id: "board",
    title: "관리자 데이터 운영",
    summary: "Spring MVC · Laravel FormRequest · 파일 검증 · 상태 기반 노출",
    introduction: "관리자 요청 분리와 운영 데이터 검증 · 반영",
    icon: "document",
    relatedIcons: ["user", "chart"],
    image: "assets/img/portfolio/cineflow-admin-gallery.png",
    imageAlt: "CineFlow 관리자 상영일정 데이터 운영 화면",
    features: [
      {
        icon: "document",
        title: "Spring MVC · 관리자 CRUD",
        description:
          "영화 · 극장 · 상영관 · 상영일정 요청 분리, 서비스 계층에서 저장 · 수정 · 삭제",
        source: {
          label: "AdminManagementController.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/controller/AdminManagementController.java",
        },
      },
      {
        icon: "search",
        title: "Laravel Validation · 이미지 검증",
        description:
          "Request::validate로 제품 입력과 이미지 형식 · 2048KB 제한 검증",
        source: {
          label: "ProductController.php",
          url: "https://github.com/allen8524/bakery-sales-management-laravel/blob/main/app/Http/Controllers/ProductController.php",
        },
      },
      {
        icon: "controller",
        title: "Laravel Middleware · 경기 상태 분기",
        description:
          "auth · admin으로 경기 변경 제한, 종료 경기의 점수로 승리 팀 저장",
        source: {
          label: "MatchController.php",
          url: "https://github.com/allen8524/esports-portal-management/blob/main/app/Http/Controllers/MatchController.php",
        },
      },
    ],
    processTitle: "구현 기준",
    processSteps: [
      {
        title: "요청 분리",
        description:
          "Spring MVC 컨트롤러와 Laravel 라우트에서 운영 기능별 요청 정의.",
      },
      {
        title: "입력 검증",
        description: "필수값·경기 상태·이미지 형식과 크기를 저장 전에 검증.",
      },
      {
        title: "상태 반영",
        description:
          "저장 결과를 Thymeleaf·Blade 관리자 화면과 사용자 조회에 반영.",
      },
    ],
    evidenceTitle: "적용 프로젝트",
    evidence: [
      {
        icon: "film",
        title: "CineFlow",
        description: "영화 · 극장 · 상영일정 운영",
      },
      {
        icon: "controller",
        title: "e스포츠 포털",
        description: "뉴스 · 팀 · 선수 · 경기 운영",
      },
      {
        icon: "shop",
        title: "베이커리",
        description: "제품 · 재고 · 판매 운영",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: [
          "Spring MVC · Thymeleaf",
          "Laravel Request Validation",
          "auth · admin Middleware",
          "Blade · Eloquent",
        ],
      },
      {
        title: "확인 항목",
        items: [
          "직접 URL로 관리자 기능 접근",
          "이미지 형식·파일 크기 제한",
          "종료 경기의 승리 팀 입력",
        ],
      },
    ],
    relatedProjects: [
      {
        label: "CineFlow 영화 예매 관리 시스템",
        description: "영화 운영",
        projectId: "cineflow",
      },
      {
        label: "e스포츠 포털 및 경기관리 웹사이트",
        description: "콘텐츠 운영",
        projectId: "esports",
      },
      {
        label: "베이커리 판매관리 웹사이트",
        description: "제품 운영",
        projectId: "bakery",
      },
    ],
  },
  {
    id: "database",
    title: "DB 설계 및 데이터 처리",
    summary: "JPA 연관관계 · Flyway SQL · pandas 전처리 · PCA·회귀",
    introduction: "DB 관계 · 변경 이력 설계와 분석 데이터 전처리",
    icon: "database",
    relatedIcons: ["box", "chart"],
    image:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png",
    imageAlt: "Cine21 영화 데이터 상관관계 분석 결과 화면",
    features: [
      {
        icon: "database",
        title: "JPA 엔티티 · 인덱스 설계",
        description:
          "Booking 연관관계 매핑, 예매 코드 고유 제약과 조회용 인덱스 정의",
        source: {
          label: "Booking.java",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/java/com/cineflow/domain/Booking.java",
        },
      },
      {
        icon: "database",
        title: "Flyway · 버전별 스키마 관리",
        description:
          "초기 스키마부터 인덱스 · 인증 · 관리자 구조 변경까지 SQL 마이그레이션으로 관리",
        source: {
          label: "Flyway migration SQL",
          url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/main/resources/db/migration/V2__indexes_and_constraints.sql",
        },
      },
      {
        icon: "chart",
        title: "pandas · MinMaxScaler · PCA",
        description:
          "결측값 · IQR 이상치 처리와 MinMax 정규화 후 PCA · 선형회귀 분석",
        source: {
          label: "hms_project_202212004.py",
          url: "https://github.com/allen8524/movie-pca-rating-analysis/blob/main/src/hms_project_202212004.py",
        },
      },
    ],
    processTitle: "데이터 처리 영역",
    processOrdered: false,
    processSteps: [
      {
        title: "관계 정의",
        description: "예매·사용자·상영일정 연결과 조회용 키·인덱스 설계.",
      },
      {
        title: "변경 기록",
        description: "스키마 변경을 Flyway 버전별 SQL로 관리.",
      },
      {
        title: "분석 처리",
        description: "결측·이상치 처리 → 정규화 → PCA·선형회귀 수행.",
      },
    ],
    evidenceTitle: "적용 프로젝트",
    evidence: [
      { icon: "film", title: "CineFlow", description: "JPA · Flyway" },
      {
        icon: "controller",
        title: "e스포츠 포털",
        description: "MySQL JOIN · 집계",
      },
      {
        icon: "chart",
        title: "Movie PCA",
        description: "CSV 전처리 · PCA · 회귀분석",
      },
    ],
    sideInfo: [
      {
        title: "주요 적용 기술",
        items: [
          "JPA · @Entity · @Index",
          "Flyway · SQL migration",
          "pandas · MinMaxScaler",
          "PCA · LinearRegression",
        ],
      },
      {
        title: "확인 항목",
        items: [
          "예매 코드 unique 제약",
          "스키마 변경 이력 재현",
          "결측값·이상치·스케일 처리",
        ],
      },
    ],
    relatedProjects: [
      {
        label: "CineFlow 영화 예매 관리 시스템",
        description: "JPA/Flyway",
        projectId: "cineflow",
      },
      {
        label: "e스포츠 포털 및 경기관리 웹사이트",
        description: "JOIN · 집계",
        projectId: "esports",
      },
      {
        label: "Cine21 영화 데이터 PCA · 회귀 분석",
        description: "CSV 분석",
        projectId: "movie-analysis",
      },
    ],
  },
];

export function getServiceDetail(serviceId: string) {
  return services.find((service) => service.id === serviceId);
}
