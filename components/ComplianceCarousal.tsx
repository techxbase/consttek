import dynamic from 'next/dynamic';

/* /* "use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

// Sample compliance table data for carousel
const complianceEntries = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    status: "✅ Compliant",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    status: "✅ Compliant",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    status: "❌ Non-compliant",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    status: "✅ Compliant",
  },
  {
    section: "HVAC",
    spec: "System must meet SEER 16 rating",
    status: "❌ Non-compliant",
  },
  {
    section: "Insulation",
    spec: "Must meet R-38 in attic spaces",
    status: "✅ Compliant",
  },
];

const CClients = () => {
  return (
    <section id="compliance-carousel" className="py-20">
      <h1 className="heading">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={complianceEntries.map((entry, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[20rem] sm:w-[24rem] shadow-xl backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                whileHover={{ rotateZ: 1, scale: 1.03 }}
              >
                <h3 className="text-purple-300 font-bold text-lg mb-2">
                  {entry.section}
                </h3>
                <p className="text-white/90 text-sm mb-4">{entry.spec}</p>
                <p
                  className={`text-sm font-semibold ${
                    entry.status.includes("✅")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {entry.status}
                </p>
              </motion.div>
            ))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

const NoSSR = dynamic(() => Promise.resolve(CClients), { ssr: false });

export default NoSSR;;
 */
 
 
 //---------
 
