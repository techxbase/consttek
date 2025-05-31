/* "use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/MovingBorders";

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return {
      section,
      spec,
      compliant: false,
    };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          🏗️ Construction Compliance Upload
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value
                  .split(",")
                  .map((kw) => kw.trim())
                  .filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate:{" "}
          <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p
                className="text-gray-300 mt-2"
                whileHover={{ opacity: 0.9 }}
              >
                {row.spec}
              </motion.p>
              <motion.p
                className="mt-2 font-medium"
                whileHover={{ scale: 1.03 }}
              >
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

 
 
 
 //---------------------------------------------------------------------------
 
 */
 
 /* /* 
 "use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/MovingBorders";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return {
      section,
      spec,
      compliant: false,
    };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
/* 
        {/* 3D Floating Construction Icon }
        /* <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          transitionSpeed={1500}
          scale={1.05}
          gyroscope={true}
          className="w-32 h-32 mx-auto mb-6"
        >
          <Lottie
            animationData={require('@/public/lottie/const.json')}
            loop
            autoplay
          />
        </Tilt>

        {/* Titanium-style Animated Title }
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-8 drop-shadow-md tracking-tight"
        >
          Construction Compliance Upload
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value
                  .split(",")
                  .map((kw) => kw.trim())
                  .filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate:{" "}
          <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p
                className="text-gray-300 mt-2"
                whileHover={{ opacity: 0.9 }}
              >
                {row.spec}
              </motion.p>
              <motion.p
                className="mt-2 font-medium"
                whileHover={{ scale: 1.03 }}
              >
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
 
 //------------------------------------------------
/*  
 "use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return {
      section,
      spec,
      compliant: false,
    };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16">
            <Lottie animationData={animationData} loop autoplay />
          </div>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
            Construction Compliance Upload
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value
                  .split(",")
                  .map((kw) => kw.trim())
                  .filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate:{" "}
          <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p
                className="text-gray-300 mt-2"
                whileHover={{ opacity: 0.9 }}
              >
                {row.spec}
              </motion.p>
              <motion.p
                className="mt-2 font-medium"
                whileHover={{ scale: 1.03 }}
              >
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
 
 
 //-------

/*
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

// Animation variants for the Lottie movement
const animationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, type: "spring" },
  }),
};

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return {
      section,
      spec,
      compliant: false,
    };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const [cycle, setCycle] = useState(0);

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };

    animate();

    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 30000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [complianceRate]);

  const title = "Construction Compliance Upload";
  const vowelIndexes = [...title.matchAll(/[OAE]/gi)].map((match) => match.index ?? 0);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-4">
          {title.split("").map((char, i) => (
            <motion.span
              key={`${char}-${i}-${cycle}`}
              className="inline-block"
              custom={vowelIndexes.includes(i) ? vowelIndexes.indexOf(i) : 0}
              variants={animationVariants}
              initial="hidden"
              animate="visible"
            >
              {char}
              {vowelIndexes.includes(i) && (
                <span className="inline-block w-6 h-6 align-middle">
                  <Lottie animationData={animationData} loop={false} autoplay />
                </span>
              )}
            </motion.span>
          ))}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value
                  .split(",")
                  .map((kw) => kw.trim())
                  .filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate: {" "}
          <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status: {" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}*/
//-------

/* "use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const title = "Construction Compliance Upload";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const [cycle, setCycle] = useState(0);
  const controls = useAnimation();

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };
    animate();

    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
      controls.start({ rotate: [0, 360], transition: { duration: 2 } });
    }, 30000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [complianceRate, controls]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-4 relative">
          <motion.div
            animate={controls}
            className="absolute -left-10 w-14 h-14 sm:w-16 sm:h-16"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
            Construction Compliance Upload
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value
                  .split(",")
                  .map((kw) => kw.trim())
                  .filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate: <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3 className="text-lg font-semibold text-purple-300" whileHover={{ scale: 1.05, color: "#e9d5ff" }}>
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status: {row.compliant ? <span className="text-green-300">✅ Compliant</span> : <span className="text-red-300">❌ Non-compliant</span>}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
} */




//-----

