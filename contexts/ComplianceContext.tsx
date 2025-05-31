// app/contexts/ComplianceContext.tsx

"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type ComplianceRow = {
  section: string;
  spec: string;
  compliant: boolean;
};

type ComplianceContextType = {
  data: ComplianceRow[];
  setData: React.Dispatch<React.SetStateAction<ComplianceRow[]>>;
};

const SAMPLE_DATA: ComplianceRow[] = [
  { section: "Foundation", spec: "Concrete strength must exceed 30 MPa", compliant: true },
  { section: "Roofing", spec: "Use fire-resistant materials", compliant: true },
  { section: "Electrical", spec: "Wiring should comply with NEC 2020 standards", compliant: false },
  { section: "Plumbing", spec: "Install water-saving fixtures", compliant: true },
  { section: "HVAC", spec: "System must meet SEER 16 rating", compliant: false },
  { section: "Insulation", spec: "Must meet R-38 in attic spaces", compliant: true },
];

export const ComplianceContext = createContext<ComplianceContextType>({
  data: SAMPLE_DATA,
  setData: () => {},
});

export const useCompliance = () => useContext(ComplianceContext);

export const ComplianceProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ComplianceRow[]>(SAMPLE_DATA);

  return (
    <ComplianceContext.Provider value={{ data, setData }}>
      {children}
    </ComplianceContext.Provider>
  );
};
