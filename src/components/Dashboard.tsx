import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { email } = location.state || {}; // Retrieve email from navigation state

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        {email && <p>Logged in as: {email}</p>}
      </div>
    </div>
  );
};

export default Dashboard;