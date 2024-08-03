import React, { useState } from 'react';
import AuthPage from './components/pages/AuthPage';
import HomePage from './components/pages/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import AiCourse from './components/AIGeneratedCourse';
import LearnCode from './components/LearnCode';



const Routes = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Set initial state to 'home'

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'auth' && <AuthPage navigate={navigate} />}
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'dashboard' && <Dashboard navigate={navigate} />}
      {currentPage === 'Aicourse' && <AiCourse navigate={navigate} />}
      {currentPage === 'learncode' && <LearnCode navigate={navigate} />}
    </div>
  );
};

export default Routes;