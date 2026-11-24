import PageLayout from "../components/common/PageLayout";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Resume from "../components/sections/Resume";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Troubleshooting from "../components/sections/Troubleshooting";
import { useScrollReveal } from "../hooks/useScrollReveal";

function HomePage() {
  useScrollReveal({ scope: "home" });

  return (
    <PageLayout pageClass="index-page">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Troubleshooting />
        <Contact />
    </PageLayout>
  );
}

export default HomePage;
