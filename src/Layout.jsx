import React from 'react';
import Footer from './Components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="App-header">
        {children} 
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
