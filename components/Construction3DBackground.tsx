// components/SceneCanvas.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

export default function SceneCanvas() {
  return (
    <Canvas camera={{ position: [0, 5, 20], fov: 65 }}>
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
        <Grid />
      </Suspense>
    </Canvas>
  );
}

function Grid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial wireframe color="#00ffff" />
    </mesh>
  );
}
