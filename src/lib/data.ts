export const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Visitors',
      data: [200, 400, 350, 500, 600, 750],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      tension: 0.4,
      fill: true,
    },
  ],
};

export const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export const mockData = [
  { campaign: 'Facebook Ads', clicks: 1200, conversions: 60, revenue: 2300 },
  { campaign: 'Google Search', clicks: 900, conversions: 75, revenue: 3100 },
  { campaign: 'Email Blast', clicks: 500, conversions: 30, revenue: 1200 },
];
