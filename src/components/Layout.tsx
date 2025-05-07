import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBox } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Reuse the same CSS for the sidebar

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session or state if needed
    localStorage.removeItem('user'); // Example: Clear user data from localStorage
    navigate('/'); // Redirect to the login page
  };

  const goToProducts = () => {
    navigate('/products'); // Redirect to the products page
  };

  const goToDashboard = () => {
    navigate('/dashboard'); // Redirect to the dashboard page
  };

  const goToProfile = () => {
    navigate('/profile'); // Redirect to the profile page
  };

  const goToSettings = () => {
    navigate('/settings'); // Redirect to the settings page
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={goToDashboard} style={{ cursor: 'pointer' }}>
            <FaHome size={24} /> {/* Home Icon */}
          </li>
          <li onClick={goToProfile} style={{ cursor: 'pointer' }}>
            <FaUser size={24} /> {/* Profile Icon */}
          </li>
          <li onClick={goToSettings} style={{ cursor: 'pointer' }}>
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
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default Layout;