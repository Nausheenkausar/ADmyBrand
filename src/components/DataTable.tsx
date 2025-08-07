"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import Papa from "papaparse";

const mockData = [
  { campaign: "Google Ads", clicks: 1200, conversions: 300, revenue: 5000 },
  { campaign: "Facebook Ads", clicks: 800, conversions: 200, revenue: 3200 },
  { campaign: "LinkedIn Ads", clicks: 500, conversions: 120, revenue: 2000 },
];

export default function DataTable() {
  const [filter, setFilter] = useState("");
  const filtered = mockData.filter(row =>
    row.campaign.toLowerCase().includes(filter.toLowerCase())
  );

  const exportCSV = () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "campaigns.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Campaign Report", 10, 10);
    filtered.forEach((row, idx) => {
      doc.text(
        `${row.campaign} | Clicks: ${row.clicks} | Conversions: ${row.conversions} | Revenue: $${row.revenue}`,
        10,
        20 + idx * 10
      );
    });
    doc.save("campaigns.pdf");
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Campaigns</h2>
        <div className="space-x-2">
          <button onClick={exportCSV} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Export CSV</button>
          <button onClick={exportPDF} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Export PDF</button>
        </div>
      </div>
      <input
        className="border p-2 mb-4 w-full dark:bg-zinc-700"
        placeholder="Filter campaigns..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2 px-3">Campaign</th>
            <th className="py-2 px-3">Clicks</th>
            <th className="py-2 px-3">Conversions</th>
            <th className="py-2 px-3">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-3">{row.campaign}</td>
              <td className="py-2 px-3">{row.clicks}</td>
              <td className="py-2 px-3">{row.conversions}</td>
              <td className="py-2 px-3">${row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
