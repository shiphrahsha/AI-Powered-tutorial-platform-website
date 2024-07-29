import React, { useState } from 'react';
import AuthPage from './components/pages/AuthPage';
import HomePage from './components/pages/HomePage';
import Dashboard from './components/Dashboard/Dashboard';


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
      {currentPage === 'auth' && <AuthPage navigate={navigate} />}
      {currentPage === 'home' && <HomePage />}
    </div>
  );
};

export default Routes;