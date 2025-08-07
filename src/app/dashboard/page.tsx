// src/app/dashboard/page.tsx
import LineChart from '@/components/LineChart'; // Make sure this path is correct

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <LineChart />
    </div>
  );
}
