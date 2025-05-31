// components/SatisfiedClientsCarousel.tsx
import React from "react";

type ComplianceSummary = {
  section: string;
  compliant: boolean;
};

type Props = {
  data: ComplianceSummary[];
};

export default function SatisfiedClientsCarousel({ data }: Props) {
  // A simple manual carousel - for brevity no slider library, but you can integrate one
  const [index, setIndex] = React.useState(0);
  const len = data.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 4000);
    return () => clearInterval(interval);
  }, [len]);

  if (len === 0) return <p>No compliance data to display</p>;

  const current = data[index];

  return (
    <section className="p-6 bg-gray-900 text-white rounded-md max-w-xl mx-auto shadow-md">
      <h2 className="text-2xl mb-4 font-bold text-center">💼 Satisfied Clients Compliance Highlights</h2>
      <div className="text-center">
        <p className="text-lg font-semibold">{current.section}</p>
        <p className="text-xl mt-2">
          Status:{" "}
          <span className={current.compliant ? "text-green-400" : "text-red-400"}>
            {current.compliant ? "✅ Compliant" : "❌ Non-compliant"}
          </span>
        </p>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={() => setIndex((index - 1 + len) % len)}
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          aria-label="Previous"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex((index + 1) % len)}
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          aria-label="Next"
        >
          Next
        </button>
      </div>
    </section>
  );
}
