import BackendDiagram from "../about/BackendDiagram";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="section-title">
              <h2>화면 뒤의 처리 구조를 설계합니다.</h2>
            </div>

            <div className="main-content-wrapper">
              <div className="about-layout">
                <div className="about-visual">
                  <BackendDiagram />
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
