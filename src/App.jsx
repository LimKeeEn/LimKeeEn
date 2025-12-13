import React, { useState } from "react";
import Header from "./pages/header";
import Hero from "./pages/hero";
import About from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/project";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section> */}
        
        
        <section id="contact">
          <Contact scrollToSection={scrollToSection} />
        </section>
      </main>
    </div>
  );
}
