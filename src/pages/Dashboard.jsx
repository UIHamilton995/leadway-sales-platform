import Sidebar from '../components/landing/Sidebar';
import Navbar from '../components/landing/Navbar';
import DashboardHeader from '../components/landing/DashboardHeader'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 w-52 h-screen border-r border-gray-200 bg-white z-10">
        <Sidebar />
      </div>

      {/* Main Content with Fixed Navbar */}
      <div className="flex-1 ml-52"> {/* Add left margin to account for the fixed sidebar */}
        <div className="fixed top-0 left-52 w-[calc(100%-208px)] border-b border-gray-200 bg-white z-10">
          <Navbar />
        </div>
        <main className="mt-16 p-4 bg-slate-200 min-h-screen"> {/* Add top margin to account for the fixed navbar */}
          <DashboardHeader />
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;