/* 
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const title = "Construction Compliance Upload";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const [cycle, setCycle] = useState(0);
  const controls = useAnimation();

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };
    animate();

    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
      controls.start({ rotate: [0, 360], transition: { duration: 2 } });
    }, 30000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [complianceRate, controls]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div animate={controls} className="w-14 h-14 sm:w-16 sm:h-16 mb-2">
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text drop-shadow-lg">
            Construction Compliance Upload
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate: <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
 
 
 
 
 
 
 
 
 
 
 
 //------------
/*  
 "use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const title = "Construction Compliance Upload";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const [cycle, setCycle] = useState(0);
  const controls = useAnimation();

  function onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const rows = csvToJson(reader.result);
        setData(rows);
      }
    };
    reader.readAsText(file);
  }

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  useEffect(() => {
    setData((old) => old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) })));
  }, [keywords]);

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };
    animate();

    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
      controls.start({
        rotateX: [0, 360],
        rotateY: [0, 360],
        z: [0, -50, 0],
        transition: { duration: 4, ease: "easeInOut" }
      });
    }, 30000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, [complianceRate, controls]);

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center mb-8">
          <motion.div
            animate={controls}
            className="absolute z-10 w-14 h-14 sm:w-16 sm:h-16"
            initial={{ top: "0%", left: "0%", x: "-50%", y: "-50%" }}
            style={{ top: "0%", left: "50%" }}
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-4xl font-bold text-center text-white bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Construction Compliance Upload
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={onFileUpload}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate: <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3 className="text-lg font-semibold text-purple-300" whileHover={{ scale: 1.05, color: "#e9d5ff" }}>
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
 
 
 
 
 
 
 
 
 
 
 //---------------------------
 
/* "use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const controls = useAnimation();

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    setData((old) =>
      old.map((row) => ({ ...row, compliant: checkCompliance(row.spec) }))
    );
  }, [keywords]);

  useEffect(() => {
    const runOrbit = async () => {
      await controls.start({
        x: ["0%", "-80%", "0%", "80%", "0%"],
        y: ["0%", "-50%", "-150%", "-50%", "0%"],
        scale: [1, 0.8, 0.6, 0.8, 1],
        rotateY: [0, 180, 360],
        rotateX: [0, 180, 0],
        transition: { duration: 6, ease: "easeInOut" },
      });
    };
    runOrbit();
    const interval = setInterval(runOrbit, 30000);
    return () => clearInterval(interval);
  }, [controls]);

  useEffect(() => {
    let frame: number;
    let progress = 0;
    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.5) {
        progress = complianceRate;
      } else {
        frame = requestAnimationFrame(animate);
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [data]);

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center mb-8">
          <motion.div
            animate={controls}
            className="absolute top-0 left-1/2 w-14 h-14 sm:w-16 sm:h-16 -translate-x-1/2 z-10"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text drop-shadow-2xl">
            Construction Compliance Upload
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setData(csvToJson(reader.result));
                }
              };
              reader.readAsText(file);
            }}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate:{" "}
          <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
 
 
 
 //----------------
 
 /* 
 "use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setData((old) =>
      old.map((row) => ({
        ...row,
        compliant: checkCompliance(row.spec),
      }))
    );
  }, [keywords]);

  useEffect(() => {
    const runOrbit = async () => {
      await controls.start({
        x: ["0%", "-80%", "0%", "80%", "0%"],
        y: ["0%", "-50%", "-150%", "-50%", "0%"],
        scale: [1, 0.8, 0.6, 0.8, 1],
        rotateY: [0, 180, 360],
        rotateX: [0, 180, 0],
        transition: { duration: 6, ease: "easeInOut" },
      });
    };
    runOrbit();
    const interval = setInterval(runOrbit, 30000);
    return () => clearInterval(interval);
  }, [controls]);

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = animatedCompliance;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.1) {
        setAnimatedCompliance(complianceRate);
        cancelAnimationFrame(frame);
        return;
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center mb-8">
          <motion.div
            animate={controls}
            className="absolute top-0 left-1/2 w-14 h-14 sm:w-16 sm:h-16 -translate-x-1/2 z-10"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text drop-shadow-2xl">
            Construction Compliance Upload
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setData(csvToJson(reader.result));
                }
              };
              reader.readAsText(file);
            }}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="flex-1 border border-gray-700 p-2 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="border border-gray-700 p-2 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
        </div>

        <p className="text-center text-white font-semibold mb-6 text-xl">
          ✅ Compliance Rate:{" "}
          <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.map((row, i) => (
              <Button
                key={i}
                duration={Math.floor(Math.random() * 6000) + 8000}
                borderRadius="1.75rem"
                containerClassName="w-full h-full"
                className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
                style={{
                  background: row.compliant
                    ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                    : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                  borderRadius: "calc(1.75rem * 0.96)",
                }}
              >
                <motion.h3
                  className="text-lg font-semibold text-purple-300"
                  whileHover={{ scale: 1.05, color: "#e9d5ff" }}
                >
                  {row.section}
                </motion.h3>
                <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                  {row.spec}
                </motion.p>
                <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                  Status:{" "}
                  {row.compliant ? (
                    <span className="text-green-300">✅ Compliant</span>
                  ) : (
                    <span className="text-red-300">❌ Non-compliant</span>
                  )}
                </motion.p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 */
 
 //-------
 /* 
 "use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setData((old) =>
      old.map((row) => ({
        ...row,
        compliant: checkCompliance(row.spec),
      }))
    );
  }, [keywords]);

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = animatedCompliance;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.1) {
        setAnimatedCompliance(complianceRate);
        cancelAnimationFrame(frame);
        return;
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CARD }
        <div className="bg-[#111827] p-8 rounded-3xl shadow-xl border border-gray-700">
          <motion.div
            animate={controls}
            className="relative mx-auto mb-6 w-14 h-14 sm:w-16 sm:h-16"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Construction Compliance Upload
          </h2>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setData(csvToJson(reader.result));
                }
              };
              reader.readAsText(file);
            }}
            className="w-full mb-4 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="w-full mb-4 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="w-full mb-6 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
          <p className="text-center text-white text-lg font-semibold">
            ✅ Compliance Rate:{" "}
            <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
          </p>
        </div>

        {/* RIGHT CARDS }
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
 */
 
 //---------------------------
 /* 
 "use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setData((old) =>
      old.map((row) => ({
        ...row,
        compliant: checkCompliance(row.spec),
      }))
    );
  }, [keywords]);

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = animatedCompliance;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.1) {
        setAnimatedCompliance(complianceRate);
        cancelAnimationFrame(frame);
        return;
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  useEffect(() => {
    const runOrbit = async () => {
      await controls.start({
        x: ["0%", "100%", "0%", "-100%", "0%"],
        y: ["0%", "-30%", "-80%", "-30%", "0%"],
        scale: [1, 0.9, 0.6, 0.9, 1],
        rotateX: [0, 180, 360],
        rotateY: [0, 360, 0],
        transition: { duration: 5, ease: "easeInOut" },
      });
    };
    runOrbit();
    const interval = setInterval(runOrbit, 30000);
    return () => clearInterval(interval);
  }, [controls]);

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CARD }
        <div className="bg-[#111827] p-8 rounded-3xl shadow-xl border border-gray-700 relative">
          <motion.div
            animate={controls}
            className="absolute left-1/2 -top-10 w-14 h-14 sm:w-16 sm:h-16 -translate-x-1/2 z-20"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Construction Compliance Upload
          </h2>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setData(csvToJson(reader.result));
                }
              };
              reader.readAsText(file);
            }}
            className="w-full mb-4 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="w-full mb-4 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="w-full mb-6 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
          <p className="text-center text-white text-lg font-semibold">
            ✅ Compliance Rate:{" "}
            <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
          </p>
        </div>

        {/* RIGHT CARDS }
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
} */

