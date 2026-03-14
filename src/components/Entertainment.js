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
  return (
    <section id="entertainment" className="entertainment">
      <h2 className="entertainment-title">
        Entertainment for <span className="gradient-text">2.3 Bn</span> Heartbeats
      </h2>

      <div className="marquee-wrapper">
        <div className="marquee-row">
          <div className="marquee-track row1-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="marquee-group"
                key={`row1-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {cards.map((card) => (
                  <div className="entertainment-card" key={`row1-${groupIndex}-${card.title}`}>
                    <img src={card.image} alt={card.title} className="card-bg" />
                    <div className="card-overlay">
                      <h3 className="card-title">{card.title}</h3>
                      <button className="view-stats-btn">View Stats</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-row">
          <div className="marquee-track row2-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="marquee-group"
                key={`row2-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {cards.map((card) => (
                  <div className="entertainment-card" key={`row2-${groupIndex}-${card.title}`}>
                    <img src={card.image} alt={card.title} className="card-bg" />
                    <div className="card-overlay">
                      <h3 className="card-title">{card.title}</h3>
                      <button className="view-stats-btn">View Stats</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
