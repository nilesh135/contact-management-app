import React from 'react';
import { Line } from 'react-chartjs-2';
const ChartsDashboard: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Cases',
        data: [100, 150, 200, 180, 220, 250],
        borderColor: 'blue',
        fill: false,
      },
      // Add more datasets for recovered and deaths
    ],
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Charts Dashboard</h2>
      <div className="w-full md:w-2/3 mx-auto">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ChartsDashboard;
