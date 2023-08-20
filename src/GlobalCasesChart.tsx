import React from 'react';
import { useQuery } from 'react-query';

const GlobalCasesChart: React.FC = () => {
  const { data: historicalData } = useQuery('historicalData', async () => {
    const response = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    const data = await response.json();
    return data;
  });

  // ... rest of the component
};

export default GlobalCasesChart;

import React from 'react';
import { useQuery } from 'react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GlobalCasesChart: React.FC = () => {
  const { data: historicalData } = useQuery('historicalData', async () => {
    // Fetch historical data...
  });

  if (!historicalData) {
    return <div>Loading...</div>;
  }

  const dataPoints = Object.entries(historicalData.cases).map(([date, value]) => ({
    date: new Date(date).toLocaleDateString(),
    cases: value,
  }));

  return (
    <div>
      <h2>Global Cases Fluctuations</h2>
      <LineChart width={800} height={400} data={dataPoints}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default GlobalCasesChart;
