import React from 'react';
import { Plus } from 'lucide-react';
import StatsCardsAndChart from '../components/landing/StatsCardsAndChart';
import ReportHistoryTable from '../components/landing/ReportHistoryTable';

// Main Dashboard Page Component
const DashboardPage = () => {
  return (
    <div className="p-2 max-w-screen-2xl mx-auto">
      <StatsCardsAndChart />
      <ReportHistoryTable />
    </div>
  );
};

export default DashboardPage;