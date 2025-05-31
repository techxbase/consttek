import dynamic from 'next/dynamic';

/* "use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

type Phase = {
  phase: string;
  startDate: string;
  endDate: string;
  progress: number;
  cashOut: number;
  cashIn: number;
};

const SAMPLE_PHASES: Phase[] = [
  {
    phase: "Pre-construction",
    startDate: "2025-01-01",
    endDate: "2025-03-31",
    progress: 75,
    cashOut: 100000,
    cashIn: 20000,
  },
  {
    phase: "Construction",
    startDate: "2025-04-01",
    endDate: "2025-09-30",
    progress: 30,
    cashOut: 300000,
    cashIn: 50000,
  },
  {
    phase: "Sales",
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    progress: 0,
    cashOut: 50000,
    cashIn: 150000,
  },
  {
    phase: "Stabilization",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
    progress: 0,
    cashOut: 20000,
    cashIn: 100000,
  },
];

const TimelinePhase = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Timeline
        </p>
        <h2 className="text-4xl font-bold">📆 Phase-Based Project Timeline</h2>
      </motion.div>

      <VerticalTimeline lineColor="#9333ea">
        {SAMPLE_PHASES.map((phase, i) => {
          const durationDays =
            (new Date(phase.endDate).getTime() - new Date(phase.startDate).getTime()) /
            (1000 * 60 * 60 * 24);

          return (
            <VerticalTimelineElement
              key={i}
              date={`${new Date(phase.startDate).toLocaleDateString()} - ${new Date(
                phase.endDate
              ).toLocaleDateString()}`}
              iconStyle={{
                background: phase.progress > 0 ? "#166534" : "#7f1d1d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <span className="text-2xl font-bold text-white">{i + 1}</span>
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
              <h3 className="text-white text-xl font-bold mb-1">{phase.phase}</h3>
              <p className="text-sm text-gray-300 mb-2">
                Progress: <span className="text-green-400">{phase.progress}%</span>
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Cash Out: ${phase.cashOut.toLocaleString()} | Cash In: ${phase.cashIn.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Duration: {Math.round(durationDays)} days</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

const NoSSR = dynamic(() => Promise.resolve(TimelinePhase), { ssr: false });

export default NoSSR;;
 */
 
 
 //-------
