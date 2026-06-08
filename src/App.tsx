import type { LegacySection } from "./types/legacy";
import { legacySections } from "./data/legacySections";

function App() {
  return (
    <main className="react-shell" aria-labelledby="site-title">
      <section className="react-shell__intro">
        <p className="react-shell__eyebrow">Vite + React + TypeScript migration</p>
        <h1 id="site-title">Hwang Minseo Portfolio</h1>
        <p className="react-shell__copy">
          기존 정적 포트폴리오를 React 구조로 점진 전환하기 위한 첫 진입점입니다.
          전체 콘텐츠는 아직 React로 옮기지 않았고, 원본 홈은 아래 링크에서 확인할 수 있습니다.
        </p>
        <div className="react-shell__actions" aria-label="legacy links">
          <a className="react-shell__button" href="/index.legacy.html">
            기존 홈 보기
          </a>
          <a className="react-shell__button react-shell__button--ghost" href="/portfolio-details.html">
            포트폴리오 상세
          </a>
        </div>
      </section>

      <section className="react-shell__panel" aria-labelledby="migration-sections-title">
        <h2 id="migration-sections-title">다음 전환 대상 섹션</h2>
        <ul className="react-shell__section-list">
          {legacySections.map((section: LegacySection) => (
            <li key={section.id}>
              <span>{section.label}</span>
              <code>#{section.id}</code>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
