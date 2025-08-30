import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingParticles from '@/react-app/components/3d/FloatingParticles';
import AnimatedSphere from '@/react-app/components/3d/AnimatedSphere';

interface HeaderProps {
  data: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export default function Header({ data }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure elements are rendered before animating
    const timer = setTimeout(() => {
      const tl = gsap.timeline();
      
      // Set initial visible state to prevent blank screen
      if (nameRef.current) {
        gsap.set(nameRef.current, { opacity: 1, y: 0 });
      }
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 1, y: 0 });
      }
      if (contactRef.current?.children) {
        gsap.set(contactRef.current.children, { opacity: 1, x: 0 });
      }
      
      tl.from(nameRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(contactRef.current?.children || [], {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.3");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header ref={headerRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* 3D Floating Particles */}
      <FloatingParticles />
      
      {/* 3D Animated Spheres */}
      <div className="absolute top-20 right-20 w-64 h-64 opacity-30">
        <AnimatedSphere color="#3b82f6" />
      </div>
      <div className="absolute bottom-20 left-20 w-48 h-48 opacity-25">
        <AnimatedSphere color="#8b5cf6" />
      </div>
      
      {/* Enhanced gradient orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <motion.h1 
          ref={nameRef} 
          className="text-6xl md:text-8xl font-bold text-white mb-6 font-mono relative"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="relative inline-block">
            {data.name.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#3b82f6",
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-[-10px] left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </motion.h1>
        
        <motion.p 
          ref={titleRef} 
          className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {data.title}
        </motion.p>
        
        <motion.div 
          ref={contactRef} 
          className="flex flex-wrap justify-center gap-6 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          {[
            { href: `mailto:${data.email}`, icon: Mail, text: data.email, color: "hover:text-blue-400" },
            { href: `tel:${data.phone}`, icon: Phone, text: data.phone, color: "hover:text-green-400" },
            { href: `https://linkedin.com/in/${data.linkedin}`, icon: Linkedin, text: data.linkedin, color: "hover:text-blue-500", external: true },
            { href: `https://github.com/${data.github}`, icon: Github, text: data.github, color: "hover:text-gray-400", external: true }
          ].map((contact, index) => (
            <motion.a 
              key={index}
              href={contact.href} 
              {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
              className={`flex items-center gap-2 ${contact.color} transition-all duration-300 group relative`}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                }}
              >
                <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.div>
              <span className="font-mono text-sm">{contact.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div 
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-gradient-to-b from-cyan-400 to-blue-500 rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
              animate={{ 
                y: [0, 15, 0],
                opacity: [1, 0, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-400/20 to-blue-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
