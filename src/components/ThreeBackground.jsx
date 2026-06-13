import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const ScrollCamera = () => {
  const { camera } = useThree();
  
  useFrame(() => {
    // Parallax effect: Move camera down as user scrolls
    const scrollY = window.scrollY;
    // Slow down the parallax heavily for subtlety
    camera.position.y = -(scrollY * 0.002);
    // Move slightly into the Z axis for depth shift
    camera.position.z = 5 + (scrollY * 0.001);
  });
  
  return null;
};

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY;
    
    // Base animation
    meshRef.current.position.y = Math.sin(t / 2) * 0.2;
    meshRef.current.rotation.x = Math.sin(t / 4) * 0.5 + (scrollY * 0.001);
    meshRef.current.rotation.y = Math.sin(t / 2) * 0.5 + (scrollY * 0.002);
    
    // Make the sphere "react" to scroll momentum by scaling slightly
    const scale = 1.5 + Math.min(scrollY * 0.0005, 0.5);
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]} scale={1.5}>
      <MeshDistortMaterial
        color="#F4F4F0"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.1}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

const ThreeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, opacity: 0.8, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#FFDAB9" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#87CEEB" />
        <ScrollCamera />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
