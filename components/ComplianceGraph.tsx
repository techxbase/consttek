/* /* "use client";

import React, { useContext } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { ComplianceContext } from "../contexts/ComplianceContext";

const ComplianceGraphs = () => {
  const { complianceData } = useContext(ComplianceContext);

  if (!complianceData || complianceData.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">
        Upload a file or query the chatbot to see visualized data.
      </div>
    );
  }

  return (
    <section className="w-full py-20 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">📊 Compliance Visualizations</h2>

      {/* 1. Phase-wise Progress }
      <div className="mb-16">
        <h3 className="text-xl mb-4 font-semibold text-center">Phase Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={complianceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. Cash Flow }
      <div className="mb-16">
        <h3 className="text-xl mb-4 font-semibold text-center">Cash In vs Cash Out</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={complianceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="cashIn" fill="#6366f1" name="Cash In" />
            <Bar dataKey="cashOut" fill="#ef4444" name="Cash Out" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. Duration-based Area Chart }
      <div className="mb-16">
        <h3 className="text-xl mb-4 font-semibold text-center">Phase Duration</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={complianceData.map(phase => ({
            ...phase,
            duration:
              (new Date(phase.endDate).getTime() -
                new Date(phase.startDate).getTime()) /
              (1000 * 60 * 60 * 24),
          }))}>
            <defs>
              <linearGradient id="colorDur" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="duration"
              stroke="#facc15"
              fillOpacity={1}
              fill="url(#colorDur)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ComplianceGraphs;
 */
 
 
 
 //----
 
 "use client";

import React, { useContext } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { ComplianceContext } from "../contexts/ComplianceContext";

// Fallback sample data
const SAMPLE_DATA = [
  {
    phase: "Pre-construction",
    progress: 75,
    cashIn: 20000,
    cashOut: 100000,
    startDate: "2025-01-01",
    endDate: "2025-03-31",
  },
  {
    phase: "Construction",
    progress: 30,
    cashIn: 50000,
    cashOut: 300000,
    startDate: "2025-04-01",
    endDate: "2025-09-30",
  },
  {
    phase: "Sales",
    progress: 0,
    cashIn: 150000,
    cashOut: 50000,
    startDate: "2025-10-01",
    endDate: "2025-12-31",
  },
  {
    phase: "Stabilization",
    progress: 0,
    cashIn: 100000,
    cashOut: 20000,
    startDate: "2026-01-01",
    endDate: "2026-06-30",
  },
];

const ComplianceGraphs = () => {
  const { data: complianceData } = useContext(ComplianceContext);
  const data = complianceData && complianceData.length > 0 ? complianceData : SAMPLE_DATA;
	
  return (
    <section className="w-full py-20 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">📊 Compliance Visualizations</h2>

      {/* 1. Phase Progress */}
      <div className="mb-16">
        <h3 className="text-xl mb-4 font-semibold text-center">Phase Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. Cash In vs Cash Out */}
      <div className="mb-16">
        <h3 className="text-xl mb-4 font-semibold text-center">Cash In vs Cash Out</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="cashIn" fill="#6366f1" name="Cash In" />
            <Bar dataKey="cashOut" fill="#ef4444" name="Cash Out" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. Phase Duration */}
      <div className="mb-16">
        <h3 className="text-xl mb-4 font-semibold text-center">Phase Duration</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data.map((phase) => ({
              ...phase,
				duration:
				(new Date((phase as { startDate: string; endDate: string }).endDate).getTime() -
				new Date((phase as { startDate: string; endDate: string }).startDate).getTime()) /
				(1000 * 60 * 60 * 24),
              /* duration:
                (new Date(phase.endDate).getTime() - new Date(phase.startDate).getTime()) /
                (1000 * 60 * 60 * 24), */
            }))}
          >
            <defs>
              <linearGradient id="colorDur" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="duration"
              stroke="#facc15"
              fillOpacity={1}
              fill="url(#colorDur)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ComplianceGraphs;
 