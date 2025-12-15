import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/header";
import Hero from "./pages/hero";
import About from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/project";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import UMConvo from "./pages/umconvo-app";
import DesignDuel from "./pages/skincare-product-website";

/* ---------- Home Page Component ---------- */
function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

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

        {/* Uncomment if needed later */}
        {/* 
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        */}

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact scrollToSection={scrollToSection} />
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/umconvo-app" element={<UMConvo />} />
        <Route path="/skincare-product-website" element={<DesignDuel />} />
      </Routes>
    </BrowserRouter>
  );
}
