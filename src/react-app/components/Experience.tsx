import { useEffect, useRef, memo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Building, Zap } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveCard from "./3d/InteractiveCard"; // normal import

gsap.registerPlugin(ScrollTrigger);

interface SingleExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experiences: SingleExperience[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Render only on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const items =
      timelineRef.current?.querySelectorAll<HTMLDivElement>(".experience-item");
    const timelineLine =
      timelineRef.current?.querySelector<HTMLDivElement>(".timeline-line");

    if (!items || !timelineLine) return;

    gsap.set(items, { opacity: 0, x: -50 });
    gsap.set(timelineLine, { height: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(timelineLine, {
      height: "100%",
      duration: 1.2,
      ease: "power3.out",
    }).to(
      items,
      {
        opacity: 1,
        x: 0,
        stagger: 0.25,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isClient]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Work Experience
        </motion.h2>

        <div ref={timelineRef} className="relative">
          <div className="timeline-line absolute left-6 md:left-8 top-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/20" />
          {experiences.map((exp, index) =>
            isClient ? (
              <MemoizedExperienceItem key={index} exp={exp} index={index} />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  exp: SingleExperience;
  index: number;
}

const ExperienceItem = ({ exp, index }: ExperienceItemProps) => (
  <div className="experience-item relative pl-16 md:pl-20 pb-12 last:pb-0">
    <motion.div
      className="absolute left-4 md:left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-400/30"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
      />
      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
        <Zap className="w-3 h-3 text-blue-500" />
      </div>
    </motion.div>

    <InteractiveCard delay={index * 0.15}>
      <div className="p-6 md:p-8 relative">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">{exp.title}</h3>
            <div className="flex items-center gap-4 text-gray-300 mb-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <Building className="w-4 h-4 text-cyan-400" />
                <span className="font-medium text-sm">{exp.company}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full">
                <Calendar className="w-3 h-3 text-purple-400" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full">
                <MapPin className="w-3 h-3 text-green-400" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed relative z-10">
          {exp.description}
        </p>
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"></div>
      </div>
    </InteractiveCard>
  </div>
);

const MemoizedExperienceItem = memo(ExperienceItem);

export default Experience;
