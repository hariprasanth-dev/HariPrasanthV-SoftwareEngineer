import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, Send, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveCard from '@/react-app/components/3d/InteractiveCard';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  data: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visible state
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }
    const contactItems = document.querySelectorAll('.contact-item');
    gsap.set(contactItems, { opacity: 1, y: 0 });

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
      .from(".contact-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.4");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "hover:shadow-cyan-500/25"
    },
    {
      icon: Phone,
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      hoverColor: "hover:shadow-green-500/25"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: data.linkedin,
      href: `https://linkedin.com/in/${data.linkedin}`,
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-600/20 to-indigo-600/20",
      hoverColor: "hover:shadow-blue-500/25"
    },
    {
      icon: Github,
      label: "GitHub",
      value: data.github,
      href: `https://github.com/${data.github}`,
      color: "from-gray-600 to-slate-600",
      bgColor: "from-gray-600/20 to-slate-600/20",
      hoverColor: "hover:shadow-gray-500/25"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
            x: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          ref={titleRef} 
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <MessageCircle className="w-10 h-10 text-cyan-400" />
            Let's Connect
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology.
        </motion.p>
        
        <div ref={contentRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <InteractiveCard key={method.label} delay={index * 0.1}>
                <motion.a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`contact-item block min-h-[204px] p-6 relative group transition-all duration-300 ${method.hoverColor}`}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon with enhanced styling */}
                  <motion.div 
                    className={`bg-gradient-to-br ${method.bgColor} backdrop-blur-sm p-4 rounded-xl mb-4 inline-block border border-white/10 relative overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-6 h-6 text-white relative z-10" />
                    
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 rounded-xl`}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-gray-400 text-sm break-all group-hover:text-gray-300 transition-colors duration-300">
                    {method.value}
                  </p>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0"
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              </InteractiveCard>
            );
          })}
        </div>
        
        {/* Enhanced CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={`mailto:${data.email}?subject=Let's Connect&body=Hi ${data.name.split(' ')[0]}, I'd love to connect with you!`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Send Message</span>
            
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Sparkle effect */}
            <motion.div
              className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Enhanced Footer */}
      <motion.div 
        className="text-center mt-16 pt-8 border-t border-white/20 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-gray-400 flex items-center justify-center gap-2">
          <span>© 2025 {data.name}. Built with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>using React.js, GSAP & Three.js</span>
        </p>
      </motion.div>
    </section>
  );
}
