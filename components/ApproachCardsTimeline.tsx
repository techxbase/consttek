// components/ApproachCardsTimeline.tsx
import React, { useState, useEffect } from "react";

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

export default function ApproachCardsTimeline() {
  const [phases, setPhases] = useState<Phase[]>(SAMPLE_PHASES);

  // Calculate overall weighted progress
  const totalDuration = phases.reduce((acc, p) => {
    const start = new Date(p.startDate).getTime();
    const end = new Date(p.endDate).getTime();
    return acc + (end - start);
  }, 0);

  const weightedProgress =
    totalDuration > 0
      ? phases.reduce((acc, p) => {
          const start = new Date(p.startDate).getTime();
          const end = new Date(p.endDate).getTime();
          return acc + (p.progress * (end - start));
        }, 0) / totalDuration
      : 0;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">📊 Phase-Based Development Timeline</h2>
      <p className="mb-6 text-center text-gray-700">
        Timeline phases visualized as cards. Shows progress, cash flow, and dates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((p, i) => {
          const durationDays = (new Date(p.endDate).getTime() - new Date(p.startDate).getTime()) / (1000 * 60 * 60 * 24);
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2">{p.phase}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {new Date(p.startDate).toLocaleDateString()} - {new Date(p.endDate).toLocaleDateString()}
              </p>
              <div className="mb-3">
                <label className="block text-gray-700 font-medium mb-1">Progress</label>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm">{p.progress}%</p>
              </div>
              <div className="mb-2 text-gray-700">
                <p>Cash Out: ${p.cashOut.toLocaleString()}</p>
                <p>Cash In: ${p.cashIn.toLocaleString()}</p>
              </div>
              <p className="text-xs text-gray-500">Duration: {Math.round(durationDays)} days</p>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-center font-semibold">
        Overall Weighted Progress: {weightedProgress.toFixed(1)}%
      </p>
    </section>
  );
}
