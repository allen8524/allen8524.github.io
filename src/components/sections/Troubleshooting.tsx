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
  summary: string;
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
    heading: "장바구니에서 주문 저장까지 기준값 통일",
    summary: "주문번호를 중심으로 화면 이동과 저장 기준을 맞춘 사례입니다.",
    pipeline: ["cart.php", "order.php", "order_ok.php"],
    tags: ["장바구니 기준 정렬", "주문번호 중심 저장", "관리자 조회 일치"],
    flow: [
      {
        label: "문제",
        description: "장바구니에서 주문서로 이동할 때 상품 정보가 누락되었습니다.",
      },
      {
        label: "원인",
        description: "장바구니 기준과 주문 저장 기준이 분리되어 데이터 키가 일치하지 않았습니다.",
      },
      {
        label: "해결",
        description: (
          <>
            주문번호 중심으로 <code>cart.php</code> → <code>order.php</code> → <code>order_ok.php</code> 흐름을 재정렬했습니다.
          </>
        ),
      },
      {
        label: "결과",
        description: "사용자 주문 내역과 관리자 주문 조회 기준이 안정적으로 일치했습니다.",
      },
    ],
  },
  {
    id: "esports",
    label: "e스포츠 포털/관리",
    keyword: "순위 반영 지연 개선",
    stack: "Laravel · Blade · MySQL · Ajax",
    heading: "경기 결과 저장 후 순위표 갱신 기준 정리",
    summary: "경기 상태와 응답 규격을 맞춰 사용자 화면과 관리자 화면의 갱신 기준을 통일한 사례입니다.",
    pipeline: ["routes/web.php", "admin/matches", "rank update"],
    tags: ["JSON 응답 통일", "finished 정렬", "순위표 동기화"],
    flow: [
      {
        label: "문제",
        description: "경기 결과 저장 후 사용자 화면과 관리자 화면의 순위 상태가 다르게 보였습니다.",
      },
      {
        label: "원인",
        description: "Ajax 응답 형식과 순위 집계 조건이 일관되지 않아 갱신 시점이 분산되었습니다.",
      },
      {
        label: "해결",
        description: (
          <>
            JSON 응답 규격을 통일하고 <code>finished</code> 상태 기준으로만 순위에 반영되도록 고정했습니다.
          </>
        ),
      },
      {
        label: "결과",
        description: "경기 목록과 순위표가 같은 기준으로 갱신되어 운영 화면의 신뢰도가 높아졌습니다.",
      },
    ],
  },
  {
    id: "bakery",
    label: "베이커리 판매관리",
    keyword: "누락 데이터 예외 대응",
    stack: "Laravel · Blade · MySQL",
    heading: "제품 기준 조회 키와 null 분기 처리",
    summary: "누락 데이터가 있어도 재고와 판매 화면이 끊기지 않도록 조회 기준을 정리한 사례입니다.",
    pipeline: ["Controllers", "Views", "Migrations"],
    tags: ["조회 키 통일", "null 분기 처리", "화면 응답 유지"],
    flow: [
      {
        label: "문제",
        description: "재고 · 판매 조회 시 제품 기준 키가 맞지 않아 빈 값 또는 예외가 발생했습니다.",
      },
      {
        label: "원인",
        description: "제품, 재고, 판매 데이터를 연결하는 조회 키가 화면별로 다르게 사용되었습니다.",
      },
      {
        label: "해결",
        description: "제품 중심 조회 조건으로 통일하고 누락 데이터에 대한 null 분기 처리를 추가했습니다.",
      },
      {
        label: "결과",
        description: "데이터가 비어 있는 구간에서도 관리자 화면 흐름이 유지되었습니다.",
      },
    ],
  },
  {
    id: "cineflow",
    label: "CineFlow",
    keyword: "예매 상태 정합성",
    stack: "Spring Boot · JPA · Security · MySQL",
    heading: "상영일정 · 좌석 · 결제 · 예매 조회 상태 연결",
    summary: "예매 단계마다 흩어지는 선택값을 예매 엔티티와 식별자 기준으로 묶은 사례입니다.",
    pipeline: ["BookingController", "BookingService", "Booking", "bookingId"],
    tags: ["예매 상태 연결", "좌석 선택 기준 유지", "조회 · 취소 흐름 일치"],
    flow: [
      {
        label: "문제",
        description: "상영일정 선택 후 좌석 · 결제 단계에서 선택값 기준이 분리되었습니다.",
      },
      {
        label: "원인",
        description: "영화, 상영일정, 좌석, 결제 정보가 단계별 파라미터로 흩어졌습니다.",
      },
      {
        label: "해결",
        description: (
          <>
            <code>BookingController</code>와 <code>BookingService</code>에서 예매 엔티티 기준으로 묶고 <code>bookingId</code> 상태를 참조했습니다.
          </>
        ),
      },
      {
        label: "결과",
        description: "예매 완료, 회원 · 비회원 조회, 관리자 예매 관리 기준이 일치했습니다.",
      },
    ],
  },
];

function Troubleshooting() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h1>트러블슈팅</h1>
        <p>구현 중 발생한 문제를 원인, 수정 방향, 결과 중심으로 정리했습니다.</p>
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
                <p className="trouble-card-summary">{item.summary}</p>

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
