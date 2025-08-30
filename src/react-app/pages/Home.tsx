import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '@/react-app/components/Header';
import About from '@/react-app/components/About';
import Skills from '@/react-app/components/Skills';
import Experience from '@/react-app/components/Experience';
import Projects from '@/react-app/components/Projects';
import Education from '@/react-app/components/Education';
import Contact from '@/react-app/components/Contact';
import GeometricBackground from '@/react-app/components/3d/GeometricBackground';

import { resumeData } from '@/shared/data';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Smooth scrolling configuration
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger when component mounts
    ScrollTrigger.refresh();
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="font-sans relative">
      {/* Global 3D Background */}
      <GeometricBackground />
      
      <Header data={resumeData.personal} />
      <About summary={resumeData.summary} />
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
  );
}
