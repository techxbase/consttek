import dynamic from 'next/dynamic';

/* /* "use client";

import Lottie from "lottie-react";
import botFlying from "../lottie/cb.json";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const sectionPositions = {
  compliance: { x: "10%", y: "30%" },
  timeline: { x: "40%", y: "60%" },
  graph: { x: "70%", y: "20%" },
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  // Spring animations for smooth interpolation
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const x = useTransform(smoothScroll, [0, 0.3, 0.6, 1], ["-10%", "30%", "60%", "80%"]);
  const y = useTransform(smoothScroll, [0, 0.3, 0.6, 1], ["10%", "20%", "40%", "30%"]);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }),
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed z-50 w-24 h-24 pointer-events-none"
    >
      <Lottie animationData={botFlying} loop className="w-full h-full" />
    </motion.div>
  );
};

const NoSSR = dynamic(() => Promise.resolve(AssistantAvatar), { ssr: false });

export default NoSSR;;
 */
 
 
 //------
 
 /* 
 
 
 
 
 //-----
 
 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import botFlying from "../lottie/cb.json";
import { useEffect, useRef, useState } from "react";

// Section messages and optional effects
const sectionMessages: Record<string, string> = {
  hero: "Ready to fly 🛫",
  "compliance-uploads": "Upload your files here! 📂",
  "compliance-carousel": "See compliance stats roll in 📊",
  timeline: "Project milestones incoming ⏳",
  "timeline-phase": "Explore each project phase 🏗️",
  "phase-cards": "Every card tells a story 🧾",
  "compliance-graph": "Visualizing compliance 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-5%"]);

  const [bubble, setBubble] = useState("Welcome! 👋");
  const [activeSection, setActiveSection] = useState("");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            const msg = sectionMessages[id] || "Just hovering...";
            setBubble(msg);

            // Trigger chatbot backend (replace with API call if needed)
            console.log(`Chatbot reacting to section: ${id}`);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => {
              setBubble("");
            }, 5000);
          }
        }),
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed bottom-10 left-10 z-50 w-24 h-24 pointer-events-none"
    >
      <div className="relative">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md animate-fade pointer-events-auto"
            style={{ whiteSpace: "nowrap" }}
          >
            {bubble}
          </div>
        )}
      </div>

      {/* Optional styling animation }
      <style>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 */
 
 
 //------
 /* 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const botFlying = require("/public/lottie/cb.json");

const sectionMessages: Record<string, string> = {
  hero: "Hi there! Ready to guide 🚀",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Analyzing compliance 📊",
  timeline: "Here’s the project timeline ⏳",
  "timeline-phase": "Phase-by-phase breakdown 🏗️",
  "phase-cards": "Strategic insights 📋",
  "compliance-graph": "Graphs loaded! 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "110%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);

  const [bubble, setBubble] = useState("Welcome! 👋");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (sectionId: string) => {
    console.log(`🤖 Chatbot triggered for section: ${sectionId}`);
    // Replace with actual call to backend chatbot
    // fetch("/api/chatbot", { method: "POST", body: JSON.stringify({ sectionId }) })
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Just hovering...";

            setBubble(msg);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }),
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const msg = "👋 Need assistance? Ask me anything!";
    setBubble(msg);
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale }}
      className="fixed bottom-10 left-10 z-50 w-24 h-24 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative pointer-events-auto">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md animate-fade"
            style={{ whiteSpace: "nowrap" }}
          >
            {bubble}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 */
 
 
 //------
 
