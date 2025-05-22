// import React from 'react';
// import { LayoutGrid, LineChart, Users } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <div className="w-52 h-full bg-white border border-black/5 flex flex-col">
//       {/* Logo */}
//       <div className="p-2 mb-8 ml-3 w-40">
//         <div className="flex items-center">
//           <img src="/LeadwayLogo.svg" alt="Leadway Health Logo" className="h-12" />
//         </div>
//       </div>

//       {/* Navigation Items */}
//       <nav className="flex flex-col space-y-4 px-4">
//         {/* Dashboard - Active Item */}
//         <a 
//           href="/dashboard" 
//           className="flex items-center p-3 rounded-md bg-rose-50 text-rose-500 font-medium"
//         >
//           <LayoutGrid className="mr-3 h-5 w-5" />
//           <span>Dashboard</span>
//         </a>

//         {/* Reports */}
//         <a 
//           href="/dashboard/reports" 
//           className="flex items-center p-3 rounded-md text-gray-800 hover:bg-gray-100 font-medium"
//         >
//           <LineChart className="mr-3 h-5 w-5" />
//           <span>Reports</span>
//         </a>

//         {/* Users */}
//         <a 
//           href="/dashboard/users" 
//           className="flex items-center p-3 rounded-md text-gray-800 hover:bg-gray-100 font-medium"
//         >
//           <Users className="mr-3 h-5 w-5" />
//           <span>Users</span>
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { LayoutGrid, LineChart, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
        <NavLink 
          to="/dashboard"
          end
          className={({ isActive }) => 
            `flex items-center p-3 rounded-md font-medium ${
              isActive 
                ? 'bg-rose-50 text-rose-500' 
                : 'text-gray-800 hover:bg-gray-100'
            }`
          }
        >
          <LayoutGrid className="mr-3 h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-md font-medium ${
              isActive 
                ? 'bg-rose-50 text-rose-500' 
                : 'text-gray-800 hover:bg-gray-100'
            }`
          }
        >
          <LineChart className="mr-3 h-5 w-5" />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-md font-medium ${
              isActive 
                ? 'bg-rose-50 text-rose-500' 
                : 'text-gray-800 hover:bg-gray-100'
            }`
          }
        >
          <Users className="mr-3 h-5 w-5" />
          <span>Users</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;