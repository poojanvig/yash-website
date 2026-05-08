import React from 'react';
import './Footer.css';
import zLogo from '../assets/z-logo.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gradient-line"></div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={zLogo} alt="Z" className="footer-z-logo" />
        </div>

        <div className="footer-content">
          <div className="footer-col">
            <h4 className="footer-col-title">Reach us</h4>
            <div className="footer-reach-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a9aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              <a href="mailto:khushboo.shah@zee.com">khushboo.shah@zee.com</a>
            </div>
            <div className="footer-reach-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a9aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              <a href="mailto:ralston.marquis@zee.com">ralston.marquis@zee.com</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms-services">Terms &amp; Services</a>
            <a href="#terms-use">Terms of Use</a>
            <a href="#refund">Refund Policy</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <a href="#ad-formats">Ad Formats</a>
            <a href="#display-video">Display &amp; Video Ads</a>
            <a href="#ctv">CTV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
