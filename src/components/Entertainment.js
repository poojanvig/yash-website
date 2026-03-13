import React from 'react';
import './Entertainment.css';
import youtubeCard from '../assets/youtube-card.png';
import socialMediaCard from '../assets/social-media-card.png';
import dilfluencerCard from '../assets/dilfluencer-card.png';
import zImmerseCard from '../assets/z-immerse-card.png';

const cards = [
  { title: 'YouTube', image: youtubeCard },
  { title: 'Social Media', image: socialMediaCard },
  { title: 'Dilfluencer', image: dilfluencerCard },
  { title: 'Z Immerse', image: zImmerseCard },
];

const Entertainment = () => {
  // Duplicate cards for seamless loop
  const row1Cards = [...cards, ...cards, ...cards];
  const row2Cards = [...cards, ...cards, ...cards];

  return (
    <section className="entertainment">
      <h2 className="entertainment-title">
        Entertainment for <span className="gradient-text">2.3 Bn</span> Heartbeats
      </h2>

      <div className="marquee-wrapper">
        {/* Row 1 - scrolls left to right */}
        <div className="marquee-row">
          <div className="marquee-track row1-track">
            {row1Cards.map((card, index) => (
              <div className="entertainment-card" key={`row1-${index}`}>
                <img src={card.image} alt={card.title} className="card-bg" />
                <div className="card-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  <button className="view-stats-btn">View Stats</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right to left */}
        <div className="marquee-row">
          <div className="marquee-track row2-track">
            {row2Cards.map((card, index) => (
              <div className="entertainment-card" key={`row2-${index}`}>
                <img src={card.image} alt={card.title} className="card-bg" />
                <div className="card-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  <button className="view-stats-btn">View Stats</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
