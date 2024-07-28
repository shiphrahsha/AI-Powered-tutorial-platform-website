// src/components/SplashScreen/SplashScreen.js
import React, { useEffect } from 'react';

const SplashScreen = ({ navigate }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('auth');
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>Welcome to My Tutoring Platform</h1>
    </div>
  );
};

export default SplashScreen;
