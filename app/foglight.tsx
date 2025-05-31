import dynamic from 'next/dynamic';

// components/CityBackdrop.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) lightRef.current.intensity = pulse * 2;
  });
  return <pointLight ref={lightRef} position={[0, 5, 5]} color="#ffcc66" />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <group ref={group}>
      {[...Array(30)].map((_, i) => {
        const width = Math.random() * 1 + 0.5;
        const height = Math.random() * 5 + 1;
        const depth = Math.random() * 1 + 0.5;
        const x = Math.random() * 40 - 20;
        const z = Math.random() * 40 - 20;
        return (
          <mesh key={i} position={[x, height / 2, z]}>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color="#1e293b" emissive="#334155" emissiveIntensity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const cloudTexture = useTexture("/clouds/cloud-layer.png");

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 5;
    }
  });

  return (
    <mesh ref={cloudRef} position={[0, 10, -10]}>
      <planeGeometry args={[60, 20]} />
      <meshBasicMaterial map={cloudTexture} transparent opacity={0.4} depthWrite={false} />
    </mesh>
  );
};

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
      <fog attach="fog" args={["#0f172a", 10, 50]} />
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={0.4} />
      <PulsingLight />
      <Buildings />
      <Clouds />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

const NoSSR = dynamic(() => Promise.resolve(CityBackdrop), { ssr: false });

export default NoSSR;;
