import React from 'react';
import './Footer.css';
import zLogo from '../assets/z-logo.webp';

function Footer() {
  const downloadNewsletter = () => {
    const link = document.createElement('a');
    link.href = '/newsletter.pdf';
    link.download = 'newsletter.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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

          <div className="footer-newsletter">
            <h4 className="footer-newsletter-title">Join Our Newsletter</h4>
            <p className="newsletter-copy">
              Get our latest insights, trends and ad-format playbooks delivered straight to your inbox.
            </p>
            <button type="button" className="newsletter-cta" onClick={downloadNewsletter}>
              <span className="newsletter-cta-glow" aria-hidden="true"></span>
              <span className="newsletter-cta-inner">
                <svg className="newsletter-cta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="newsletter-cta-text">Download Newsletter</span>
              </span>
            </button>
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
