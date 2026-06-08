import type { ProjectDetail } from "../types/project";

export const projectDetails: ProjectDetail[] = [
  {
    projectId: "cineflow",
    period: "2026년",
    role: "예매 단계 상태 처리, 좌석·상영일정·예매 데이터 연결, 회원·비회원 조회 분기, 관리자 운영 기능, TMDB 메타데이터 fallback, DB 마이그레이션",
    heroImage: "assets/img/portfolio/cineflow-main-hero.png",
    purpose: [
      "영화, 극장, 날짜, 상영회차, 좌석, 결제, 예매 완료, 조회·취소로 이어지는 상태 변화를 서버 로직과 DB 관계 안에서 연결하는 데 초점을 맞췄습니다.",
      "공개 사용자, 로그인 회원, 비회원, 관리자 영역을 Spring Security 경로 기준으로 분리했습니다.",
      "Flyway 마이그레이션으로 영화, 극장, 상영관, 좌석, 예매, 결제, 회원 테이블 변경 이력을 관리했습니다.",
    ],
    implementationPoints: [
      {
        title: "예매 흐름 상태 연결",
        description:
          "상영일정 ID, 좌석 상태, 예매번호, 결제 상태를 하나의 서비스 흐름으로 묶어 예매 완료와 조회·취소 화면이 같은 기준 데이터를 참조하도록 구성했습니다.",
      },
      {
        title: "회원·비회원 조회 분기",
        description:
          "회원은 계정 기준으로 예매 내역을 조회하고, 비회원은 예매번호와 연락처 기준으로 조회하도록 분기했습니다.",
      },
      {
        title: "관리자 운영 기능",
        description:
          "영화·극장·상영관·상영일정 생성, 수정, 비활성화와 예매 현황 관리를 관리자 경로로 분리했습니다.",
      },
      {
        title: "TMDB fallback/cache",
        description:
          "TMDB 토큰이 없거나 외부 API가 실패해도 로컬 seed와 fallback 데이터로 화면이 유지되도록 구성했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "좌석과 예매 상태 불일치 방지",
        description:
          "좌석 선택 이후 결제와 예매 완료 단계에서 같은 상영일정과 좌석 상태를 참조하도록 서비스 흐름을 정리했습니다.",
      },
      {
        title: "운영 데이터 보호",
        description:
          "이미 예매가 연결된 상영일정이나 상영관은 수정 범위를 제한해 운영 데이터가 깨지지 않도록 했습니다.",
      },
    ],
    resultLinks: [
      { label: "GitHub Actions 테스트", url: "https://github.com/allen8524/cineflow-spring-boot/actions" },
    ],
    gallery: [
      { src: "assets/img/portfolio/cineflow-main.png", alt: "CineFlow 메인 화면" },
      { src: "assets/img/portfolio/cineflow-booking.png", alt: "CineFlow 예매 화면" },
      { src: "assets/img/portfolio/cineflow-admin.png", alt: "CineFlow 관리자 화면" },
    ],
  },
  {
    projectId: "esports",
    period: "2025년 12월 16일",
    role: "포털 화면 구성, 도메인별 CRUD, 경기 결과 기반 순위 집계, 관리자 대시보드와 운영 기능 연결",
    heroImage: "assets/img/portfolio/esports_main.png",
    purpose: [
      "e스포츠 도메인을 바탕으로 선수·팀·경기·뉴스·패치 노트 데이터를 포털 형태로 보여주고 관리자 운영 구조까지 구현했습니다.",
      "사용자 영역과 관리자 영역을 나누어 라우팅, 인증, 권한 제어 흐름을 익히는 데 목적을 두었습니다.",
    ],
    implementationPoints: [
      {
        title: "finished 경기 기준 순위 집계",
        description:
          "경기 결과가 finished 상태인 경우에만 순위에 반영하고, 팀별 승·패·승률·득실차를 계산해 순위표를 갱신했습니다.",
      },
      {
        title: "관리자 인증과 미들웨어",
        description:
          "관리자 대시보드와 운영 기능은 미들웨어 접근 제어를 기준으로 분리했습니다.",
      },
      {
        title: "slug 기반 뉴스 라우팅",
        description:
          "뉴스 상세 페이지는 slug와 썸네일 기반으로 관리해 사용자 화면과 관리자 화면이 같은 데이터 기준을 사용하도록 했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "순위표 집계 기준 혼선",
        description:
          "예정 경기와 종료 경기가 섞이지 않도록 finished 상태만 집계 대상으로 제한했습니다.",
      },
      {
        title: "관리자 접근 범위 분리",
        description:
          "운영 화면 접근을 인증·미들웨어 기준으로 나누어 사용자 화면과 관리자 화면의 책임을 분리했습니다.",
      },
    ],
    gallery: [
      { src: "assets/img/portfolio/esports_main.png", alt: "e스포츠 포털 메인 화면" },
      { src: "assets/img/portfolio/esports_sub1.png", alt: "e스포츠 서브 화면 1" },
      { src: "assets/img/portfolio/esports_sub2.png", alt: "e스포츠 서브 화면 2" },
      { src: "assets/img/portfolio/esports_sub3.png", alt: "e스포츠 서브 화면 3" },
    ],
  },
  {
    projectId: "shopping",
    period: "2025년 6월",
    role: "상품 조회, 장바구니, 주문·결제 처리, 사용자 주문 조회, 관리자 주문 관리",
    heroImage: "assets/img/portfolio/shopping_main.png",
    purpose: [
      "PHP와 Bootstrap 기반으로 상품 조회부터 장바구니, 주문, 관리자 주문 관리까지 쇼핑몰 판매관리 흐름을 구현했습니다.",
      "주문번호를 기준으로 사용자 주문 조회와 관리자 주문 관리가 같은 주문 데이터를 참조하도록 구성했습니다.",
    ],
    implementationPoints: [
      {
        title: "주문 마스터와 주문 상세 분리",
        description:
          "주문번호를 생성한 뒤 주문 마스터 1건과 주문 상세 N건을 저장해 주문 단위와 상품 단위를 분리했습니다.",
      },
      {
        title: "사용자·관리자 주문 조회 연결",
        description:
          "사용자 주문 조회와 관리자 주문 관리가 같은 주문번호를 참조하도록 화면과 DB 흐름을 맞췄습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "주문 데이터 기준 통일",
        description:
          "장바구니 상품이 주문으로 전환될 때 주문번호를 기준으로 마스터·상세 데이터를 함께 저장해 조회 기준이 흔들리지 않게 했습니다.",
      },
    ],
    gallery: [
      { src: "assets/img/portfolio/shopping_main.png", alt: "쇼핑몰 메인 화면" },
      { src: "assets/img/portfolio/shopping_sub1.png", alt: "쇼핑몰 서브 화면 1" },
      { src: "assets/img/portfolio/shopping_sub2.png", alt: "쇼핑몰 서브 화면 2" },
      { src: "assets/img/portfolio/shopping_sub3.png", alt: "쇼핑몰 서브 화면 3" },
    ],
  },
  {
    projectId: "bakery",
    period: "2025년 12월",
    role: "제품 등록, 재고 관리, 판매 내역 확인, 관리자 화면 기능",
    heroImage: "assets/img/portfolio/portfolio-portrait-3.webp",
    purpose: [
      "Laravel 기반으로 베이커리 제품, 재고, 판매 내역을 관리자 화면에서 확인하는 판매관리 프로젝트를 구현했습니다.",
      "제품 ID를 기준으로 재고 수량과 판매 내역을 연결해 제품별 운영 상태를 확인하도록 구성했습니다.",
    ],
    implementationPoints: [
      {
        title: "제품 기준 재고·판매 연결",
        description:
          "제품 ID를 중심으로 재고 수량과 판매 내역을 조회해 관리자 화면에서 제품별 상태를 함께 확인하도록 했습니다.",
      },
      {
        title: "관리자 중심 화면 구성",
        description:
          "제품 등록, 재고 관리, 판매 내역 확인을 관리자 작업 흐름에 맞춰 배치했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "제품별 상태 확인",
        description:
          "재고와 판매 내역이 분리되어 보이면 운영 상태 파악이 어려워 제품 기준으로 조회 흐름을 맞췄습니다.",
      },
    ],
    resultLinks: [
      {
        label: "Dashboard screenshot",
        url: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
      },
    ],
  },
  {
    projectId: "movie-analysis",
    period: "2026년",
    role: "결측값 처리, 이상치 완화, 정규화, PCA 차원 축소, 상관분석, PC1 기반 선형회귀",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png",
    purpose: [
      "Cine21 영화 CSV 데이터를 전처리한 뒤 PCA·상관분석·선형회귀로 평점과 관객 수 지표의 관계를 분석했습니다.",
      "분석 결과를 PC1 설명분산비, R², MSE와 시각화 이미지로 남겨 수치와 그래프를 함께 확인할 수 있게 했습니다.",
    ],
    implementationPoints: [
      {
        title: "전처리 파이프라인",
        description:
          "결측값과 이상치를 처리한 뒤 MinMax 정규화를 적용해 PCA와 회귀분석에 사용할 입력 데이터를 정리했습니다.",
      },
      {
        title: "PCA와 회귀분석",
        description:
          "주요 지표를 PCA로 축소하고 PC1 기반 선형회귀를 수행해 관객 수와 평점 지표 간 관계를 확인했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "이상치 영향 완화",
        description:
          "영화 데이터의 관객 수 스케일 차이가 분석 결과를 왜곡하지 않도록 이상치 완화와 정규화를 먼저 적용했습니다.",
      },
    ],
    resultLinks: [
      {
        label: "Analysis README",
        url: "https://github.com/allen8524/movie-pca-rating-analysis",
      },
    ],
  },
  {
    projectId: "undead-survivor",
    period: "2026년",
    role: "플레이어 이동, 자동 공격, 적 스폰, 오브젝트 풀링, 레벨업 보상, 생존·사망 결과 처리",
    heroImage: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
    purpose: [
      "Unity와 C#으로 Android 생존형 액션 게임의 핵심 플레이 루프를 구현했습니다.",
      "반복 생성 비용을 줄이기 위해 적과 투사체를 PoolManager로 재사용하는 구조를 적용했습니다.",
    ],
    implementationPoints: [
      {
        title: "자동 공격과 적 스폰",
        description:
          "플레이어 이동, 적 탐색, 자동 공격, 적 스폰을 연결해 생존형 액션 게임 루프를 만들었습니다.",
      },
      {
        title: "Object Pooling",
        description:
          "적과 투사체를 반복 생성·삭제하지 않고 풀에서 재사용해 플레이 중 비용을 줄였습니다.",
      },
      {
        title: "레벨업과 결과 화면",
        description:
          "생존 시간과 레벨업 보상을 연결하고, 생존·사망 결과 화면으로 게임 상태를 마무리했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "반복 생성 비용",
        description:
          "적과 투사체 생성이 누적될수록 비용이 커질 수 있어 PoolManager 기반 재사용 구조로 정리했습니다.",
      },
    ],
    gallery: [
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
        alt: "Undead Survivor 플레이 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-survived.png",
        alt: "Undead Survivor 생존 결과 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-dead.png",
        alt: "Undead Survivor 사망 결과 화면",
      },
    ],
  },
  {
    projectId: "healthyup",
    period: "2026년",
    role: "BMI 계산, 입력 검증, 성별 기준 분기, 결과 UI 피드백, 운동 정보 WebView, 로컬 운동 영상 재생, 운동 계획 입력 처리",
    heroImage: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png",
    purpose: [
      "UIKit과 Storyboard를 활용해 BMI 계산, 운동 정보 탐색, 운동 영상 재생, 운동 계획 설정을 탭 기반으로 연결했습니다.",
      "BMI 결과 이후 사용자가 운동 정보 WebView, 로컬 운동 영상, 운동 계획 화면으로 이어갈 수 있게 구성했습니다.",
    ],
    implementationPoints: [
      {
        title: "BMI 입력 검증과 결과 UI",
        description:
          "키와 체중 입력값을 검증하고 성별 기준 BMI 판정을 처리해 결과 문구와 UI 피드백을 표시했습니다.",
      },
      {
        title: "WebKit과 AVKit 화면",
        description:
          "운동 정보는 WKWebView로 탐색하고, 운동 영상은 AVPlayerViewController로 로컬 mp4 영상을 재생했습니다.",
      },
      {
        title: "운동 계획 설정",
        description:
          "UISlider, UIStepper, UISegmentedControl을 사용해 운동 강도, 시간, 세트 수를 조정하고 요약 문구를 갱신했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "잘못된 입력값 방어",
        description:
          "빈 값이나 숫자 변환 실패가 BMI 계산식으로 넘어가지 않도록 입력 검증을 먼저 수행했습니다.",
      },
      {
        title: "시연 환경 안정성",
        description:
          "네트워크 상태와 관계없이 운동 영상 재생 과정을 보여주기 위해 로컬 리소스 기반 재생 구조를 사용했습니다.",
      },
    ],
    resultLinks: [
      { label: "기능 정리", url: "https://github.com/allen8524/healthyup-ios/blob/main/docs/FEATURES.md" },
      { label: "개선 사항", url: "https://github.com/allen8524/healthyup-ios/blob/main/docs/IMPROVEMENTS.md" },
    ],
    gallery: [
      {
        src: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/workout-webview.png",
        alt: "HealthyUp 운동 정보 웹뷰 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/workout-video.png",
        alt: "HealthyUp 운동 영상 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/workout-plan.png",
        alt: "HealthyUp 운동 계획 화면",
      },
    ],
  },
];

export function getProjectDetail(projectId: string) {
  return projectDetails.find((detail) => detail.projectId === projectId);
}
