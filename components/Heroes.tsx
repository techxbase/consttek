import dynamic from 'next/dynamic';

/* // components/Heroes.tsx
"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== "undefined" && window.innerWidth < 760
      ? smallConstructionVideo
      : constructionVideo
  );

  const handleVideoSrcSet = () => {
    const isMobile = window.innerWidth < 760;
    setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -30, delay: 2 });
  }, []);

  return (
    <section className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="h-[85vh] w-full flex flex-col justify-center items-center">
        <p
          id="hero"
          className="opacity-0 text-white text-5xl md:text-7xl font-extrabold tracking-wide text-center"
        >
          Construction Validator
        </p>
        <div className="mt-10 w-10/12 md:w-8/12">
          <video
            className="pointer-events-none w-full"
            autoPlay
            muted
            playsInline
            loop
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 mt-10"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full text-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-white text-sm">Reliable testing. Seamless delivery.</p>
      </div>
    </section>
  );
};

const NoSSR = dynamic(() => Promise.resolve(Heroes), { ssr: false });

export default NoSSR;;
 */
 
 // components/Heroes.tsx
/* "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 1.8, duration: 1 });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
      <div className="flex flex-col justify-center items-center h-[85vh] text-center">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading"
        >
          Construction Validator
        </h1>

        <div className="mt-10 w-11/12 md:w-7/12 rounded-2xl overflow-hidden shadow-lg">
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-8"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>
    </section>
  );
};

export default Heroes;
 */
 
 //-------
 
 // components/Heroes.tsx
/* "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#loader", { opacity: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1.2, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1.2 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Loader overlay }
      <div
        id="loader"
        className="absolute inset-0 z-40 bg-[#0f172a] flex items-center justify-center transition-opacity duration-1000"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight animate-pulse">
          Loading site...
        </h1>
      </div>

      <div className="z-10 flex flex-col justify-center items-center h-[85vh] text-center relative">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction Validator
        </h1>

        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-11/12 md:w-7/12 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/5 border border-white/10 transition-transform duration-700 animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover brightness-[0.95] contrast-110 saturate-150"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">
          Reliable testing. Seamless delivery.
        </p>
      </div>

      {/* Subtle lighting gradients }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10"></div>

      {/* Floating animation keyframes }
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 
/*  
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1 });
    gsap.to("#hero-icon", {
      opacity: 1,
      y: 0,
      delay: 2.2,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.8, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Hero title }
      <div className="z-10 flex flex-col justify-center items-center h-[85vh] text-center relative">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction PM
        </h1>

        {/* Video }
        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-11/12 md:w-7/12 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-black border border-white/10 relative animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover mix-blend-lighten brightness-[0.6] contrast-125 saturate-150"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark top overlay to hide sky tones }
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-transparent pointer-events-none" />
        </div>

        {/* Floating Icon }
        <div
          id="hero-icon"
          className="opacity-0 translate-y-10 mt-[-1.5rem] z-30 transition duration-700"
        >
          <div className="bg-purple-700 text-white text-4xl p-4 rounded-full shadow-lg animate-bounce-slow">
            🏗️
          </div>
        </div>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Gradient backdrop lights }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10" />

      {/* Floating animation keyframes }
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 //---------
 /* 
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.8, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <div className="flex flex-col justify-center items-center h-[85vh] text-center relative">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction PM
        </h1>

        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-11/12 md:w-7/12 overflow-hidden relative animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover mix-blend-lighten brightness-[0.6] contrast-125 saturate-150"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark gradient to mask sky }
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-transparent pointer-events-none" />

          {/* Crane Emoji Floating Down }
          <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] animate-crane z-30 text-4xl">
            🏗️
          </div>
        </div>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Background Gradients }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10" />

      {/* Custom Animation }
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes crane {
          0% { transform: translate(-50%, -200%); opacity: 0; }
          10% { opacity: 1; }
          30% { transform: translate(-50%, 0%); }
          90% { transform: translate(-50%, 0%); opacity: 1; }
          100% { transform: translate(-50%, -200%); opacity: 0; }
        }
        .animate-crane {
          animation: crane 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 //-------
 /* 
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.8, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <div className="flex flex-col justify-center items-center h-[85vh] text-center relative">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction Validator
        </h1>

        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-11/12 md:w-7/12 overflow-hidden relative animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover mix-blend-lighten brightness-[0.6] contrast-125 saturate-150"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark gradient to mask sky }
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-transparent pointer-events-none" />

          {/* Crane Emoji Floating Down }
          <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] animate-crane z-30 text-4xl">
            🏗️
          </div>
        </div>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Background Gradients }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10" />

      {/* Custom Animation }
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes crane {
          0% { transform: translate(-50%, -200%); opacity: 0; }
          10% { opacity: 1; }
          30% { transform: translate(-50%, 0%); }
          90% { transform: translate(-50%, 0%); opacity: 1; }
          100% { transform: translate(-50%, -200%); opacity: 0; }
        }
        .animate-crane {
          animation: crane 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 //-----
 /* 
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.8, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Crane Emoji Floating Across Sky }
      <div className="absolute z-30 text-5xl animate-crane-flight pointer-events-none">
        🏗️
      </div>

      <div className="flex flex-col justify-center items-center h-[85vh] text-center relative z-10">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction Validator
        </h1>

        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-full md:w-10/12 overflow-hidden relative animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[80vh] object-cover absolute inset-0 mix-blend-lighten brightness-[0.55] contrast-150 saturate-150"
            style={{ border: "none", outline: "none" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Background Gradients }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10" />

      {/* Animations }
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes crane-flight {
          0% {
            transform: translate(-60vw, 20vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 10vh) rotate(15deg);
          }
          90% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane-flight {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane-flight 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 //------
 /* 
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.8, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Crane Emoji Floating Across Sky }
      <div className="absolute z-30 text-5xl animate-crane-flight pointer-events-none">
        🏗️
      </div>

      <div className="flex flex-col justify-center items-center h-[85vh] text-center relative z-10">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction Validator
        </h1>

        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-11/12 md:w-8/12 overflow-hidden relative rounded-xl shadow-xl animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-[0.55] contrast-125 saturate-150 rounded-xl"
            style={{ border: "none", outline: "none" }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional gradient overlay }
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Background Gradients }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10" />

      {/* Animations }
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes crane-flight {
          0% {
            transform: translate(-60vw, 20vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 10vh) rotate(15deg);
          }
          90% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane-flight {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane-flight 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes; */


