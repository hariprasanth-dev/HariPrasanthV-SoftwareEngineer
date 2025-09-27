import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Sphere,
  MeshDistortMaterial,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import * as THREE from 'three';

function AsteroidSphere({ color = "#475569" }: { color?: string }) {
  const sphereRef = useRef<THREE.Mesh>(null);

  // Animate rotation & floating
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.elapsedTime * 0.15;
      sphereRef.current.rotation.y = clock.elapsedTime * 0.25;
      sphereRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 24, 24]} scale={1.4}>
      <MeshDistortMaterial
        color={color}
        distort={0.4}   // more distortion = rocky look
        speed={0.5}     // slow, irregular movement
        roughness={1}   // matte finish
        metalness={0}   // no shine
        flatShading     // faceted look like stone
      />
    </Sphere>
  );
}

interface AnimatedSphereProps {
  color?: string;
  className?: string;
}

export default function AnimatedSphere({
  color = "#475569",
  className = "",
}: AnimatedSphereProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        {/* Mild ambient lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} />
        <pointLight position={[-3, -2, 3]} intensity={0.4} />

        {/* Neutral environment (soft fill, not shiny) */}
        <Environment preset="warehouse" />

        {/* Asteroid-like sphere */}
        <AsteroidSphere color={color} />

        {/* Very subtle shadow */}
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.15}
          scale={6}
          blur={3}
          far={4}
        />
      </Canvas>
    </div>
  );
}
