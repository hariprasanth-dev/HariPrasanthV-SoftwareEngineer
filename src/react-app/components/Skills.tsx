import { useRef } from "react";
import { motion } from "framer-motion";
import InteractiveCard from "@/react-app/components/3d/InteractiveCard";

interface SkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    cloudDevOps: string[];
    testingTools: string[];
    coreCompetencies: string[];
  };
}

const Skills = ({ skills }: SkillsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    { name: "Frontend", skills: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { name: "Backend", skills: skills.backend, color: "from-green-500 to-emerald-500" },
    { name: "Databases", skills: skills.databases, color: "from-orange-500 to-red-500" },
    { name: "Cloud & DevOps", skills: skills.cloudDevOps, color: "from-purple-500 to-pink-500" },
    { name: "Testing & Tools", skills: skills.testingTools, color: "from-indigo-500 to-blue-500" },
    { name: "Core Competencies", skills: skills.coreCompetencies, color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <InteractiveCard key={category.name} delay={index * 0.1}>
              <div className="p-6 relative">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <h3
                    className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`skill-item px-3 py-1.5 text-sm bg-gradient-to-r ${category.color} text-white rounded-full font-medium shadow-lg relative overflow-hidden cursor-pointer`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + skillIndex * 0.05,
                        ease: "backOut",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}

                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-0"
                        style={{ background: "linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))" }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  ))}
                </div>

                {/* Progress bar */}
                <motion.div
                  className={`mt-4 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-30`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
