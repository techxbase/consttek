/* /* // components/CityBackdrop.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) {
      lightRef.current.intensity = pulse * 2;
    }
  });
  return <pointLight ref={lightRef} position={[0, 5, 0]} color="#ffcc66" />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
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

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={0.4} />
      <PulsingLight />
      <Buildings />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default CityBackdrop;
 */
 
 
 
 
 // components/CityBackdrop.tsx
/* "use client";

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
  const cloudTexture = useTexture("/bg.png");
//  const cloudTexture = useTexture("/clouds/cloud-layer.png");

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

export default CityBackdrop;
 
 
  */
/*   
  "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) lightRef.current.intensity = pulse * 1.5;
  });
  return <pointLight ref={lightRef} position={[0, 10, 5]} color="#ffc266" />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {[...Array(50)].map((_, i) => {
        const w = Math.random() * 1.5 + 0.5;
        const h = Math.random() * 7 + 1;
        const d = Math.random() * 1.5 + 0.5;
        const x = Math.random() * 60 - 30;
        const z = Math.random() * 60 - 30;
        return (
          <mesh key={i} position={[x, h / 2, z]}>
            <boxGeometry args={[w, h, d]} />
            <meshStandardMaterial color="#1e293b" emissive="#0f172a" emissiveIntensity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/bg.png");

  //const texture = useTexture("/clouds/cloud-layer.png");

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 10;
    }
  });

  return (
    <mesh ref={cloudRef} position={[0, 12, -20]}>
      <planeGeometry args={[100, 40]} />
      <meshBasicMaterial map={texture} transparent opacity={0.25} depthWrite={false} />
    </mesh>
  );
};

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 10, 25], fov: 45 }}>
      <fog attach="fog" args={["#0f172a", 20, 80]} />
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={0.3} />
      <PulsingLight />
      <Stars radius={100} depth={50} count={3000} factor={4} fade />
      <Buildings />
      <Clouds />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
};

export default CityBackdrop;
 */
 
 /* 
 
 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) lightRef.current.intensity = pulse * 1.5;
  });
  return <pointLight ref={lightRef} position={[0, 20, 10]} color="#ffc266" intensity={2} />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.03) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {[...Array(40)].map((_, i) => {
        const w = Math.random() * 2 + 1;
        const h = Math.random() * 6 + 3;
        const d = Math.random() * 2 + 1;
        const x = Math.random() * 80 - 40;
        const z = Math.random() * 80 - 40;
        return (
          <mesh key={i} position={[x, h / 2, z]}>
            <boxGeometry args={[w, h, d]} />
            <meshPhongMaterial color="#1e293b" emissive="#334155" shininess={30} />
          </mesh>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/clouds/clouds.jpg");

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 10;
    }
  });

  return (
    <mesh ref={cloudRef} position={[0, 18, -30]}>
      <planeGeometry args={[100, 40]} />
      <meshBasicMaterial map={texture} transparent opacity={0.3} />
    </mesh>
  );
};

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 12, 40], fov: 60 }}>
      <fog attach="fog" args={["#0f172a", 30, 100]} />
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={0.5} />
      <PulsingLight />
      <Stars radius={120} depth={40} count={2000} factor={4} fade />
      <Buildings />
      <Clouds />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.25} />
    </Canvas>
  );
};

export default CityBackdrop;
 */
 /* 
 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) lightRef.current.intensity = pulse * 1.5;
  });
  return <pointLight ref={lightRef} position={[0, 30, 10]} color="#ffc266" />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={group}>
      {[...Array(120)].map((_, i) => {
        const w = Math.random() * 1.5 + 0.5;
        const h = Math.random() * 15 + 5;
        const d = Math.random() * 1.5 + 0.5;
        const x = Math.random() * 120 - 60;
        const z = Math.random() * 120 - 60;
        return (
          <mesh key={i} position={[x, h / 2, z]}>
            <boxGeometry args={[w, h, d]} />
            <meshStandardMaterial
              color="#1e293b"
              emissive="#334155"
              emissiveIntensity={0.5}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/clouds/clouds.jpg");

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.08) * 10;
    }
  });

  return (
    <mesh ref={cloudRef} position={[0, 22, -40]}>
      <planeGeometry args={[150, 60]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.35}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 18, 50], fov: 60 }}>
      <fog attach="fog" args={["#0f172a", 40, 120]} />
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={0.4} />
      <PulsingLight />
      <Stars radius={150} depth={50} count={3000} factor={4} fade />
      <Buildings />
      <Clouds />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.25} />
    </Canvas>
  );
};

export default CityBackdrop;
 */
 
 //-----
 /* 
 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) lightRef.current.intensity = pulse * 2;
  });
  return <pointLight ref={lightRef} position={[0, 20, 10]} color="#ffcc66" intensity={2} />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.03) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {[...Array(80)].map((_, i) => {
        const w = Math.random() * 2 + 0.5;
        const h = Math.random() * 12 + 4;
        const d = Math.random() * 2 + 0.5;
        const x = Math.random() * 100 - 50;
        const z = Math.random() * 100 - 50;
        return (
          <mesh key={i} position={[x, h / 2, z]}>
            <boxGeometry args={[w, h, d]} />
            <meshStandardMaterial
              color="#1e293b"
              emissive="#334155"
              emissiveIntensity={0.4}
              metalness={0.3}
              roughness={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/clouds/clouds.jpg"); // fallback working cloud image

  //const texture = useTexture("https://i.ibb.co/2q8VbLt/cloud-layer.png"); // fallback working cloud image

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 10;
    }
  });

  return (
    <mesh ref={cloudRef} position={[0, 25, -50]}>
      <planeGeometry args={[200, 60]} />
      <meshBasicMaterial map={texture} transparent opacity={0.25} depthWrite={false} />
    </mesh>
  );
};

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 20, 80], fov: 50 }}>
      <fog attach="fog" args={["#0f172a", 50, 150]} />
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={0.3} />
      <PulsingLight />
      <Stars radius={200} depth={50} count={3000} factor={4} fade />
      <Buildings />
      <Clouds />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.15} />
    </Canvas>
  );
};

export default CityBackdrop;
 */
 
 
 
 
 //-------
 
 
 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const PulsingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.3 + 1;
    if (lightRef.current) lightRef.current.intensity = pulse * 2;
  });
  return <pointLight ref={lightRef} position={[0, 20, 10]} color="#ffc266" intensity={2} />;
};

