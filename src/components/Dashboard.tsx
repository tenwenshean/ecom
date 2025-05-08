import React, { useEffect, useState } from 'react'; // Added useState import
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBox } from 'react-icons/fa'; // Import icons
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // React Router hook for navigation
  const [email, setEmail] = useState<string | null>(null); // Manage email state locally

  useEffect(() => {
    // Retrieve email from location.state or localStorage
    const emailFromState = location.state?.email;
    if (emailFromState) {
      setEmail(emailFromState);
      localStorage.setItem('email', emailFromState); // Save email to localStorage
    } else {
      const emailFromStorage = localStorage.getItem('email');
      setEmail(emailFromStorage); // Retrieve email from localStorage
    }
  }, [location.state]);

  const handleLogout = () => {
    // Clear any session or state if needed
    localStorage.removeItem('email'); // Clear email from localStorage
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
      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        {email && <p>Logged in as: {email}</p>}
      </div>
    </div>
  );
};

export default Dashboard;