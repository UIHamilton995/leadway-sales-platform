import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";

const DashboardNavigations = () => {
  return (
    <Routes>
      { /* Parent route for RoleDashboard */}
      <Route path="" element={<Dashboard />}>
        <Route index element={<Homepage />} />
      </Route>    
    </Routes>   
  )
}

export default DashboardNavigations