
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { name: 'Admin', icon: '👑', path: '/admin' },
    { name: 'Accounts', icon: '💰', path: '/accounts' },
    { name: 'Tasks', icon: '📋', path: '/tasks' },
    { name: 'Students', icon: '🎓', path: '/student' },
    { name: 'Teachers', icon: '👩‍🏫', path: '/teachers' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
    { name: 'Reports', icon: '📊', path: '/report' },
    { name: 'Inventory', icon: '📦', path: '/reports' },
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
    </div>
  );
};

export default NavBar;
