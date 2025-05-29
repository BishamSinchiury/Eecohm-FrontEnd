import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentEntryForm from './Component/Student/DataEntry/StudentDataEntry';
import OrgSetup from './Component/OrgSetUp/OrgSetup';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import LoginForm from './Component/Pages/Loginpage/Login';
import Student from './Component/Student/Student';
import Report from './Component/Reports/Reports'

import SchoolStudentFeedbackView from './Component/Reports/SchoolStudentFeedBackReport/SchoolStudentFeedBackReport'
import SchoolStudentFeedbackAdd from './Component/Reports/SchoolStuendentFeedBack/SchoolStudentFeedbackAdd'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Default route (e.g., login page) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-entry" element={<StudentEntryForm />} />
        <Route path="/org-setup" element={<OrgSetup />} />
        <Route path="/student" element={<Student />} />
        <Route path="/report" element={<Report />} />
        <Route path="/school-student-feedback-add" element={<SchoolStudentFeedbackAdd />} />
        <Route path="/school-student-feedback-view" element={<SchoolStudentFeedbackView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;