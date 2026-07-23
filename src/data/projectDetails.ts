import type { ProjectDetail } from "../types/project";

export const projectDetails: ProjectDetail[] = [
  {
    projectId: "cineflow",
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/cineflow-main-hero.png",
    dataFlow: [
      "영화 선택 → 극장 · 날짜 · 상영회차 선택 → 좌석 선택 → 결제수단 저장 → 예매 완료",
    ],
    implementationPoints: [
      {
        title: "예매 상태 일관성",
        description:
          "좌석 선택부터 결제 · 예매 완료까지 동일한 상영일정과 좌석 상태를 기준으로 하나의 서비스 흐름으로 연결했습니다.",
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
        title: "좌석과 예매 상태 불일치",
        cause:
          "결제와 예매 완료 단계가 서로 다른 좌석 상태를 기준으로 처리되면 저장 결과가 어긋날 수 있었습니다.",
        solution:
          "두 단계가 동일한 상영일정과 좌석 상태를 참조하도록 처리 기준을 통일했습니다.",
      },
      {
        title: "기존 예매와 운영 데이터 충돌",
        cause:
          "예매가 연결된 상영일정과 상영관을 자유롭게 수정하면 기존 예매 정보가 달라질 수 있었습니다.",
        solution:
          "예매 데이터가 연결된 운영 항목의 수정 범위를 제한해 기존 예매 정보를 보호했습니다.",
      },
    ],
    resultLinks: [
      {
        label: "GitHub Actions 테스트",
        url: "https://github.com/allen8524/cineflow-spring-boot/actions",
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
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/esports_main.png",
    dataFlow: [
      "경기 결과 입력 → finished 확인 → 승 · 패 · 승률 · 득실차 계산 → 순위표 갱신",
    ],
    implementationPoints: [
      {
        title: "종료 상태 기반 순위 집계",
        description:
          "예정 경기와 종료 경기를 분리하고, finished 상태인 경기만 승 · 패 · 승률 · 득실차 계산에 반영했습니다.",
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
        title: "순위표 집계 결과 왜곡",
        cause:
          "예정 경기와 종료 경기를 같은 기준으로 합산하면 실제 경기 결과와 다른 순위가 생성될 수 있었습니다.",
        solution:
          "finished 상태인 경기만 승패 · 승률 · 득실차 집계에 포함하도록 기준을 고정했습니다.",
      },
      {
        title: "관리자 기능 접근 범위 혼선",
        cause:
          "사용자 화면과 관리자 기능이 같은 접근 흐름을 사용하면 권한 경계가 불명확했습니다.",
        solution:
          "관리자 인증과 미들웨어를 적용해 대시보드와 운영 기능의 접근 경로를 분리했습니다.",
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
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/shopping_main.png",
    dataFlow: [
      "상품 상세 → 장바구니 → 주문서 작성 → 주문번호 생성 → 주문 마스터 저장 → 주문 상세 저장",
    ],
    implementationPoints: [
      {
        title: "주문 단위와 상품 단위 분리",
        description:
          "주문 공통 정보는 마스터에 한 번 저장하고, 주문 상품은 상세 데이터로 분리해 다중 상품 주문 구조를 구성했습니다.",
      },
      {
        title: "사용자 · 관리자 조회 기준 통일",
        description:
          "사용자 주문 내역과 관리자 주문 관리가 같은 주문번호를 기준으로 동일한 주문 데이터를 조회하도록 연결했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "다중 상품 주문 데이터 연결",
        cause:
          "주문 단위 정보와 상품별 상세 정보가 한 구조에 섞이면 여러 상품이 포함된 주문을 안정적으로 조회하기 어려웠습니다.",
        solution:
          "주문번호 기준으로 마스터 1건과 상세 N건을 분리하고 같은 번호로 함께 조회하도록 구성했습니다.",
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
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
    dataFlow: [
      "제품 등록 → 제품 ID 기준 재고 연결 → 판매 내역 조회 → 통계 화면 확인",
    ],
    implementationPoints: [
      {
        title: "제품 중심 데이터 연결",
        description:
          "재고 · 판매 · 매입 · 매출 데이터를 제품 ID로 연결해 제품 하나를 기준으로 관련 상태를 확인하도록 구성했습니다.",
      },
      {
        title: "관리 작업 흐름 구성",
        description:
          "제품 등록과 수정, 재고 확인, 판매 내역과 장부 조회를 관리자 작업 순서에 맞춰 연결했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "제품별 상태 조회 기준 불일치",
        cause:
          "재고와 판매 내역을 서로 다른 기준으로 조회하면 같은 제품의 현재 상태를 한 번에 파악하기 어려웠습니다.",
        solution:
          "제품 ID를 공통 조회 기준으로 사용해 재고 · 판매 · 장부 데이터를 연결했습니다.",
      },
    ],
    resultLinks: [
      {
        label: "대시보드 화면",
        url: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
      },
      {
        label: "상품 관리 화면",
        url: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/product-index.png",
      },
      {
        label: "매입 매출 장부 화면",
        url: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/jangbu-index.png",
      },
      {
        label: "통계 차트 화면",
        url: "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/chart.png",
      },
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
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/poster_202212004_hwang_minseo.png",
    dataFlow: [
      "CSV 로드 → 결측값 처리 → 이상치 완화 → 정규화 → PCA → 상관분석 → 선형회귀 → 결과 저장",
    ],
    implementationPoints: [
      {
        title: "전처리 순서 고정",
        description:
          "결측값과 이상치를 먼저 처리한 뒤 정규화를 적용해 이후 PCA와 회귀분석이 같은 데이터 기준을 사용하도록 구성했습니다.",
      },
      {
        title: "축소 지표와 회귀 결과 연결",
        description:
          "PCA로 수치형 지표를 축약하고 PC1을 회귀 입력으로 사용해 설명분산비와 예측 결과를 함께 비교했습니다.",
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
    analysisResults: [
      {
        label: "PCA",
        value: "PC1 설명분산비 확인",
        description: "수치형 지표 축약 후 평점 · 관객 수 관계 검토",
      },
      {
        label: "상관분석",
        value: "상관관계 히트맵 저장",
        description: "전문가 평점, 관객 평점, 관객 수 지표 간 관계 시각화",
      },
      {
        label: "선형회귀",
        value: "R², MSE 기준 확인",
        description: "PC1 기반 예측 결과와 실제 평점 비교",
      },
    ],
    resultLinks: [
      {
        label: "분석 README",
        url: "https://github.com/allen8524/movie-pca-rating-analysis",
      },
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
      {
        label: "발표 포스터",
        url: "https://github.com/allen8524/movie-pca-rating-analysis/blob/main/docs/poster_202212004_hwang_minseo.png",
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
    developmentType: "개인 프로젝트",
    heroImage: "assets/img/portfolio/seoul-bike-hourly-usage.png",
    dataFlow: [
      "원본 CSV 로드 → 결측값 · 이상치 제거 → 파생 변수 생성 → 시각화 → 회귀 · 분류 · 군집분석 → 결과 저장",
    ],
    implementationPoints: [
      {
        title: "분석 기준 데이터셋 고정",
        description:
          "전처리 기준을 먼저 확정하고 동일한 행과 대여소 집합을 시각화와 모델링에 사용해 결과 비교 기준을 통일했습니다.",
      },
      {
        title: "예측과 분류 역할 분리",
        description:
          "다중선형회귀는 이용건수 예측에 사용하고, 로지스틱 회귀와 KNN은 고수요 여부 분류에 사용해 모델 목적을 분리했습니다.",
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
      {
        title: "시각화와 모델링 기준 불일치",
        cause:
          "분석 단계마다 서로 다른 전처리 결과를 사용하면 지표와 모델 결과를 직접 비교하기 어려웠습니다.",
        solution:
          "전처리 후 1,808,648행과 2,770개 대여소를 공통 분석 기준으로 고정했습니다.",
      },
    ],
    analysisResults: [
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
        label: "분석 README",
        url: "https://github.com/allen8524/seoul-bike-demand-analysis",
      },
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
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
    dataFlow: [
      "캐릭터 선택 → 게임 시작 → 이동 → 자동 공격 → 적 스폰 → 경험치 획득 → 레벨업 → 결과 화면",
    ],
    implementationPoints: [
      {
        title: "생존 루프 상태 연결",
        description:
          "플레이어 이동 · 적 탐색 · 자동 공격 · 경험치 획득 · 레벨업을 하나의 반복 플레이 흐름으로 연결했습니다.",
      },
      {
        title: "반복 오브젝트 재사용",
        description:
          "플레이 중 계속 생성되는 적과 투사체를 PoolManager에서 재사용해 생성과 제거 횟수를 줄였습니다.",
      },
      {
        title: "게임 상태와 결과 화면 연결",
        description:
          "생존 시간과 사망 상태를 HUD 및 결과 화면과 연결해 게임 시작부터 종료까지 상태 흐름을 유지했습니다.",
      },
    ],
    troubleshooting: [
      {
        title: "적과 투사체 반복 생성 비용",
        cause:
          "전투 중 적과 투사체를 계속 생성하고 제거하면 모바일 실행 환경에서 반복 비용이 누적될 수 있었습니다.",
        solution:
          "PoolManager가 기존 오브젝트를 비활성화 후 재사용하는 Object Pooling 구조로 변경했습니다.",
      },
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
    developmentType: "개인 프로젝트",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png",
    dataFlow: [
      "키 · 체중 입력 → 입력값 검증 → 성별 기준 BMI 판정 → 결과 표시 → 운동 정보 · 영상 · 계획 탭 이동",
    ],
    implementationPoints: [
      {
        title: "검증 우선 계산 흐름",
        description:
          "빈 값과 숫자 변환 실패를 먼저 차단한 뒤 BMI 계산과 성별 기준 결과 분기를 실행하도록 순서를 고정했습니다.",
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
    troubleshooting: [
      {
        title: "잘못된 BMI 입력값 전파",
        cause:
          "빈 값이나 숫자로 변환할 수 없는 값이 계산 단계에 전달되면 잘못된 결과가 표시될 수 있었습니다.",
        solution:
          "BMI 계산 전에 필수 입력과 숫자 변환 여부를 검증하고 실패한 경우 계산을 중단했습니다.",
      },
      {
        title: "시연 중 네트워크 의존",
        cause:
          "모든 운동 콘텐츠가 네트워크에 의존하면 연결 상태에 따라 시연이 중단될 수 있었습니다.",
        solution:
          "운동 영상은 앱 내부 로컬 파일로 제공하고 WebView는 운동 정보 화면에만 사용했습니다.",
      },
    ],
    resultLinks: [
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
