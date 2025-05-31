/* /* import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const CONSTRUCTION_PHASES = [
  {
    title: "Pre-construction",
    description:
      "Initial planning, permits, and budgeting phase where foundational work is outlined.",
  },
  {
    title: "Construction",
    description:
      "Execution of building plans including structural, electrical, and plumbing systems.",
  },
  {
    title: "Sales",
    description:
      "Marketing and selling of units begins with outreach and property showings.",
  },
  {
    title: "Stabilization",
    description:
      "Project wraps up, tenants move in, and revenue stabilizes for long-term operation.",
  },
];

const ConstructionPhaseCards = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Project <span className="text-purple">phases</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {CONSTRUCTION_PHASES.map((phase, index) => (
          <Card
            key={index}
            title={phase.title}
            des={phase.description}
            icon={<AceternityIcon order={`Phase ${index + 1}`} />}
          >
            <CanvasRevealEffect
              animationSpeed={3.5 + index}
              containerClassName="bg-slate-800 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
              dotSize={2}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConstructionPhaseCards;

const Card = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200" style={{ color: "#E4ECFF" }}>
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
 */
 
 
 //------
 /*
 "use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const CONSTRUCTION_PHASES = [
  {
    title: "Pre-construction",
    description:
      "Initial planning, permits, and budgeting phase where foundational work is outlined.",
  },
  {
    title: "Construction",
    description:
      "Execution of building plans including structural, electrical, and plumbing systems.",
  },
  {
    title: "Sales",
    description:
      "Marketing and selling of units begins with outreach and property showings.",
  },
  {
    title: "Stabilization",
    description:
      "Project wraps up, tenants move in, and revenue stabilizes for long-term operation.",
  },
];

const ConstructionPhaseCards = () => {
  return (
    <section id="phase-cards" className="w-full py-20">
      <h1 className="heading">
        Project <span className="text-purple">Phases</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {CONSTRUCTION_PHASES.map((phase, index) => (
          <Card
            key={index}
            title={phase.title}
            des={phase.description}
            icon={<AceternityIcon order={`Phase ${index + 1}`} />}
          >
            <CanvasRevealEffect
              animationSpeed={3.5 + index}
              containerClassName="bg-slate-800 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
              dotSize={2}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConstructionPhaseCards;

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  des: string;
}


const Card: React.FC<CardProps>  = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 transition-shadow"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 opacity-10" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 opacity-10" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 opacity-10" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 opacity-10" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 text-center">
        <div className="group-hover/canvas-card:opacity-0 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition duration-200">
          {icon}
        </div>
        <h2 className="text-white text-3xl font-bold mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 group-hover/canvas-card:-translate-y-2">
          {title}
        </h2>
        <p className="text-sm text-slate-300 mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 group-hover/canvas-card:-translate-y-2">
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
 */
 
 //-----
 
 "use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const CONSTRUCTION_PHASES = [
  {
    title: "Pre-construction",
    description:
      "Initial planning, permits, and budgeting phase where foundational work is outlined.",
  },
  {
    title: "Construction",
    description:
      "Execution of building plans including structural, electrical, and plumbing systems.",
  },
  {
    title: "Sales",
    description:
      "Marketing and selling of units begins with outreach and property showings.",
  },
  {
    title: "Stabilization",
    description:
      "Project wraps up, tenants move in, and revenue stabilizes for long-term operation.",
  },
];

const ConstructionPhaseCards: React.FC = () => {
  return (
    <section id="phase-cards" className="w-full py-20">
      <h1 className="heading">
        Project <span className="text-purple">Phases</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {CONSTRUCTION_PHASES.map((phase, index) => (
          <Card
            key={index}
            title={phase.title}
            des={phase.description}
            icon={<AceternityIcon order={`Phase ${index + 1}`} />}
          >
            <CanvasRevealEffect
              animationSpeed={3.5 + index}
              containerClassName="bg-slate-800 rounded-3xl overflow-hidden"
              colors={[[125, 211, 252]]}
              dotSize={2}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConstructionPhaseCards;

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  des: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 transition-shadow"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 opacity-10" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 opacity-10" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 opacity-10" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 opacity-10" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 text-center">
        <div className="group-hover/canvas-card:opacity-0 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition duration-200">
          {icon}
        </div>
        <h2 className="text-white text-3xl font-bold mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 group-hover/canvas-card:-translate-y-2">
          {title}
        </h2>
        <p className="text-sm text-slate-300 mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 group-hover/canvas-card:-translate-y-2">
          {des}
        </p>
      </div>
    </div>
  );
};

interface AceternityIconProps {
  order: string;
}

const AceternityIcon: React.FC<AceternityIconProps> = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
