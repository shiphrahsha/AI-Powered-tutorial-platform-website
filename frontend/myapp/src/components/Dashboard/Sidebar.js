// src/components/Dashboard/Sidebar.js
import React from 'react';
// import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#userProfile">Profile</a></li>
          <li><a href="#courseOverview">Courses</a></li>
          <li><a href="#performanceMetrics">Performance</a></li>
          <li><a href="#sentimentAnalysis">Sentiment Analysis</a></li>
          <li><a href="#personalizedLearning">Personalized Learning</a></li>
          <li><a href="#adaptiveTesting">Adaptive Testing</a></li>
          <li><a href="#automatedGrading">Automated Grading</a></li>
          <li><a href="#studentFeedback">Feedback</a></li>
          <li><a href="#mindfulness">Mindfulness</a></li>
          <li><a href="#chatbot">Chatbot</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
