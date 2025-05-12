import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import DashboardNavigations from "./routes/DashboardNavigations";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard/*" element={<DashboardNavigations />} />        
      </Routes>
    </Router>
  )
}

export default App;