import React from 'react';
import { LayoutGrid, LineChart, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-52 h-full bg-white border border-black/5 flex flex-col">
      {/* Logo */}
      <div className="p-2 mb-8 ml-3 w-40">
        <div className="flex items-center">
          <img src="/LeadwayLogo.svg" alt="Leadway Health Logo" className="h-12" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4 px-4">
        {/* Dashboard - Active Item */}
        <a 
          href="#" 
          className="flex items-center p-3 rounded-md bg-rose-50 text-rose-500 font-medium"
        >
          <LayoutGrid className="mr-3 h-5 w-5" />
          <span>Dashboard</span>
        </a>

        {/* Reports */}
        <a 
          href="#" 
          className="flex items-center p-3 rounded-md text-gray-800 hover:bg-gray-100 font-medium"
        >
          <LineChart className="mr-3 h-5 w-5" />
          <span>Reports</span>
        </a>

        {/* Users */}
        <a 
          href="#" 
          className="flex items-center p-3 rounded-md text-gray-800 hover:bg-gray-100 font-medium"
        >
          <Users className="mr-3 h-5 w-5" />
          <span>Users</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;