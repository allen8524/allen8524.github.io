function Footer() {
  return (
    <footer id="footer" className="footer footer-minimal footer-wave light-background">
      <div className="container">
        <div className="footer-wave__card">
          <div className="footer-wave__layers" aria-hidden="true">
            <span className="footer-wave__layer footer-wave__layer--1" />
            <span className="footer-wave__layer footer-wave__layer--2" />
            <span className="footer-wave__layer footer-wave__layer--3" />
          </div>

          <div className="footer-wave__content">
            <i className="bi bi-code-slash" aria-hidden="true" />
            <p className="footer-minimal__copyright">© 2026 황민서. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
