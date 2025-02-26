import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CustomerDashboard from "./pages/CustomerDashboard";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/customerDasboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customerDasboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
