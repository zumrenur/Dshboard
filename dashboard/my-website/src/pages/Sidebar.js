import React from "react";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>My App</h2>
      <a href="/dashboard">Dashboard</a>
      <a href="/customers">Customers</a>
      <a href="/settings">Settings</a>
    </div>
  );
};

export default Sidebar;