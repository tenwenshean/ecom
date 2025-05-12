import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const [email, setEmail] = useState<string | null>(null);

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

  return (
    <Layout>
    <div className="dashboard-content">
      <h1>Welcome to Your Dashboard</h1>
      {email && <p>Logged in as: {email}</p>}
    </div>
    </Layout>
  );
};

export default Dashboard;