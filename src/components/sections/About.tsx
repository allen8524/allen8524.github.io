import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

const sourceRoot = "https://github.com/allen8524/cineflow-spring-boot/blob/42ae7478688882621cec036167400ab3568686f4/src/main/";
const diagramDetails = {
  request: { title: "좌석 선택 요청", purpose: "선택한 상영 회차의 scheduleId를 전달해 해당 회차의 좌석 배치와 예약 여부를 함께 표시합니다.", file: "java/com/cineflow/controller/BookingController.java" },
  client: { title: "회차에서 좌석으로", purpose: "영화·극장·날짜·상영 회차를 고른 뒤 좌석 선택 화면으로 이동하도록 예매 단계를 연결했습니다.", file: "resources/templates/booking/seat.html" },
  api: { title: "BookingController", purpose: "상영 회차가 없거나 유효하지 않으면 예매 시작 화면으로 돌려보내고, 유효한 회차에는 좌석과 가격 정보를 모델에 담습니다.", file: "java/com/cineflow/controller/BookingController.java" },
  auth: { title: "Spring Security", purpose: "좌석 선택은 비회원에게도 허용합니다. 마이페이지는 로그인 사용자, 관리자 화면은 ADMIN 권한으로 접근 범위를 나눴습니다.", file: "java/com/cineflow/config/SecurityConfig.java" },
  table: { title: "상영관 좌석 템플릿", purpose: "표의 값은 DataInitializer의 초기 데이터 생성 규칙에서 가져왔습니다. A1은 STANDARD, A5는 PREMIUM, J4는 COUPLE입니다. 고정 좌석 배치를 회차별 예약 상태와 분리해 재사용합니다.", file: "java/com/cineflow/config/DataInitializer.java" },
  service: { title: "SeatService", purpose: "회차별 좌석을 행과 번호 순서로 조회하고 SeatRowDto로 묶습니다. 좌석 종류별 가격과 예약된 좌석 코드도 화면에 전달합니다.", file: "java/com/cineflow/service/SeatService.java" },
  database: { title: "회차별 좌석 상태", purpose: "schedule_seats가 상영 회차와 seat_templates를 연결합니다. 같은 회차·좌석 조합은 유일하게 두고 reserved, held, holdExpiresAt으로 상태를 관리합니다.", file: "java/com/cineflow/domain/ScheduleSeat.java" },
  response: { title: "Thymeleaf 화면 반환", purpose: "JSON API 응답 대신 booking/seat 템플릿을 렌더링합니다. 모델의 seatRows, reservedSeatCodes, baseSeatPrice로 좌석 선택 화면을 구성합니다.", file: "java/com/cineflow/controller/BookingController.java" },
} as const;
type DiagramPart = keyof typeof diagramDetails;

