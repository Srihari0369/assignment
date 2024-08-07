import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', uv: 4000 },
  { name: '6', uv: 3000 },
  { name: '7', uv: 2000 },
  { name: '8', uv: 2780 },
  { name: '9', uv: 1890 },
  { name: '10', uv: 2390 },
  { name: '11', uv: 3490 },
  { name: '12', uv: 4000 },
  { name: '13', uv: 3000 },
  { name: '14', uv: 2000 },
  { name: '15', uv: 2780 },
  { name: '16', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '18', uv: 3490 },
  { name: '19', uv: 4000 },
  { name: '20', uv: 3000 },
  { name: '21', uv: 2000 },
  { name: '22', uv: 2780 },
  { name: '23', uv: 1890 },
  { name: '24', uv: 2390 },
  { name: '25', uv: 3490 },
];

const ActivityChart = () => {
  return (
    <ResponsiveContainer width="150%" height={300} >
      <LineChart data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
