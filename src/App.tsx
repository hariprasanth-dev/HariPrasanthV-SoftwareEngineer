/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import gsap from "gsap";
import { I18nProvider } from "./context/i18nContext";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectShowroom from "./components/sections/ProjectShowroom";
import TechnicalDeepDives from "./components/sections/TechnicalDeepDives";
import ExperienceList from "./components/sections/Experience";
import EducationCertifications from "./components/sections/EducationCertifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";

const App = () => {
  useEffect(() => {
    // Custom Cursor Logic
    const xTo = gsap.quickTo(".cursor-dot", "x", {
      duration: 0.3,
      ease: "power2",
    });
    const yTo = gsap.quickTo(".cursor-dot", "y", {
      duration: 0.3,
      ease: "power2",
    });
    const xRingTo = gsap.quickTo(".cursor-ring", "x", {
      duration: 0.5,
      ease: "power2",
    });
    const yRingTo = gsap.quickTo(".cursor-ring", "y", {
      duration: 0.5,
      ease: "power2",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const handleHoverStart = () =>
      gsap.to(".cursor-ring", { scale: 2.5, duration: 0.3 });
    const handleHoverEnd = () =>
      gsap.to(".cursor-ring", { scale: 1, duration: 0.3 });

    window.addEventListener("mousemove", handleMouseMove);

    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <I18nProvider>
      <div className="bg-bg-primary min-h-screen selection:bg-accent-primary selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-accent-primary text-black px-4 py-2 font-mono text-sm underline"
        >
          Skip to content
        </a>
        {/* <CustomCursor /> */}
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <ProjectShowroom />
          <TechnicalDeepDives />
          <ExperienceList />
          <EducationCertifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </I18nProvider>
  );
};

export default App;
