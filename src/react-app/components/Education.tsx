import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, Globe, BookOpen, Languages } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveCard from "@/react-app/components/3d/InteractiveCard";
import FloatingParticles from "./3d/FloatingParticles";

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

export default function Education({ education, languages }: EducationProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-8 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden"
    >
      <FloatingParticles />
      {/* Lightweight animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-16 w-56 h-56 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-16 w-40 h-40 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3 flex-wrap">
            <BookOpen className="w-8 h-8 text-green-400" />
            Education & Languages
            <Globe className="w-8 h-8 text-purple-400" />
          </span>
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Education Card */}
          <InteractiveCard className="education-card">
            <motion.div
              className="p-6 md:p-8 relative"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              <div className="flex items-start gap-6 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-xl shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-cyan-400 font-medium mb-4">{education.institution}</p>

                  <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 text-gray-300 mb-4">
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
                  </div>

                  <p className="text-sm text-gray-400 italic bg-white/5 p-3 rounded-lg">
                    {education.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </InteractiveCard>

          {/* Languages Card */}
          <InteractiveCard className="education-card">
            <motion.div
              className="p-6 md:p-8 relative"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              <div className="flex items-center gap-3 mb-8">
                <Languages className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Languages</h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 relative group"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    <h4 className="font-semibold text-white mb-2 text-lg">{lang.name}</h4>
                    <p className="text-sm text-cyan-400 font-medium">{lang.level}</p>
                    {lang.note && (
                      <p className="text-xs text-gray-400 mt-2 italic bg-white/5 p-2 rounded">
                        {lang.note}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </InteractiveCard>
        </motion.div>
      </div>
    </section>
  );
}