//--------
/* 
"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-video", { opacity: 1, y: 0, delay: 1.5, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.8, duration: 1 });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Moving Clouds }
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[200%] h-[40vh] top-10 bg-[url('/clouds/clouds.png')] bg-repeat-x animate-clouds opacity-10 blur-2xl" />
      </div>

      {/* Crane Emoji Floating Across Sky }
      <div className="absolute z-30 text-5xl animate-crane-flight pointer-events-none">
        🏗️
      </div>

      <div className="flex flex-col justify-center items-center h-[85vh] text-center relative z-10">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-4xl md:text-6xl font-bold tracking-tight heading z-20"
        >
          Construction Validator
        </h1>

        <div
          id="hero-video"
          className="opacity-0 translate-y-10 mt-10 w-full md:w-10/12 relative animate-float"
        >
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[80vh] object-cover brightness-[0.5] contrast-125 saturate-150"
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "#0f172a",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 flex flex-col items-center mt-10 z-20 relative"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Background Gradients }
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-900 blur-3xl opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500 blur-3xl opacity-10 rounded-full -z-10" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes crane-flight {
          0% {
            transform: translate(-60vw, 20vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 10vh) rotate(15deg);
          }
          90% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane-flight {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane-flight 20s ease-in-out infinite;
        }

        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 120s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes; */

