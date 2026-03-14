import React from 'react';
import './AdFormats.css';
import adFormatsHero from '../assets/ad-formats-hero.png';

const AdFormats = () => {
  return (
    <section id="ad-formats" className="ad-formats">
      <h2 className="ad-formats-title">
        High-Impact Ad Formats That Connect Brands<br />to Millions
      </h2>

      <div className="ad-formats-image">
        <img src={adFormatsHero} alt="Ad Formats Showcase" />
      </div>
    </section>
  );
};

export default AdFormats;
