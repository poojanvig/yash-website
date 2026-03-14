import React, { useState } from 'react';
import './Footer.css';
import zLogo from '../assets/z-logo.png';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-gradient-line"></div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={zLogo} alt="Z" className="footer-z-logo" />
          <span className="footer-logo-text">Ad World</span>
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

          <div className="footer-newsletter">
            <h4 className="footer-newsletter-title">Join Our Newsletter</h4>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-disclaimer">
              * Will send you weekly updates for your better engagement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
