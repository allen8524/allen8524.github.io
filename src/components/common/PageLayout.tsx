import { useLayoutEffect, type ReactNode } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ScrollTop from "../sections/ScrollTop";

type PageLayoutProps = {
  children: ReactNode;
  pageClass?: "index-page" | "portfolio-details-page" | "service-details-page";
  mainClass?: string;
};

function PageLayout({ children, pageClass, mainClass = "main" }: PageLayoutProps) {
  useLayoutEffect(() => {
    if (!pageClass) return;
    document.body.classList.add(pageClass);
    return () => document.body.classList.remove(pageClass);
  }, [pageClass]);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className={mainClass}>
        {children}
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default PageLayout;
