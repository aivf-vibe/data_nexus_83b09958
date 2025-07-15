'use client';

import { Card, Title } from "@tremor/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', value: 1000000 },
  { date: 'Feb', value: 1200000 },
  { date: 'Mar', value: 1100000 },
  { date: 'Apr', value: 1400000 },
  { date: 'May', value: 1600000 },
  { date: 'Jun', value: 1500000 },
  { date: 'Jul', value: 1800000 },
];

const PortfolioChart = () => {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <Title className="text-white mb-4">Portfolio Performance</Title>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '0.5rem',
                color: '#fff'
              }}
              formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, 'Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PortfolioChart;