/* "use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { ComplianceContext } from "@/contexts/ComplianceContext";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    status: "✅ Compliant",
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    status: "✅ Compliant",
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    status: "❌ Non-compliant",
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    status: "✅ Compliant",
  },
  {
    section: "HVAC",
    spec: "System must meet SEER 16 rating",
    status: "❌ Non-compliant",
  },
  {
    section: "Insulation",
    spec: "Must meet R-38 in attic spaces",
    status: "✅ Compliant",
  },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);

  const entries = (complianceData?.length ? complianceData : SAMPLE_ENTRIES).map(
    (entry) => ({
      section: entry.section,
      spec: entry.spec,
      status: entry.compliant !== undefined
        ? entry.compliant
          ? "✅ Compliant"
          : "❌ Non-compliant"
        : entry.status,
    })
  );

  return (
    <section id="compliance-carousel" className="py-20">
      <h1 className="heading">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={entries.map((entry, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[20rem] sm:w-[24rem] shadow-xl backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                whileHover={{ rotateZ: 1, scale: 1.03 }}
              >
                <h3 className="text-purple-300 font-bold text-lg mb-2">
                  {entry.section}
                </h3>
                <p className="text-white/90 text-sm mb-4">{entry.spec}</p>
                <p
                  className={`text-sm font-semibold ${
                    entry.status.includes("✅")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {entry.status}
                </p>
              </motion.div>
            ))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 //-=----
 /* 
 "use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { ComplianceContext } from "@/contexts/ComplianceContext";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", status: "✅ Compliant" },
  { section: "Roofing", spec: "Use fire-resistant materials", status: "✅ Compliant" },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", status: "❌ Non-compliant" },
  { section: "Plumbing", spec: "Install water-saving fixtures", status: "✅ Compliant" },
  { section: "HVAC", spec: "System must meet SEER 16 rating", status: "❌ Non-compliant" },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", status: "✅ Compliant" },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);

  const entries = (complianceData?.length ? complianceData : SAMPLE_ENTRIES).map((entry) => ({
    section: entry.section,
    spec: entry.spec,
    status: entry.compliant !== undefined
      ? entry.compliant
        ? "✅ Compliant"
        : "❌ Non-compliant"
      : entry.status,
  }));

  return (
    <section id="compliance-carousel" className="py-20 bg-[#0f172a]">
      <h1 className="heading text-center mb-10">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="h-[24rem] md:h-[20rem] w-full max-w-7xl px-4">
          <InfiniteMovingCards
            items={entries.map((entry, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                whileHover={{ rotateZ: 1, scale: 1.03 }}
              >
                <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
                <p className="text-white/90 text-sm mb-3">{entry.spec}</p>
                <p
                  className={`text-sm font-semibold ${
                    entry.status.includes("✅") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {entry.status}
                </p>
              </motion.div>
            ))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 
 //----
 
/*  "use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", status: "✅ Compliant" },
  { section: "Roofing", spec: "Use fire-resistant materials", status: "✅ Compliant" },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", status: "❌ Non-compliant" },
  { section: "Plumbing", spec: "Install water-saving fixtures", status: "✅ Compliant" },
  { section: "HVAC", spec: "System must meet SEER 16 rating", status: "❌ Non-compliant" },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", status: "✅ Compliant" },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);

  const entries = (complianceData?.length ? complianceData : SAMPLE_ENTRIES).map((entry) => ({
    section: entry.section,
    spec: entry.spec,
    status:
      entry.compliant !== undefined
        ? entry.compliant
          ? "✅ Compliant"
          : "❌ Non-compliant"
        : entry.status,
  }));

  const cards = entries.map((entry, i) => (
    <motion.div
      key={i}
      className="bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 text-white rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
      whileHover={{ rotateZ: 1, scale: 1.03 }}
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white text-sm mb-3">{entry.spec}</p>
      <p
        className={`text-sm font-semibold ${
          entry.status.includes("✅") ? "text-green-400" : "text-red-400"
        }`}
      >
        {entry.status}
      </p>
    </motion.div>
  ));

  return (
    <section id="compliance-carousel" className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading text-center mb-10">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="h-[24rem] md:h-[20rem] w-full max-w-7xl px-4">
          <InfiniteMovingCards items={cards} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 
 
 //-------
 /* 
 "use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", status: "✅ Compliant" },
  { section: "Roofing", spec: "Use fire-resistant materials", status: "✅ Compliant" },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", status: "❌ Non-compliant" },
  { section: "Plumbing", spec: "Install water-saving fixtures", status: "✅ Compliant" },
  { section: "HVAC", spec: "System must meet SEER 16 rating", status: "❌ Non-compliant" },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", status: "✅ Compliant" },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);

  const entries = (complianceData?.length ? complianceData : SAMPLE_ENTRIES).map((entry) => ({
    section: entry.section,
    spec: entry.spec,
    status:
      entry.compliant !== undefined
        ? entry.compliant
          ? "✅ Compliant"
          : "❌ Non-compliant"
        : entry.status,
  }));

  const cards = entries.map((entry, i) => (
    <motion.div
      key={i}
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white z-10 border border-gray-600 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-2xl hover:scale-[1.02] transition-all duration-300"
      whileHover={{ rotateZ: 1, scale: 1.03 }}
      style={{ visibility: "visible", opacity: 1 }}
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white text-sm mb-3">{entry.spec}</p>
      <p
        className={`text-sm font-semibold ${
          entry.status.includes("✅") ? "text-green-400" : "text-red-400"
        }`}
      >
        {entry.status}
      </p>
    </motion.div>
  ));

  return (
    <section id="compliance-carousel" className="py-20 bg-[#0f172a] text-white z-10 relative">
      <h1 className="heading text-center mb-10">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="h-[24rem] md:h-[20rem] w-full max-w-7xl px-4 z-10">
          <InfiniteMovingCards items={cards} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 
 
 //------------
 /* 
 
 "use client";

import React, { useContext } from "react";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", compliant: true },
  { section: "Roofing", spec: "Use fire-resistant materials", compliant: true },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", compliant: false },
  { section: "Plumbing", spec: "Install water-saving fixtures", compliant: true },
  { section: "HVAC", spec: "System must meet SEER 16 rating", compliant: false },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", compliant: true },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);

  const entries = complianceData?.length ? complianceData : SAMPLE_ENTRIES;

  const formatted = entries.map((entry) => {
    const status = entry.compliant ? "✅ Compliant" : "❌ Non-compliant";
    return `
      <div class="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl">
        <h3 class="text-purple-300 font-bold text-lg mb-2">${entry.section}</h3>
        <p class="text-white/90 text-sm mb-3">${entry.spec}</p>
        <p class="text-sm font-semibold ${entry.compliant ? "text-green-400" : "text-red-400"}">${status}</p>
      </div>
    `;
  });

  return (
    <section id="compliance-carousel" className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading text-center mb-10">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="h-[24rem] md:h-[20rem] w-full max-w-7xl px-4">
          <InfiniteMovingCards items={formatted} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 
 
 
 //-------
 /* 
 "use client";

import React, { useContext, useState } from "react";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", compliant: true },
  { section: "Roofing", spec: "Use fire-resistant materials", compliant: true },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", compliant: false },
  { section: "Plumbing", spec: "Install water-saving fixtures", compliant: true },
  { section: "HVAC", spec: "System must meet SEER 16 rating", compliant: false },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", compliant: true },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);
  const entries = complianceData?.length ? complianceData : SAMPLE_ENTRIES;
  const [paused, setPaused] = useState(false);

  const formattedCards = entries.map((entry, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white/90 text-sm mb-3">{entry.spec}</p>
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
    <section id="compliance-carousel" className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading text-center mb-10">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center space-y-6">
        <div className="h-[24rem] md:h-[20rem] w-full max-w-7xl px-4">
          <InfiniteMovingCards
            items={formattedCards}
            direction="right"
            speed="slow"
            isPaused={paused}
          />
        </div>

        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition"
            onClick={() => setPaused(false)}
          >
            ▶️ Play
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
            onClick={() => setPaused(true)}
          >
            ⏸️ Pause
          </button>
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 
 //------
 
 /* 
"use client";

import React, { useContext } from "react";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", compliant: true },
  { section: "Roofing", spec: "Use fire-resistant materials", compliant: true },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", compliant: false },
  { section: "Plumbing", spec: "Install water-saving fixtures", compliant: true },
  { section: "HVAC", spec: "System must meet SEER 16 rating", compliant: false },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", compliant: true },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);
  const entries = complianceData?.length ? complianceData : SAMPLE_ENTRIES;

  const formattedCards = entries.map((entry, index) => (
    <div
      key={index}
      className="text-white bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[18rem] sm:w-[22rem] shadow-xl"
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white/90 text-sm mb-3">{entry.spec}</p>
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
    <section id="compliance-carousel" className="py-20 bg-[#0f172a] text-white">
      <h1 className="heading text-center mb-10">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4">
          <InfiniteMovingCards
            items={formattedCards}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default CClients;
 */
 
 
 
 //-------
 
