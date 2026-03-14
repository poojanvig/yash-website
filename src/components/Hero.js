import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Movie Posters Collage" />
        <div className="hero-overlay"></div>
        <div className="hero-blur-bottom"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span>One Network</span>
          <span>Multiple Screens</span>
          <span>Infinite Opportunities</span>
        </h1>

        <button className="hero-cta">
          ADVERTISE WITH US
        </button>
      </div>
    </section>
  );
};

export default Hero;
