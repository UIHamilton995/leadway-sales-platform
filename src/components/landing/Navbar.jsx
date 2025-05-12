import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-300 shadow-sm py-3 px-6 flex items-center justify-between">
      {/* Left side - Dashboard Title */}
      <div>
        <h1 className="text-3xl font-medium text-gray-800">Dashboard</h1>
      </div>
      
      {/* Right side - Search, Settings, Notifications, Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search for something" 
              className="bg-transparent border-none outline-none text-gray-600 w-full"
            />
          </div>
        </div>
        
        {/* Settings Button */}
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
          <Settings className="h-5 w-5" />
        </button>
        
        {/* Notifications Button */}
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* Profile Avatar */}
        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-purple-100">
          <img 
            src="/api/placeholder/100/100" 
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;