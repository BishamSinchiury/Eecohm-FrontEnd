import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentEntryForm from './Component/Student/DataEntry/StudentDataEntry';
import OrgSetup from './Component/OrgSetUp/OrgSetup';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import LoginFrom from './Component/Pages/Loginpage/Login';
import Student from './Component/Student/Student';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFrom />} /> {/* Default route (e.g., login page) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-entry" element={<StudentEntryForm />} />
        <Route path="/org-setup" element={<OrgSetup />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;