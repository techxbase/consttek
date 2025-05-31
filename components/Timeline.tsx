import dynamic from 'next/dynamic';

/* /* // components/Timeline.tsx
"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
    icon: "/icons/foundation.svg",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
    icon: "/icons/roofing.svg",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
    icon: "/icons/electrical.svg",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
    icon: "/icons/plumbing.svg",
  },
];

function Timeline() {
const NoSSR = dynamic(() => Promise.resolve(Timeline), { ssr: false });
export default NoSSR;

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h2 className="text-4xl font-bold text-center mb-10">📌 Compliance Timeline</h2>
      <VerticalTimeline lineColor="#9333ea">
        {SAMPLE_ENTRIES.map((entry, i) => (
          <VerticalTimelineElement
            key={i}
            date={entry.date}
            iconStyle={{ background: entry.compliant ? "#166534" : "#7f1d1d", color: "#fff" }}
            icon={
              <div className="flex items-center justify-center h-full">
                <img
                  src={entry.icon}
                  alt={entry.section}
                  className="w-8 h-8 object-contain"
                />
              </div>
            }
            contentStyle={{ background: "#1f2937", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
          >
            <h3 className="text-xl font-bold mb-1">{entry.section}</h3>
            <p className="text-sm text-gray-300">{entry.spec}</p>
            <p className="mt-2 text-sm font-semibold">
              Status: {entry.compliant ? <span className="text-green-400">✅ Compliant</span> : <span className="text-red-400">❌ Non-compliant</span>}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
 *//* 
 
 "use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
    icon: "/icons/foundation.svg",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
    icon: "/icons/roofing.svg",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
    icon: "/icons/electrical.svg",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
    icon: "/icons/plumbing.svg",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Process
        </p>
        <h2 className="text-4xl font-bold">📌 Compliance Timeline</h2>
      </motion.div>

      <VerticalTimeline lineColor="#9333ea">
        {SAMPLE_ENTRIES.map((entry, i) => (
          <VerticalTimelineElement
            key={i}
            date={entry.date}
            iconStyle={{
              background: entry.compliant ? "#166534" : "#7f1d1d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={
              <img
                src={entry.icon}
                alt={entry.section}
                className="w-[60%] h-[60%] object-contain"
              />
            }
            contentStyle={{
              background: "rgba(29, 24, 54, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid #333",
              color: "#fff",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(35, 38, 49, 0.6)" }}
          >
            <h3 className="text-white text-[20px] font-bold mb-1">{entry.section}</h3>
            <p className="text-sm text-gray-300 mb-2">{entry.spec}</p>
            <p className="text-sm font-semibold">
              Status:{" "}
              {entry.compliant ? (
                <span className="text-green-400">✅ Compliant</span>
              ) : (
                <span className="text-red-400">❌ Non-compliant</span>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
 */
 
 //---------
 /* 
 "use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
    icon: "/icons/foundation.svg",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
    icon: "/icons/roofing.svg",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
    icon: "/icons/electrical.svg",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
    icon: "/icons/plumbing.svg",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Process
        </p>
        <h2 className="text-4xl font-bold">📌 Compliance Timeline</h2>
      </motion.div>

      <VerticalTimeline lineColor="#9333ea">
        {SAMPLE_ENTRIES.map((entry, i) => (
          <VerticalTimelineElement
            key={i}
            date={entry.date}
            iconStyle={{
              background: entry.compliant ? "#166534" : "#7f1d1d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={
              entry.icon ? (
                <img
                  src={entry.icon}
                  alt={entry.section}
                  className="w-[60%] h-[60%] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <span className="text-white font-bold">{i + 1}</span>
              )
            }
            contentStyle={{
              background: "rgba(29, 24, 54, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid #333",
              color: "#fff",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(35, 38, 49, 0.6)",
            }}
          >
            <h3 className="text-white text-xl font-bold mb-1">{entry.section}</h3>
            <p className="text-sm text-gray-300 mb-2">{entry.spec}</p>
            <p className="text-sm font-semibold">
              Status:{" "}
              {entry.compliant ? (
                <span className="text-green-400">✅ Compliant</span>
              ) : (
                <span className="text-red-400">❌ Non-compliant</span>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;


//------


 */ 
 
 
 //----
 /* 
 "use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
    emoji: "🏗️",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
    emoji: "🏠",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
    emoji: "💡",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
    emoji: "🚰",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Process
        </p>
        <h2 className="text-4xl font-bold">📌 Compliance Timeline</h2>
      </motion.div>

      <VerticalTimeline lineColor="#9333ea">
        {SAMPLE_ENTRIES.map((entry, i) => (
          <VerticalTimelineElement
            key={i}
            date={entry.date}
            iconStyle={{
              background: entry.compliant ? "#166534" : "#7f1d1d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              color: "#fff",
            }}
            icon={<span>{entry.emoji}</span>}
            contentStyle={{
              background: "rgba(29, 24, 54, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid #333",
              color: "#fff",
              boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(35, 38, 49, 0.6)",
            }}
          >
            <h3 className="text-white text-xl font-bold mb-1">{entry.section}</h3>
            <p className="text-sm text-gray-300 mb-2">{entry.spec}</p>
            <p className="text-sm font-semibold">
              Status:{" "}
              {entry.compliant ? (
                <span className="text-green-400">✅ Compliant</span>
              ) : (
                <span className="text-red-400">❌ Non-compliant</span>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline; */


