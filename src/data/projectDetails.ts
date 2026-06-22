import type { ProjectDetail } from "../types/project";

export const projectDetails: ProjectDetail[] = [
  {
    projectId: "cineflow",
    period: "2026년",
    role: "예매 상태 처리, 좌석 · 상영일정 · 결제 연결, 회원 · 비회원 조회 분기, 관리자 운영, Flyway 마이그레이션",
    heroImage: "assets/img/portfolio/cineflow-main-hero.png",
    purpose: [
      "영화 선택부터 예매 완료 · 조회 · 취소까지 상태 흐름 연결",
      "사용자, 비회원, 관리자 영역을 Spring Security 기준으로 분리",
      "영화 · 극장 · 상영관 · 좌석 · 예매 · 결제 · 회원 테이블 변경 이력 관리",
    ],
    responsibilities: [
      "빠른예매, 좌석 선택, 결제, 예매 완료 흐름 구현",
      "회원 · 비회원 예매 조회 분기와 취소 상태 처리",
      "관리자 영화 · 극장 · 상영관 · 상영일정 운영 기능 구성",
      "Spring Security 기반 접근 권한 분리",
      "Flyway 기반 DB 변경 이력과 seed 데이터 관리",
    ],
    dataFlow: [
      "영화 선택 → 극장 · 날짜 · 상영회차 선택 → 좌석 선택 → 결제수단 저장 → 예매 완료",
      "회원은 계정 기준, 비회원은 예매번호와 연락처 기준 조회",
      "관리자 화면은 영화 · 극장 · 상영일정 · 예매 상태 운영",
    ],
    implementationPoints: [
      {
        title: "예매 흐름 상태 연결",
        description: "상영일정 ID, 좌석 상태, 예매번호, 결제 상태를 하나의 서비스 흐름으로 연결",
      },
      {
        title: "회원 · 비회원 조회 분기",
        description: "회원은 계정 기준, 비회원은 예매번호와 연락처 기준 조회",
      },
      {
        title: "관리자 운영 기능",
        description: "영화 · 극장 · 상영관 · 상영일정 생성 · 수정 · 비활성화와 예매 현황 관리",
      },
      {
        title: "TMDB fallback/cache",
        description: "외부 API 실패 시 로컬 seed와 fallback 데이터로 화면 유지",
      },
      {
        title: "Flyway 마이그레이션",
        description: "실행 환경마다 같은 DB 구조를 재현할 수 있도록 변경 이력 관리",
      },
    ],
    troubleshooting: [
      {
        title: "좌석과 예매 상태 불일치 방지",
        description: "결제와 예매 완료 단계에서 같은 상영일정 · 좌석 상태 참조",
      },
      {
        title: "운영 데이터 보호",
        description: "예매가 연결된 상영일정 · 상영관 수정 범위 제한",
      },
    ],
    resultLinks: [
      { label: "GitHub Actions 테스트", url: "https://github.com/allen8524/cineflow-spring-boot/actions" },
    ],
    gallery: [
      { src: "assets/img/portfolio/cineflow-main.png", alt: "CineFlow 메인 화면" },
      { src: "assets/img/portfolio/cineflow-booking.png", alt: "CineFlow 예매 화면" },
      { src: "assets/img/portfolio/cineflow-admin.png", alt: "CineFlow 관리자 화면" },
      { src: "assets/img/portfolio/cineflow-booking-gallery.png", alt: "CineFlow 빠른예매 진행 화면" },
      { src: "assets/img/portfolio/cineflow-admin-gallery.png", alt: "CineFlow 관리자 상영일정 관리 화면" },
    ],
  },
  {
    projectId: "esports",
    period: "2025년 12월 16일",
    role: "포털 화면 구성, 도메인별 CRUD, 경기 결과 기반 순위 집계, 관리자 대시보드 연결",
    heroImage: "assets/img/portfolio/esports_main.png",
    purpose: [
      "선수 · 팀 · 경기 · 뉴스 · 패치노트 데이터를 포털 화면과 관리자 화면으로 분리",
      "라우팅, 인증, 권한 제어 흐름 학습 목적의 Laravel 프로젝트",
    ],
    responsibilities: [
      "팀 · 선수 · 경기 · 뉴스 데이터 사용자/관리자 화면 분리",
      "finished 경기만 순위표 집계에 반영",
      "관리자 인증과 미들웨어 접근 제어 구성",
      "slug와 썸네일 기반 뉴스 목록 · 상세 라우팅 구현",
    ],
    dataFlow: [
      "경기 결과 입력 → finished 확인 → 승 · 패 · 승률 · 득실차 계산 → 순위표 갱신",
      "뉴스 등록 → slug 생성 → 사용자 목록 · 상세 화면 노출",
    ],
    implementationPoints: [
      {
        title: "finished 경기 기준 순위 집계",
        description: "종료 경기만 순위 반영, 팀별 승 · 패 · 승률 · 득실차 계산",
      },
      {
        title: "관리자 인증과 미들웨어",
        description: "관리자 대시보드와 운영 기능 접근 제어",
      },
      {
        title: "slug 기반 뉴스 라우팅",
        description: "뉴스 상세 페이지와 썸네일 관리 기준 통일",
      },
    ],
    troubleshooting: [
      {
        title: "순위표 집계 기준 혼선",
        description: "예정 경기와 종료 경기가 섞이지 않도록 finished 상태만 집계",
      },
      {
        title: "관리자 접근 범위 분리",
        description: "인증 · 미들웨어 기준으로 사용자 화면과 관리자 화면 책임 분리",
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
    role: "상품 조회, 장바구니, 주문 · 결제, 사용자 주문 조회, 관리자 주문 관리",
    heroImage: "assets/img/portfolio/shopping_main.png",
    purpose: [
      "상품 조회부터 장바구니, 주문, 관리자 주문 관리까지 판매관리 흐름 구현",
      "주문번호 기준으로 사용자 주문 조회와 관리자 주문 관리 연결",
    ],
    responsibilities: [
      "상품 목록 · 상세 조회와 옵션 선택 구현",
      "장바구니 데이터를 주문서 작성 단계로 전달",
      "주문번호 기준 주문 마스터 1건과 주문 상세 N건 저장",
      "사용자 주문 조회와 관리자 주문 관리 화면 연결",
    ],
    dataFlow: [
      "상품 상세 → 장바구니 → 주문서 작성 → 주문번호 생성 → 주문 마스터 저장 → 주문 상세 저장",
      "사용자 주문 내역과 관리자 주문 관리가 같은 주문번호 기준 조회",
    ],
    implementationPoints: [
      {
        title: "주문 마스터와 주문 상세 분리",
        description: "주문번호 기준 주문 단위와 상품 단위 저장 구조 분리",
      },
      {
        title: "사용자 · 관리자 주문 조회 연결",
        description: "사용자 주문 조회와 관리자 주문 관리 기준 일치",
      },
    ],
    troubleshooting: [
      {
        title: "주문 데이터 기준 통일",
        description: "주문번호 기준으로 마스터 · 상세 데이터를 함께 저장해 조회 기준 유지",
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
    heroImage:
      "https://raw.githubusercontent.com/allen8524/bakery-sales-management-laravel/main/docs/images/dashboard.png",
    purpose: [
      "베이커리 제품, 재고, 판매 내역을 관리자 화면에서 확인하는 판매관리 프로젝트",
      "제품 ID 기준 재고 수량과 판매 내역 연결",
    ],
    responsibilities: [
      "제품 등록과 수정 화면 구성",
      "제품 기준 재고 수량 조회",
      "판매 내역과 매입 · 매출 장부 확인 화면 구성",
      "제품별 재고 · 판매 상태 확인 흐름 정리",
    ],
    dataFlow: [
      "제품 등록 → 제품 ID 기준 재고 연결 → 판매 내역 조회 → 통계 화면 확인",
      "누락 데이터가 있어도 제품 중심 조회 기준으로 화면 응답 유지",
    ],
    implementationPoints: [
      {
        title: "제품 기준 재고 · 판매 연결",
        description: "제품 ID 중심으로 재고 수량과 판매 내역 조회",
      },
      {
        title: "관리자 중심 화면 구성",
        description: "제품 등록, 재고 관리, 판매 내역 확인을 관리자 작업 흐름에 맞춰 배치",
      },
    ],
    troubleshooting: [
      {
        title: "제품별 상태 확인",
        description: "재고와 판매 내역을 제품 기준 조회 흐름으로 통일",
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
    period: "2026년",
    role: "결측값 처리, 이상치 완화, 정규화, PCA, 상관분석, PC1 기반 선형회귀",
    heroImage:
      "https://raw.githubusercontent.com/allen8524/movie-pca-rating-analysis/main/docs/poster_202212004_hwang_minseo.png",
    purpose: [
      "Cine21 영화 CSV 데이터 전처리 후 PCA · 상관분석 · 선형회귀 수행",
      "PC1 설명분산비, R², MSE와 시각화 이미지로 분석 결과 정리",
    ],
    responsibilities: [
      "오프라인 CSV 기준 분석 파이프라인 구성",
      "문자열 · 수치형 결측값 처리",
      "IQR 기반 이상치 완화와 MinMax 정규화",
      "PCA, 상관분석, PC1 기반 선형회귀 실행",
      "분석 결과 이미지와 요약 파일 저장",
    ],
    dataFlow: [
      "CSV 로드 → 결측값 처리 → 이상치 완화 → 정규화 → PCA → 상관분석 → 선형회귀 → 결과 저장",
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
    implementationPoints: [
      {
        title: "전처리 파이프라인",
        description: "결측값 · 이상치 처리 후 MinMax 정규화 적용",
      },
      {
        title: "PCA와 회귀분석",
        description: "PCA 축소와 PC1 기반 선형회귀로 지표 관계 확인",
      },
    ],
    troubleshooting: [
      {
        title: "이상치 영향 완화",
        description: "관객 수 스케일 차이를 줄이기 위해 이상치 완화와 정규화 선적용",
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
    period: "2026.06",
    role: "데이터 전처리, 시각화, 다중선형회귀, 로지스틱 회귀, K-means 군집분석, KNN 분류분석, 결과 해석",
    heroImage: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/hourly_usage.png",
    purpose: [
      "2025년 12월 서울 공공자전거 시간대별 이용정보로 수요 집중 시간대와 이용자 특성 파악",
      "회귀 · 분류 · 군집분석을 통해 고수요 여부와 대여소별 이용 유형 도출",
      "공공자전거가 출퇴근 · 통학 목적의 생활 교통수단으로 활용되는 패턴 분석",
    ],
    responsibilities: [
      "성별 컬럼 제거, 결측값 제거, 숫자형 변환, 이동거리 · 이용시간 이상치 필터링",
      "시간대 · 요일 · 연령대 · 대여구분 · 이동거리와 이용시간 관계 시각화",
      "다중선형회귀로 시간대별 총 이용건수 예측",
      "로지스틱 회귀와 KNN으로 고수요 · 저수요 분류",
      "K-means 기반 대여소 유형 군집화와 결과 해석",
    ],
    dataFlow: [
      "원본 CSV 로드 → 결측값 · 이상치 제거 → 파생 변수 생성 → 시각화 → 회귀 · 분류 · 군집분석 → 결과 CSV · figure 저장",
    ],
    analysisResults: [
      {
        label: "피크 시간",
        value: "오전 8시, 오후 17~18시",
        description: "출근과 퇴근 시간대에 공공자전거 수요가 집중되는 패턴 확인",
      },
      {
        label: "로지스틱 회귀",
        value: "정확도 0.8969",
        description: "고수요 여부를 약 90% 수준으로 분류",
      },
      {
        label: "KNN",
        value: "정확도 0.9013",
        description: "고수요 · 저수요 분류 결과를 로지스틱 회귀와 비교",
      },
      {
        label: "K-means",
        value: "퇴근형 고수요 대여소",
        description: "대여소를 출근형, 장거리 · 장시간형, 퇴근형 고수요 유형으로 구분",
      },
    ],
    implementationPoints: [
      {
        title: "데이터 전처리 기준 정리",
        description: "이동거리 30km 초과, 이용시간 240분 초과 데이터를 제거해 극단값 영향을 완화",
      },
      {
        title: "수요 예측과 분류",
        description: "다중선형회귀로 이용건수를 예측하고, 로지스틱 회귀와 KNN으로 고수요 여부를 분류",
      },
      {
        title: "대여소 유형 군집화",
        description: "평균 이동거리, 평균 이용시간, 출근 · 퇴근 · 주말 이용 비율을 활용해 K-means 군집분석 수행",
      },
    ],
    troubleshooting: [
      {
        title: "대용량 원본 CSV 관리",
        description: "GitHub 업로드 제한을 고려해 원본 CSV 대신 샘플 데이터와 분석 결과 CSV를 저장소에 정리",
      },
      {
        title: "분석 기준 일관성",
        description: "전처리 후 1,808,648행과 2,770개 대여소 기준으로 시각화와 모델링 결과를 해석",
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
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/hourly_usage.png",
        alt: "서울 공공자전거 시간대별 이용건수 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/age_group_usage.png",
        alt: "서울 공공자전거 연령대별 이용건수 그래프",
      },
      {
        src: "https://raw.githubusercontent.com/allen8524/seoul-bike-demand-analysis/main/figures/regression_actual_vs_predicted.png",
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
    period: "2026년",
    role: "플레이어 이동, 자동 공격, 적 스폰, 오브젝트 풀링, 레벨업 보상, 생존 · 사망 결과 처리",
    heroImage: "https://raw.githubusercontent.com/allen8524/undead-survivor-unity/main/Screenshots/gameplay-main.png",
    purpose: [
      "Unity와 C# 기반 Android 생존형 액션 게임 핵심 루프 구현",
      "PoolManager 기반 적 · 투사체 재사용으로 반복 생성 비용 절감",
    ],
    responsibilities: [
      "플레이어 이동과 캐릭터 선택 흐름 구현",
      "주변 적 탐지 기반 자동 공격 처리",
      "진행 시간 기반 적 스폰과 난이도 흐름 구성",
      "Object Pooling으로 적과 투사체 재사용",
      "레벨업 보상과 생존 · 사망 결과 화면 연결",
    ],
    dataFlow: [
      "캐릭터 선택 → 게임 시작 → 이동 → 자동 공격 → 적 스폰 → 경험치 획득 → 레벨업 → 결과 화면",
    ],
    learned: [
      "반복 생성 오브젝트는 PoolManager 관리로 모바일 실행 비용 절감 가능",
      "게임 상태, HUD, 결과 화면을 한 흐름으로 연결해야 플레이 루프 유지",
    ],
    limitations: [
      "포트폴리오 검토용 APK와 주요 스크립트 중심 정리. 상용 수준 밸런싱과 저장 기능은 추가 보강 필요",
    ],
    implementationPoints: [
      {
        title: "자동 공격과 적 스폰",
        description: "이동, 적 탐색, 자동 공격, 적 스폰을 연결해 생존형 루프 구성",
      },
      {
        title: "Object Pooling",
        description: "적과 투사체를 풀에서 재사용해 플레이 중 비용 절감",
      },
      {
        title: "레벨업과 결과 화면",
        description: "생존 시간, 레벨업 보상, 생존 · 사망 결과 화면 연결",
      },
    ],
    troubleshooting: [
      {
        title: "반복 생성 비용",
        description: "적과 투사체 누적 생성 비용을 PoolManager 재사용 구조로 완화",
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
    period: "2026년",
    role: "BMI 계산, 입력 검증, 성별 기준 분기, 결과 UI, 운동 정보 WebView, 로컬 영상 재생, 운동 계획 입력",
    heroImage: "https://raw.githubusercontent.com/allen8524/healthyup-ios/main/docs/screenshots/bmi-result.png",
    purpose: [
      "BMI 계산, 운동 정보 탐색, 영상 재생, 운동 계획 설정을 탭 구조로 연결",
      "BMI 결과 이후 운동 정보 · 영상 · 계획 화면으로 이어지는 흐름 구성",
    ],
    responsibilities: [
      "BMI 입력값 검증과 계산 결과 화면 구성",
      "성별 기준 결과 문구와 UI 피드백 분기",
      "WKWebView 기반 운동 정보 화면 연결",
      "AVPlayerViewController 기반 로컬 운동 영상 재생",
      "운동 강도, 시간, 세트 수 입력 화면 구성",
    ],
    dataFlow: [
      "키 · 체중 입력 → 입력값 검증 → 성별 기준 BMI 판정 → 결과 표시 → 운동 정보 · 영상 · 계획 탭 이동",
    ],
    learned: [
      "입력 검증을 계산 로직 앞에 두어 잘못된 값 전파 방지",
      "네트워크 의존 화면과 로컬 리소스 화면 병행으로 시연 안정성 확보",
    ],
    implementationPoints: [
      {
        title: "BMI 입력 검증과 결과 UI",
        description: "키 · 체중 입력값 검증, 성별 기준 BMI 판정, 결과 문구와 UI 피드백 표시",
      },
      {
        title: "WebKit과 AVKit 화면",
        description: "운동 정보는 WKWebView, 운동 영상은 AVPlayerViewController로 재생",
      },
      {
        title: "운동 계획 설정",
        description: "UISlider, UIStepper, UISegmentedControl로 운동 강도 · 시간 · 세트 수 조정",
      },
    ],
    troubleshooting: [
      {
        title: "잘못된 입력값 방어",
        description: "빈 값과 숫자 변환 실패를 BMI 계산 전 차단",
      },
      {
        title: "시연 환경 안정성",
        description: "네트워크와 관계없는 로컬 운동 영상 재생 구조 사용",
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
