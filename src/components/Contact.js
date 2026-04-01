import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      {/* Animated gradient orbs */}
      <div className="contact-orb contact-orb-1"></div>
      <div className="contact-orb contact-orb-2"></div>
      <div className="contact-orb contact-orb-3"></div>
      <div className="contact-orb contact-orb-4"></div>

      {/* Grid lines decoration */}
      <div className="contact-grid-lines" aria-hidden="true">
        <div className="contact-grid-line"></div>
        <div className="contact-grid-line"></div>
        <div className="contact-grid-line"></div>
        <div className="contact-grid-line"></div>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-badge">
            <span className="contact-badge-dot"></span>
            Get in Touch
          </div>
          <h2 className="contact-title">
            <span>Let's</span>
            <span className="contact-title-gradient">Get in</span>
            <span>Touch</span>
          </h2>
          <p className="contact-subtitle">
            Ready to amplify your brand? Let's create something extraordinary together.
          </p>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <div className="contact-card-border"></div>
            <form className="contact-form" onSubmit={handleSubmit}>
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

              <button type="submit" className="contact-submit">
                <span className="contact-submit-text">Send Message</span>
                <svg className="contact-submit-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
