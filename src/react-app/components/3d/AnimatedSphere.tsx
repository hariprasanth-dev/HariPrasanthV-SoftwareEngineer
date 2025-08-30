import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DistortedSphere({ color = "#4f46e5" }: { color?: string }) {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2;
      sphereRef.current.rotation.y = clock.elapsedTime * 0.5;
      sphereRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 32]} scale={1.5}>
      <MeshDistortMaterial
        color={color}
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
}

interface AnimatedSphereProps {
  color?: string;
  className?: string;
}

export default function AnimatedSphere({ color, className = "" }: AnimatedSphereProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <DistortedSphere color={color} />
      </Canvas>
    </div>
  );
}
