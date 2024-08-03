// // src/components/Dashboard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBook, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../Dashboard/Dashboard.css';

const courses = [
  { id: 1, title: 'Java Basics', description: 'Introduction to Java programming.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' },
  { id: 3, title: 'Python for Data Science', description: 'Learn Python for data analysis.' },
  { id: 4, title: 'React for Beginners', description: 'Getting started with React.' },
  { id: 5, title: 'Flutter Mobile Development', description: 'Building mobile apps with Flutter.' },
  { id: 6, title: 'MongoDB Essentials', description: 'Introduction to MongoDB.' },
  { id: 7, title: 'HTML & CSS Fundamentals', description: 'Building blocks of the web.' },
  { id: 8, title: 'Node.js for Backend', description: 'Building server-side applications.' },
  { id: 9, title: 'Machine Learning Basics', description: 'Introduction to machine learning.' },
  { id: 10, title: 'DevOps Principles', description: 'Fundamentals of DevOps.' },
];




const Dashboard = ({navigate}) => {
  const navigateToLogin = () => {
    navigate('Aicourse');
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu">
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
      </div>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2>Dashboard</h2>
        <ul>
          <li><FontAwesomeIcon icon={faHome} /> Home</li>
          <li><FontAwesomeIcon icon={faBook} /> Courses</li>
          <li><FontAwesomeIcon icon={faUser} /> Profile</li>
          <li><FontAwesomeIcon icon={faCog} /> Settings</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /> Statistics</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome to Your Learning Dashboard</h1>
          <p>Explore our available courses and enhance your skills.</p>
        </header>
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button className="enroll-button">Enroll Now</button>
            </div>
          ))}
        </div>
        <div className="courses-grid">
        <button onClick={navigateToLogin}>click to romance with AI</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
