import type { ReactNode } from "react";

type TroubleFlow = {
  label: string;
  description: ReactNode;
};

type TroubleCase = {
  id: string;
  heading: string;
  flow: TroubleFlow[];
};

const troubleCases: TroubleCase[] = [
  {
    id: "shopping",
    heading: "장바구니 → 주문 저장 기준 통일",
    flow: [
      {
        label: "문제",
        description: "주문서 이동 시 상품 정보 누락",
      },
      {
        label: "해결",
        description: (
          <>
            <code>cart.php</code> → <code>order.php</code> →{" "}
            <code>order_ok.php</code> 흐름 재정렬
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
    heading: "경기 결과 → 순위표 갱신 기준 정리",
    flow: [
      {
        label: "문제",
        description: "사용자 화면 · 관리자 화면 순위 상태 불일치",
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
    heading: "제품 조회 키와 null 분기 정리",
    flow: [
      {
        label: "문제",
        description: "재고 · 판매 조회 시 빈 값 또는 예외 발생",
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
    heading: "상영일정 · 좌석 · 결제 · 조회 흐름 연결",
    flow: [
      {
        label: "문제",
        description: "좌석 · 결제 단계에서 선택값 기준 분리",
      },
      {
        label: "해결",
        description: (
          <>
            <code>BookingController</code> · <code>BookingService</code>에서{" "}
            <code>bookingId</code> 기준 연결
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
      <div className="container section-title">
        <h2>트러블슈팅</h2>
      </div>

      <div className="container">
        <div className="troubleshooting-showcase">
          <div className="trouble-card-grid">
            {troubleCases.map((item) => (
              <article className="trouble-card" key={item.id}>
                <header className="trouble-card-head">
                  <h3>{item.heading}</h3>
                </header>

                <ol className="trouble-card-flow">
                  {item.flow.map((flow) => (
                    <li key={flow.label}>
                      <span>{flow.label}</span>
                      <div className="trouble-card-description">
                        <p>{flow.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Troubleshooting;
