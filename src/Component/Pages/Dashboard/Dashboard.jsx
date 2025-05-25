
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { name: 'Admin', icon: '👑', path: '/admin' },
    { name: 'Accounts', icon: '💰', path: '/accounts' },
    { name: 'Tasks', icon: '📋', path: '/tasks' },
    { name: 'Students', icon: '🎓', path: '/students' },
    { name: 'Teachers', icon: '👩‍🏫', path: '/teachers' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
    { name: 'Reports', icon: '📊', path: '/reports' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar">
          <div className="logo">
            <h2>SchoolSync</h2>
          </div>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>
                    <span className="icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1>Welcome to SchoolSync</h1>
          <div className="user-profile">
            <span>Admin User</span>
            <span className="avatar">👤</span>
          </div>
        </header>
        <section className="dashboard-grid">
          <div className="card">
            <h3>Quick Stats</h3>
            <p>Students: 1,200</p>
            <p>Teachers: 80</p>
            <p>Classes: 45</p>
          </div>
          <div className="card">
            <h3>Recent Tasks</h3>
            <ul>
              <li>Review Budget Proposal</li>
              <li>Schedule Parent-Teacher Meeting</li>
              <li>Update Attendance Records</li>
            </ul>
          </div>
          <div className="card">
            <h3>Upcoming Events</h3>
            <ul>
              <li>Science Fair - May 30</li>
              <li>Sports Day - June 5</li>
              <li>Exams Start - June 15</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
