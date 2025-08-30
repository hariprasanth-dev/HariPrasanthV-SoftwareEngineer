import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const box1Ref = useRef<THREE.Mesh>(null);
  const box2Ref = useRef<THREE.Mesh>(null);
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.1;
    }
    
    if (box1Ref.current) {
      box1Ref.current.rotation.x = clock.elapsedTime * 0.3;
      box1Ref.current.rotation.z = clock.elapsedTime * 0.2;
    }
    
    if (box2Ref.current) {
      box2Ref.current.rotation.y = clock.elapsedTime * 0.4;
      box2Ref.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.5;
    }
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.x = Math.sin(clock.elapsedTime * 0.6) * 2;
      sphere1Ref.current.position.y = Math.cos(clock.elapsedTime * 0.6) * 1;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = clock.elapsedTime * 0.5;
      torusRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Box 1 - Blue gradient */}
      <Box ref={box1Ref} args={[1, 1, 1]} position={[-3, 2, -2]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      
      {/* Box 2 - Purple gradient */}
      <Box ref={box2Ref} args={[0.8, 0.8, 0.8]} position={[3, -1, -1]}>
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>
      
      {/* Sphere - Cyan */}
      <Sphere ref={sphere1Ref} args={[0.6, 32, 32]} position={[0, -2, -3]}>
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.7}
          metalness={0.7}
          roughness={0.3}
        />
      </Sphere>
      
      {/* Torus - Pink */}
      <Torus ref={torusRef} args={[1, 0.3, 16, 100]} position={[2, 3, -4]}>
        <meshStandardMaterial
          color="#ec4899"
          transparent
          opacity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
    </group>
  );
}

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#64ffda" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#3b82f6" />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
