import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Tech.Care</div>
      <ul className="menu">
        <li className="active">Patients</li>
        <li>Calendar</li>
        <li>Settings</li>
      </ul>
      <div className="profile">
        <span className="name">Dr. Jose Simmons</span>
        <span className="title">General Practitioner</span>
      </div>
    </header>
  );
};

export default Navbar;
