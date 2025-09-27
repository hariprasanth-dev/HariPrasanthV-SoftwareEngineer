import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { motion } from "framer-motion";

// ---------------- STAR FIELD ----------------
function StarsField({ fly }: { fly: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const speed = useRef(0.02);

  useEffect(() => {
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }
  }, []);

  useEffect(() => {
    if (fly) {
      gsap.to(speed, {
        current: 2, // warp speed
        duration: 3,
        ease: "power2.in",
      });
    }
  }, [fly]);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += speed.current;

        if (positions[i + 2] > 5) {
          positions[i] = (Math.random() - 0.5) * 200;
          positions[i + 1] = (Math.random() - 0.5) * 200;
          positions[i + 2] = -200;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.2}
        color="#ffffff"
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

interface HeaderProps {
  data: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  onFinish: () => void;
}

// ---------------- INTRO PAGE ----------------
const IntroPage = ({ onFinish, data }: HeaderProps) => {
  const [fly, setFly] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Delay onFinish until fade-out completes (1s)
  useEffect(() => {
    if (fly) {
      const timer = setTimeout(() => {
        onFinish();
      }, 4000); // fade-out duration
      return () => clearTimeout(timer);
    }
  }, [fly, onFinish]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} />
        <StarsField fly={fly} />
      </Canvas>

      {/* Background glowing blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-blue-500/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Centered Content with smooth fade-out */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-6 z-10"
        animate={{ opacity: fly ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* 1. Name */}
        <motion.h1
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-8 relative font-mono leading-tight cursor-default"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="relative inline-block">
            {data?.name?.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: charIndex * 0.05 + wordIndex * 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#3b82f6",
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Add explicit space after each word */}
                {wordIndex < data.name.split(" ").length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </span>

          {/* Animated underline */}
          <motion.div
            className="absolute bottom-[-16PX] left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </motion.h1>

        {/* 2. Title */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          {`I'm a ${data?.title} building cool web experiences`}
        </motion.h2>

        {/* 3. Welcome text */}
        <motion.p
          className="text-lg sm:text-xl text-gray-400 cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          Welcome to my portfolio. Explore my projects and skills!
        </motion.p>

        {/* 4. Click Me button */}
        <motion.button
          onClick={() => setFly(true)}
          className="mt-6 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          Enter Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroPage;
