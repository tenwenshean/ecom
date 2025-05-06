import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
