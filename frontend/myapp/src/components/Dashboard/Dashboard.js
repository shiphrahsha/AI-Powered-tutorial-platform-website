// src/components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'students':
        return <Students />;
      case 'courses':
        return <Courses />;
      case 'performance':
        return <Performance />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="main">
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <header className="header">
    <h1>AI-Powered Tutoring Platform</h1>
  </header>
);

const Sidebar = ({ setActiveTab, activeTab }) => (
  <nav className="sidebar">
    <ul>
      <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</li>
      <li className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>Students</li>
      <li className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>Courses</li>
      <li className={activeTab === 'performance' ? 'active' : ''} onClick={() => setActiveTab('performance')}>Performance</li>
      <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Settings</li>
    </ul>
  </nav>
);

const Home = () => (
  <div className="tab-content">
    <h2>Welcome to the AI-Powered Tutoring Platform</h2>
    <p>Here you can manage students, courses, view performance metrics, and configure settings.</p>
  </div>
);

const Students = () => (
  <div className="tab-content">
    <h2>Student Management</h2>
    {/* Add your student management content here */}
    <p>Manage student profiles, track progress, and communicate with students.</p>
  </div>
);

const Courses = () => (
  <div className="tab-content">
    <h2>Course Management</h2>
    {/* Add your course management content here */}
    <p>Manage courses, add new content, and organize lessons.</p>
  </div>
);

const Performance = () => (
  <div className="tab-content">
    <h2>Performance Metrics</h2>
    {/* Add your performance metrics content here */}
    <p>View student performance, analyze data, and generate reports.</p>
  </div>
);

const Settings = () => (
  <div className="tab-content">
    <h2>Settings</h2>
    {/* Add your settings content here */}
    <p>Configure platform settings, manage user roles, and update preferences.</p>
  </div>
);

export default Dashboard;
