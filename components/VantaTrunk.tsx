import dynamic from 'next/dynamic';

"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
//import TRUNK from "@/lib/vanta/trunk";
//import p5 from "p5"; // Make sure p5 is globally available

const VantaTrunk = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
/*
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        TRUNK({
          el: vantaRef.current,
//        p5, // pass explicitly
          THREE,
          color: 0x00ffff,
          backgroundColor: 0x000000,
          spacing: 12,
          chaos: 2.5,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full -z-50 pointer-events-none"
    />
  );
};
*/
const NoSSR = dynamic(() => Promise.resolve(VantaTrunk), { ssr: false });

export default NoSSR;;
