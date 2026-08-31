/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
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
import ScrollTraveler from "./components/ui/ScrollTraveler";
import { CustomCursor } from "./components/ui/CustomCursor";

const App = () => {
  return (
    <I18nProvider>
      <div className="bg-bg-primary min-h-screen selection:bg-accent-primary selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-accent-primary text-black px-4 py-2 font-mono text-sm underline"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navbar />
        <ScrollTraveler />

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
