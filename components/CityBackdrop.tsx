/* /* "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";

const Buildings = () => {
  const groupRef = useRef<THREE.Group>(null);

  const buildings = useMemo(() => {
    const items = [];
    for (let i = 0; i < 150; i++) {
      const width = Math.random() * 2 + 1;
      const height = Math.random() * 20 + 5;
      const depth = Math.random() * 2 + 1;
      const x = (Math.random() - 0.5) * 150;
      const z = (Math.random() - 0.5) * 150;
      const y = height / 2;
      items.push({ width, height, depth, position: [x, y, z] });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <mesh key={i} position={b.position}>
          <boxGeometry args={[b.width, b.height, b.depth]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const MovingCamera = () => {
  const ref = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.z = 60 + Math.sin(t * 0.2) * 10;
      ref.current.position.y = 30 + Math.cos(t * 0.1) * 5;
      ref.current.lookAt(0, 0, 0);
    }
  });

  return (
    <perspectiveCamera ref={ref} makeDefault fov={55} position={[0, 30, 60]} />
  );
};

const CityBackdrop = () => {
  return (
    <Canvas>
      <fog attach="fog" args={["#020617", 50, 200]} />
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 100, 100]} intensity={2} color="#facc15" />
      <Environment preset="city" />
      <MovingCamera />
      <Buildings />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
};

export default CityBackdrop;
 */
/* 
 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";

const Buildings = () => {
  const groupRef = useRef<THREE.Group>(null);

  const buildings = useMemo(() => {
    const items = [];
    for (let i = 0; i < 150; i++) {
      const width = Math.random() * 2 + 1;
      const height = Math.random() * 20 + 5;
      const depth = Math.random() * 2 + 1;
      const x = (Math.random() - 0.5) * 150;
      const z = (Math.random() - 0.5) * 150;
      const y = height / 2;
      items.push({ width, height, depth, position: [x, y, z] });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <mesh key={i} position={b.position}>
          <boxGeometry args={[b.width, b.height, b.depth]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const MovingCamera = () => {
  const ref = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.z = 60 + Math.sin(t * 0.2) * 10;
      ref.current.position.y = 30 + Math.cos(t * 0.1) * 5;
      ref.current.lookAt(0, 0, 0);
    }
  });

  return <perspectiveCamera ref={ref} makeDefault fov={55} position={[0, 30, 60]} />;
};

const CityBackdrop = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <fog attach="fog" args={["#020617", 50, 200]} />
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 100, 100]} intensity={2} color="#facc15" />
        {/* Remove Environment to test }
        {/* <Environment preset="city" /> }
        <MovingCamera />
        <Buildings />
        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default CityBackdrop;
 */
 
 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Building = ({ position, height, color }: any) => (
  <mesh position={[position[0], height / 2, position[2]]}>
    <boxGeometry args={[1, height, 1]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const City = () => {
  const buildings = [];
  const colors = ["#444", "#555", "#666", "#777"];
  for (let x = -10; x <= 10; x++) {
    for (let z = -10; z <= 10; z++) {
      const height = Math.random() * 6 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      buildings.push(
        <Building
          key={`${x}-${z}`}
          position={[x * 2, 0, z * 2]}
          height={height}
          color={color}
        />
      );
    }
  }
  return <>{buildings}</>;
};

const CameraRig = () => {
  const ref = useRef<any>();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.1) * 30;
    ref.current.position.z = Math.cos(t * 0.1) * 30;
    ref.current.lookAt(0, 5, 0);
  });
  return <perspectiveCamera ref={ref} fov={50} position={[30, 20, 30]} />;
};

export default function CityBackdrop() {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} />
          <City />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
