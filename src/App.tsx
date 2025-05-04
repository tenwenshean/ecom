import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SidebarLeft />
        <main className="flex-1 p-4">
          <MainContent />
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
};

export default App;
