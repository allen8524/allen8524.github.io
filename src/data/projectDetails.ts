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
        problem:
          "좌석을 고른 뒤 결제를 완료하기 전까지 같은 좌석의 예약 상태가 바뀔 수 있습니다.",
        description:
          "상영회차 ID와 좌석 코드를 기준으로 선택한 좌석에 잠금을 걸고, 예매·결제 기록과 좌석 상태를 한 트랜잭션에서 저장했습니다. 검증에 실패하면 입력값과 오류 메시지를 유지한 채 결제 화면으로 돌아갑니다.",
        verification:
          "컨트롤러 테스트에서 유효하지 않은 상영회차는 예매 화면으로 돌아가고, 예매 ID가 전달되면 완료 화면에 해당 예매가 표시되는지 확인합니다.",
      },
      {
        title: "회원 · 비회원 조회 기준 분리",
        description:
          "회원은 계정 정보를 기준으로 조회하고, 비회원은 예매번호와 연락처가 모두 일치할 때만 조회되도록 분기했습니다.",
      },
      {
        title: "운영 데이터와 DB 변경 관리",
        description:
          "예매가 연결된 운영 데이터의 수정 범위를 제한하고, Flyway로 스키마와 초기 데이터 변경 이력을 관리했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "외부 영화 API 응답 실패",
        cause:
          "TMDB 응답이 지연되거나 실패하면 영화 목록과 상세 화면에 표시할 데이터가 없어질 수 있었습니다.",
        solution:
          "로컬 seed와 fallback 데이터를 준비해 외부 API 상태와 관계없이 핵심 화면을 유지하도록 구성했습니다.",
      },
    ],
    results: [
      {
        label: "예매",
        value: "회차 선택부터 예매 완료까지",
        description: "완료 화면에서 예매번호와 선택한 좌석을 확인할 수 있습니다.",
      },
      {
        label: "운영",
        value: "관리자 상영일정 관리",
        description: "관리자 화면에서 상영일정과 회차별 예매 내역을 확인할 수 있습니다.",
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
        problem: "예정 경기가 집계에 섞이거나 홈·원정 기록을 따로 계산하면 팀별 경기 수와 승률의 기준이 달라집니다.",
        description:
          "finished 상태의 홈·원정 기록을 같은 팀별 행 구조로 합친 뒤 승·패·승률·득실차를 집계했습니다.",
        verification: "순위 집계 코드에서 양쪽 쿼리의 종료 상태 조건과 팀 ID별 집계를 확인할 수 있습니다.",
      },
      {
        title: "운영 영역 접근 분리",
        description:
          "사용자 화면과 관리자 기능의 책임을 나누고, 인증과 미들웨어를 기준으로 운영 기능 접근을 제한했습니다.",
      },
      {
        title: "뉴스 식별자와 라우팅 기준",
        description:
          "뉴스 제목과 URL 구조가 독립적으로 유지되도록 slug를 식별자로 사용해 목록과 상세 경로를 연결했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "경기 결과와 순위표 갱신 기준 불일치",
        cause: "관리자가 경기 결과를 저장한 뒤 사용자 화면과 관리자 화면의 순위 상태가 다르게 표시됐습니다.",
        solution: "순위표에서 종료된 경기만 가져오고, 홈과 원정 기록을 같은 구조로 합쳐 팀별 승·패와 득실차를 계산하도록 정리했습니다.",
      },
    ],
    results: [
      {
        label: "경기",
        value: "일정과 종료 경기 결과 조회",
        description: "경기 목록에서 팀과 일정을 확인하고 종료된 경기의 스코어를 볼 수 있습니다.",
      },
      {
        label: "순위",
        value: "리그·스테이지별 팀 기록",
        description: "리그와 스테이지를 선택하고 승수, 승률, 득실차 등으로 팀 기록을 정렬할 수 있습니다.",
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
        problem: "여러 상품을 한 번에 주문할 때 주문자 정보가 중복되거나, 저장 도중 오류가 나면 일부 상품만 기록될 수 있습니다.",
        description:
          "주문 공통 정보는 jumun에 한 번 저장하고, 상품·옵션·수량은 jumuns에 나눠 기록합니다. 두 테이블은 한 트랜잭션으로 저장합니다.",
        verification: "주문 저장 코드에서 상품 검증, 가격 재조회, 저장 실패 시 롤백 흐름을 확인할 수 있습니다.",
      },
      {
        title: "사용자 · 관리자 조회 기준 통일",
        description:
          "사용자 주문 내역과 관리자 주문 관리가 같은 주문번호를 기준으로 동일한 주문 데이터를 조회하도록 연결했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "주문서로 이동할 때 상품 정보 누락",
        cause: "장바구니에서 선택한 상품·옵션·수량이 최종 저장 단계까지 같은 기준으로 이어져야 했습니다.",
        solution: "주문 저장 시 장바구니의 상품 ID와 옵션·수량을 다시 검증하고, 가격은 DB에서 읽어 주문 금액을 계산하도록 정리했습니다.",
      },
    ],
    results: [
      {
        label: "주문",
        value: "한 주문에 여러 상품 저장",
        description: "한 주문번호로 상품별 수량과 옵션을 조회할 수 있습니다.",
      },
      {
        label: "저장 처리",
        value: "저장 성공 후 장바구니 비우기",
        description: "주문 저장이 끝난 뒤 장바구니 쿠키를 만료시키고, 저장 실패 시에는 롤백합니다.",
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
        problem: "상품 등록, 매입·매출 기록, 재고 조회가 따로 있으면 같은 제품의 상태를 여러 화면에서 대조해야 합니다.",
        description:
          "제품 ID로 상품과 거래 장부를 연결했습니다. 매입·매출 기록을 기준으로 재고를 계산하고, 같은 상품의 거래 내역을 조회하도록 구성했습니다.",
        verification: "상품·장부 컨트롤러와 대시보드에서 상품 등록, 거래 조회, 재고 표시 흐름을 따라갈 수 있습니다.",
      },
      {
        title: "관리 작업 흐름 구성",
        description:
          "제품 등록과 수정, 재고 확인, 판매 내역과 장부 조회를 관리자 작업 순서에 맞춰 연결했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "거래 이력이 없는 제품의 재고·판매 조회",
        cause: "신규 제품처럼 아직 장부 기록이 없는 경우 연관 데이터를 조회할 때 빈 값이 생겼습니다.",
        solution: "상품을 기준으로 조회하고 연결된 거래가 없는 경우를 별도로 처리해 관리자 화면을 계속 사용할 수 있도록 구성했습니다.",
      },
    ],
    results: [
      {
        label: "재고",
        value: "재고 부족·소진 상품 확인",
        description: "대시보드에서 재고를 확인해야 할 상품을 찾을 수 있습니다.",
      },
      {
        label: "판매",
        value: "기간별 장부와 판매 차트",
        description: "거래 내역을 기간별로 조회하고 월별 상품 현황과 종류별 판매 분포를 확인할 수 있습니다.",
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
        problem: "여러 수치 지표를 하나로 압축했을 때 평점을 얼마나 설명할 수 있는지 확인할 필요가 있었습니다.",
        description:
          "전처리한 수치형 지표에 PCA를 적용하고 첫 번째 주성분인 PC1을 선형회귀의 입력으로 사용했습니다.",
        verification: "분석 요약에서 PC1 설명분산비와 회귀의 R²·MSE를 확인하고, 실제 평점과 예측 평점은 산점도로 비교할 수 있습니다.",
      },
      {
        title: "전처리 순서 고정",
        description:
          "결측값과 이상치를 먼저 처리하고 정규화해 PCA와 회귀에 같은 전처리 기준을 적용했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "관객 수 이상치와 스케일 영향",
        cause:
          "관객 수의 큰 값과 이상치가 정규화 및 회귀 결과에 과도한 영향을 줄 수 있었습니다.",
        solution:
          "IQR 기준으로 이상치 영향을 완화한 뒤 MinMax 정규화를 적용해 변수 스케일을 맞췄습니다.",
      },
    ],
    results: [
      {
        label: "PCA",
        value: "PC1 설명분산비 53.95%",
        description: "첫 번째 주성분이 PCA 입력 변수의 전체 분산 중 약 54%를 설명했습니다.",
      },
      {
        label: "상관분석",
        value: "평점과 관객 수의 상관관계",
        description: "전문가 평점, 관객 평점, 관객 수 사이의 상관계수를 히트맵으로 비교했습니다.",
      },
      {
        label: "선형회귀",
        value: "R² 0.2752 · MSE 0.0572",
        description: "PC1을 사용한 선형회귀가 분석에 사용한 평점 변동의 약 28%를 설명했습니다.",
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
        problem: "시간대별 이용건수를 추정하는 문제와 수요가 높은지 판단하는 문제에는 서로 다른 출력이 필요했습니다.",
        description:
          "다중선형회귀는 이용건수 예측에 사용하고, 로지스틱 회귀와 KNN은 고수요 여부 분류에 사용해 모델 목적을 분리했습니다.",
        verification: "회귀는 R², 두 분류 모델은 정확도로 비교했습니다. 발표 자료와 결과 CSV에서 각 결과를 확인할 수 있습니다.",
      },
      {
        title: "분석 기준 데이터셋 고정",
        description:
          "전처리 기준을 먼저 확정하고 동일한 행과 대여소 집합을 시각화와 모델링에 사용해 결과 비교 기준을 통일했습니다.",
      },
      {
        title: "대여소 특성 군집화",
        description:
          "평균 이동거리 · 이용시간과 출근 · 퇴근 · 주말 비율을 조합해 대여소의 이용 유형을 군집화했습니다.",
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
        description: "출근과 퇴근 시간대에 공공자전거 수요가 집중되는 패턴 확인",
      },
      {
        label: "다중선형회귀",
        value: "R² = 0.5431",
        description: "시간대별 이용건수 변동의 약 54.3%를 설명",
      },
      {
        label: "로지스틱 회귀",
        value: "정확도 0.8969",
        description: "고수요 여부를 약 90% 수준으로 분류",
      },
      {
        label: "KNN",
        value: "정확도 0.9013",
        description: "고수요 여부 분류 결과를 로지스틱 회귀와 비교",
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
        problem: "전투 중 적과 투사체가 반복해서 등장해 매번 새 오브젝트를 만들고 제거하는 비용이 누적됩니다.",
        description:
          "PoolManager에서 프리팹 유형별로 비활성 오브젝트를 찾아 재사용하고, 재사용할 항목이 없을 때만 새로 생성합니다.",
        verification: "풀 관리 코드에서 재사용 분기를 확인하고, Android 빌드에서는 적이 반복해서 등장하는 전투를 플레이할 수 있습니다.",
      },
      {
        title: "생존 루프 상태 연결",
        description:
          "플레이어 이동, 주변 적 탐색과 자동 공격, 경험치 획득과 레벨업 보상을 하나의 플레이 루프로 연결했습니다.",
      },
      {
        title: "게임 상태와 결과 화면 연결",
        description:
          "생존 시간과 사망 상태를 HUD 및 결과 화면과 연결해 게임 시작부터 종료까지 상태 흐름을 유지했습니다.",
      },
    ],
    troubleshooting: [],
    results: [
      {
        label: "전투",
        value: "자동 공격과 레벨업 보상 선택",
        description: "전투 중 경험치를 모아 무기와 장비를 선택하고 강화할 수 있습니다.",
      },
      {
        label: "플레이 결과",
        value: "생존과 사망에 따른 결과 화면",
        description: "제한 시간 생존과 플레이어 사망을 각각의 결과 화면으로 연결했습니다.",
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
        problem: "키나 체중이 비어 있거나 숫자로 읽을 수 없으면 BMI 결과를 표시할 수 없습니다.",
        description:
          "입력값을 먼저 검증하고 계산 가능한 경우에만 BMI를 구합니다. 앱에서 선택한 학습용 기준에 따라 결과 문구와 색상을 바꿉니다.",
        verification: "BMI 화면 코드와 기능 문서에서 잘못된 입력에 대한 안내와 유효한 입력의 결과 표시를 확인할 수 있습니다.",
      },
      {
        title: "네트워크 · 로컬 콘텐츠 분리",
        description:
          "운동 정보는 WebView로 제공하고 운동 영상은 로컬 리소스로 재생해 콘텐츠 성격과 시연 환경을 분리했습니다.",
      },
      {
        title: "입력 컨트롤과 운동 계획 연결",
        description:
          "슬라이더 · 스테퍼 · 세그먼트 컨트롤의 값을 운동 강도 · 시간 · 세트 수에 연결해 계획 입력 흐름을 구성했습니다.",
      },
    ],
    troubleshooting: [],
    results: [
      {
        label: "BMI",
        value: "입력에 따른 결과와 안내 표시",
        description: "계산 결과는 상태 문구와 색상으로 보여주고, 입력이 잘못되면 안내를 표시합니다.",
      },
      {
        label: "운동",
        value: "영상 재생과 계획 설정",
        description: "로컬 운동 영상을 재생하고 강도, 시간, 세트 수에 따라 계획 요약을 갱신할 수 있습니다.",
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