//-----
/* 

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.5, duration: 1 });
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Moving Clouds for Depth }
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[300%] h-full top-0 bg-[url('/clouds/clouds.png')] bg-repeat-x opacity-10 blur-3xl animate-clouds" />
      </div>

      {/* Crane Emoji Floating 3D }
      <div className="absolute text-6xl animate-crane-3d pointer-events-none z-20">
        🏗️
      </div>

      {/* Title }
      <div className="relative z-30 h-full w-full flex flex-col justify-center items-center text-center">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-[40px] md:text-6xl font-bold tracking-tight z-30"
        >
          Construction Validator
        </h1>

        {/* Seamless Fullscreen Video }
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10 brightness-[0.4] contrast-[1.2] saturate-150"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 absolute bottom-10 w-full flex flex-col items-center z-30"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">
          Reliable testing. Seamless delivery.
        </p>
      </div>

      {/* Animations }
      <style>{`
        @keyframes crane-3d {
          0% {
            transform: translate(-60vw, 15vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 10vh) rotate(10deg);
          }
          90% {
            transform: translate(60vw, 15vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 15vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane-3d {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane-3d 20s ease-in-out infinite;
        }

        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 90s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 //------
/*  "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      y: 0,
      scale: 1,
      delay: 1,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to("#hero-cta", {
      opacity: 1,
      y: 0,
      delay: 2.5,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to("#hero-video", {
      scale: 1,
      opacity: 1,
      delay: 1.3,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Cloud Layer }
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[300%] h-full top-0 bg-[url('/clouds/clouds.png')] bg-repeat-x opacity-10 blur-3xl animate-clouds" />
      </div>

      {/* Crane Emoji Floating }
      <div className="absolute text-6xl z-20 pointer-events-none animate-crane-3d">
        🏗️
      </div>

      {/* Hero Content }
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 scale-90 text-[40px] md:text-6xl font-extrabold tracking-tight z-30 drop-shadow-[0_3px_20px_rgba(255,255,255,0.2)]"
        >
          Construction Validator
        </h1>

        <video
          id="hero-video"
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-110 transition-all duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 absolute bottom-10 w-full flex flex-col items-center z-30"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">
          Reliable testing. Seamless delivery.
        </p>
      </div>

      {/* Animations }
      <style>{`
        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 90s linear infinite;
        }

        @keyframes crane-3d {
          0% {
            transform: translate(-60vw, 20vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 15vh) rotate(15deg);
          }
          90% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane-3d {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane-3d 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 //------
 
/*  "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      y: 0,
      scale: 1,
      delay: 1,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to("#hero-cta", {
      opacity: 1,
      y: 0,
      delay: 2.5,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to("#hero-video", {
      scale: 1,
      opacity: 1,
      delay: 1.3,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* VIDEO BACKGROUND }
      <video
        id="hero-video"
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 scale-110"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cloud Layer }
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute w-[300%] h-full top-0 bg-[url('/clouds/clouds.png')] bg-repeat-x opacity-10 blur-3xl animate-clouds" />
      </div>

      {/* Crane Emoji }
      <div className="absolute text-6xl z-20 pointer-events-none animate-crane-3d">
        🏗️
      </div>

      {/* Hero Content }
      <div className="relative z-30 h-full w-full flex flex-col justify-center items-center text-center">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 scale-90 text-[40px] md:text-6xl font-extrabold tracking-tight z-30 drop-shadow-[0_3px_20px_rgba(255,255,255,0.2)]"
        >
          Construction Validator
        </h1>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 absolute bottom-10 w-full flex flex-col items-center z-30"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">
          Reliable testing. Seamless delivery.
        </p>
      </div>

      {/* Animations }
      <style>{`
        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 90s linear infinite;
        }

        @keyframes crane-3d {
          0% {
            transform: translate(-60vw, 20vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 15vh) rotate(15deg);
          }
          90% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 20vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane-3d {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane-3d 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 //--------
 /* 
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, delay: 1, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2.5, duration: 1 });
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Background Video }
      <video
        autoPlay
        muted
        loop
        playsInline
        key={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.4] contrast-[1.3] saturate-[1.2] z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Parallax Cloud Layer }
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute w-[300%] h-full top-0 bg-[url('/clouds/clouds.png')] bg-repeat-x animate-clouds opacity-10 blur-3xl" />
      </div>

      {/* Crane Emoji Animation }
      <div className="absolute z-20 text-6xl animate-crane pointer-events-none">
        🏗️
      </div>

      {/* Hero Content }
      <div className="relative z-30 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-[40px] md:text-6xl font-bold tracking-tight drop-shadow-[0_5px_30px_rgba(255,255,255,0.15)]"
        >
          Construction PM
        </h1>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 absolute bottom-10 w-full flex flex-col items-center z-30"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">
          Reliable testing. Seamless delivery.
        </p>
      </div>

      {/* CSS Animations }
      <style>{`
        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 90s linear infinite;
        }

        @keyframes crane {
          0% {
            transform: translate(-60vw, 20vh) scale(1) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          30% {
            transform: translate(-30vw, 15vh) scale(1.1) rotate(10deg);
          }
          50% {
            transform: translate(0vw, 12vh) scale(1.15) rotate(0deg);
          }
          70% {
            transform: translate(30vw, 14vh) scale(1.1) rotate(-10deg);
          }
          90% {
            transform: translate(60vw, 20vh) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-crane {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 //-----
 
 // components/Heroes.tsx


/* "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, scale: 1, delay: 1, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2, duration: 1 });
  }, []);

  return (
    <section id="heroes" className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Parallax Cloud Layer }
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute w-[300%] h-full top-0 bg-[url('/clouds/clouds.png')] bg-repeat-x animate-clouds opacity-10 blur-3xl" />
      </div>

      {/* Video Background }
      <video
        autoPlay
        muted
        loop
        playsInline
        key={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.5] contrast-[1.2] saturate-[1.2]"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content }
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-[40px] md:text-6xl font-extrabold tracking-tight drop-shadow-[0_5px_30px_rgba(255,255,255,0.2)]"
        >
          Construction PM
        </h1>
      </div>

      {/* CTA }
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 absolute bottom-10 w-full flex flex-col items-center z-30"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* Styles }
      <style>{`
        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 90s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
 */
 
 
 "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const constructionVideo = "/videos/construction-site-3.mp4";
