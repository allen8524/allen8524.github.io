import type { ReactNode } from "react";

type TroubleFlow = {
  label: string;
  description: ReactNode;
};

type TroubleCase = {
  id: string;
  label: string;
  keyword: string;
  stack: string;
  heading: string;
  pipeline: string[];
  tags: string[];
  flow: TroubleFlow[];
};

const troubleCases: TroubleCase[] = [
  {
    id: "shopping",
    label: "쇼핑몰 판매관리",
    keyword: "주문 흐름 정합성",
    stack: "PHP · Bootstrap · MySQL",
    heading: "장바구니 → 주문 저장 기준 통일",
    pipeline: ["cart.php", "order.php", "order_ok.php"],
    tags: ["장바구니 기준 정렬", "주문번호 중심 저장", "관리자 조회 일치"],
    flow: [
      {
        label: "문제",
        description: "주문서 이동 시 상품 정보 누락",
      },
      {
        label: "원인",
        description: "장바구니 기준과 주문 저장 기준 분리",
      },
      {
        label: "해결",
        description: (
          <>
            <code>cart.php</code> → <code>order.php</code> → <code>order_ok.php</code> 흐름 재정렬
          </>
        ),
      },
      {
        label: "결과",
        description: "사용자 주문 내역 · 관리자 조회 기준 일치",
      },
    ],
  },
  {
    id: "esports",
    label: "e스포츠 포털/관리",
    keyword: "순위 반영 지연 개선",
    stack: "Laravel · Blade · MySQL · Ajax",
    heading: "경기 결과 → 순위표 갱신 기준 정리",
    pipeline: ["routes/web.php", "admin/matches", "rank update"],
    tags: ["JSON 응답 통일", "finished 정렬", "순위표 동기화"],
    flow: [
      {
        label: "문제",
        description: "사용자 화면 · 관리자 화면 순위 상태 불일치",
      },
      {
        label: "원인",
        description: "Ajax 응답 형식과 순위 집계 조건 불일치",
      },
      {
        label: "해결",
        description: (
          <>
            JSON 응답 규격 통일, <code>finished</code> 상태 기준 반영
          </>
        ),
      },
      {
        label: "결과",
        description: "경기 목록 · 순위표 동기화",
      },
    ],
  },
  {
    id: "bakery",
    label: "베이커리 판매관리",
    keyword: "누락 데이터 예외 대응",
    stack: "Laravel · Blade · MySQL",
    heading: "제품 조회 키와 null 분기 정리",
    pipeline: ["Controllers", "Views", "Migrations"],
    tags: ["조회 키 통일", "null 분기 처리", "화면 응답 유지"],
    flow: [
      {
        label: "문제",
        description: "재고 · 판매 조회 시 빈 값 또는 예외 발생",
      },
      {
        label: "원인",
        description: "제품 · 재고 · 판매 연결 키 불일치",
      },
      {
        label: "해결",
        description: "제품 중심 조회 조건 통일, null 분기 추가",
      },
      {
        label: "결과",
        description: "누락 데이터 구간에서도 관리자 화면 흐름 유지",
      },
    ],
  },
  {
    id: "cineflow",
    label: "CineFlow",
    keyword: "예매 상태 정합성",
    stack: "Spring Boot · JPA · Security · MySQL",
    heading: "상영일정 · 좌석 · 결제 · 조회 흐름 연결",
    pipeline: ["BookingController", "BookingService", "Booking", "bookingId"],
    tags: ["예매 상태 연결", "좌석 선택 기준 유지", "조회 · 취소 흐름 일치"],
    flow: [
      {
        label: "문제",
        description: "좌석 · 결제 단계에서 선택값 기준 분리",
      },
      {
        label: "원인",
        description: "영화 · 상영일정 · 좌석 · 결제 파라미터 분산",
      },
      {
        label: "해결",
        description: (
          <>
            <code>BookingController</code> · <code>BookingService</code>에서 <code>bookingId</code> 기준 연결
          </>
        ),
      },
      {
        label: "결과",
        description: "예매 완료 · 조회 · 관리자 관리 기준 일치",
      },
    ],
  },
];

function Troubleshooting() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h1>트러블슈팅</h1>
        <p>문제 · 원인 · 해결 · 결과 중심 정리</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="troubleshooting-showcase">
          <div className="trouble-card-grid">
            {troubleCases.map((item) => (
              <article className="trouble-card" key={item.id}>
                <header className="trouble-card-head">
                  <p className="trouble-card-stack">{item.stack}</p>
                  <div className="trouble-card-title-row">
                    <h3>{item.label}</h3>
                    <span>{item.keyword}</span>
                  </div>
                </header>

                <p className="trouble-card-title">{item.heading}</p>

                <ol className="trouble-card-flow">
                  {item.flow.map((flow) => (
                    <li key={flow.label}>
                      <span>{flow.label}</span>
                      <p>{flow.description}</p>
                    </li>
                  ))}
                </ol>

                <div className="trouble-card-pipeline" aria-label={`${item.label} 처리 흐름`}>
                  {item.pipeline.map((node, pipelineIndex) => (
                    <span key={`${item.id}-${node}`}>
                      <code>{node}</code>
                      {pipelineIndex < item.pipeline.length - 1 && <i className="bi bi-arrow-right-short" aria-hidden="true" />}
                    </span>
                  ))}
                </div>

                <ul className="trouble-card-tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Troubleshooting;
