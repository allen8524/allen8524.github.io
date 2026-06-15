function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h1>연락처</h1>
        <p>채용 · 협업 문의는 이메일로 가장 빠르게 확인하며, GitHub와 블로그에서 작업 내용을 이어서 보실 수 있습니다.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-chat-dots" />
              </div>
              <div className="info-content">
                <h4>연락처 안내</h4>
                <p>필요한 채널만 빠르게 확인할 수 있도록 핵심 연락처와 작업 링크를 한곳에 정리했습니다.</p>
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-envelope-open" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">이메일</span>
                  <a href="mailto:minseo8524@naver.com" className="detail-value text-decoration-none">
                    minseo8524@naver.com
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-github" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">GitHub</span>
                  <a
                    href="https://github.com/allen8524"
                    className="detail-value text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/allen8524
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="bi bi-journal-text" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">블로그</span>
                  <a
                    href="https://allen8524.tistory.com/"
                    className="detail-value text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    allen8524.tistory.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-wrapper">
              <div className="form-header">
                <h3>바로 연락하기</h3>
                <p>이메일 복사와 메일 보내기, GitHub · 블로그 바로가기를 한 번에 사용할 수 있습니다.</p>
              </div>

              <div className="form-group">
                <label htmlFor="contactEmailAddress">이메일</label>
                <input
                  type="text"
                  id="contactEmailAddress"
                  value="minseo8524@naver.com"
                  readOnly
                  aria-label="이메일 주소"
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <button
                    type="button"
                    className="submit-btn w-100 justify-content-center copy-trigger"
                    data-copy-text="minseo8524@naver.com"
                    data-copy-message="이메일 주소가 복사되었습니다"
                    aria-label="이메일 주소 복사"
                  >
                    <span>이메일 복사</span>
                    <i className="bi bi-copy" />
                  </button>
                </div>
                <div className="col-md-6">
                  <a
                    href="mailto:minseo8524@naver.com"
                    className="submit-btn w-100 justify-content-center"
                    aria-label="이메일 앱 열기"
                  >
                    <span>메일 보내기</span>
                    <i className="bi bi-envelope-arrow-up" />
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="https://github.com/allen8524"
                    className="submit-btn w-100 justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub 바로가기"
                  >
                    <span>GitHub 바로가기</span>
                    <i className="bi bi-github" />
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="https://allen8524.tistory.com/"
                    className="submit-btn w-100 justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="블로그 바로가기"
                  >
                    <span>블로그 보기</span>
                    <i className="bi bi-journal-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
