import type { Project, ProjectDetail } from "../types/project";

const projectDetails: Array<Omit<ProjectDetail, "heroImage"> & { heroImage?: string }> = [
  {
    projectId: "cineflow",
    introduction:
      "좌석 선택 · 결제 · 예매 조회와 영화 · 극장 · 상영일정 관리를 지원하는 영화 예매 서비스",
    developmentType: "개인 프로젝트",
    flowIcons: ["film", "calendar-event", "grid-3x3-gap", "credit-card", "check-circle"],
    dataFlow: [
      "영화 선택 → 상영회차 선택 → 좌석 선택 → 결제 → 예매 완료",
    ],
    implementationPoints: [
      {
        title: "중복 예매 방지",
        icon: "lock",
        description:
          "예매 확정 시 해당 회차의 좌석 잠금\n한 트랜잭션에서 좌석 상태와 예매 · 결제 기록 관리",
      },
      {
        title: "회원 · 비회원 조회 기준 분리",
        icon: "people",
        description:
          "회원은 계정, 비회원은 예매번호와 연락처로 조회",
      },
      {
        title: "Flyway로 DB 변경 관리",
        icon: "database",
        description:
          "스키마와 초기 데이터 변경 이력 관리",
      },
    ],
    troubleshooting: [
      {
        title: "TMDB 응답 실패",
        cause:
          "영화 정보가 TMDB 응답에 의존",
        solution:
          "로컬 초기 데이터로 화면 유지",
      },
    ],
    results: [
      {
        value: "예매 완료 · 잘못된 회차 처리 검증",
        description: "예매 ID 기반 완료 화면 조회 테스트",
      },
      {
        value: "관리자 회차별 예매 조회",
      },
    ],
    resultLinks: [
      {
        label: "GitHub Actions 테스트",
        url: "https://github.com/allen8524/cineflow-spring-boot/actions",
      },
      {
        label: "예매 화면 테스트 코드",
        url: "https://github.com/allen8524/cineflow-spring-boot/blob/main/src/test/java/com/cineflow/controller/BookingControllerPageTest.java",
      },
    ],
    gallery: [
      { src: "assets/img/portfolio/cineflow-main.webp", alt: "CineFlow 메인 화면" },
      { src: "assets/img/portfolio/cineflow-booking.webp", alt: "CineFlow 예매 화면" },
      { src: "assets/img/portfolio/cineflow-admin.png", alt: "CineFlow 관리자 화면" },
      {
        src: "assets/img/portfolio/cineflow-booking-gallery.png",
        alt: "CineFlow 빠른예매 진행 화면",
      },
      {
        src: "assets/img/portfolio/cineflow-admin-gallery.png",
        alt: "CineFlow 관리자 상영일정 관리 화면",
      },
    ],
  },
  {
    projectId: "esports",
    introduction:
      "선수 · 경기 · 순위 · 뉴스 조회와 콘텐츠 관리를 지원하는 e스포츠 포털",
    developmentType: "개인 프로젝트",
    flowIcons: ["pencil-square", "check-circle", "calculator", "sort-down", "trophy"],
    dataFlow: [
      "경기 결과 입력 → 종료 상태 확인 → 팀 기록 계산 → 순위 정렬 → 순위표 갱신",
    ],
    implementationPoints: [
      {
        title: "종료 경기 기준 순위 집계",
        icon: "trophy",
        description:
          "홈 · 원정 기록을 합산해 팀별 승률과 득실차 계산",
      },
      {
        title: "운영 영역 접근 분리",
        icon: "shield-lock",
        description:
          "관리자 미들웨어로 경기 관리 접근 제한",
      },
      {
        title: "뉴스 식별자와 라우팅 기준",
        icon: "link-45deg",
        description:
          "slug로 뉴스 목록과 상세 URL 연결",
      },
    ],
    troubleshooting: [
      {
        title: "경기 결과 저장 후 순위 불일치",
        cause: "사용자 · 관리자 화면의 순위 집계 기준 차이",
        solution: "종료된 경기만 순위에 반영",
      },
    ],
    results: [
      {
        value: "경기 일정과 최종 점수 조회",
      },
      {
        value: "리그 · 스테이지별 승률과 득실차 비교",
      },
    ],
    resultLinks: [
      { label: "순위 집계 코드", url: "https://github.com/allen8524/esports-portal-management/blob/main/app/Http/Controllers/RankingsController.php" },
      { label: "경기 관리 코드", url: "https://github.com/allen8524/esports-portal-management/blob/main/app/Http/Controllers/MatchController.php" },
    ],
    gallery: [
      { src: "assets/img/portfolio/esports_main.png", alt: "e스포츠 포털 메인 화면" },
      { src: "assets/img/portfolio/esports_sub1.png", alt: "선수 목록과 포지션 필터" },
      { src: "assets/img/portfolio/esports_sub2.png", alt: "경기 일정과 결과 목록" },
      { src: "assets/img/portfolio/esports_sub3.png", alt: "리그 뉴스 목록" },
    ],
  },
  {
    projectId: "shopping",
    introduction:
      "상품 주문과 관리자 기능을 갖춘 PHP 쇼핑몰 · 학습용 결제",
    developmentType: "개인 프로젝트",
    flowIcons: ["bag", "cart3", "clipboard", "database", "receipt"],
    dataFlow: [
      "상품 선택 → 장바구니 → 주문서 작성 → 주문 저장 → 주문 조회",
    ],
    implementationPoints: [
      {
        title: "주문과 상품 내역 동시 저장",
        icon: "database",
        description:
          "jumun 또는 jumuns 저장 실패 시 주문 전체 롤백",
      },
      {
        title: "사용자 · 관리자 조회 기준 통일",
        icon: "receipt",
        description:
          "사용자 · 관리자 화면에서 동일한 주문번호 사용",
      },
    ],
    troubleshooting: [
      {
        title: "주문서로 이동할 때 상품 정보 누락",
        cause: "장바구니 전달 항목과 주문 저장 항목 불일치",
        solution: "상품 ID · 옵션 · 수량 검증 후 DB 가격으로 금액 계산",
      },
    ],
    results: [
      {
        value: "주문번호로 상품별 옵션과 수량 조회",
      },
      {
        value: "주문 저장 성공 시 장바구니 초기화",
        description: "저장 성공 후 장바구니 쿠키 만료",
      },
    ],
    resultLinks: [
      { label: "주문 처리 문서", url: "https://github.com/allen8524/shopping-mall-management-php/blob/main/docs/order-flow.md" },
      { label: "주문 저장 코드", url: "https://github.com/allen8524/shopping-mall-management-php/blob/main/order_ok.php" },
    ],
    gallery: [
      { src: "assets/img/portfolio/shopping_main.png", alt: "쇼핑몰 메인 화면" },
      { src: "assets/img/portfolio/shopping_sub1.png", alt: "쇼핑몰 신상품 목록" },
      { src: "assets/img/portfolio/shopping_sub2.png", alt: "상품 상세와 옵션·수량 선택" },
      { src: "assets/img/portfolio/shopping_sub3.png", alt: "관리자 상품 검색과 목록" },
    ],
  },
  {
    projectId: "bakery",
    introduction:
      "베이커리 상품 · 입출고 기록과 재고 · 판매 현황 관리",
    developmentType: "개인 프로젝트",
    flowIcons: ["box-seam", "boxes", "receipt", "journal-text", "bar-chart"],
    dataFlow: [
      "제품 등록 → 재고 연결 → 판매 기록 → 장부 집계 → 통계 확인",
    ],
    implementationPoints: [
      {
        title: "거래 장부를 기준으로 재고 계산",
        icon: "boxes",
        description:
          "제품 ID로 장부 연결 후 매입 · 매출을 재고에 반영",
      },
    ],
    troubleshooting: [
      {
        title: "거래 없는 제품 조회",
        cause: "거래 기록이 없을 때 조회 결과 누락",
        solution: "제품을 먼저 조회하고 빈 거래 내역은 별도 처리",
      },
    ],
    results: [
      {
        value: "대시보드에서 품절 · 재고 부족 구분",
      },
      {
        value: "기간별 거래 조회 · 상품별 판매 비교",
      },
    ],
    resultLinks: [
      { label: "상품 관리 코드", url: "https://github.com/allen8524/bakery-sales-management-laravel/blob/main/app/Http/Controllers/ProductController.php" },
      { label: "판매 차트 코드", url: "https://github.com/allen8524/bakery-sales-management-laravel/blob/main/app/Http/Controllers/ChartController.php" },
    ],
    gallery: [
      {
        src: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
        alt: "베이커리 판매관리 대시보드 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/product-index.png",
        alt: "베이커리 상품 관리 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/jangbu-index.png",
        alt: "베이커리 매입 매출 장부 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/chart.png",
        alt: "베이커리 통계 차트 화면",
      },
    ],
  },
  {
    projectId: "movie-analysis",
    introduction:
      "Cine21 데이터 기반 평점 · 관객 수 상관분석 및 PCA 회귀분석",
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/poster_202212004_hwang_minseo.png",
    flowIcons: ["filetype-csv", "filter", "diagram-3", "graph-up", "save"],
    dataFlow: [
      "CSV 로드 → 전처리 → PCA · 상관분석 → 회귀분석 → 결과 저장",
    ],
    implementationPoints: [
      {
        title: "PC1 기반 평점 회귀 분석",
        icon: "graph-up",
        description:
          "수치 지표를 PC1로 압축해 평점 예측에 활용",
      },
    ],
    troubleshooting: [
      {
        title: "관객 수 이상치 영향",
        cause:
          "이상치로 인한 정규화 범위와 회귀 결과 변화",
        solution:
          "IQR 이상치 처리 후 MinMax 정규화",
      },
    ],
    results: [
      {
        value: "PC1 설명분산비 53.95%",
      },
      {
        value: "전문가 · 관객 평점과 관객 수 비교",
        description: "상관관계를 히트맵으로 시각화",
      },
      {
        value: "선형회귀 R² 0.2752 · MSE 0.0572",
        description: "평점 변동의 약 28% 설명",
      },
    ],
    resultLinks: [
      {
        label: "분석 스크립트",
        url: "https://github.com/allen8524/movie-pca-rating-analysis/blob/main/src/hms_project_202212004.py",
      },
      {
        label: "분석 노트북",
        url: "https://github.com/allen8524/movie-pca-rating-analysis/blob/main/notebooks/hms_project_202212004.ipynb",
      },
      {
        label: "분석 요약",
        url: "https://github.com/allen8524/movie-pca-rating-analysis/blob/main/outputs/analysis_summary.txt",
      },
    ],
    gallery: [
      {
        src: "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/pca_explained_variance.png",
        alt: "Cine21 영화 데이터 PCA 설명분산비 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/correlation_heatmap.png",
        alt: "Cine21 영화 데이터 상관관계 히트맵",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/images/actual_vs_predicted.png",
        alt: "Cine21 영화 데이터 실제 평점과 예측 평점 비교 그래프",
      },
    ],
  },
  {
    projectId: "seoul-bike",
    introduction:
      "서울 공공자전거 이용량 예측 · 고수요 분류 · 대여소 유형 분석",
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/seoul-bike-hourly-usage.png",
    flowIcons: ["database", "filter", "bar-chart", "diagram-3", "save"],
    dataFlow: [
      "데이터 로드 → 전처리 · 파생변수 → 시각화 → 회귀 · 분류 · 군집 → 결과 저장",
    ],
    implementationPoints: [
      {
        title: "이용건수 예측과 고수요 분류",
        icon: "graph-up",
        description:
          "이용량은 다중선형회귀, 고수요는 로지스틱 회귀와 KNN 적용",
      },
      {
        title: "분석 기준 데이터셋 고정",
        icon: "database",
        description:
          "시각화와 모델에 동일한 전처리 데이터 사용",
      },
      {
        title: "대여소 특성 군집화",
        icon: "diagram-3",
        description:
          "이동거리 · 시간과 출퇴근 · 주말 이용 비율로 군집화",
      },
    ],
    troubleshooting: [
      {
        title: "대용량 원본 CSV",
        cause:
          "전체 CSV를 저장소에 담기 어려운 용량",
        solution:
          "저장소에 샘플과 분석 결과만 포함",
      },
    ],
    results: [
      {
        value: "이용 피크 오전 8시와 오후 5~6시",
      },
      {
        value: "이용건수 예측과 고수요 분류 성능",
        description: "회귀 R² 0.5431 · 분류 정확도 로지스틱 회귀 0.8969, KNN 0.9013",
      },
      {
        value: "K-means로 대여소를 세 유형으로 분류",
        description: "출근형 · 장거리/장시간형 · 퇴근형 고수요",
      },
    ],
    resultLinks: [
      {
        label: "분석 스크립트",
        url: "https://github.com/allen8524/seoul-bike-demand-analysis/blob/main/scripts/hms_bike_project.R",
      },
      {
        label: "분석 결과 CSV",
        url: "https://github.com/allen8524/seoul-bike-demand-analysis/tree/main/results",
      },
      {
        label: "발표 자료",
        url: "https://github.com/allen8524/seoul-bike-demand-analysis/blob/main/presentation/seoul_bike_demand_analysis_presentation.pptx",
      },
    ],
    gallery: [
      {
        src: "assets/img/portfolio/seoul-bike-hourly-usage.png",
        alt: "서울 공공자전거 시간대별 이용건수 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/age_group_usage.png",
        alt: "서울 공공자전거 연령대별 이용건수 그래프",
      },
      {
        src: "assets/img/portfolio/seoul-bike-regression.png",
        alt: "서울 공공자전거 실제 이용건수와 예측 이용건수 비교 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/kmeans_station_cluster.png",
        alt: "서울 공공자전거 K-means 대여소 군집분석 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/logistic_prediction_probability.png",
        alt: "서울 공공자전거 로지스틱 회귀 예측 확률 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/knn_prediction_probability.png",
        alt: "서울 공공자전거 KNN 예측 확률 그래프",
      },
    ],
  },
  {
    projectId: "undead-survivor",
    introduction:
      "자동 공격과 레벨업으로 제한 시간 동안 생존하는 Android 액션 게임",
    developmentType: "개인 프로젝트",
    flowIcons: ["person", "lightning-charge", "arrow-up-circle", "heart", "flag"],
    dataFlow: [
      "캐릭터 선택 → 전투 루프 → 경험치 · 레벨업 → 생존 판정 → 결과 화면",
    ],
    implementationPoints: [
      {
        title: "적과 투사체 풀링",
        icon: "arrow-repeat",
        description:
          "PoolManager에서 비활성 객체가 없을 때만 새로 생성",
      },
      {
        title: "생존 루프 상태 연결",
        icon: "lightning-charge",
        description:
          "주변 적 자동 공격 후 처치 경험치로 레벨업",
      },
    ],
    troubleshooting: [],
    results: [
      {
        value: "자동 공격과 레벨업 장비 선택",
      },
      {
        value: "생존 · 사망 결과 화면 분기",
      },
    ],
    resultLinks: [
      { label: "오브젝트 풀링 코드", url: "https://github.com/allen8524/undead-survivor-unity/blob/main/Scripts/PoolManager.cs" },
      { label: "Android APK", url: "https://github.com/allen8524/undead-survivor-unity/blob/main/APK/Undead-Survivor.apk" },
    ],
    gallery: [
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-character-select.png",
        alt: "Undead Survivor 캐릭터 선택 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
        alt: "Undead Survivor 플레이 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-combat.png",
        alt: "Undead Survivor 전투 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-levelup.png",
        alt: "Undead Survivor 레벨업 보상 선택 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-survived.png",
        alt: "Undead Survivor 생존 결과 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-dead.png",
        alt: "Undead Survivor 사망 결과 화면",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-characters.png",
        alt: "Undead Survivor 캐릭터 목록 화면",
      },
    ],
  },
  {
    projectId: "healthyup",
    introduction:
      "BMI 계산과 운동 정보 · 영상 · 계획을 제공하는 iOS 앱",
    developmentType: "개인 프로젝트",
    flowIcons: ["pencil-square", "shield-check", "calculator", "clipboard-data", "play-circle"],
    dataFlow: [
      "키 · 체중 입력 → 입력값 검증 → BMI 판정 → 결과 표시 → 운동 콘텐츠 이동",
    ],
    implementationPoints: [
      {
        title: "BMI 계산 전 입력값 검증",
        icon: "shield-check",
        description:
          "키 · 체중 검증 후 BMI 판정별 색상 표시",
      },
      {
        title: "네트워크 · 로컬 콘텐츠 분리",
        icon: "play-circle",
        description:
          "운동 정보는 WebView, 시범 영상은 앱 파일로 제공",
      },
      {
        title: "입력 컨트롤과 운동 계획 연결",
        icon: "sliders",
        description:
          "강도 · 시간 · 세트 수 조절",
      },
    ],
    troubleshooting: [],
    results: [
      {
        value: "빈 입력 · 숫자 입력 오류 안내",
      },
      {
        value: "운동 설정 변경 시 계획 요약 갱신",
      },
    ],
    resultLinks: [
      {
        label: "BMI 계산 코드",
        url: "https://github.com/allen8524/healthyup-ios/blob/main/BMI04-HMS/ViewController.swift",
      },
      {
        label: "기능 정리",
        url: "https://github.com/allen8524/healthyup-ios/blob/main/docs/FEATURES.md",
      },
      {
        label: "개선 사항",
        url: "https://github.com/allen8524/healthyup-ios/blob/main/docs/IMPROVEMENTS.md",
      },
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
      {
        src: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/app-icon.png",
        alt: "HealthyUp iOS 앱 아이콘",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/launch-screen.png",
        alt: "HealthyUp iOS Launch Screen 화면",
      },
    ],
  },
];

export function getProjectDetail(project: Project): ProjectDetail | undefined {
  const detail = projectDetails.find((item) => item.projectId === project.id);
  if (!detail) return undefined;

  return { ...detail, heroImage: detail.heroImage ?? project.previewImage };
}
