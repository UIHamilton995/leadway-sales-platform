import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Header with welcome message and button
const DashboardHeader = ({ username }) => {
  return (
    <div className="flex justify-between items-center px-3">
      <h2 className="text-xl font-medium">
        Welcome <span className="text-rose-500">Favour</span> - What would you like to do today?
      </h2>
      <Link to=''>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center mb-2">
          <Plus className="w-5 h-5 mr-2" />
          Create New Report
        </button>
      </Link>  
    </div>
  );
};

export default DashboardHeader;