//------

/* "use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
  },
];

const Timeline = () => {
  const formattedCards = SAMPLE_ENTRIES.map((entry, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white/90 text-sm mb-1">{entry.spec}</p>
      <p className="text-sm text-gray-400 mb-2">🗓 {entry.date}</p>
      <p className={`text-sm font-semibold ${entry.compliant ? "text-green-400" : "text-red-400"}`}>
        {entry.compliant ? "✅ Compliant" : "❌ Non-compliant"}
      </p>
    </div>
  ));

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading mb-10">
        Compliance <span className="text-purple">Timeline</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4">
          <InfiniteMovingCards
            items={formattedCards}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
 */
 
 
 //-----
/*  
 "use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
  },
];

const Timeline = () => {
  const formattedCards = SAMPLE_ENTRIES.map((entry, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white text-sm mb-2">{entry.spec}</p>
      <p className="text-gray-400 text-sm mb-2">🗓 {entry.date}</p>
      <p
        className={`text-sm font-semibold ${
          entry.compliant ? "text-green-400" : "text-red-400"
        }`}
      >
        {entry.compliant ? "✅ Compliant" : "❌ Non-compliant"}
      </p>
    </div>
  ));

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading mb-10">
        Compliance <span className="text-purple">Timeline</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4">
          <InfiniteMovingCards
            items={formattedCards}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
 */
 
 //-------
 
/*  "use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
    date: "2025 Q1",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
    date: "2025 Q2",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
    date: "2025 Q2",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
    date: "2025 Q3",
  },
];

const Timeline = () => {
  const formattedCards = SAMPLE_ENTRIES.map((entry, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white text-sm mb-2">{entry.spec}</p>
      <p className="text-gray-400 text-sm mb-2">🗓 {entry.date}</p>
      <p
        className={`text-sm font-semibold ${
          entry.compliant ? "text-green-400" : "text-red-400"
        }`}
      >
        {entry.compliant ? "✅ Compliant" : "❌ Non-compliant"}
      </p>
    </div>
  ));

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading mb-10">
        Compliance <span className="text-purple">Timeline</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4">
          <InfiniteMovingCards
            items={formattedCards}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
 */
 
 
 //------
 
/*  
 "use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_TIMELINE = [
  {
    phase: "Foundation",
    note: "Concrete strength must exceed 30 MPa",
    date: "🗓 2025 Q1",
    status: "✅ Compliant",
  },
  {
    phase: "Roofing",
    note: "Use fire-resistant materials",
    date: "🗓 2025 Q2",
    status: "✅ Compliant",
  },
  {
    phase: "Electrical",
    note: "Wiring should comply with NEC 2020 standards",
    date: "🗓 2025 Q2",
    status: "❌ Non-compliant",
  },
  {
    phase: "Plumbing",
    note: "Install water-saving fixtures",
    date: "🗓 2025 Q3",
    status: "✅ Compliant",
  },
];

const Timeline = () => {
  const cards = SAMPLE_TIMELINE.map((item, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <p className="text-purple-300 font-bold text-lg mb-2">{item.phase}</p>
      <p className="text-white/90 text-sm mb-2">{item.note}</p>
      <p className="text-gray-400 text-sm mb-2">{item.date}</p>
      <p
        className={`text-sm font-semibold ${
          item.status.includes("✅") ? "text-green-400" : "text-red-400"
        }`}
      >
        {item.status}
      </p>
    </div>
  ));

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading text-center mb-10">
        Compliance <span className="text-purple">Timeline</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={cards} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
 */
 
 //-----
 
/*  "use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { timeline } from "@/data";

const Timeline = () => {
  const cards = timeline.map((item, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <p className="text-purple-300 font-bold text-lg mb-2">{item.phase}</p>
      <p className="text-white/90 text-sm mb-2">{item.note}</p>
      <p className="text-gray-400 text-sm mb-2">{item.date}</p>
      <p
        className={`text-sm font-semibold ${
          item.status.includes("✅") ? "text-green-400" : "text-red-400"
        }`}
      >
        {item.status}
      </p>
    </div>
  ));

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading text-center mb-10">
        Compliance <span className="text-purple">Timeline</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={cards} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
 */
 
 //------
 "use client";

import React from "react";
import { timeline } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <h1 className="heading">
        Compliance
        <span className="text-purple"> Timeline</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={timeline.map((t) => ({
              quote: `"${t.note}"`,
              name: t.phase,
              title: `${t.date} — ${t.status}`,
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
