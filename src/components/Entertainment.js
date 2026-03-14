import React from 'react';
import './Entertainment.css';
import youtubeCard from '../assets/youtube-card.png';
import socialMediaCard from '../assets/social-media-card.png';
import broadcastCard from '../assets/broadcast-card.png';
import ottCard from '../assets/ott-card.png';
import dilfluencerCard from '../assets/dilfluencer-card.png';
import zImmerseCard from '../assets/z-immerse-card.png';
import zRiseCard from '../assets/z-rise-card.png';
import zBrandworksCard from '../assets/z-brandworks-card.png';

const row1Cards = [
  { title: 'Social Media', image: socialMediaCard },
  { title: 'Broadcast', image: broadcastCard },
  { title: 'OTT', image: ottCard },
  { title: 'YouTube', image: youtubeCard },
  { title: 'Social Media', image: socialMediaCard },
  { title: 'Broadcast', image: broadcastCard },
  { title: 'OTT', image: ottCard },
  { title: 'YouTube', image: youtubeCard },
];

const row2Cards = [
  { title: 'Z Rise', image: zRiseCard },
  { title: 'Dilfluencer', image: dilfluencerCard },
  { title: 'Z Immerse', image: zImmerseCard },
  { title: 'Z Brandworks', image: zBrandworksCard },
  { title: 'Z Rise', image: zRiseCard },
  { title: 'Dilfluencer', image: dilfluencerCard },
  { title: 'Z Immerse', image: zImmerseCard },
  { title: 'Z Brandworks', image: zBrandworksCard },
];

const Entertainment = () => {
  return (
    <section id="entertainment" className="entertainment">
      <h2 className="entertainment-title">
        Entertainment for <span className="gradient-text">2.3 Bn</span> Heartbeats
      </h2>

      <div className="marquee-wrapper">
        {/* Row 1 - scrolls left to right */}
        <div className="marquee-row">
          <div className="marquee-track row1-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="marquee-group"
                key={`row1-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {row1Cards.map((card, i) => (
                  <div className="entertainment-card" key={`row1-${groupIndex}-${i}`}>
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

        {/* Row 2 - scrolls right to left */}
        <div className="marquee-row">
          <div className="marquee-track row2-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="marquee-group"
                key={`row2-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {row2Cards.map((card, i) => (
                  <div className="entertainment-card" key={`row2-${groupIndex}-${i}`}>
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