/*  "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

//const botFlying = require("/public/lottie/cb.json");


const sectionMessages: Record<string, string> = {
  heroes: "Welcome! Ready to guide 🚀",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Analyzing compliance 📊",
  timeline: "Here’s the project timeline ⏳",
  "timeline-phase": "Phase-by-phase breakdown 🏗️",
  "phase-cards": "Strategic insights 📋",
  "compliance-graph": "Graphs loaded! 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "110%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);

  const [bubble, setBubble] = useState("Welcome! 👋");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (sectionId: string) => {
    console.log(`🤖 Chatbot triggered for section: ${sectionId}`);
    // You can POST to your actual backend here
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Just hovering...";
            setBubble(msg);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }),
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const msg = "👋 Need assistance? Ask me anything!";
    setBubble(msg);
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale }}
      className="fixed bottom-10 left-10 z-50 w-24 h-24 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative pointer-events-auto">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md animate-fade"
            style={{ whiteSpace: "nowrap" }}
          >
            {bubble}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 */
 
 
 
 //-------
 
 /* 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome! Ready to guide 🚀",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Analyzing compliance 📊",
  timeline: "Here’s the project timeline ⏳",
  "timeline-phase": "Phase-by-phase breakdown 🏗️",
  "phase-cards": "Strategic insights 📋",
  "compliance-graph": "Graphs loaded! 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();
  const springY = useSpring(scrollYProgress, { stiffness: 50, damping: 30 });
  const springX = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });

  const [bubble, setBubble] = useState("Welcome! 👋");
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  // Dynamic transform for randomized wave motion
  const x = useTransform(springX, [0, 1], ["-20%", "120%"]);
  const y = useTransform(springY, [0, 1], ["20%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-5deg", "5deg"]);

  const triggerChatbotReply = (sectionId: string) => {
    console.log(`🤖 Chatbot triggered for section: ${sectionId}`);
    // Call backend endpoint if needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Just hovering...";
            setBubble(msg);
            triggerChatbotReply(id);

            // Clear and set new timer
            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);

            // Randomize slight offset to simulate new flight path
            const randomX = Math.floor(Math.random() * 30) - 15;
            const randomY = Math.floor(Math.random() * 20) - 10;
            setOffsets({ x: randomX, y: randomY });
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setBubble("👋 Need assistance? Ask me anything!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale: 1,
        translateX: `${offsets.x}px`,
        translateY: `${offsets.y}px`,
      }}
      className="fixed bottom-10 left-10 z-50 w-24 h-24 cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={handleClick}
    >
      <div className="relative pointer-events-auto">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md animate-fade"
            style={{ whiteSpace: "nowrap" }}
          >
            {bubble}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 */
 
 
 //------
 
 
 /* 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

// Section-specific chatbot prompts
const sectionMessages: Record<string, string> = {
  hero: "Landing at launch site 🚀",
  "compliance-uploads": "Scanning uploads 📂",
  "compliance-carousel": "Compliance stats incoming 📊",
  timeline: "Timeline locked ⏳",
  "timeline-phase": "Zooming into each phase 🏗️",
  "phase-cards": "Reviewing strategy cards 🧾",
  "compliance-graph": "Plotting visual trends 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  // Add spring smoothing
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });

  // Generate a looping "whirl" flight path using sine & cosine
  const x = useTransform(scrollSpring, (p) =>
    `${Math.sin(p * Math.PI * 4) * 50 + 50}%`
  );
  const y = useTransform(scrollSpring, (p) =>
    `${Math.cos(p * Math.PI * 2) * 30 + 40}%`
  );
  const rotate = useTransform(scrollSpring, [0, 1], ["0deg", "360deg"]);

  const [bubble, setBubble] = useState("🛫 Launching...");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (sectionId: string) => {
    console.log(`🤖 Assistant responding to: ${sectionId}`);
  };

  // React to section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Flying through...";
            setBubble(msg);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }),
      { threshold: 0.5 }
    );
    document.querySelectorAll("section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setBubble("💬 Ask me anything!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 4000);
  };

  return (
    <motion.div
      style={{ x, y, rotate }}
      className="fixed z-50 w-24 h-24 cursor-pointer pointer-events-auto"
      onClick={handleClick}
    >
      <div className="relative">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md animate-fade"
            style={{ whiteSpace: "nowrap" }}
          >
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
*/
 
 //-----
 /* 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome aboard! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  const x = useTransform(spring, [0, 0.5, 1], ["-20%", "50%", "120%"]);
  const y = useTransform(spring, [0, 0.5, 1], ["10%", "40%", "20%"]);
  const rotate = useTransform(spring, [0, 1], ["-15deg", "15deg"]);

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot reacting to section: ${id}`);
    // Replace with API call here if needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Flying through...";
            setBubble(msg);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }),
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setBubble("💬 Need help?");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, rotate }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade"
          >
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;

  */
  
  
  
  //----
  
/*   
  "use client";

import Lottie from "lottie-react";
import botFlying from "@/public/lottie/cb.json";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sectionMessages: Record<string, string> = {
  hero: "🛫 Lifting off!",
  "compliance-uploads": "Scanning your files... 📂",
  "compliance-carousel": "Reviewing metrics 📊",
  timeline: "Tracking progress ⏳",
  "timeline-phase": "Exploring phases 🏗️",
  "phase-cards": "Each card matters 🧾",
  "compliance-graph": "Generating graphs... 📈",
};

const AssistantAvatar = () => {
  const time = useMotionValue(0);
  const x = useTransform(time, (t) => `${50 + Math.sin(t / 5000) * 80}%`);
  const y = useTransform(time, (t) => `${30 + Math.cos(t / 3000) * 20}%`);
  const rotate = useTransform(time, (t) => `${Math.sin(t / 1000) * 15}deg`);

  const [bubble, setBubble] = useState("👋 Welcome aboard!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (sectionId: string) => {
    console.log(`🤖 Chatbot triggered by: ${sectionId}`);
  };

  // Custom 3D flight animation via continuous time loop
  useAnimationFrame((t) => {
    time.set(t);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Gliding through...";
            setBubble(msg);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 4000);
          }
        }),
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setBubble("💬 Ask me anything!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, rotate }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 pointer-events-auto cursor-pointer"
    >
      <div className="relative">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade whitespace-nowrap">
            {bubble}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 
 */
 
 //-------/ 
/*  
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome aboard! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], ["-30%", "120%", "-30%"]),
    { stiffness: 40, damping: 15 }
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "35%", "20%"]),
    { stiffness: 30, damping: 20 }
  );
  const rotate = useTransform(scrollYProgress, [0, 1], ["-10deg", "15deg"]);

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot triggered for section: ${id}`);
    // Connect with real chatbot endpoint if needed
  };

  /*useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const msg = sectionMessages[id] || "Welcome";
            setBubble(msg);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }),
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
//


  useEffect(() => {
    if (typeof document !== "undefined") {
      const sections = Array.from(document.querySelectorAll("section[id]"));
    }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && sectionMessages[id]) {
            setBubble(sectionMessages[id]);
            triggerChatbotReply(id);

            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }
      }
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  // Fallback: scroll listener to check closest section
  const handleScroll = () => {
    let closestId = "";
    let minDistance = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < minDistance) {
        minDistance = distance;
        closestId = section.id;
      }
    });

    if (closestId && sectionMessages[closestId]) {
      setBubble(sectionMessages[closestId]);
      triggerChatbotReply(closestId);

      if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
      bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
 
	
  const handleClick = () => {
    setBubble("💬 Need help? Ask away!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, rotate }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade"
          >
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;

   
   
 */
 
/*  
 
 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome aboard! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  // Enhanced 3D orbital flight path
  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["-40%", "90%", "0%", "110%", "-40%"]),
    { stiffness: 40, damping: 20 }
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["10%", "50%", "20%", "40%"]),
    { stiffness: 30, damping: 18 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 0.8, 1.2, 0.85, 1]),
    { stiffness: 50, damping: 15 }
  );
  const rotate = useTransform(scrollYProgress, [0, 1], ["-20deg", "25deg"]);

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot triggered for section: ${id}`);
    // Integrate your chatbot call here
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const sections = Array.from(document.querySelectorAll("section[id]"));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && sectionMessages[id]) {
              setBubble(sectionMessages[id]);
              triggerChatbotReply(id);
              if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
              bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
            }
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    // Scroll fallback: detect closest section
    const handleScroll = () => {
      let closestId = "";
      let minDistance = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = section.id;
        }
      });

      if (closestId && sectionMessages[closestId]) {
        setBubble(sectionMessages[closestId]);
        triggerChatbotReply(closestId);
        if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
        bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setBubble("💬 Need help? Ask away!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale, rotate }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade">
            {bubble}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade {
          0%, 100% {
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 */
  
 
/*  "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  // Simulate a 3D orbit loop: start far left + small scale → zoom in center → zoom out right
  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["50%", "40%", "0%", "110%", "-50%"]),
    { stiffness: 40, damping: 20 }
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["-20%", "50%", "0%", "-30%"]),
    { stiffness: 35, damping: 18 }
  );
  const scale = useSpring(
  useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.8, 1.4, 1.2, 1.05, 0.6]),
  { stiffness: 50, damping: 15 }
);
  const rotate = useTransform(scrollYProgress, [0, 1], ["-20deg", "30deg"]);
  const blur = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], ["2px", "0px", "2px"]),
    { stiffness: 40, damping: 10 }
  );

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot triggered for section: ${id}`);
    // Optionally: trigger chatbot backend handler here
  };

/*   useEffect(() => {
    if (typeof document !== "undefined") {
      const sections = Array.from(document.querySelectorAll("section[id]"));
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && sectionMessages[id]) {
              setBubble(sectionMessages[id]);
              triggerChatbotReply(id);
              if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
              bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
            }
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
 
 //
	useEffect(() => {
  let sections: HTMLElement[] = [];

  if (typeof document !== "undefined") {
    sections = Array.from(document.querySelectorAll("section[id]"));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && sectionMessages[id]) {
            setBubble(sectionMessages[id]);
            triggerChatbotReply(id);
            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }
      }
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  // Fallback scroll logic
  const handleScroll = () => {
    let closestId = "";
    let minDistance = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < minDistance) {
        minDistance = distance;
        closestId = section.id;
      }
    });

    if (closestId && sectionMessages[closestId]) {
      setBubble(sectionMessages[closestId]);
      triggerChatbotReply(closestId);
      if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
      bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
		}
	  };

	  window.addEventListener("scroll", handleScroll, { passive: true });

	  return () => {
		observer.disconnect();
		window.removeEventListener("scroll", handleScroll);
	  };
	}, []);


    // Fallback scroll logic
    const handleScroll = () => {
      let closestId = "";
      let minDistance = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = section.id;
        }
      });

      if (closestId && sectionMessages[closestId]) {
        setBubble(sectionMessages[closestId]);
        triggerChatbotReply(closestId);
        if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
        bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setBubble("💬 Need help? Ask away!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale, rotate, filter: blur }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative perspective-1000">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade">
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar; */
 //----
 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["50%", "40%", "0%", "110%", "-50%"]),
    { stiffness: 40, damping: 20 }
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["-20%", "50%", "0%", "-30%"]),
    { stiffness: 35, damping: 18 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.8, 1.4, 1.2, 1.05, 0.6]),
    { stiffness: 50, damping: 15 }
  );
  const rotate = useTransform(scrollYProgress, [0, 1], ["-20deg", "30deg"]);
  const blur = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], ["2px", "0px", "2px"]),
    { stiffness: 40, damping: 10 }
  );

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot triggered for section: ${id}`);
    // Optionally call backend chatbot logic
  };

  useEffect(() => {
    let sections: HTMLElement[] = [];

    if (typeof document !== "undefined") {
      sections = Array.from(document.querySelectorAll("section[id]"));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            if (id && sectionMessages[id]) {
              setBubble(sectionMessages[id]);
              triggerChatbotReply(id);
              if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
              bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
            }
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = () => {
    setBubble("💬 Need help? Ask away!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale, rotate, filter: blur }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative perspective-1000">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade">
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;

 
 
 
 
 
 //------
/*
 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome aboard! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  // Define elliptical flight path
  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "50%",  // hero center
    "-20%", // exit left
    "120%", // enter right (behind)
    "120%", // exit right
    "-20%", // re-enter left
    "50%",  // return center
  ]);

  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "0%",   // hero
    "-40%", // top orbit
    "100%", // bottom orbit
    "100%", // stay low
    "-40%", // top again
    "0%",   // return center
  ]);

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    1.5, // big in hero
    1,   // normal
    0.6, // far behind
    0.6, // stay small
    1,   // returning
    1.5, // spotlight again
  ]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["-20deg", "30deg"]);

  const opacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [1, 0, 1]);

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot triggered for section: ${id}`);
    // Connect this to backend trigger if needed
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const sections = Array.from(document.querySelectorAll("section[id]"));
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && sectionMessages[id]) {
              setBubble(sectionMessages[id]);
              triggerChatbotReply(id);
              if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
              bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
            }
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    // Backup scroll logic
    const handleScroll = () => {
      let closestId = "";
      let minDistance = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = section.id;
        }
      });

      if (closestId && sectionMessages[closestId]) {
        setBubble(sectionMessages[closestId]);
        triggerChatbotReply(closestId);
        if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
        bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setBubble("💬 Need help? Ask away!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale, rotate, opacity }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative perspective-1000">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade">
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
*/
 /* 
 
 
 "use client";

import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import botFlying from "@/public/lottie/cb.json";

const sectionMessages: Record<string, string> = {
  hero: "Welcome! 🚁",
  "compliance-uploads": "Need help uploading files? 📂",
  "compliance-carousel": "Compliance insights incoming 📊",
  timeline: "Here's the full timeline ⏳",
  "timeline-phase": "Phase breakdown in progress 🏗️",
  "phase-cards": "Reviewing strategy details 🧾",
  "compliance-graph": "Rendering graphs... 📈",
};

const AssistantAvatar = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "50%",
    "-20%",
    "120%",
    "120%",
    "-20%",
    "50%",
  ]);

  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "0%",
    "-40%",
    "100%",
    "100%",
    "-40%",
    "0%",
  ]);

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    1.5,
    1,
    0.6,
    0.6,
    1,
    1.5,
  ]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["-20deg", "30deg"]);
  const opacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [1, 0, 1]);

  const [bubble, setBubble] = useState("👋 Welcome!");
  const bubbleTimer = useRef<NodeJS.Timeout | null>(null);

  const triggerChatbotReply = (id: string) => {
    console.log(`💬 Chatbot triggered for section: ${id}`);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const sections = Array.from(document.querySelectorAll("section[id]"));
    }
    const triggered = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting && sectionMessages[id] && !triggered.has(id)) {
            triggered.add(id);
            setBubble(sectionMessages[id]);
            triggerChatbotReply(id);
            if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
            bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
          }
        }
      },
      {
        rootMargin: "-10% 0px -90% 0px", // triggers at top 10% of viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = () => {
    setBubble("💬 Need help? Ask away!");
    triggerChatbotReply("clicked");
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(""), 5000);
  };

  return (
    <motion.div
      style={{ x, y, scale, rotate, opacity }}
      onClick={handleClick}
      className="fixed z-50 w-24 h-24 bottom-10 left-10 cursor-pointer pointer-events-auto"
    >
      <div className="relative perspective-1000">
        <Lottie animationData={botFlying} loop className="w-full h-full" />
        {bubble && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md animate-fade">
            {bubble}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade {
          0%,
          100% {
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
        }
        .animate-fade {
          animation: fade 5s ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default AssistantAvatar;
 */