import React from 'react';

interface Metric {
  title: string;
  value: string | number;
  change: string; // e.g., "↑ 16% this month"
  icon: React.ReactNode; // JSX for the icon
}

interface MetricsSectionProps {
  metrics: Metric[];
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3">
      <div className="flex flex-wrap gap-8 justify-around">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-center space-x-14 bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            {/* Icon */}
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              {metric.icon}
            </div>

            {/* Content */}
            <div>
              {/* Title */}
              <p className="text-sm font-medium text-gray-500">{metric.title}</p>

              {/* Value */}
              <p className="text-xl font-bold text-gray-900">{metric.value}</p>

              {/* Change */}
              <p
                className={`text-xs font-semibold ${
                  metric.change.startsWith('↑') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {metric.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;