const Buildings = () => {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.03) * 0.15;
  });

  return (
    <group ref={group}>
      {[...Array(80)].map((_, i) => {
        const w = Math.random() * 2 + 0.5;
        const h = Math.random() * 12 + 4;
        const d = Math.random() * 2 + 0.5;
        const x = Math.random() * 100 - 50;
        const z = Math.random() * 100 - 50;
        return (
          <mesh key={i} position={[x, h / 2, z]}>
            <boxGeometry args={[w, h, d]} />
            <meshStandardMaterial
              color="#2c3e50"
              emissive="#2f4f4f"
              emissiveIntensity={1.2}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("https://i.ibb.co/ZYW3VTp/cloud-layer.png");

  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 10;
    }
  });

  return (
    <mesh ref={cloudRef} position={[0, 25, -50]}>
      <planeGeometry args={[200, 60]} />
      <meshBasicMaterial map={texture} transparent opacity={0.25} depthWrite={false} />
    </mesh>
  );
};

const CityBackdrop = () => {
  return (
    <Canvas camera={{ position: [0, 15, 60], fov: 50 }}>
      <fog attach="fog" args={["#0f172a", 40, 120]} />
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={1} />
      <PulsingLight />
      <Stars radius={150} depth={40} count={2000} factor={4} fade />
      <Buildings />
      <Clouds />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
    </Canvas>
  );
};

export default CityBackdrop;
