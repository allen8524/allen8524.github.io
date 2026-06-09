import { Fragment, useState, type ReactNode } from "react";

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
  evidenceTitle: string;
  evidenceNote: string;
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
    heading: "쇼핑몰 판매관리 프로젝트",
    summary: "장바구니 · 주문 데이터 기준 통일 사례",
    evidenceTitle: "근거 & 저장 흐름",
    evidenceNote: "주문번호 기준으로 화면 흐름과 저장 기준 일치",
    pipeline: ["cart.php", "order.php", "order_ok.php"],
    tags: ["장바구니 기준 정렬", "주문번호 중심 저장", "관리자 조회 일치"],
    flow: [
      {
        label: "문제 상황",
        description: "장바구니에서 주문서 이동 시 상품 정보 누락",
      },
      {
        label: "원인 분석",
        description: "장바구니 기준과 주문 저장 기준 분리",
      },
      {
        label: "수정 방향",
        description: (
          <>
            주문번호 중심으로 <code>cart.php</code> → <code>order.php</code> → <code>order_ok.php</code> 흐름 재정렬
          </>
        ),
      },
      {
        label: "결과",
        description: "사용자 주문 내역과 관리자 주문 조회 기준 일치",
      },
    ],
  },
  {
    id: "esports",
    label: "e스포츠 포털/관리",
    keyword: "순위 반영 지연 개선",
    stack: "Laravel · Blade · MySQL · Ajax",
    heading: "e스포츠 포털 및 경기관리 프로젝트",
    summary: "경기 결과 저장 후 순위표 반영 기준 정리 사례",
    evidenceTitle: "근거 & 처리 흐름",
    evidenceNote: "응답 규격과 finished 집계 조건 통일",
    pipeline: ["routes/web.php", "admin/matches", "rank update"],
    tags: ["JSON 응답 통일", "finished 정렬", "순위표 동기화"],
    flow: [
      {
        label: "문제 상황",
        description: "경기 결과 저장 후 사용자 화면과 관리자 화면 상태 차이 발생",
      },
      {
        label: "원인 분석",
        description: "Ajax 응답 형식과 순위 집계 조건 불일치",
      },
      {
        label: "수정 방향",
        description: (
          <>
            JSON 응답 규격 통일, <code>finished</code> 상태 기준 집계 고정
          </>
        ),
      },
      {
        label: "결과",
        description: "경기 목록과 순위표 갱신 기준 일치",
      },
    ],
  },
  {
    id: "bakery",
    label: "베이커리 판매관리",
    keyword: "누락 데이터 예외 대응",
    stack: "Laravel · Blade · MySQL",
    heading: "베이커리 판매관리 프로젝트",
    summary: "누락 데이터 상황에서도 조회 화면 유지 사례",
    evidenceTitle: "근거 & 조회 흐름",
    evidenceNote: "제품 기준 조회 키 통일과 null 분기 처리",
    pipeline: ["Controllers", "Views", "Migrations"],
    tags: ["조회 키 통일", "null 분기 처리", "화면 응답 유지"],
    flow: [
      {
        label: "문제 상황",
        description: "재고 · 판매 조회 시 빈 값 또는 예외 발생",
      },
      {
        label: "원인 분석",
        description: "제품 · 재고 · 판매 조회 키가 화면별로 분리",
      },
      {
        label: "수정 방향",
        description: "제품 중심 조회 조건 통일, null 분기 처리 추가",
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
    heading: "CineFlow 영화 예매 관리 시스템",
    summary: "상영일정 · 좌석 · 결제 · 예매 조회 상태 연결 사례",
    evidenceTitle: "근거 & 처리 흐름",
    evidenceNote: "예약 식별자와 상태값 기준 통일",
    pipeline: ["BookingController", "BookingService", "Booking", "bookingId"],
    tags: ["예매 상태 연결", "좌석 선택 기준 유지", "조회 · 취소 흐름 일치"],
    flow: [
      {
        label: "문제 상황",
        description: "상영일정 선택 후 좌석 · 결제 단계에서 선택값 기준 분리",
      },
      {
        label: "원인 분석",
        description: "영화, 상영일정, 좌석, 결제 정보가 단계별 파라미터로 분산",
      },
      {
        label: "수정 방향",
        description: (
          <>
            <code>BookingController</code>와 <code>BookingService</code>에서 예매 엔티티 기준으로 묶고 <code>bookingId</code> 상태 참조
          </>
        ),
      },
      {
        label: "결과",
        description: "예매 완료, 회원 · 비회원 조회, 관리자 예매 관리 기준 일치",
      },
    ],
  },
];

function Troubleshooting() {
  const [activeCaseId, setActiveCaseId] = useState(troubleCases[0].id);

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h1>트러블슈팅</h1>
        <p>문제 상황, 원인, 수정 방향, 결과 중심 정리</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="troubleshooting-lab">
          <div className="trouble-nav nav" role="tablist" aria-label="트러블슈팅 사례 탭">
            {troubleCases.map((item) => {
              const isActive = item.id === activeCaseId;

              return (
                <button
                  className={`trouble-nav-item${isActive ? " active" : ""}`}
                  id={`trouble-tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`trouble-panel-${item.id}`}
                  aria-selected={isActive}
                  key={item.id}
                  onClick={() => setActiveCaseId(item.id)}
                >
                  <span className="trouble-nav-label">{item.label}</span>
                  <span className="trouble-nav-keyword">{item.keyword}</span>
                  <span className="trouble-nav-stack">{item.stack}</span>
                </button>
              );
            })}
          </div>

          <div className="tab-content trouble-stage">
            {troubleCases.map((item) => {
              const isActive = item.id === activeCaseId;

              return (
                <article
                  className={`trouble-panel tab-pane fade${isActive ? " show active" : ""}`}
                  id={`trouble-panel-${item.id}`}
                  role="tabpanel"
                  aria-labelledby={`trouble-tab-${item.id}`}
                  tabIndex={0}
                  key={item.id}
                >
                  <div className="trouble-case">
                    <header className="trouble-case-head">
                      <p className="trouble-case-stack">{item.stack}</p>
                      <h3>{item.heading}</h3>
                      <p>{item.summary}</p>
                    </header>
                    <ol className="trouble-flow">
                      {item.flow.map((flow) => (
                        <li key={flow.label}>
                          <span>{flow.label}</span>
                          <p>{flow.description}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <aside className="trouble-evidence" aria-label="근거와 처리 흐름">
                    <h4>{item.evidenceTitle}</h4>
                    <p className="trouble-evidence-note">{item.evidenceNote}</p>
                    <div className="trouble-pipeline">
                      {item.pipeline.map((node, index) => (
                        <Fragment key={node}>
                          <span>
                            <code>{node}</code>
                          </span>
                          {index < item.pipeline.length - 1 && <i className="bi bi-arrow-right-short" aria-hidden="true" />}
                        </Fragment>
                      ))}
                    </div>
                    <ul className="trouble-tags">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </aside>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Troubleshooting;
