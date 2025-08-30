import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function InteractiveCard({ children, className = "", delay = 0 }: InteractiveCardProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        rotateX: -15,
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        scale: 1
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
      className={`transform-gpu ${className}`}
    >
      <motion.div
        className="relative overflow-hidden"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          transition: { duration: 0.3 }
        }}
        style={{
          background: "linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))",
          backdropFilter: "blur(20px)",
          borderRadius: "16px",
          border: "1px solid rgba(148, 163, 184, 0.1)"
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
            backgroundSize: "300% 300%"
          }}
          whileHover={{
            opacity: 0.3,
            backgroundPosition: "0% 50%"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            opacity: 0
          }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.div>
  );
}
