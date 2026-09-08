function BackendDiagram() {
  return (
    <figure className="backend-diagram" aria-label="백엔드 요청 처리 흐름">
      <figcaption className="visually-hidden">
        클라이언트 요청을 API 서버에서 받아 인증과 권한을 확인합니다. 서비스에서 비즈니스 로직을
        처리하고 데이터베이스에 저장하거나 조회한 뒤, 처리 결과를 클라이언트로 반환합니다.
        코드와 데이터는 이 흐름을 설명합니다.
      </figcaption>

      <div className="backend-diagram__preview" aria-hidden="true">
        <div className="backend-code">
          <div className="backend-code__bar">
            <span className="backend-code__dots"><b /><b /><b /></span>
            <span>request.flow</span>
          </div>
          <pre><code><span className="backend-code__comment">{"// 요청 처리\n"}</span><span className="backend-code__keyword">{"receive"}</span>{" request\n"}<span className="backend-code__keyword">{"check"}</span>{"   auth & role\n"}<span className="backend-code__keyword">{"call"}</span>{"    service\n"}<span className="backend-code__keyword">{"query"}</span>{"   database\n"}<span className="backend-code__keyword">{"return"}</span>{"  response"}</code></pre>
        </div>

        <div className="backend-response-preview">
          <div className="backend-response-preview__heading">
            <span>Response</span>
            <span className="backend-response-preview__status">200 OK</span>
          </div>
          <div className="backend-response-preview__type">application/json</div>
          <pre><code>{"{\n  "}<span>"id"</span>{": 1,\n  "}<span>"name"</span>{": "}<em>"user"</em>{",\n  "}<span>"role"</span>{": "}<em>"MEMBER"</em>{"\n}"}</code></pre>
        </div>
      </div>

      <div className="backend-flow" aria-hidden="true">
        <div className="backend-flow__node backend-flow__client">
          <i className="bi bi-display" />
          <strong>Client</strong>
          <span>사용자 요청</span>
        </div>
        <div className="backend-flow__arrow backend-flow__request"><span>HTTP</span></div>
        <div className="backend-flow__node backend-flow__api">
          <i className="bi bi-hdd-stack" />
          <strong>API Server</strong>
          <span>요청 처리</span>
        </div>
        <div className="backend-flow__arrow backend-flow__arrow--both backend-flow__verify"><span>Verify</span></div>
        <div className="backend-flow__node backend-flow__auth">
          <i className="bi bi-shield-check" />
          <strong>Auth</strong>
          <span>인증 · 권한</span>
        </div>

        <div className="backend-flow__down backend-flow__route"><span>Route</span></div>

        <div className="backend-flow__table">
          <div className="backend-flow__table-heading"><i className="bi bi-database" /> users</div>
          <div className="backend-flow__table-row backend-flow__table-labels"><span>id</span><span>role</span></div>
          <div className="backend-flow__table-row"><span>1</span><span>MEMBER</span></div>
          <div className="backend-flow__table-row"><span>2</span><span>ADMIN</span></div>
          <div className="backend-flow__table-row"><span>3</span><span>MEMBER</span></div>
        </div>
        <div className="backend-flow__node backend-flow__service">
          <i className="bi bi-gear" />
          <strong>Service</strong>
          <span>비즈니스 로직</span>
        </div>
        <div className="backend-flow__arrow backend-flow__arrow--both backend-flow__query"><span>Query</span><small>Result</small></div>
        <div className="backend-flow__node backend-flow__database">
          <i className="bi bi-database" />
          <strong>Database</strong>
          <span>저장 · 조회</span>
        </div>

        <div className="backend-flow__down backend-flow__result" />
        <div className="backend-flow__node backend-flow__response">
          <i className="bi bi-file-earmark-code" />
          <div><strong>Response</strong><span>클라이언트에 처리 결과 반환</span></div>
        </div>
      </div>
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
