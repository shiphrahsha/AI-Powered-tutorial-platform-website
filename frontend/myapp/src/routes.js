// src/routes.js
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen/HomeSplash';
import AuthPage from './components/pages/AuthPage';
import HomePage from '../src/components/pages/HomePage';

const Routes = () => {
  const [currentPage, setCurrentPage] = useState('splash');

  useEffect(() => {
    if (currentPage === 'splash') {
      const timer = setTimeout(() => {
        setCurrentPage('auth');
      }, 3000); // Adjust the timeout as needed

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'splash' && <SplashScreen navigate={navigate} />}
      {currentPage === 'auth' && <AuthPage navigate={navigate} />}
      {currentPage === 'home' && <HomePage />}
    </div>
  );
};

export default Routes;
