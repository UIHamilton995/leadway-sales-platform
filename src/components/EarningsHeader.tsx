import React from 'react';
import MetricsSection from './MetricsSection';

const EarningsHeader = () => {
  const metrics = [
    {
      title: 'Total Report',
      value: '5,423',
      change: '↑ 16% this month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'Users',
      value: '1,893',
      change: '↓ 1% this month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM3.854 6.854a4 4 0 015.778-5.778A4 4 0 0114.146 6l-.001 5.002a4 4 0 01-5.777 5.777A4 4 0 013.853 14l.001-5.002z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V6a2 2 0 012-2h2a2 2 0 012 2v4h.001M8 12h.001M12 8h.001M8 16h.001M16 12h.001M8 6h.001M16 14.015v0.985a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v1.015m6 0a2 2 0 012 2h2a2 2 0 01-2 2v1.015m-4-4H6a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v1.015m4-1.015v.015m12 0a2 2 0 012 2v1.015m-4 0a2 2 0 01-2 2v1.015m4-4v1.015" />
        </svg>
      ),
    },
    {
      title: 'Active Report',
      value: '189',
      change: '↓ 1% this month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Inactive Report',
      value: '189',
      change: '↓ 1% this month',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-3">
      <MetricsSection metrics={metrics} />
    </div>
  );
};

export default EarningsHeader