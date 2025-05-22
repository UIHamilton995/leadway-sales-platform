import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import Reports from "../pages/Reports";
import Users from "../pages/Users";
import ReportDetails from "../pages/ReportDetails";

const DashboardNavigations = () => {
  return (
    <Routes>
      { /* Parent route for RoleDashboard */}
      <Route path="" element={<Dashboard />}>
        <Route index element={<Homepage />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reportDetails" element={<ReportDetails />} />
      </Route>    
    </Routes>   
  )
}

export default DashboardNavigations