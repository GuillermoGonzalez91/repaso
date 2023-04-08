import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '06',
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '07',
    uv: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '08',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '09',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '10',
    uv: 3000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '11',
    uv: 4000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '12',
    uv: 5000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '06',
    uv: 6000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '07',
    uv: 7000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '08',
    uv: 9000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '09',
    uv: 10000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '10',
    uv: 11000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '11',
    uv: 12000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '12',
    uv: 12500,
    pv: 4300,
    amt: 2100,
  },
];


const producto1 = [
  {cantidad: 1000},
  {cantidad: 2000},
  {cantidad: 3000},
  {cantidad: 4000},
  {cantidad: 5000},
  {cantidad: 6000},
  {cantidad: 7000},
  {cantidad: 8000},
  {cantidad: 9000},
  {cantidad: 10000},
  {cantidad: 11000},
  {cantidad: 12000},
  {cantidad: 13000}
];


const horas = [
  {hora: 6},
  {hora: 7},
  {hora: 8},
  {hora: 9},
  {hora: 10},
  {hora: 11},
  {hora: 12},
  {hora: 13},
  {hora: 14},
  {hora: 15},
  {hora: 16},
  {hora: 17},
  {hora: 18},
]

  const datos = horas.map((item, index) => ({
    hora: item.hora,
    cantidad: producto1[index].cantidad,
    dato3: '',
    dato4: ''
  }));

const Example = () => {

  return (
    <div style={{ width: '100%' }}>
      <h4>A demo of synchronized AreaCharts</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={datos}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="horas" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cantidad" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <p>Maybe some other content</p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={datos}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cantidad" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="horas" stroke="#82ca9d" fill="#82ca9d" />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
