import { useEffect } from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Preloader from "../components/sections/Preloader";
import Resume from "../components/sections/Resume";
import ScrollTop from "../components/sections/ScrollTop";
import Skills from "../components/sections/Skills";
import Troubleshooting from "../components/sections/Troubleshooting";
import { useScrollReveal } from "../hooks/useScrollReveal";

function HomePage() {
  useScrollReveal({ scope: "home" });

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.remove("portfolio-details-page");

    return () => {
      document.body.classList.remove("index-page");
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Troubleshooting />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
    </>
  );
}

export default HomePage;
