
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reports.css';
import NavBar from '../NavBar/NavBar';

const Reports = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleSchoolStudentFeedbackEntryClick = () =>
    {
        navigate('/school-student-feedback-add');
    }





  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <NavBar />
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="main-content">
        <header>
          <h1>Welcome to SchoolSync</h1>
          <div className="user-profile">
            <span>Admin User</span>
            <span className="avatar">👤</span>
          </div>
        </header>
        <section className="dashboard-grid">
        <div className="card" onClick={handleSchoolStudentFeedbackEntryClick} style={{cursor:"pointer"}}>
            <h3>Add student FeedBack</h3>
          </div>
          <div className="card">
            <h3>See student FeedBack</h3>
          </div>
          <div className="card">
            <h3>View Students</h3>
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

export default Reports;
