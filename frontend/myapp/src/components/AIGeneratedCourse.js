import './pages/AIGeneratedCourse.css'
// import React, { useState } from 'react';
// // import './AIGeneratedCourse.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBook, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// // Sample course data
// const courses = [
//   { id: 1, title: 'Java Basics', description: 'Introduction to Java programming.' },
//   { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' },
//   { id: 3, title: 'Python for Data Science', description: 'Learn Python for data analysis.' },
//   { id: 4, title: 'React for Beginners', description: 'Getting started with React.' },
//   { id: 5, title: 'Flutter Mobile Development', description: 'Building mobile apps with Flutter.' },
//   { id: 6, title: 'MongoDB Essentials', description: 'Introduction to MongoDB.' },
//   { id: 7, title: 'HTML & CSS Fundamentals', description: 'Building blocks of the web.' },
//   { id: 8, title: 'Node.js for Backend', description: 'Building server-side applications.' },
//   { id: 9, title: 'Machine Learning Basics', description: 'Introduction to machine learning.' },
//   { id: 10, title: 'DevOps Principles', description: 'Fundamentals of DevOps.' },
// ];

// const AiCourse = ({ name }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const filteredCourses = courses.filter(course =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="hamburger-menu" onClick={handleSidebarToggle}>
//         &#9776; {/* Hamburger menu icon */}
//       </div>

//       <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <h2>Dashboard</h2>
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faHome} /> Home
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faBook} /> Courses
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faUser} /> Profile
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCog} /> Settings
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faSignOutAlt} /> Logout
//           </li>
//         </ul>
//       </aside>

//       <main className="main-content">
//         <header className="dashboard-header">
//           <h1>Welcome, {name}!</h1>
//           <p>Explore our available courses and enhance your skills.</p>
//           <input
//             type="text"
//             placeholder="Search courses..."
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//             className="search-bar"
//           />
//         </header>

//         <div className="courses-grid">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map(course => (
//               <div key={course.id} className="course-card">
//                 <h2>{course.title}</h2>
//                 <p>{course.description}</p>
//                 <button className="enroll-button">Enroll Now</button>
//               </div>
//             ))
//           ) : (
//             <p>No courses found</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AiCourse;

import React, { useState } from 'react';
// import './AIGeneratedCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faCog, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

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

const AiCourse = ({ name, navigate }) => {
    const navigateToLogin = () => {
        navigate('learncode');
      };
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = () => {
    setShowCourses(true);
  };

  const handleVideoButtonClick = (courseTitle) => {
    alert(`Playing video for: ${courseTitle}`);
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu" onClick={handleSidebarToggle}>
        &#9776;
      </div>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} /> Courses
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} /> Profile
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} /> Settings
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, {name}!</h1>
          <p>Explore our available courses and enhance your skills.</p>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-bar"
            />
            <button onClick={handleSearch} className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </header>

        {showCourses && (
          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.id} className="course-card">
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <button className="video-button" onClick={() => handleVideoButtonClick(course.title)}>
                    Play Video
                  </button>
                </div>
              ))
            ) : (
              <p>No courses found</p>
            )}
          </div>
        )}

        <button onClick={navigateToLogin}>learn to code? dont worry Ai will teach you...!</button>

        <button className="video-button-bottom-right" onClick={() => handleVideoButtonClick('Course Video')}>
          Play Course Video
        </button>
      </main>
    </div>
  );
};

export default AiCourse;
