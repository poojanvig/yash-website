import React from 'react';
import './Navbar.css';
import zLogo from '../assets/z-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={zLogo} alt="Z Ad World" className="z-logo" />
      </div>

      <div className="navbar-links">
        <a href="#ad-solutions">Ad Solutions</a>
        <a href="#resources">Resources</a>
        <a href="#advertise">Advertise with us</a>
        <a href="#z-rise">Z Rise</a>
      </div>

      <button className="search-btn">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
