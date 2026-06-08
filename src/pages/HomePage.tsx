import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Preloader from "../components/sections/Preloader";
import Resume from "../components/sections/Resume";
import ScrollTop from "../components/sections/ScrollTop";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Stats from "../components/sections/Stats";
import Troubleshooting from "../components/sections/Troubleshooting";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.remove("portfolio-details-page");

    return () => {
      document.body.classList.remove("index-page");
    };
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    window.setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [location.hash]);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
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
