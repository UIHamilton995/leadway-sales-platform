import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';


// Stats Cards and Chart Component
const StatsCardsAndChart = () => {
  // Sample data for the chart
  const chartData = [
    { month: 'JAN', value: 100 },
    { month: 'FEB', value: 150 },
    { month: 'MAR', value: 140 },
    { month: 'APR', value: 230 },
    { month: 'MAY', value: 250 },
    { month: 'JUN', value: 200 },
    { month: 'JUL', value: 230 },
    { month: 'AUG', value: 100 },
    { month: 'SEP', value: 280 },
    { month: 'OCT', value: 300 },
    { month: 'NOV', value: 350 },
    { month: 'DEC', value: 400 },
  ];

  // Stats card component
  const StatsCard = ({ title, value, subvalue, chart }) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="text-gray-600 text-sm mb-1">{title}</div>
        <div className="text-3xl font-bold mb-2">{value}</div>
        {subvalue && <div className="text-gray-500 text-xs">{subvalue}</div>}
        {chart && <div className="mt-2 h-12">{chart}</div>}
      </div>
    );
  };

  // Mini line chart component for the stats cards
  const MiniLineChart = ({ color }) => {
    return (
      <div className="relative h-10">
        <svg className="w-full h-full" viewBox="0 0 100 30">
          <path
            d="M0,15 Q10,10 20,18 T40,15 T60,18 T80,12 T100,17"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
          <path
            d="M0,30 L0,15 Q10,10 20,18 T40,15 T60,18 T80,12 T100,17 L100,30 Z"
            fill={`${color}15`}
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-6 gap-2 mb-4">
      {/* Left side - 6 stats cards in a 3x2 grid */}
      <div className="col-span-3 grid grid-cols-3 gap-4">
        <StatsCard title="Active Users" value="5" subvalue="/25" />
        <StatsCard title="Total Report" value="3,298" />
        <StatsCard title="Approved Report" value="3,200" />
        
        <StatsCard 
          title="Starting Knowledge" 
          value="64%" 
          chart={<MiniLineChart color="#FF4D7D" />}
        />
        <StatsCard 
          title="Current Knowledge" 
          value="86%" 
          chart={<MiniLineChart color="#FF4D7D" />}
        />
        <StatsCard 
          title="Knowledge Gain" 
          value="+34%" 
          chart={<MiniLineChart color="#FF4D7D" />}
        />
      </div>
      
      {/* Right side - Bar chart */}
      <div className="col-span-3 bg-white rounded-lg p-2 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-600 text-sm">Report Activity</div>
          <div className="flex items-center text-sm font-medium">
            2025
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }} 
                domain={[0, 400]}
                ticks={[0, 100, 200, 300, 400]}
              />
              <Bar 
                dataKey="value" 
                fill="#FF4D7D" 
                radius={[5, 5, 0, 0]} 
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsCardsAndChart;