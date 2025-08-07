"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import DataTable from "@/components/DataTable";

export default function DashboardPage() {
  const { theme, toggleTheme } = useTheme();
  const [metrics, setMetrics] = useState({ revenue: 0, users: 0, conversions: 0, growth: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        revenue: Math.floor(Math.random() * 100000),
        users: Math.floor(Math.random() * 5000),
        conversions: Math.floor(Math.random() * 1000),
        growth: parseFloat((Math.random() * 10).toFixed(2)),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metricCards = [
    { label: "Revenue", value: `$${metrics.revenue.toLocaleString()}` },
    { label: "Users", value: metrics.users.toLocaleString() },
    { label: "Conversions", value: metrics.conversions },
    { label: "Growth %", value: `${metrics.growth}%` },
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ADmyBRAND Insights</h1>
        <button 
          onClick={toggleTheme} 
          className="px-4 py-2 rounded bg-gray-800 dark:bg-gray-200 text-white dark:text-black shadow"
        >
          {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metricCards.map((card, idx) => (
          <div key={idx} className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow hover:scale-105 transition-transform">
            <p className="text-sm text-gray-500 dark:text-gray-400">{card.label}</p>
            <p className="text-2xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <LineChart />
        <BarChart />
        <PieChart />
      </div>

      <DataTable />
    </main>
  );
}
