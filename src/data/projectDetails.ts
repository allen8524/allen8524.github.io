import type { ProjectDetail } from "../types/project";

export const projectDetails: ProjectDetail[] = [
  {
    projectId: "cineflow",
    introduction:
      "관객은 상영회차를 고르고 좌석 선택부터 결제·예매 조회까지 진행할 수 있고, 관리자는 영화·극장·상영일정·예매를 한곳에서 관리할 수 있는 영화 예매 서비스입니다.",
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/cineflow-main-hero.png",
    dataFlow: [
      "영화 선택 → 상영회차 선택 → 좌석 선택 → 결제 → 예매 완료",
    ],
    implementationPoints: [
      {
        title: "결제 직전에 좌석을 다시 확인",
        description:
          "결제 직전에 회차 ID와 좌석 코드로 잠금을 걸어 중복 예약을 막습니다. 예매·결제 기록과 좌석 상태는 한 트랜잭션에서 저장합니다.",
      },
      {
        title: "회원 · 비회원 조회 기준 분리",
        description:
          "회원은 계정으로, 비회원은 예매번호와 연락처로 조회합니다.",
      },
      {
        title: "운영 데이터와 DB 변경 관리",
        description:
          "예매가 연결된 데이터는 수정 범위를 제한하고, 스키마와 초기 데이터 변경은 Flyway로 관리합니다.",
      },
    ],
    troubleshooting: [
      {
        title: "외부 영화 API 응답 실패",
        cause:
          "TMDB 응답이 없으면 영화 목록과 상세 화면을 표시하기 어려웠습니다.",
        solution:
          "로컬 초기 데이터로 영화 목록과 상세 화면을 유지합니다.",
      },
    ],
    results: [
      {
        label: "예매",
        value: "완료 화면에 예매번호와 좌석 표시",
      },
      {
        label: "운영",
        value: "회차별 상영일정과 예매 내역 조회",
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
      { src: "assets/img/portfolio/cineflow-main.png", alt: "CineFlow 메인 화면" },
      { src: "assets/img/portfolio/cineflow-booking.png", alt: "CineFlow 예매 화면" },
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
      "팬은 선수, 경기 일정과 결과, 순위, 뉴스를 확인하고, 관리자는 경기 결과와 포털 콘텐츠를 관리할 수 있는 e스포츠 웹사이트입니다.",
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/esports_main.png",
    dataFlow: [
      "경기 결과 입력 → 종료 상태 확인 → 팀 기록 계산 → 순위 정렬 → 순위표 갱신",
    ],
    implementationPoints: [
      {
        title: "종료 상태 기반 순위 집계",
        description:
          "종료 경기의 홈·원정 기록을 합쳐 팀별 승·패·승률·득실차를 계산합니다.",
      },
      {
        title: "운영 영역 접근 분리",
        description:
          "인증과 관리자 미들웨어로 경기 관리 기능의 접근을 제한합니다.",
      },
      {
        title: "뉴스 식별자와 라우팅 기준",
        description:
          "뉴스 제목과 별도로 slug를 관리해 목록과 상세 URL을 연결합니다.",
      },
    ],
    troubleshooting: [
      {
        title: "경기 결과와 순위표 갱신 기준 불일치",
        cause: "경기 결과를 저장한 뒤 사용자와 관리자 화면의 순위가 일치하지 않았습니다.",
        solution: "순위 갱신 기준을 종료된 경기로 통일했습니다.",
      },
    ],
    results: [
      {
        label: "경기",
        value: "경기 일정과 종료 경기 스코어 조회",
      },
      {
        label: "순위",
        value: "리그·스테이지별 순위 조회와 정렬",
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
      "고객은 상품과 옵션을 골라 주문하고, 관리자는 상품과 주문을 관리할 수 있는 PHP 쇼핑몰입니다. 결제 단계는 학습용으로 구현했습니다.",
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/shopping_main.png",
    dataFlow: [
      "상품 선택 → 장바구니 → 주문서 작성 → 주문 저장 → 주문 조회",
    ],
    implementationPoints: [
      {
        title: "주문 단위와 상품 단위 분리",
        description:
          "주문 정보는 jumun, 상품별 옵션과 수량은 jumuns에 기록합니다. 일부만 저장되는 일을 막기 위해 두 테이블을 한 트랜잭션으로 묶었습니다.",
      },
      {
        title: "사용자 · 관리자 조회 기준 통일",
        description:
          "사용자와 관리자가 같은 주문번호로 상품 내역을 조회합니다.",
      },
    ],
    troubleshooting: [
      {
        title: "주문서로 이동할 때 상품 정보 누락",
        cause: "장바구니에서 넘긴 상품 정보와 주문 저장에 필요한 항목이 달랐습니다.",
        solution: "저장 시 상품 ID·옵션·수량을 검증하고 DB 가격으로 주문 금액을 계산합니다.",
      },
    ],
    results: [
      {
        label: "주문",
        value: "한 주문번호로 여러 상품 조회",
      },
      {
        label: "저장 처리",
        value: "저장 성공 후 장바구니 비우기",
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
      "소규모 베이커리의 상품과 입출고를 기록하고, 재고와 판매 현황을 한곳에서 확인할 수 있는 매장 관리 웹사이트입니다.",
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
    dataFlow: [
      "제품 등록 → 재고 연결 → 판매 기록 → 장부 집계 → 통계 확인",
    ],
    implementationPoints: [
      {
        title: "제품 중심 데이터 연결",
        description:
          "제품 ID로 장부를 연결해 매입·매출 기록에서 재고를 계산합니다.",
      },
    ],
    troubleshooting: [
      {
        title: "거래 이력이 없는 제품의 재고·판매 조회",
        cause: "장부 기록이 없는 제품의 거래 조회에서 빈 값이 반환됐습니다.",
        solution: "제품을 먼저 조회하고 연결된 거래가 없는 경우를 따로 처리합니다.",
      },
    ],
    results: [
      {
        label: "재고",
        value: "대시보드에서 재고 부족·소진 상품 확인",
      },
      {
        label: "판매",
        value: "기간별 장부와 종류별 판매 차트",
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
      "Cine21 영화 데이터에서 평점과 관객 수의 관계를 살펴보고, 여러 수치 지표를 압축한 주성분으로 평점을 얼마나 설명할 수 있는지 비교했습니다.",
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/poster_202212004_hwang_minseo.png",
    dataFlow: [
      "CSV 로드 → 전처리 → PCA · 상관분석 → 회귀분석 → 결과 저장",
    ],
    implementationPoints: [
      {
        title: "첫 번째 주성분으로 평점을 설명",
        description:
          "여러 수치 지표를 PC1로 압축해 선형회귀로 평점을 얼마나 설명할 수 있는지 확인했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "관객 수 이상치와 스케일 영향",
        cause:
          "관객 수 이상치가 정규화와 회귀 결과를 크게 바꿀 수 있었습니다.",
        solution:
          "IQR로 이상치 영향을 줄인 뒤 MinMax 정규화로 변수 범위를 맞췄습니다.",
      },
    ],
    results: [
      {
        label: "PCA",
        value: "PC1 설명분산비 53.95%",
      },
      {
        label: "상관분석",
        value: "평점과 관객 수의 상관관계",
        description: "전문가 평점·관객 평점·관객 수를 히트맵으로 비교했습니다.",
      },
      {
        label: "선형회귀",
        value: "R² 0.2752 · MSE 0.0572",
        description: "PC1 기반 회귀가 평점 변동의 약 28%를 설명했습니다.",
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
      "서울 공공자전거 이용 기록으로 수요가 집중되는 시간대를 살펴보고, 이용건수 예측과 고수요 분류, 대여소 유형 분석을 진행했습니다.",
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/seoul-bike-hourly-usage.png",
    dataFlow: [
      "데이터 로드 → 전처리 · 파생변수 → 시각화 → 회귀 · 분류 · 군집 → 결과 저장",
    ],
    implementationPoints: [
      {
        title: "예측과 분류 역할 분리",
        description:
          "이용건수는 다중선형회귀로 예측하고, 고수요 여부는 로지스틱 회귀와 KNN으로 분류했습니다.",
      },
      {
        title: "분석 기준 데이터셋 고정",
        description:
          "시각화와 모델링에 같은 전처리 데이터와 대여소 집합을 사용했습니다.",
      },
      {
        title: "대여소 특성 군집화",
        description:
          "이동거리·이용시간과 출퇴근·주말 이용 비율로 대여소 유형을 나눴습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "대용량 원본 CSV 저장소 관리",
        cause:
          "원본 데이터 규모가 커 GitHub 저장소에 그대로 포함하기 어려웠습니다.",
        solution:
          "저장소에는 샘플 데이터와 분석 결과 CSV를 정리하고 원본 전체 파일은 제외했습니다.",
      },
    ],
    results: [
      {
        label: "피크 시간",
        value: "오전 8시, 오후 17~18시",
      },
      {
        label: "다중선형회귀",
        value: "R² = 0.5431",
        description: "시간대별 이용건수 변동의 약 54.3%를 설명",
      },
      {
        label: "로지스틱 회귀",
        value: "정확도 0.8969",
      },
      {
        label: "KNN",
        value: "정확도 0.9013",
      },
      {
        label: "K-means",
        value: "퇴근형 고수요 대여소",
        description: "대여소를 출근형, 장거리 · 장시간형, 퇴근형 고수요 유형으로 구분",
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
      "몰려오는 적을 피하며 제한 시간 동안 살아남는 Android 액션 게임입니다. 플레이어는 이동을 조작하고, 자동 공격과 레벨업 보상으로 성장합니다.",
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
    dataFlow: [
      "캐릭터 선택 → 전투 루프 → 경험치 · 레벨업 → 생존 판정 → 결과 화면",
    ],
    implementationPoints: [
      {
        title: "적과 투사체를 풀에서 재사용",
        description:
          "PoolManager가 비활성 적과 투사체를 재사용하고, 쓸 수 있는 항목이 없을 때만 새로 생성합니다.",
      },
      {
        title: "생존 루프 상태 연결",
        description:
          "플레이어가 이동하는 동안 주변 적을 탐색해 자동 공격하고, 처치 경험치를 레벨업 보상으로 연결합니다.",
      },
    ],
    troubleshooting: [],
    results: [
      {
        label: "전투",
        value: "자동 공격과 레벨업 보상 선택",
      },
      {
        label: "플레이 결과",
        value: "생존 성공·사망 결과 화면",
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
      "키와 체중으로 BMI를 계산한 뒤, 운동 정보를 찾아보고 영상과 운동 계획을 한 앱에서 확인할 수 있는 iOS 앱입니다.",
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png",
    dataFlow: [
      "키 · 체중 입력 → 입력값 검증 → BMI 판정 → 결과 표시 → 운동 콘텐츠 이동",
    ],
    implementationPoints: [
      {
        title: "검증 우선 계산 흐름",
        description:
          "키와 체중을 검증한 뒤 BMI를 계산하고, 학습용 판정 기준에 따라 문구와 색상을 바꿉니다.",
      },
      {
        title: "네트워크 · 로컬 콘텐츠 분리",
        description:
          "운동 정보는 WebView에서 탐색하고, 시범 영상은 앱에 포함된 파일로 재생합니다.",
      },
      {
        title: "입력 컨트롤과 운동 계획 연결",
        description:
          "강도·시간·세트 수를 조절하면 운동 계획 요약이 바로 갱신됩니다.",
      },
    ],
    troubleshooting: [],
    results: [
      {
        label: "BMI",
        value: "BMI 결과와 잘못된 입력 안내",
      },
      {
        label: "운동",
        value: "운동 영상 재생과 계획 설정",
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

export function getProjectDetail(projectId: string) {
  return projectDetails.find((detail) => detail.projectId === projectId);
}
