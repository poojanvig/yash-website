import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Entertainment.css';
import youtubeCard from '../assets/youtube-card.png';
import youtubeColour from '../assets/Youtube-colour.png';
import socialMediaCard from '../assets/social-media-card.png';
import socialMediaColour from '../assets/socialMedia-coloured.png';
import broadcastCard from '../assets/broadcast-card.png';
import ottCard from '../assets/ott-card.png';
import dilfluencerCard from '../assets/dilfluencer-card.png';
import dilfluencerColour from '../assets/Dilfluencer-Coloured.png';
import zImmerseCard from '../assets/z-immerse-card.png';
import zImmerseColour from '../assets/Z Immerse-Coloured.png';
import zRiseCard from '../assets/z-rise-card.png';
import zRiseColour from '../assets/zRise-colour.png';
import zBrandworksCard from '../assets/z-brandworks-card.png';
import zBrandworksColour from '../assets/BrandWorks-coloured.png';
import indiaMap from '../assets/Indian-map.png';
import broadcastColour from '../assets/Broadcast-colour.png';
import ottColour from '../assets/OTT-coloured.png';

const allCards = [
  {
    title: 'Social Media',
    image: socialMediaCard,
    statImage: socialMediaColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '720+', label: 'Million', sublabel: 'Monthly Views' },
      { value: '25+', label: 'Regional Accounts', sublabel: 'Across Social Media Platforms' },
      { value: '300+', label: 'Million', sublabel: 'Combined Reach' },
      { value: '1+', label: 'Million', sublabel: 'Posts Across Social Media Platforms' },
    ],
    comboStat: {
      value: '260+',
      label: 'Million',
      sublabel: 'Total Followers across the Globe',
      showMap: false,
    },
  },
  {
    title: 'Broadcast',
    image: broadcastCard,
    statImage: broadcastColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '80+', label: 'Channels' },
      { value: '265k', label: 'GEC Content Hours' },
      { value: '1.3+', label: 'Billion', sublabel: 'Entertaining Hearts' },
      { value: '16.8%', label: 'Channels' },
    ],
    comboStat: { value: '11+', label: 'Naive Language', sublabel: 'Average Time Spent per User' },
  },
  {
    title: 'OTT',
    image: ottCard,
    statImage: ottColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    statViews: [
      {
        tabLabel: 'CTV',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        stats: [
          { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
          { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
          { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
          { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
        ],
        comboStat: {
          value: '42',
          label: 'mins/day',
          sublabel: 'Average Time Spent per User',
          heading: 'Audience Split',
          breakdown: [
            { icon: 'female', value: '43%', label: 'Female' },
            { icon: 'male', value: '57%', label: 'Male' },
          ],
        },
      },
      {
        tabLabel: 'Premium SVOD',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        stats: [
          { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
          { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
          { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
          { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
        ],
        comboStat: {
          value: '42',
          label: 'mins/day',
          sublabel: 'Average Time Spent per User',
          heading: 'Audience Split',
          breakdown: [
            { icon: 'female', value: '43%', label: 'Female' },
            { icon: 'male', value: '57%', label: 'Male' },
          ],
        },
      },
      {
        tabLabel: 'Mobile',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        stats: [
          { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
          { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
          { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
          { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
        ],
        comboStat: {
          value: '42',
          label: 'mins/day',
          sublabel: 'Average Time Spent per User',
          heading: 'Audience Split',
          breakdown: [
            { icon: 'female', value: '43%', label: 'Female' },
            { icon: 'male', value: '57%', label: 'Male' },
          ],
        },
      },
    ],
  },
  {
    title: 'YouTube',
    image: youtubeCard,
    statImage: youtubeColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '284+', label: 'Million', sublabel: 'Monthly Active Views' },
      { value: '12+', label: 'Billion', sublabel: 'Total Monthly Impressions' },
      { value: '5+', label: 'Billion', sublabel: 'Total Monthly Video Views' },
      { value: '60+', label: 'Zee Channels', sublabel: 'On YouTube' },
    ],
    comboStat: {
      note: 'Zee YouTube drives massive viewership',
      value: '58%',
      label: 'YouTube Views',
      sublabel: 'Average Time Spent per User',
      showMap: false,
    },
  },
  {
    title: 'Z Rise',
    image: zRiseCard,
    statImage: zRiseColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
      { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
    ],
    comboStat: {
      value: '42',
      label: 'mins/day',
      sublabel: 'Average Time Spent per User',
      heading: 'Audience Split',
      breakdown: [
        { icon: 'female', value: '43%', label: 'Female' },
        { icon: 'male', value: '57%', label: 'Male' },
      ],
    },
  },
  {
    title: 'Dilfluencer',
    image: dilfluencerCard,
    statImage: dilfluencerColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
      { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
    ],
    comboStat: {
      value: '10+',
      label: 'Million',
      sublabel: 'People connect with Zee\'s characters on social media',
      showMap: false,
    },
  },
  {
    title: 'Z Immerse',
    image: zImmerseCard,
    statImage: zImmerseColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
      { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
    ],
    comboStat: {
      value: '42',
      label: 'mins/day',
      sublabel: 'Average Time Spent per User',
      heading: 'Audience Split',
      breakdown: [
        { icon: 'female', value: '43%', label: 'Female' },
        { icon: 'male', value: '57%', label: 'Male' },
      ],
    },
  },
  {
    title: 'Z Brandworks',
    image: zBrandworksCard,
    statImage: zBrandworksColour,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    stats: [
      { value: '88+', label: 'Million', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '100+', label: 'Million', sublabel: 'Monthly Active Users' },
      { value: '10+', label: 'Billion', sublabel: 'Premium Audience: CTV, SVOD, Live' },
      { value: '0.5+', label: 'Million', sublabel: 'Hours Content Library' },
    ],
    comboStat: {
      value: '42',
      label: 'mins/day',
      sublabel: 'Average Time Spent per User',
      heading: 'Audience Split',
      breakdown: [
        { icon: 'female', value: '43%', label: 'Female' },
        { icon: 'male', value: '57%', label: 'Male' },
      ],
    },
  },
];

const row1Cards = allCards.slice(0, 4);
const row2Cards = allCards.slice(4, 8);
const CARD_TRAVEL_DURATION_MS = 500;

const AudienceSplitIcon = ({ type }) => {
  if (type === 'female') {
    return (
      <svg width="36" height="58" viewBox="0 0 36 58" fill="none" aria-hidden="true">
        <circle cx="18" cy="8" r="6" fill="currentColor" />
        <path d="M18 18L27 38H9L18 18Z" fill="currentColor" />
        <path d="M14 38H18V58H14V38Z" fill="currentColor" />
        <path d="M18 38H22V58H18V38Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width="36" height="58" viewBox="0 0 36 58" fill="none" aria-hidden="true">
      <circle cx="18" cy="8" r="6" fill="currentColor" />
      <path d="M10 18H26V36H10V18Z" fill="currentColor" />
      <path d="M14 36H18V58H14V36Z" fill="currentColor" />
      <path d="M18 36H22V58H18V36Z" fill="currentColor" />
    </svg>
  );
};

const StatsModalCard = ({ card }) => {
  const hasTabbedViews = Array.isArray(card.statViews) && card.statViews.length > 0;
  const [activeViewIndex, setActiveViewIndex] = useState(0);

  useEffect(() => {
    setActiveViewIndex(0);
  }, [card.title]);

  const activeView = hasTabbedViews ? card.statViews[activeViewIndex] : card;
  const activeStats = activeView.stats || card.stats;
  const activeComboStat = activeView.comboStat || card.comboStat;
  const activeDescription = activeView.description || card.description;

  return (
    <div className={`stats-modal ${card.title === 'OTT' ? 'stats-modal-ott' : ''}`}>
      <img src={card.statImage || card.image} alt={card.title} className="stats-modal-bg" />
      <div className="stats-modal-content">
        <h3 className="stats-modal-title">{card.title}</h3>
        {hasTabbedViews && (
          <div className="stats-modal-tabs" role="tablist" aria-label={`${card.title} segments`}>
            {card.statViews.map((view, index) => (
              <button
                type="button"
                key={view.tabLabel}
                role="tab"
                aria-selected={index === activeViewIndex}
                className={`stats-modal-tab ${index === activeViewIndex ? 'is-active' : ''}`}
                onClick={() => setActiveViewIndex(index)}
              >
                {view.tabLabel}
              </button>
            ))}
          </div>
        )}
        <p className="stats-modal-desc">{activeDescription}</p>

        <div className="stats-grid">
          {activeStats.slice(0, 2).map((stat, index) => (
          <div className="stat-card" key={index}>
            <img src={card.statImage || card.image} alt="" className="stat-card-bg" />
            <div className="stat-card-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              {stat.sublabel && <span className="stat-sublabel">{stat.sublabel}</span>}
            </div>
          </div>
        ))}

        <div className="stat-card stat-card-combo">
          <img src={card.statImage || card.image} alt="" className="stat-card-bg" />
          <div className={`stat-card-content ${activeComboStat.breakdown ? 'stat-card-content-breakdown' : ''}`}>
            {activeComboStat.note && (
              <span className="stat-combo-note">{activeComboStat.note}</span>
            )}
            <span className="stat-value">{activeComboStat.value}</span>
            <span className="stat-label">{activeComboStat.label}</span>
            {activeComboStat.sublabel && (
              <span className="stat-sublabel">{activeComboStat.sublabel}</span>
            )}
            {activeComboStat.breakdown ? (
              <div className="stat-breakdown">
                {activeComboStat.heading && (
                  <span className="stat-breakdown-title">{activeComboStat.heading}</span>
                )}
                <div className="stat-breakdown-list">
                  {activeComboStat.breakdown.map((item) => (
                    <div className="stat-breakdown-item" key={`${card.title}-${item.label}`}>
                      <span className="stat-breakdown-icon">
                        <AudienceSplitIcon type={item.icon} />
                      </span>
                      <span className="stat-breakdown-metric">{item.value}</span>
                      <span className="stat-breakdown-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeComboStat.showMap !== false ? (
              <img src={indiaMap} alt="India Map" className="stat-india-map" />
            ) : null}
          </div>
        </div>

        {activeStats.slice(2, 4).map((stat, index) => (
          <div className="stat-card" key={index + 2}>
            <img src={card.statImage || card.image} alt="" className="stat-card-bg" />
            <div className="stat-card-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              {stat.sublabel && <span className="stat-sublabel">{stat.sublabel}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

const Entertainment = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [transition, setTransition] = useState(null);
  const transitionTimeoutRef = useRef(null);

  const clearTransitionTimeout = useCallback(() => {
    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  const openStats = useCallback((cardTitle) => {
    const index = allCards.findIndex((card) => card.title === cardTitle);

    if (index !== -1) {
      clearTransitionTimeout();
      setTransition(null);
      setActiveCardIndex(index);
    }
  }, [clearTransitionTimeout]);

  const closeStats = useCallback(() => {
    clearTransitionTimeout();
    setTransition(null);
    setActiveCardIndex(null);
  }, [clearTransitionTimeout]);

  const startCardTravel = useCallback((direction) => {
    if (activeCardIndex === null || transition) {
      return;
    }

    const step = direction === 'next' ? 1 : -1;
    const targetIndex = (activeCardIndex + step + allCards.length) % allCards.length;

    clearTransitionTimeout();
    setTransition({
      direction,
      fromIndex: activeCardIndex,
      toIndex: targetIndex,
    });

    transitionTimeoutRef.current = window.setTimeout(() => {
      setActiveCardIndex(targetIndex);
      requestAnimationFrame(() => {
        setTransition(null);
        transitionTimeoutRef.current = null;
      });
    }, CARD_TRAVEL_DURATION_MS);
  }, [activeCardIndex, clearTransitionTimeout, transition]);

  const goNext = useCallback(() => {
    startCardTravel('next');
  }, [startCardTravel]);

  const goPrev = useCallback(() => {
    startCardTravel('prev');
  }, [startCardTravel]);

  useEffect(() => {
    if (activeCardIndex === null) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeStats();
      }

      if (event.key === 'ArrowRight') {
        goNext();
      }

      if (event.key === 'ArrowLeft') {
        goPrev();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCardIndex, closeStats, goNext, goPrev]);

  useEffect(() => () => {
    clearTransitionTimeout();
  }, [clearTransitionTimeout]);

  const activeCard = activeCardIndex !== null ? allCards[activeCardIndex] : null;
  const prevCard = activeCardIndex !== null
    ? allCards[(activeCardIndex - 1 + allCards.length) % allCards.length]
    : null;
  const nextCard = activeCardIndex !== null
    ? allCards[(activeCardIndex + 1) % allCards.length]
    : null;
  const isStatsOpen = activeCardIndex !== null || transition !== null;
  const incomingCard = transition ? allCards[transition.toIndex] : null;
  const hidePrevPreview = transition?.direction === 'prev';
  const hideNextPreview = transition?.direction === 'next';

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
                {row1Cards.map((card, index) => (
                  <div className="entertainment-card" key={`row1-${groupIndex}-${index}`}>
                    <img src={card.image} alt={card.title} className="card-bg" />
                    <div className="card-overlay">
                      <h3 className="card-title">{card.title}</h3>
                      <button
                        type="button"
                        className="view-stats-btn"
                        onClick={() => openStats(card.title)}
                      >
                        View Stats
                      </button>
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
                {row2Cards.map((card, index) => (
                  <div className="entertainment-card" key={`row2-${groupIndex}-${index}`}>
                    <img src={card.image} alt={card.title} className="card-bg" />
                    <div className="card-overlay">
                      <h3 className="card-title">{card.title}</h3>
                      <button
                        type="button"
                        className="view-stats-btn"
                        onClick={() => openStats(card.title)}
                      >
                        View Stats
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isStatsOpen && activeCard && (
        <div className="stats-modal-overlay" onClick={closeStats}>
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
          <div className="gradient-blob blob-4"></div>

          <div
            className="stats-stage"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${incomingCard?.title || activeCard.title} stats`}
          >
            <h2 className="stats-stage-title">
              Entertainment for <span className="gradient-text">2.3 Bn</span> Heartbeats
            </h2>

            {prevCard && !transition && (
              <div className="stats-side-card stats-side-card-left" aria-hidden="true">
                <img src={prevCard.statImage || prevCard.image} alt="" className="stats-side-card-bg" />
                <div className="stats-side-card-overlay">
                  <span className="stats-side-card-title">{prevCard.title}</span>
                </div>
              </div>
            )}

            {nextCard && !transition && (
              <div className="stats-side-card stats-side-card-right" aria-hidden="true">
                <img src={nextCard.statImage || nextCard.image} alt="" className="stats-side-card-bg" />
                <div className="stats-side-card-overlay">
                  <span className="stats-side-card-title">{nextCard.title}</span>
                </div>
              </div>
            )}

            <button
              type="button"
              className="stats-nav-btn stats-nav-prev"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              aria-label={`View previous stats: ${prevCard?.title || 'Previous card'}`}
              disabled={Boolean(transition)}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="stats-modal-stack">
              {transition ? (
                <>
                  <div className={`stats-modal-panel stats-modal-panel-outgoing direction-${transition.direction}`}>
                    <StatsModalCard card={activeCard} />
                  </div>
                  <div className={`stats-modal-panel stats-modal-panel-incoming direction-${transition.direction}`}>
                    <StatsModalCard card={incomingCard} />
                  </div>
                </>
              ) : (
                <div className="stats-modal-panel stats-modal-panel-static">
                  <StatsModalCard card={activeCard} />
                </div>
              )}
            </div>

            <button
              type="button"
              className="stats-nav-btn stats-nav-next"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              aria-label={`View next stats: ${nextCard?.title || 'Next card'}`}
              disabled={Boolean(transition)}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button type="button" className="close-stats-btn" onClick={closeStats}>
              Close Stats
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Entertainment;
