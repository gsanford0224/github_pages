import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Glenn Sanford</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/msdemo">MS Demo</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/aboutme">About Me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
