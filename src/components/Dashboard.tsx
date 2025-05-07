import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { email } = location.state || {}; // Retrieve email from navigation state

  return (
    <Layout>
      <h1>Welcome to Your Dashboard</h1>
      {email && <p>Logged in as: {email}</p>}
    </Layout>
  );
};

export default Dashboard;