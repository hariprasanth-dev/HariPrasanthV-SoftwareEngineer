import { useState } from "react";

import Header from "@/react-app/components/Header";
import About from "@/react-app/components/About";
import Skills from "@/react-app/components/Skills";
import Experience from "@/react-app/components/Experience";
import Projects from "@/react-app/components/Projects";
import Education from "@/react-app/components/Education";
import Contact from "@/react-app/components/Contact";
import GeometricBackground from "@/react-app/components/3d/GeometricBackground";

import { resumeData } from "@/shared/data";
import IntroPage from "@/react-app/components/3d/IntroPage";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="font-sans relative overflow-hidden min-h-screen">
      {showIntro ? (
        <IntroPage onFinish={() => setShowIntro(false)} data={resumeData.personal} />
      ) : (
        <div>
          <GeometricBackground />
          <Header data={resumeData.personal} />
          <About
            summary={resumeData.summary}
            summary2={resumeData.summary2}
            summary3={resumeData.summary3}
          />
          <Skills skills={resumeData.technicalSkills} />
          <Experience experiences={resumeData.workExperience} />
          <Projects projects={resumeData.projects} />
          <Education
            education={resumeData.education}
            languages={resumeData.languages}
            visa={resumeData.visa}
          />
          <Contact data={resumeData.personal} />
        </div>
      )}
    </div>
  );
}
