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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="contact-ellipse-1"></div>
      <div className="contact-ellipse-2"></div>
      <div className="contact-ellipse-3"></div>
      <div className="contact-ellipse-4"></div>
      <div className="contact-ellipse-5"></div>
      <div className="contact-ellipse-6"></div>
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">
            <span>Let's</span>
            <span>Get in</span>
            <span>Touch</span>
          </h2>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Alex Smith"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message ..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <p className="contact-disclaimer">
              Your information will be kept confidential and only used for rise event communication (we won't spam you).
            </p>
            <button type="submit" className="contact-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
