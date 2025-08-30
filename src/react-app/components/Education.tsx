import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin, Award, Globe, BookOpen, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveCard from '@/react-app/components/3d/InteractiveCard';

gsap.registerPlugin(ScrollTrigger);

interface EducationProps {
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
    note: string;
  };
  languages: Array<{
    name: string;
    level: string;
    note?: string;
  }>;
  visa: string;
}

export default function Education({ education, languages, visa }: EducationProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visible state
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    const educationCards = document.querySelectorAll('.education-card');
    gsap.set(educationCards, { opacity: 1, y: 0 });

    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".education-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-16 w-64 h-64 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-16 w-48 h-48 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          ref={titleRef} 
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3 flex-wrap">
            <BookOpen className="w-8 h-8 text-green-400" />
            Education & Languages
            <Globe className="w-8 h-8 text-purple-400" />
          </span>
        </motion.h2>
        
        <div ref={contentRef} className="space-y-8">
          {/* Enhanced Education Card */}
          <InteractiveCard className="education-card" delay={0}>
            <div className="p-6 md:p-8 relative">
              {/* Animated top border */}
              <motion.div 
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              
              <div className="flex items-start gap-6 mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-xl shadow-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {education.degree}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-cyan-400 font-medium mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {education.institution}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 text-gray-300 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{education.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{education.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold">CGPA: {education.cgpa}</span>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-gray-400 italic bg-white/5 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {education.note}
                  </motion.p>
                </div>
              </div>
            </div>
          </InteractiveCard>
          
          {/* Enhanced Languages Card */}
          <InteractiveCard className="education-card" delay={0.2}>
            <div className="p-6 md:p-8 relative">
              {/* Animated top border */}
              <motion.div 
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Languages className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Languages</h3>
              </motion.div>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={lang.name} 
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 relative group"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + (index * 0.1),
                      ease: "backOut"
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h4 className="font-semibold text-white mb-2 text-lg">{lang.name}</h4>
                    <p className="text-sm text-cyan-400 font-medium">{lang.level}</p>
                    {lang.note && (
                      <p className="text-xs text-gray-400 mt-2 italic bg-white/5 p-2 rounded">
                        {lang.note}
                      </p>
                    )}
                    
                    {/* Decorative flag-like indicator */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced visa section */}
              <motion.div 
                className="border-t border-white/20 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <h4 className="font-semibold text-white text-lg">Visa & Work Authorization</h4>
                </div>
                <p className="text-gray-300 bg-white/5 p-4 rounded-lg border border-white/10">
                  {visa}
                </p>
              </motion.div>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
}
