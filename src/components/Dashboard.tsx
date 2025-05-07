import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBox } from 'react-icons/fa'; // Import icons
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // React Router hook for navigation
  const { email } = location.state || {}; // Retrieve email from navigation state

  const handleLogout = () => {
    // Clear any session or state if needed
    navigate('/'); // Redirect to the login page
  };

  const goToProducts = () => {
    navigate('/products'); // Redirect to the products page
  };

  const goToDashboard = () => {
    navigate('/dashboard'); // Redirect to the dashboard page
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={goToDashboard} style={{ cursor: 'pointer' }}>
            <FaHome size={24} /> {/* Home Icon */}
          </li>
          <li>
            <FaUser size={24} /> {/* Profile Icon */}
          </li>
          <li>
            <FaCog size={24} /> {/* Settings Icon */}
          </li>
          <li onClick={goToProducts} style={{ cursor: 'pointer' }}>
            <FaBox size={24} /> {/* Products Icon */}
          </li>
          <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <FaSignOutAlt size={24} /> {/* Logout Icon */}
          </li>
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