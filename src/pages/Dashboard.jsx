import Sidebar from '../components/landing/Sidebar';
import Navbar from '../components/landing/Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-52 border-r border-gray-200">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-grow p-4 bg-slate-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;