function BackendDiagram() {
  const [active, setActive] = useState<DiagramPart | null>(null);
  const [anchor, setAnchor] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const popup = useRef<HTMLDivElement>(null);
  const pinned = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const detail = active ? diagramDetails[active] : null;
  function keepOpen() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }
  function closeSoon() {
    keepOpen();
    if (pinned.current) return;
    closeTimer.current = setTimeout(() => setActive(null), 180);
  }
  function show(part: DiagramPart, element: HTMLElement) {
    keepOpen();
    const rect = element.getBoundingClientRect();
    setAnchor({ x: rect.right, y: rect.top });
    setActive(part);
  }
  function pin(part: DiagramPart, element: HTMLElement) {
    keepOpen();
    if (active !== part) show(part, element);
    pinned.current = true;
  }
  useLayoutEffect(() => {
    if (!active || !popup.current) return;
    const { width, height } = popup.current.getBoundingClientRect();
    const left = anchor.x + 18 + width <= window.innerWidth - 12 ? anchor.x + 18 : anchor.x - width - 18;
    const top = anchor.y + 18 + height <= window.innerHeight - 12 ? anchor.y + 18 : anchor.y - height - 18;
    setPosition({
      left: Math.max(12, Math.min(left, window.innerWidth - width - 12)),
      top: Math.max(12, Math.min(top, window.innerHeight - height - 12)),
    });
  }, [active, anchor]);
  useEffect(() => {
    const dismiss = () => { keepOpen(); pinned.current = false; setActive(null); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") dismiss(); };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest(".backend-inspect, .backend-design-detail")) dismiss();
    };
    const onScroll = (event: Event) => {
      if (!(event.target instanceof Node) || !popup.current?.contains(event.target)) dismiss();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", dismiss);
    return () => {
      keepOpen();
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", dismiss);
    };
  }, []);
  function card(part: DiagramPart, className: string, children: ReactNode) {
    return <div className={`${className} backend-inspect${active === part ? " is-active" : ""}`}
      role="button" tabIndex={0} aria-label={`${diagramDetails[part].title} 설계 설명`} aria-pressed={active === part}
      aria-controls={active === part ? "backend-design-detail" : undefined}
      onMouseEnter={(event) => { if (pinned.current) return; keepOpen(); setActive(part); setAnchor({ x: event.clientX, y: event.clientY }); }}
      onMouseMove={(event) => { if (!pinned.current && active === part) setAnchor({ x: event.clientX, y: event.clientY }); }}
      onMouseLeave={closeSoon} onFocus={(event) => { if (!pinned.current && active !== part) show(part, event.currentTarget); }}
      onBlur={closeSoon} onClick={(event) => pin(part, event.currentTarget)} onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); pin(part, event.currentTarget); popup.current?.querySelector("a")?.focus(); }
      }}>{children}</div>;
  }
  return (
    <figure className="backend-diagram" aria-label="CineFlow 좌석 선택 처리 흐름">
      <div className="backend-diagram__preview">
        {card("request", "backend-code", <>
          <div className="backend-code__bar"><span className="backend-code__dots"><b /><b /><b /></span><span>BookingController.java</span></div>
          <pre><code><span className="backend-code__comment">{"// CineFlow 좌석 선택\n"}</span><span className="backend-code__keyword">GET</span>{" /booking/seat\n"}<span className="backend-code__keyword">param</span>{" scheduleId\n"}<span className="backend-code__keyword">call</span>{" getSeatLayout()\n"}<span className="backend-code__keyword">model</span>{" seatRows\n"}<span className="backend-code__keyword">view</span>{" booking/seat"}</code></pre>
        </>)}
        {card("response", "backend-response-preview", <>
          <div className="backend-response-preview__heading"><span>View model</span><span className="backend-response-preview__status">Thymeleaf</span></div>
          <div className="backend-response-preview__type">booking/seat.html · 모델 속성</div>
          <pre><code><span>seatRows</span>{"\n  "}<em>좌석 행 · 종류 · 가격</em>{"\n"}<span>reservedSeatCodes</span>{"\n  "}<em>예약된 좌석 코드</em>{"\n"}<span>baseSeatPrice</span>{"\n  "}<em>선택한 회차의 기본 가격</em></code></pre>
        </>)}
      </div>
      <div className="backend-flow">
        {card("client", "backend-flow__node backend-flow__client", <><i className="bi bi-display" /><strong>Client</strong><span>상영 회차 선택</span></>)}
        <div className="backend-flow__arrow backend-flow__request" aria-hidden="true"><span>GET</span></div>
        {card("api", "backend-flow__node backend-flow__api", <><i className="bi bi-hdd-stack" /><strong>Controller</strong><span>상영 회차 검증</span></>)}
        <div className="backend-flow__arrow backend-flow__arrow--both backend-flow__verify" aria-hidden="true"><span>Access</span></div>
        {card("auth", "backend-flow__node backend-flow__auth", <><i className="bi bi-shield-check" /><strong>Security</strong><span>비회원 접근 허용</span></>)}
        <div className="backend-flow__down backend-flow__route" aria-hidden="true"><span>Call</span></div>
        {card("table", "backend-flow__table", <>
          <div className="backend-flow__table-heading"><i className="bi bi-database" /> seat_templates</div>
          <div className="backend-flow__table-row backend-flow__table-labels"><span>seat_code</span><span>seat_type</span></div>
          <div className="backend-flow__table-row"><span>A1</span><span>STANDARD</span></div>
          <div className="backend-flow__table-row"><span>A5</span><span>PREMIUM</span></div>
          <div className="backend-flow__table-row"><span>J4</span><span>COUPLE</span></div>
          <small className="backend-flow__seed-note">초기 데이터 기준</small>
        </>)}
        {card("service", "backend-flow__node backend-flow__service", <><i className="bi bi-gear" /><strong>SeatService</strong><span>좌석 배치 · 가격 구성</span></>)}
        <div className="backend-flow__arrow backend-flow__arrow--both backend-flow__query" aria-hidden="true"><span>Query</span><small>Result</small></div>
        {card("database", "backend-flow__node backend-flow__database", <><i className="bi bi-database" /><strong>schedule_seats</strong><span>회차별 예약 · 선점 상태</span></>)}
        <div className="backend-flow__down backend-flow__result" aria-hidden="true" />
        {card("response", "backend-flow__node backend-flow__response", <><i className="bi bi-file-earmark-code" /><div><strong>booking/seat</strong><span>좌석 선택 HTML 화면 반환</span></div></>)}
      </div>
      {detail && createPortal(<div ref={popup} id="backend-design-detail" className="backend-design-detail"
        role="region" aria-label={`${detail.title} 설계 설명`} style={position}
        onMouseEnter={keepOpen} onMouseLeave={closeSoon} onFocus={keepOpen} onBlur={closeSoon}>
        <div><strong>{detail.title}</strong><p>{detail.purpose}</p></div>
        <a href={`${sourceRoot}${detail.file}`} target="_blank" rel="noreferrer">근거 코드 <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
      </div>, document.body)}
    </figure>
  );
}

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="intro-header text-center">
              <h1>화면 뒤의 처리 구조를 설계합니다.</h1>
              <p className="subtitle">요청 처리 · 상태 관리 · 데이터 연동</p>
            </div>

            <div className="main-content-wrapper">
              <div className="about-layout">
                <div className="about-visual">
                  <BackendDiagram />
                </div>

                <div className="about-principles">
                  <div className="content-area">
                    <div className="expertise-grid">
                      <div className="expertise-item">
                        <div className="expertise-icon">
                          <i className="bi bi-database-check" />
                        </div>
                        <div className="expertise-content">
                          <h4>데이터 구조 우선</h4>
                          <p>기능 구현 전에 필요한 데이터와 테이블 관계, 조회 기준을 먼저 확인합니다.</p>
                        </div>
                      </div>

                      <div className="expertise-item">
                        <div className="expertise-icon">
                          <i className="bi bi-diagram-3" />
                        </div>
                        <div className="expertise-content">
                          <h4>상태 흐름 연결</h4>
                          <p>요청부터 저장, 조회, 수정까지 데이터 상태가 이어지는 과정을 기준으로 구현합니다.</p>
                        </div>
                      </div>

                      <div className="expertise-item">
                        <div className="expertise-icon">
                          <i className="bi bi-search" />
                        </div>
                        <div className="expertise-content">
                          <h4>문제 원인 추적</h4>
                          <p>화면 오류만 수정하지 않고 요청값, 서비스 로직, DB 상태를 순서대로 확인합니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