const smallConstructionVideo = "/videos/construction-site-development.mp4";

const Heroes = () => {
  const [videoSrc, setVideoSrc] = useState(constructionVideo);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setVideoSrc(isMobile ? smallConstructionVideo : constructionVideo);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, y: 0, scale: 1, delay: 1, duration: 1 });
    gsap.to("#hero-cta", { opacity: 1, y: 0, delay: 2, duration: 1 });
  }, []);

  return (
    <section id="heroes" className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Parallax Cloud Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute w-[300%] h-full top-0 bg-[url('/clouds/clouds.png')] bg-repeat-x animate-clouds opacity-10 blur-3xl" />
      </div>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        key={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.5] contrast-[1.2] saturate-[1.2]"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Crane Emoji Animation */}
      <div className="absolute z-30 text-6xl animate-crane pointer-events-none">
        🏗️
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <h1
          id="hero-title"
          className="opacity-0 translate-y-10 text-[40px] md:text-6xl font-extrabold tracking-tight drop-shadow-[0_5px_30px_rgba(255,255,255,0.2)]"
        >
          Construction PM
        </h1>
      </div>

      {/* CTA */}
      <div
        id="hero-cta"
        className="opacity-0 translate-y-10 absolute bottom-10 w-full flex flex-col items-center z-30"
      >
        <a
          href="#compliance-carousel"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Explore Compliance
        </a>
        <p className="mt-2 text-sm text-gray-300">Reliable testing. Seamless delivery.</p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes clouds {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clouds {
          animation: clouds 90s linear infinite;
        }

        @keyframes crane {
          0% {
            transform: translate(-60vw, 15vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(0vw, 10vh) rotate(10deg);
          }
          90% {
            transform: translate(60vw, 15vh) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translate(60vw, 15vh) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-crane {
          position: absolute;
          top: 10vh;
          left: 0;
          animation: crane 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heroes;
