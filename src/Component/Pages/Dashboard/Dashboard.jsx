
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import NavBar from '../../NavBar/NavBar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        ☰
      </button>
      <NavBar />
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
            <h3>Student Data Entry</h3>
            <p>Students: 1,200</p>
            <p>College: 80</p>
            <p>School: 45</p>
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
