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
    summary: "장바구니·주문 데이터 흐름을 기준으로 사용자 주문과 관리자 주문 조회 기준을 일치시킨 사례입니다.",
    evidenceTitle: "근거 & 저장 흐름",
    evidenceNote: "화면 흐름과 저장 기준을 같은 주문번호 축으로 맞춰 누락 구간을 제거했습니다.",
    pipeline: ["cart.php", "order.php", "order_ok.php"],
    tags: ["장바구니 기준 정렬", "주문번호 중심 저장", "관리자 조회 일치"],
    flow: [
      {
        label: "문제 상황",
        description: "장바구니에서 주문서로 이동할 때 상품 정보가 누락되어 주문 저장 기준이 화면 흐름과 맞지 않았습니다.",
      },
      {
        label: "원인 분석",
        description: "장바구니 기준과 주문 저장 기준이 분리되어 데이터 키가 일치하지 않았습니다.",
      },
      {
        label: "수정 방향",
        description: (
          <>
            주문번호를 중심으로 <code>cart.php</code> → <code>order.php</code> → <code>order_ok.php</code> 흐름을
            재정렬했습니다.
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
    heading: "e스포츠 포털 및 경기관리 프로젝트",
    summary: "경기 결과 저장 이후 순위표 반영 지연을 응답 규격 통일과 집계 정렬 기준 정비로 해결한 사례입니다.",
    evidenceTitle: "근거 & 처리 흐름",
    evidenceNote: "라우팅 응답과 관리자 매치 화면의 집계 조건을 통일해 동기화를 안정화했습니다.",
    pipeline: ["routes/web.php", "admin/matches", "rank update"],
    tags: ["JSON 응답 통일", "finished 정렬", "순위표 동기화"],
    flow: [
      {
        label: "문제 상황",
        description: "경기 결과를 저장해도 순위표 갱신 시점이 늦어 사용자 화면과 관리자 화면의 상태가 다르게 보였습니다.",
      },
      {
        label: "원인 분석",
        description: "Ajax 응답 형식과 순위 계산 집계 조건이 일관되지 않아 갱신 트리거가 분산되었습니다.",
      },
      {
        label: "수정 방향",
        description: (
          <>
            JSON 응답 규격을 통일하고 경기 상태를 <code>finished</code> 기준으로 정렬해 집계 시점을 고정했습니다.
          </>
        ),
      },
      {
        label: "결과",
        description: "경기 목록과 순위표가 같은 기준으로 갱신되어 실시간 운영 시 신뢰도를 높였습니다.",
      },
    ],
  },
  {
    id: "bakery",
    label: "베이커리 판매관리",
    keyword: "누락 데이터 예외 대응",
    stack: "Laravel · Blade · MySQL",
    heading: "베이커리 판매관리 프로젝트",
    summary: "누락 데이터가 있는 상황에서도 조회 화면을 안정적으로 유지하도록 조회 키와 예외 분기를 정리한 사례입니다.",
    evidenceTitle: "근거 & 조회 흐름",
    evidenceNote: "조회 키를 제품 단위로 통일해 누락 데이터 상황에서도 안정적인 화면 응답을 유지했습니다.",
    pipeline: ["Controllers", "Views", "Migrations"],
    tags: ["조회 키 통일", "null 분기 처리", "화면 응답 유지"],
    flow: [
      {
        label: "문제 상황",
        description: "재고·판매 조회 시 제품 기준 키가 맞지 않아 빈 값 또는 예외가 발생했고 화면 신뢰도가 떨어졌습니다.",
      },
      {
        label: "원인 분석",
        description: "제품·재고·판매 데이터를 연결하는 조회 키가 화면별로 다르게 사용되었습니다.",
      },
      {
        label: "수정 방향",
        description: "제품 중심 조회 조건으로 통일하고 null 분기 처리로 누락 데이터 시에도 응답을 보장했습니다.",
      },
      {
        label: "결과",
        description: "데이터 누락 구간에서도 관리자 화면이 끊기지 않고 동일한 UI 흐름을 유지했습니다.",
      },
    ],
  },
  {
    id: "cineflow",
    label: "CineFlow",
    keyword: "예매 상태 정합성",
    stack: "Spring Boot · JPA · Security · MySQL",
    heading: "CineFlow 영화 예매 관리 시스템",
    summary: "상영 일정, 좌석 선택, 결제, 예매 조회가 같은 예매 상태 기준으로 이어지도록 조정한 사례입니다.",
    evidenceTitle: "근거 & 처리 흐름",
    evidenceNote: "예매 생성 이후 조회와 취소가 같은 예약 식별자와 상태값을 참조하도록 흐름을 맞췄습니다.",
    pipeline: ["BookingController", "BookingService", "Booking", "bookingId"],
    tags: ["예매 상태 연결", "좌석 선택 기준 유지", "조회·취소 흐름 일치"],
    flow: [
      {
        label: "문제 상황",
        description: "상영 일정 선택 후 좌석·결제 단계로 이동할 때 선택값이 분리되어 예매 완료와 조회 화면의 상태 기준이 흔들리는 문제가 있었습니다.",
      },
      {
        label: "원인 분석",
        description: "영화, 상영 일정, 좌석, 결제 정보가 단계별 파라미터로 전달되어 저장 이후 기준 데이터가 명확히 묶이지 않았습니다.",
      },
      {
        label: "수정 방향",
        description: (
          <>
            <code>BookingController</code>와 <code>BookingService</code>에서 상영 일정과 좌석 정보를 예매 엔티티
            기준으로 묶고, 완료·조회·취소 흐름이 같은 <code>bookingId</code> 상태를 참조하도록 정리했습니다.
          </>
        ),
      },
      {
        label: "결과",
        description: "사용자 예매 완료, 회원·비회원 조회, 관리자 예매 관리가 같은 예매 상태를 기준으로 확인되도록 개선했습니다.",
      },
    ],
  },
];

function Troubleshooting() {
  const [activeCaseId, setActiveCaseId] = useState(troubleCases[0].id);

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>트러블슈팅</h2>
        <p>프로젝트 구현 중 마주친 문제를 원인과 해결 결과 중심으로 정리했습니다.</p>
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
