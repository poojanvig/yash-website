import React, { useState, useEffect } from 'react';
import './Footer.css';
import './Contact.css';
import zLogo from '../assets/z-logo.webp';

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [focused, setFocused] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsModalOpen(false);
    setSubmitError('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadNewsletter = () => {
    const link = document.createElement('a');
    link.href = '/newsletter.pdf';
    link.download = 'newsletter.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('PASTE_')) {
      setSubmitError(
        'Email delivery is not configured. Add your Web3Forms access key to .env.local and restart the dev server.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Newsletter Subscription — Zee5',
          from_name: 'Zee5 Newsletter',
          name: formData.name,
          company: formData.company,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed. Please try again.');
      }

      downloadNewsletter();
      setFormData({ name: '', company: '', email: '', mobile: '', message: '' });
      setIsModalOpen(false);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape' && !isSubmitting) {
        setIsModalOpen(false);
        setSubmitError('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isModalOpen, isSubmitting]);

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
            <button type="button" className="newsletter-cta" onClick={openModal}>
              <span className="newsletter-cta-glow" aria-hidden="true"></span>
              <span className="newsletter-cta-inner">
                <svg className="newsletter-cta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="newsletter-cta-text">Subscribe &amp; Download</span>
              </span>
            </button>
            <p className="newsletter-disclaimer">
              * Will send you weekly updates for your better engagement.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="newsletter-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-modal-title"
        >
          <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="newsletter-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="newsletter-modal-head">
              <h3 id="newsletter-modal-title" className="newsletter-modal-title">
                Get Your <span className="newsletter-modal-title-gradient">Newsletter</span>
              </h3>
              <p className="newsletter-modal-subtitle">
                Tell us a bit about you and we'll send the PDF to your device right away.
              </p>
            </div>

            <div className="contact-card newsletter-modal-card">
              <div className="contact-card-border"></div>
              <form className="contact-form" onSubmit={handleModalSubmit}>
                <div className="contact-form-row">
                  <div className={`contact-input-group ${focused === 'name' ? 'is-focused' : ''} ${formData.name ? 'has-value' : ''}`}>
                    <svg className="contact-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  <div className={`contact-input-group ${focused === 'company' ? 'is-focused' : ''} ${formData.company ? 'has-value' : ''}`}>
                    <svg className="contact-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocused('company')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className={`contact-input-group ${focused === 'email' ? 'is-focused' : ''} ${formData.email ? 'has-value' : ''}`}>
                    <svg className="contact-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13L2 4" />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  <div className={`contact-input-group ${focused === 'mobile' ? 'is-focused' : ''} ${formData.mobile ? 'has-value' : ''}`}>
                    <svg className="contact-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile No."
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocused('mobile')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className={`contact-input-group contact-textarea-group ${focused === 'message' ? 'is-focused' : ''} ${formData.message ? 'has-value' : ''}`}>
                  <svg className="contact-input-icon contact-textarea-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  ></textarea>
                </div>

                <p className="contact-disclaimer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Your information is kept confidential and only used for communication.
                </p>

                {submitError && (
                  <p className="newsletter-modal-error" role="alert">
                    {submitError}
                  </p>
                )}

                <button type="submit" className="contact-submit" disabled={isSubmitting}>
                  <span className="contact-submit-text">
                    {isSubmitting ? 'Sending…' : 'Submit & Download PDF'}
                  </span>
                  {!isSubmitting && (
                    <svg className="contact-submit-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
