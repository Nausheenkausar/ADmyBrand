"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "Traffic Sources",
        data: [55, 35, 10],
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",  // blue
          "rgba(16, 185, 129, 0.6)",  // green
          "rgba(251, 191, 36, 0.6)",  // yellow
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(251, 191, 36, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#fff" }, // for dark mode
      },
    },
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Traffic by Device</h2>
      <Pie data={data} options={options} />
    </div>
  );
}
