import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Profile from './components/Profile'; // Import the Profile component
import Settings from './components/Settings'; // Import the Settings component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
        <Route path="/settings" element={<Settings />} /> {/* Add Settings route */}
      </Routes>
    </Router>
  );
};

export default App;