/*  "use client";

import React, { useContext } from "react";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", compliant: true },
  { section: "Roofing", spec: "Use fire-resistant materials", compliant: true },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", compliant: false },
  { section: "Plumbing", spec: "Install water-saving fixtures", compliant: true },
  { section: "HVAC", spec: "System must meet SEER 16 rating", compliant: false },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", compliant: true },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);
  const entries = complianceData?.length ? complianceData : SAMPLE_ENTRIES;

  const cards = entries.map((entry, i) => (
    <div
      key={i}
      className="bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700 rounded-3xl p-6 w-[20rem] sm:w-[24rem] shadow-xl text-white"
    >
      <h3 className="text-purple-300 font-bold text-lg mb-2">{entry.section}</h3>
      <p className="text-white/90 text-sm mb-4">{entry.spec}</p>
      <p className={`text-sm font-semibold ${entry.compliant ? "text-green-400" : "text-red-400"}`}>
        {entry.compliant ? "✅ Compliant" : "❌ Non-compliant"}
      </p>
    </div>
  ));

  return (
    <section id="compliance-carousel" className="py-20 bg-[#0f172a]">
      <h1 className="heading">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={cards} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default CClients;

  */
  
  
  //-------
  
  "use client";

import React, { useContext } from "react";
import { ComplianceContext } from "@/contexts/ComplianceContext";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const SAMPLE_ENTRIES = [
  {
    section: "Foundation",
    spec: "Concrete strength must exceed 30 MPa",
    compliant: true,
  },
  {
    section: "Roofing",
    spec: "Use fire-resistant materials",
    compliant: true,
  },
  {
    section: "Electrical",
    spec: "Wiring should comply with NEC 2020 standards",
    compliant: false,
  },
  {
    section: "Plumbing",
    spec: "Install water-saving fixtures",
    compliant: true,
  },
  {
    section: "HVAC",
    spec: "System must meet SEER 16 rating",
    compliant: false,
  },
  {
    section: "Insulation",
    spec: "Must meet R-38 in attic spaces",
    compliant: true,
  },
];

const CClients = () => {
  const { data: complianceData } = useContext(ComplianceContext);
  const entries = complianceData?.length ? complianceData : SAMPLE_ENTRIES;

  const formatted = entries.map((e) => ({
    quote: `"${e.spec}"`,
    name: e.section,
    title: e.compliant ? "✅ Compliant" : "❌ Non-compliant",
  }));

  return (
    <section id="compliance-carousel" className="py-20 bg-[#0f172a]">
      <h1 className="heading">
        Live <span className="text-purple">Compliance Feed</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={formatted} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default CClients;
