'use client';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 3000, 5000, 20000, 30000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function LineChart() {
  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Revenue Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
}