//------------------------------------------
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/MovingBorders";
import animationData from "@/public/lottie/const.json";

const SAMPLE_CSV = `section,spec
Foundation,Concrete strength must exceed 30 MPa
Roofing,Use fire-resistant materials
Electrical,Wiring should comply with NEC 2020 standards
Plumbing,Install water-saving fixtures
`;

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

function csvToJson(csv: string): ComplianceRow[] {
  const lines = csv.trim().split("\n");
  return lines.slice(1).map((line) => {
    const [section, spec] = line.split(",");
    return { section, spec, compliant: false };
  });
}

export default function ComplianceUploads() {
  const [data, setData] = useState<ComplianceRow[]>(csvToJson(SAMPLE_CSV));
  const [keywords, setKeywords] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "compliant" | "noncompliant">("all");
  const [animatedCompliance, setAnimatedCompliance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setData((old) =>
      old.map((row) => ({
        ...row,
        compliant: checkCompliance(row.spec),
      }))
    );
  }, [keywords]);

  const complianceRate =
    data.length > 0 ? (data.filter((d) => d.compliant).length / data.length) * 100 : 0;

  useEffect(() => {
    let frame: number;
    let progress = animatedCompliance;

    const animate = () => {
      progress += (complianceRate - progress) * 0.05;
      if (Math.abs(progress - complianceRate) < 0.1) {
        setAnimatedCompliance(complianceRate);
        cancelAnimationFrame(frame);
        return;
      }
      setAnimatedCompliance(parseFloat(progress.toFixed(1)));
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [complianceRate]);

  useEffect(() => {
    const runOrbit = async () => {
      await controls.start({
        x: ["0%", "-50%", "-50%", "50%", "60%", "50%", "0%"],
        y: ["-40%", "0%", "100%", "60%", "20%", "-20%", "-40%"],
        scale: [1, 0.9, 0.8, 0.8, 0.9, 1, 1],
        rotateX: [0, 90, 180, 270, 360],
        rotateY: [0, 180, 270, 360, 0],
        transition: { duration: 6, ease: "easeInOut" },
      });
    };

    runOrbit();
    const interval = setInterval(runOrbit, 30000);
    return () => clearInterval(interval);
  }, [controls]);

  function checkCompliance(spec: string): boolean {
    if (!spec || spec.length < 10) return false;
    if (keywords.length === 0) return true;
    const lowerSpec = spec.toLowerCase();
    return keywords.some((kw) => lowerSpec.includes(kw.toLowerCase()));
  }

  const filteredData = data.filter((row) => {
    if (filter === "compliant") return row.compliant;
    if (filter === "noncompliant") return !row.compliant;
    return true;
  });

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT PHASE CARD */}
        <div className="bg-[#111827] p-8 rounded-3xl shadow-xl border border-gray-700 relative">
          <motion.div
            animate={controls}
            className="absolute left-1/2 -top-10 w-14 h-14 sm:w-16 sm:h-16 -translate-x-1/2 z-20"
          >
            <Lottie animationData={animationData} loop autoplay />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Construction Compliance Upload
          </h2>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setData(csvToJson(reader.result));
                }
              };
              reader.readAsText(file);
            }}
            className="w-full mb-4 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          />
          <input
            type="text"
            placeholder="Compliance keywords (comma-separated)"
            onChange={(e) =>
              setKeywords(
                e.target.value.split(",").map((kw) => kw.trim()).filter(Boolean)
              )
            }
            className="w-full mb-4 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="w-full mb-6 border border-gray-700 p-3 rounded bg-gray-900 text-white"
          >
            <option value="all">All</option>
            <option value="compliant">✅ Compliant</option>
            <option value="noncompliant">❌ Non-compliant</option>
          </select>
          <p className="text-center text-white text-lg font-semibold">
            ✅ Compliance Rate:{" "}
            <span className="text-green-400">{animatedCompliance.toFixed(1)}%</span>
          </p>
        </div>

        {/* RIGHT COMPLIANCE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredData.map((row, i) => (
            <Button
              key={i}
              duration={Math.floor(Math.random() * 6000) + 8000}
              borderRadius="1.75rem"
              containerClassName="w-full h-full"
              className="p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: row.compliant
                  ? "linear-gradient(135deg, #166534 0%, #0f172a 100%)"
                  : "linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-purple-300"
                whileHover={{ scale: 1.05, color: "#e9d5ff" }}
              >
                {row.section}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2" whileHover={{ opacity: 0.9 }}>
                {row.spec}
              </motion.p>
              <motion.p className="mt-2 font-medium" whileHover={{ scale: 1.03 }}>
                Status:{" "}
                {row.compliant ? (
                  <span className="text-green-300">✅ Compliant</span>
                ) : (
                  <span className="text-red-300">❌ Non-compliant</span>
                )}
              </motion.p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}



