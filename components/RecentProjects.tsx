import dynamic from 'next/dynamic';

"use client";

import React from "react";

interface Phase {
  phase: string;
  duration: number;
  [key: string]: any;
}

interface PhaseCardsProps {
  phases: Phase[];
}

const PhaseCards: React.FC<PhaseCardsProps> = ({ phases }) => {
  if (!phases || phases.length === 0) return <p>No project phases</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {phases.map((phase, idx) => (
        <div
          key={idx}
          className="p-5 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-lg font-semibold text-purple-400">{phase.phase}</h3>
          <p className="text-gray-400 mt-2">Duration: {phase.duration} days</p>
          {/* Add more fields if necessary */}
        </div>
      ))}
    </div>
  );
};

const NoSSR = dynamic(() => Promise.resolve(PhaseCards), { ssr: false });

export default NoSSR;;