/* "use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const SAMPLE_PHASES = [
  {
    title: "Pre-construction",
    date: "Jan 2025 - Mar 2025",
    icon: "/icons/foundation.svg",
    iconBg: "#383E56",
    points: [
      "Progress: 75%",
      "Cash Out: $100,000",
      "Cash In: $20,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Construction",
    date: "Apr 2025 - Sep 2025",
    icon: "/icons/construction.svg",
    iconBg: "#383E56",
    points: [
      "Progress: 30%",
      "Cash Out: $300,000",
      "Cash In: $50,000",
      "Duration: 180 days",
    ],
  },
  {
    title: "Sales",
    date: "Oct 2025 - Dec 2025",
    icon: "/icons/sales.svg",
    iconBg: "#383E56",
    points: [
      "Progress: 0%",
      "Cash Out: $50,000",
      "Cash In: $150,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Stabilization",
    date: "Jan 2026 - Jun 2026",
    icon: "/icons/stabilization.svg",
    iconBg: "#383E56",
    points: [
      "Progress: 0%",
      "Cash Out: $20,000",
      "Cash In: $100,000",
      "Duration: 180 days",
    ],
  },
];

const ExperienceCard = ({ title, date, icon, iconBg, points }: any) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img src={icon} alt={title} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{title}</h3>
      <p className="text-secondary text-[16px] font-semibold">Phase Overview</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point: string, index: number) => (
        <li key={index} className="text-white-100 text-[14px] tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const TimelinePhase = () => (
  <section className="py-20 bg-[#0f172a] text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center"
    >
      <p className="text-gray-400 text-sm uppercase tracking-widest">
        Construction Timeline
      </p>
      <h2 className="text-4xl font-bold">📆 Phase-Based Project Timeline</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {SAMPLE_PHASES.map((phase, i) => (
          <ExperienceCard key={i} {...phase} />
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default TimelinePhase;
 *//* "use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const SAMPLE_PHASES = [
  {
    title: "Pre-construction",
    date: "Jan 2025 - Mar 2025",
    iconBg: "#4c1d95",
    points: [
      "Progress: 75%",
      "Cash Out: $100,000",
      "Cash In: $20,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Construction",
    date: "Apr 2025 - Sep 2025",
    iconBg: "#4c1d95",
    points: [
      "Progress: 30%",
      "Cash Out: $300,000",
      "Cash In: $50,000",
      "Duration: 180 days",
    ],
  },
];

const ExperienceCard = ({ title, date, iconBg, points }: any) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1e293b",
      color: "#fff",
      border: "1px solid #334155",
      borderRadius: "1rem",
      padding: "1.5rem",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
    iconStyle={{
      background: iconBg,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
    icon={<span style={{ fontSize: "1rem" }}>{title[0]}</span>}
    date={date}
  >
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300 text-sm">
      {points.map((point: string, idx: number) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const TimelinePhase = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-gray-400 text-sm uppercase tracking-wide">
          Construction Timeline
        </p>
        <h2 className="heading">📆 Phase-Based Project Timeline</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4">
        <VerticalTimeline animate={true}>
          {SAMPLE_PHASES.map((phase, i) => (
            <ExperienceCard key={i} {...phase} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelinePhase;
 */
 /* 
 "use client";

import React from "react";
import { motion } from "framer-motion";

const SAMPLE_PHASES = [
  {
    title: "Pre-construction",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Progress: 75%",
      "Cash Out: $100,000",
      "Cash In: $20,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Construction",
    date: "Apr 2025 - Sep 2025",
    points: [
      "Progress: 30%",
      "Cash Out: $300,000",
      "Cash In: $50,000",
      "Duration: 180 days",
    ],
  },
  {
    title: "Sales",
    date: "Oct 2025 - Dec 2025",
    points: [
      "Progress: 0%",
      "Cash Out: $50,000",
      "Cash In: $150,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Stabilization",
    date: "Jan 2026 - Jun 2026",
    points: [
      "Progress: 0%",
      "Cash Out: $20,000",
      "Cash In: $100,000",
      "Duration: 180 days",
    ],
  },
];

const TimelinePhase = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Timeline
        </p>
        <h2 className="heading">📆 Phase-Based Project Timeline</h2>
      </motion.div>

      <div className="relative border-l-2 border-purple-600 ml-4 max-w-3xl mx-auto pl-6 space-y-12">
        {SAMPLE_PHASES.map((phase, i) => (
          <div key={i} className="relative">
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[22px] top-1.5"></div>
            <h3 className="text-xl font-bold">{phase.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{phase.date}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {phase.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelinePhase;
 */
 
 
/*  
 "use client";

import React from "react";
import { motion } from "framer-motion";

const SAMPLE_PHASES = [
  {
    title: "Pre-construction",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Progress: 75%",
      "Cash Out: $100,000",
      "Cash In: $20,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Construction",
    date: "Apr 2025 - Sep 2025",
    points: [
      "Progress: 30%",
      "Cash Out: $300,000",
      "Cash In: $50,000",
      "Duration: 180 days",
    ],
  },
  {
    title: "Sales",
    date: "Oct 2025 - Dec 2025",
    points: [
      "Progress: 0%",
      "Cash Out: $50,000",
      "Cash In: $150,000",
      "Duration: 90 days",
    ],
  },
  {
    title: "Stabilization",
    date: "Jan 2026 - Jun 2026",
    points: [
      "Progress: 0%",
      "Cash Out: $20,000",
      "Cash In: $100,000",
      "Duration: 180 days",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TimelinePhase = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-12 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Timeline
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          📆 Phase-Based Project Timeline
        </h2>
      </motion.div>

      <div className="relative border-l-2 border-purple-600 ml-4 max-w-4xl mx-auto pl-6 space-y-12">
        {SAMPLE_PHASES.map((phase, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[22px] top-1.5 shadow-lg shadow-purple-700"></div>
            <h3 className="text-2xl font-semibold text-white mb-1">{phase.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{phase.date}</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {phase.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelinePhase;
 */
 
