import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const ScrollCamera = () => {
  const { camera } = useThree();

  useFrame(() => {
    // Parallax: drift the camera as the user scrolls so the forms move with depth
    const scrollY = window.scrollY;
    camera.position.y = -(scrollY * 0.0022);
    camera.position.z = 6 + (scrollY * 0.0009);
  });

  return null;
};

const Blob = ({ position, color, speed, distort, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY;

    meshRef.current.position.y = position[1] + Math.sin(t / 2.5) * 0.3;
    meshRef.current.position.x = position[0] + Math.cos(t / 3.5) * 0.2;
    meshRef.current.rotation.x = Math.sin(t / 5) * 0.5 + scrollY * 0.0008;
    meshRef.current.rotation.y = Math.sin(t / 3) * 0.5 + scrollY * 0.0015;

    // Gentle breathing scale tied to scroll momentum
    const s = scale + Math.min(scrollY * 0.0003, 0.4);
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.18}
        metalness={0.15}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

const ThreeBackground = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        // Light blur keeps soft, premium edges while letting the glossy
        // 3D forms (and their highlights) read clearly on the bone canvas.
        // Soft blur keeps premium edges; moderate opacity keeps the hero text
        // readable while the glossy 3D forms stay clearly visible behind it.
        filter: 'blur(26px) saturate(1.2)',
        opacity: 0.6,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 10, 6]} intensity={1.3} color="#FFE3C2" />
        <directionalLight position={[-10, -6, -2]} intensity={1.1} color="#7FC8E8" />
        <pointLight position={[2, 2, 4]} intensity={1.4} color="#FF7F50" />
        <ScrollCamera />
        {/* Coral form drifting in the upper-right, framing the hero */}
        <Blob position={[2.7, 1.7, -1]} color="#FF7F50" speed={1.2} distort={0.45} scale={1.7} />
        {/* Cool counter-form anchored lower-left for depth */}
        <Blob position={[-2.7, -1.9, -2]} color="#87CEEB" speed={0.9} distort={0.5} scale={1.5} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
