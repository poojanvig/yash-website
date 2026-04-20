import React, { useState } from 'react';
import './Navbar.css';
import zLogo from '../assets/z-logo.webp';

const navItems = [
  { name: 'Ad Solutions', id: 'ad-formats' },
  { name: 'Resources', id: 'entertainment' },
  { name: 'Advertise with us', id: 'contact' },
  { name: 'Z Rise', id: 'hero' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={zLogo} alt="Z Logo" className="z-logo" />
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="mobile-menu-header">
            <span className="mobile-menu-label">Menu</span>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              <span className="mobile-link-text">{item.name}</span>
              <svg
                className="mobile-link-arrow"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="search-btn" aria-label="Search">
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

          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