/*  "use client";

import React from "react";
import { motion } from "framer-motion";

const SAMPLE_PHASES = [
  {
    title: "Pre-construction",
    date: "Jan 2025 – Mar 2025",
    points: [
      "💡 Progress: 75%",
      "💰 Cash Out: $100,000",
      "💰 Cash In: $20,000",
      "⏱️ Duration: 90 days",
    ],
  },
  {
    title: "Construction",
    date: "Apr 2025 – Sep 2025",
    points: [
      "💡 Progress: 30%",
      "💰 Cash Out: $300,000",
      "💰 Cash In: $50,000",
      "⏱️ Duration: 180 days",
    ],
  },
  {
    title: "Sales",
    date: "Oct 2025 – Dec 2025",
    points: [
      "📊 Progress: 0%",
      "💰 Cash Out: $50,000",
      "💰 Cash In: $150,000",
      "⏱️ Duration: 90 days",
    ],
  },
  {
    title: "Stabilization",
    date: "Jan 2026 – Jun 2026",
    points: [
      "📊 Progress: 0%",
      "💰 Cash Out: $20,000",
      "💰 Cash In: $100,000",
      "⏱️ Duration: 180 days",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const TimelinePhase = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-12 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Timeline
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          📆 Phase-Based Project Timeline
        </h2>
      </motion.div>

      <div className="relative border-l-2 border-purple-600 ml-4 max-w-4xl mx-auto pl-6 space-y-16">
        {SAMPLE_PHASES.map((phase, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ scale: 1.03, rotateZ: 0.5 }}
            className="relative bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-800/50 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:shadow-purple-500/20"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[22px] top-2 shadow-lg shadow-purple-800"></div>
            <h3 className="text-2xl font-semibold mb-1">{phase.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{phase.date}</p>
            <ul className="text-sm text-gray-300 space-y-1 pl-2">
              {phase.points.map((pt, idx) => (
                <li key={idx} className="leading-relaxed">{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelinePhase;
 */
 
 
 "use client";

import React from "react";
import { motion } from "framer-motion";

const SAMPLE_PHASES = [
  {
    title: "Pre-construction",
    date: "Jan 2025 – Mar 2025",
    points: [
      "💡 Progress: 75%",
      "💰 Cash Out: $100,000",
      "💰 Cash In: $20,000",
      "⏱️ Duration: 90 days",
    ],
  },
  {
    title: "Construction",
    date: "Apr 2025 – Sep 2025",
    points: [
      "💡 Progress: 30%",
      "💰 Cash Out: $300,000",
      "💰 Cash In: $50,000",
      "⏱️ Duration: 180 days",
    ],
  },
  {
    title: "Sales",
    date: "Oct 2025 – Dec 2025",
    points: [
      "📊 Progress: 0%",
      "💰 Cash Out: $50,000",
      "💰 Cash In: $150,000",
      "⏱️ Duration: 90 days",
    ],
  },
  {
    title: "Stabilization",
    date: "Jan 2026 – Jun 2026",
    points: [
      "📊 Progress: 0%",
      "💰 Cash Out: $20,000",
      "💰 Cash In: $100,000",
      "⏱️ Duration: 180 days",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const TimelinePhase = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-12 text-center"
      >
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Construction Timeline
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          📆 Phase-Based Project Timeline
        </h2>
      </motion.div>

      <div className="relative border-l-2 border-purple-600 ml-4 max-w-4xl mx-auto pl-6 space-y-16">
        {SAMPLE_PHASES.map((phase, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ scale: 1.03, rotateZ: 0.5 }}
            className="relative flex gap-4 items-start"
          >
            {/* Bullet icon */}
            <div className="text-xl pt-1">🔹</div>

            {/* Card */}
            <div
              className="bg-gradient-to-br from-[#1f2937] to-[#0f172a] border border-purple-800/50 rounded-xl p-6 w-full shadow-lg hover:shadow-purple-500/20 transition-transform duration-300"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <h3 className="text-2xl font-semibold mb-1">{phase.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{phase.date}</p>
              <ul className="text-sm text-gray-300 space-y-1 pl-2">
                {phase.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelinePhase;

 