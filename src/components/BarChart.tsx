"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Instagram Ads"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 3200, 2000, 4100],
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",  // blue
          "rgba(16, 185, 129, 0.6)",  // green
          "rgba(251, 191, 36, 0.6)",  // yellow
          "rgba(239, 68, 68, 0.6)",   // red
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(251, 191, 36, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { color: "#fff" }, // handles dark mode labels
      },
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff" } },
    },
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Revenue by Campaign</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
