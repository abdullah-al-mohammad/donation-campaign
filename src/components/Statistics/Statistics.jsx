import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const dataForDonating = [
  { name: 'Health', value: 74.97 },
  { name: 'Education', value: 104.97 },
  { name: 'Clothing', value: 134.97 },
  { name: 'Food', value: 44.97 },
];

const dataForNotDonating = [
  { name: 'Lack of Trust', value: 30 },
  { name: 'Lack of Funds', value: 50 },
  { name: 'Lack of Awareness', value: 10 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#0052FF', '#FF444A', '#79C23F', '#F87147'];
const COLORS_NOT_DONATING = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

const PieCharts = () => {
  return (
    <div className='flex justify-center align-middle mt-32'>
      <h2>Reasons for Donating</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={dataForDonating}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value }) => `${name}: $${value.toFixed(2)}`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {dataForDonating.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <Legend />
      </PieChart>

      <h2>Reasons for Not Donating</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={dataForNotDonating}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}%`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {dataForNotDonating.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS_NOT_DONATING[index % COLORS_NOT_DONATING.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieCharts;