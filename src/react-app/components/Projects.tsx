import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Calendar, Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveCard from '@/react-app/components/3d/InteractiveCard';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  projects: Array<{
    name: string;
    period: string;
    description: string;
    link?: string;
  }>;
}

export default function Projects({ projects }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visible state
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    const projectCards = document.querySelectorAll('.project-card');
    gsap.set(projectCards, { opacity: 1, y: 0 });

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
      .from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
      }, "-=0.4");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          ref={titleRef} 
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            Featured Projects
            <Code className="w-8 h-8 text-purple-400" />
          </span>
        </motion.h2>
        
        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <InteractiveCard key={index} delay={index * 0.2}>
              <div className="p-6 relative group">
                {/* Project header with enhanced styling */}
                <div className="flex items-start justify-between mb-6">
                  <motion.h3 
                    className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {project.name}
                  </motion.h3>
                  
                  {project.link && (
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 15,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
                
                {/* Enhanced date badge */}
                <motion.div 
                  className="flex items-center gap-2 text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{project.period}</span>
                  </div>
                </motion.div>
                
                {/* Enhanced description */}
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  {project.description}
                </motion.p>
                
                {/* Enhanced CTA button */}
                {project.link && (
                  <motion.div 
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg relative overflow-hidden group"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">View Project</span>
                      <ExternalLink className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.div>
                )}
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-16 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
