import React, { useCallback, useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBox } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastNavigation, setLastNavigation] = useState({
    path: null as string | null,
    timestamp: 0
  });

  // Optimized navigation function with prevention of duplicate/rapid navigations
  const safeNavigate = useCallback((path: string) => {
    const currentTime = Date.now();

    // Prevent navigation to current path
    if (path === location.pathname) {
      return;
    }

    // Prevent rapid duplicate navigations
    if (
      path === lastNavigation.path && 
      currentTime - lastNavigation.timestamp < 300
    ) {
      return;
    }

    // Navigate with replace to manage history stack
    navigate(path, { 
      replace: location.pathname === path 
    });

    // Update last navigation state
    setLastNavigation({ path, timestamp: currentTime });
  }, [navigate, location.pathname, lastNavigation]);

  // Memoized navigation handlers
  const handleLogout = useCallback(() => {
    // Clear any session or state if needed
    localStorage.removeItem('user'); // Example: Clear user data from localStorage
    safeNavigate('/'); // Redirect to the login page
  }, [safeNavigate]);

  const goToProducts = useCallback(() => {
    safeNavigate('/products');
  }, [safeNavigate]);

  const goToDashboard = useCallback(() => {
    safeNavigate('/dashboard');
  }, [safeNavigate]);

  const goToProfile = useCallback(() => {
    safeNavigate('/profile');
  }, [safeNavigate]);

  const goToSettings = useCallback(() => {
    safeNavigate('/settings');
  }, [safeNavigate]);

  // Render sidebar menu items with active state
  const renderMenuItem = (
  icon: React.ReactNode,
  label: string,
  path: string,
  onClick: () => void
) => {
  const isActive = location.pathname === path;

  return (
    <li
      onClick={onClick}
      style={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        transition: 'background-color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '16px' // space between icon and text
      }}
      title={`Go to ${path.substring(1)}`}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          {renderMenuItem(
            <FaHome size={40} />, "Home", 
            '/dashboard', 
            goToDashboard
          )}
          {renderMenuItem(
            <FaUser size={40} />, "Profile",
            '/profile', 
            goToProfile
          )}
          {renderMenuItem(
            <FaCog size={40} />, "Settings",
            '/settings', 
            goToSettings
          )}
          {renderMenuItem(
            <FaBox size={40} />, "Products",
            '/products', 
            goToProducts
          )}
          {renderMenuItem(
            <FaSignOutAlt size={40} />, "Logout",
            '/', 
            handleLogout
          )}
        </ul>
      </div>
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default Layout;
