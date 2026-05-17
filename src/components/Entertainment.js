import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Entertainment.css';
import youtubeCard from '../assets/youtube-card.webp';
import youtubeColour from '../assets/Youtube-colour.webp';
import socialMediaCard from '../assets/social-media-card.webp';
import socialMediaColour from '../assets/socialMedia-coloured.webp';
import broadcastCard from '../assets/broadcast-card.webp';
import ottCard from '../assets/ott-card.webp';
import dilfluencerCard from '../assets/dilfluencer-card.webp';
import dilfluencerColour from '../assets/Dilfluencer-Coloured.webp';
import zImmerseCard from '../assets/z-immerse-card.webp';
import zImmerseColour from '../assets/Z Immerse-Coloured.webp';
import zRiseCard from '../assets/z-rise-card.webp';
import zRiseColour from '../assets/zRise-colour.webp';
import zBrandworksCard from '../assets/z-brandworks-card.webp';
import zBrandworksColour from '../assets/BrandWorks-coloured.webp';
import indiaMap from '../assets/Indian-map.webp';
import broadcastColour from '../assets/Broadcast-colour.webp';
import ottColour from '../assets/OTT-coloured.webp';

const allCards = [
  {
    title: 'Social Media',
    image: socialMediaCard,
    statImage: socialMediaColour,
    description: 'Massive social reach driving high-impact brand visibility and engagement at scale.',
    stats: [
      { value: '50Mn+', label: 'Overall Social Engagement', sublabel: '(Weekly Avg)' },
      { value: '4Bn+', label: 'Total Video Views', sublabel: '(Meta)' },
    ],
    comboStat: {
      heading: 'Channel Reach',
      channels: [
        { name: 'Zee TV', fb: '38M', ig: '4M' },
        { name: 'Zee Marathi', fb: '8.8M', ig: '3M' },
        { name: 'Zee Bangla', fb: '19.3M', ig: '1.5M' },
        { name: 'Zee Kannada', fb: '11M', ig: '10.5M' },
        { name: 'Zee Keralam', fb: '4M', ig: '657K' },
        { name: 'Zee Tamil', fb: '14M', ig: '5.5M' },
        { name: 'Zee Telugu', fb: '8.9M', ig: '3M' },
      ],
      showMap: false,
    },
  },
  {
    title: 'Broadcast',
    image: broadcastCard,
    statImage: broadcastColour,
    description: 'India\'s leading television network, delivering unparalleled reach, cultural influence, and mass scale brand impact.',
    stats: [
      { value: '683 Mn', label: 'Monthly Reach' },
      { value: '93%', label: 'TV Household Reach', sublabel: '9/10 HHs consume Z Network every month' },
      { value: '274 Mn', label: 'Daily Reach' },
      { value: '300+', label: 'Dilfluencers' },
    ],
    comboStat: {
      heading: 'Regional Reach',
      regions: [
        { name: 'HSM', value: '471 Mn' },
        { name: 'North', value: '163 Mn' },
        { name: 'East', value: '126 Mn' },
        { name: 'West', value: '182 Mn' },
        { name: 'South', value: '212 Mn' },
      ],
      showMap: false,
    },
  },
  {
    title: 'Zee 5 OTT',
    image: ottCard,
    statImage: ottColour,
    description: 'Premium digital storytelling which delivers targeted reach, deep engagement, and high impact brand experiences across screens.',
    stats: [
      { value: '140Mn+', label: 'Monthly Active Users', sublabel: '(MAUs)' },
      { value: '3Bn+', label: 'Monthly Video Views' },
      { value: '88Mn+', label: 'Premium Audience', sublabel: 'CTV, SVOD, LIVE, News' },
      { value: '5L+', label: 'Hours', sublabel: 'Content Library' },
    ],
    comboStat: {
      value: '64+',
      label: 'mins/day',
      sublabel: 'Time Spent per User per Day',
      heading: 'Audience Split',
      breakdown: [
        { icon: 'male', value: '59%', label: 'Male' },
        { icon: 'female', value: '41%', label: 'Female' },
      ],
      tiers: {
        heading: 'City / Tier Split',
        items: [
          { value: '41%', label: 'Tier I' },
          { value: '44%', label: 'Tier II' },
          { value: '15%', label: 'Tier III' },
        ],
      },
    },
  },
  {
    title: 'YouTube',
    image: youtubeCard,
    statImage: youtubeColour,
    description: 'Unskippable moments, endless impressions, where viewers choose you.',
    stats: [
      { value: '284 Mn', label: 'Monthly Active Users', sublabel: 'Across Zee Channels Globally' },
      { value: '12Bn+', label: 'Monthly Impressions' },
      { value: '5Bn+', label: 'Monthly Video Views' },
      { value: '60+', label: 'ZEE Channels/Handles', sublabel: 'On YouTube' },
    ],
    comboStat: {
      note: 'Zee YouTube drives massive viewership',
      value: '200Mn+',
      label: 'Total Subscribers',
      showMap: false,
    },
  },
  {
    title: 'Z Rise',
    image: zRiseCard,
    statImage: zRiseColour,
    description: 'A results first, omnichannel growth platform uniting content, data, and strategy to deliver measurable brand impact.',
    stats: [
      { value: '12', label: 'High-Impact Events', sublabel: 'Conducted across Metro & Regional Markets' },
      { value: '2,000+', label: 'Industry Stakeholders', sublabel: 'Entrepreneurs, Marketers & Agency Partners Engaged' },
      { value: '500+', label: 'Trade Media Coverages', sublabel: 'Across Leading Platforms' },
    ],
    comboStat: {
      heading: 'Upcoming Schedule',
      schedule: [
        { date: 'TBD', city: 'TBD', event: 'TBD Event' },
        { date: 'TBD', city: 'TBD', event: 'TBD Event' },
        { date: 'TBD', city: 'TBD', event: 'TBD Event' },
        { date: 'TBD', city: 'TBD', event: 'TBD Event' },
      ],
    },
  },
  {
    title: 'Dilfluencer',
    image: dilfluencerCard,
    statImage: dilfluencerColour,
    description: 'Creator collaborations powered by iconic Z characters and narratives, transforming content fandom into authentic, scalable brand influence.',
    stats: [
      { value: 'VIRALITY', label: '350+ Influencers', sublabel: 'Across Regions' },
      { value: '1 Bn', label: 'Weekly Cume', sublabel: 'Reach on Meta' },
    ],
    comboStat: {
      value: '100+',
      label: 'Dilfluencers',
      sublabel: 'Across Languages',
      showMap: false,
    },
  },
  {
    title: 'Z Immerse',
    image: zImmerseCard,
    statImage: zImmerseColour,
    description: 'Immersive Ideas. Inclusive Impact. Storytelling that moves beyond screens into conversations, communities, and real-world experiences.',
    editorial: {
      tagline: 'Immersive Ideas. Inclusive Impact.',
      intro: [
        'In a world where audiences crave deeper connections, storytelling must be experienced, not just consumed.',
        "Launched in December 2025, Zee Immerse is Zee Entertainment's specialized vertical redefining brand engagement through culture and community. We help brands co-create multi-platform IPs that integrate across movies, digital content, and influencer ecosystems—from long-form narratives to bite-sized stories.",
        "This isn't traditional advertising. It's storytelling that moves beyond screens into conversations, communities, and real-world experiences.",
      ],
      pillarsHeading: "Leveraging Zee's network and audience insights, we build content that's:",
      pillars: [
        { title: 'Immersive', body: 'Audiences participate, not just watch.' },
        { title: 'Inclusive', body: 'Resonates across diverse communities.' },
        { title: 'Impactful', body: 'Builds lasting brand equity.' },
      ],
      offeringsHeading: 'Our Offerings',
      offerings: [
        'Branded Content & Client IPs',
        'Original Content & Format IPs',
        'Digital Originals & Creator IPs',
        'On-Ground & Live Experiences',
        'Sports & Culture IPs',
        'Extensions & Licensing',
      ],
      closing: "The future of storytelling isn't about being seen or heard. It's about being lived.",
    },
  },
  {
    title: 'Z Zee Brand Works',
    image: zBrandworksCard,
    statImage: zBrandworksColour,
    description: "Z Network's flagship platform for building high-value advertiser partnerships through curated, high-impact engagements.",
    editorial: {
      tagline: 'High-Value Partnerships. Real Business Outcomes.',
      intro: [
        "Zee Brand Works is Z Network's flagship platform for building high-value advertiser partnerships through curated, high-impact engagements.",
        'From exclusive roadshows to closed-door leadership forums and immersive brand experiences, it brings together CMOs and senior marketers for meaningful, insight-led conversations beyond traditional sales pitches.',
        'Focused on influence, depth, and real business outcomes, Zee Brand Works positions Z Network as a strategic media partner driving measurable brand growth.',
      ],
    },
  },
];

const row1Cards = allCards.slice(0, 4);
const row2Cards = allCards.slice(4, 8);

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

  if (card.editorial) {
    const ed = card.editorial;
    return (
      <div className="stats-modal stats-modal-editorial">
        <img src={card.statImage || card.image} alt={card.title} className="stats-modal-bg" decoding="async" />
        <div className="stats-modal-content editorial-content">
          <h3 className="stats-modal-title">{card.title}</h3>
          {ed.tagline && <p className="editorial-tagline">{ed.tagline}</p>}
          <div className="editorial-body">
            {ed.intro && (
              <div className="editorial-intro-grid">
                {ed.intro.map((p, i) => (
                  <p className="editorial-intro-card" key={i}>{p}</p>
                ))}
              </div>
            )}
            {ed.pillarsHeading && (
              <p className="editorial-paragraph editorial-pillars-heading">{ed.pillarsHeading}</p>
            )}
            {ed.pillars && (
              <div className="editorial-pillars">
                {ed.pillars.map((pillar) => (
                  <div className="editorial-pillar" key={pillar.title}>
                    <span className="editorial-pillar-title">{pillar.title}</span>
                    <span className="editorial-pillar-body">{pillar.body}</span>
                  </div>
                ))}
              </div>
            )}
            {ed.offerings && (
              <div className="editorial-offerings">
                {ed.offeringsHeading && (
                  <h4 className="editorial-offerings-title">{ed.offeringsHeading}</h4>
                )}
                <ul className="editorial-offerings-list">
                  {ed.offerings.map((item) => (
                    <li className="editorial-offerings-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {ed.closing && (
              <p className="editorial-closing">{ed.closing}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`stats-modal ${card.title === 'OTT' ? 'stats-modal-ott' : ''}`}>
      <img src={card.statImage || card.image} alt={card.title} className="stats-modal-bg" decoding="async" />
      <div className="stats-modal-content">
        <h3 className="stats-modal-title">{card.title}</h3>

        {hasTabbedViews && (
          <div
            className="stats-modal-tabs"
            role="tablist"
            aria-label={`${card.title} segments`}
          >
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

        <div className={`stats-grid ${activeStats.length <= 2 && activeComboStat.channels ? 'stats-grid-channels' : ''} ${activeStats.length <= 3 && !activeComboStat.channels ? 'stats-grid-minimal' : ''}`}>
          {activeStats.slice(0, 2).map((stat, index) => (
            <div className="stat-card" key={index}>
              <img src={card.statImage || card.image} alt="" className="stat-card-bg" decoding="async" />
              <div className="stat-card-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                {stat.sublabel && <span className="stat-sublabel">{stat.sublabel}</span>}
              </div>
            </div>
          ))}

          <div className="stat-card stat-card-combo">
            <img src={card.statImage || card.image} alt="" className="stat-card-bg" />
            <div className={`stat-card-content ${activeComboStat.breakdown ? 'stat-card-content-breakdown' : ''} ${activeComboStat.channels ? 'stat-card-content-channels' : ''} ${activeComboStat.regions ? 'stat-card-content-regions' : ''}`}>
              {activeComboStat.note && (
                <span className="stat-combo-note">{activeComboStat.note}</span>
              )}
              {activeComboStat.value && (
                <span className="stat-value">{activeComboStat.value}</span>
              )}
              {activeComboStat.label && (
                <span className="stat-label">{activeComboStat.label}</span>
              )}
              {activeComboStat.sublabel && (
                <span className="stat-sublabel">{activeComboStat.sublabel}</span>
              )}
              {activeComboStat.regions ? (
                <div className="stat-regions">
                  {activeComboStat.heading && (
                    <span className="stat-regions-title">{activeComboStat.heading}</span>
                  )}
                  <div className="stat-regions-list">
                    {activeComboStat.regions.map((region) => (
                      <div className="stat-region-item" key={region.name}>
                        <span className="stat-region-name">{region.name}</span>
                        <span className="stat-region-value">{region.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeComboStat.channels ? (
                <div className="stat-channels">
                  {activeComboStat.heading && (
                    <span className="stat-channels-title">{activeComboStat.heading}</span>
                  )}
                  <div className="stat-channels-header">
                    <span></span>
                    <span className="stat-channels-platform">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </span>
                    <span className="stat-channels-platform">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </span>
                  </div>
                  {activeComboStat.channels.map((ch) => (
                    <div className="stat-channels-row" key={ch.name}>
                      <span className="stat-channels-name">{ch.name}</span>
                      <span className="stat-channels-val">{ch.fb}</span>
                      <span className="stat-channels-val">{ch.ig}</span>
                    </div>
                  ))}
                </div>
              ) : activeComboStat.breakdown ? (
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
                  {activeComboStat.tiers && (
                    <div className="stat-tiers">
                      <span className="stat-tiers-title">{activeComboStat.tiers.heading}</span>
                      <div className="stat-tiers-list">
                        {activeComboStat.tiers.items.map((tier) => (
                          <div className="stat-tier-item" key={tier.label}>
                            <span className="stat-tier-value">{tier.value}</span>
                            <span className="stat-tier-label">{tier.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : activeComboStat.schedule ? (
                <div className="stat-schedule">
                  {activeComboStat.heading && (
                    <span className="stat-schedule-title">{activeComboStat.heading}</span>
                  )}
                  <div className="stat-schedule-list">
                    {activeComboStat.schedule.map((row, idx) => (
                      <div className="stat-schedule-item" key={`${row.date}-${idx}`}>
                        <span className="stat-schedule-date">{row.date}</span>
                        <span className="stat-schedule-event">{row.event}</span>
                        <span className="stat-schedule-city">{row.city}</span>
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
              <img src={card.statImage || card.image} alt="" className="stat-card-bg" decoding="async" />
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

const CARD_TRAVEL_DURATION_MS = 350;

const useMarqueeRow = (direction = 'left', speedPxPerSec = 70) => {
  const ref = useRef(null);
  const stateRef = useRef({
    paused: false,
    dragging: false,
    pointerId: null,
    startClientX: 0,
    lastClientX: 0,
    movedSinceDown: 0,
    lastTs: null,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (direction === 'right') {
      requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.scrollLeft = ref.current.scrollWidth / 2;
      });
    }

    let raf = 0;
    const tick = (ts) => {
      const s = stateRef.current;
      const last = s.lastTs;
      s.lastTs = ts;
      if (last !== null && !s.paused && !s.dragging) {
        const dt = Math.min((ts - last) / 1000, 0.05);
        const half = el.scrollWidth / 2;
        if (half > 0) {
          const dir = direction === 'left' ? 1 : -1;
          let next = el.scrollLeft + speedPxPerSec * dt * dir;
          if (next >= half) next -= half;
          if (next < 0) next += half;
          el.scrollLeft = next;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, speedPxPerSec]);

  const onPointerEnter = () => {
    stateRef.current.paused = true;
  };
  const onPointerLeave = () => {
    stateRef.current.paused = false;
    stateRef.current.dragging = false;
    stateRef.current.pointerId = null;
  };
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const s = stateRef.current;
    s.pointerId = e.pointerId;
    s.startClientX = e.clientX;
    s.lastClientX = e.clientX;
    s.dragging = false;
    s.movedSinceDown = 0;
  };
  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const s = stateRef.current;
    if (s.pointerId !== e.pointerId) return;
    if (!s.dragging) {
      if (Math.abs(e.clientX - s.startClientX) > 6) {
        s.dragging = true;
        s.lastClientX = e.clientX;
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
      }
      return;
    }
    const dx = e.clientX - s.lastClientX;
    s.lastClientX = e.clientX;
    s.movedSinceDown += Math.abs(dx);
    const half = el.scrollWidth / 2;
    if (half > 0) {
      let next = el.scrollLeft - dx;
      if (next >= half) next -= half;
      if (next < 0) next += half;
      el.scrollLeft = next;
    }
  };
  const onPointerUp = (e) => {
    const el = ref.current;
    if (!el) return;
    const s = stateRef.current;
    if (s.pointerId !== e.pointerId) return;
    s.dragging = false;
    s.pointerId = null;
    try { el.releasePointerCapture?.(e.pointerId); } catch (_) {}
  };
  const onClickCapture = (e) => {
    if (stateRef.current.movedSinceDown > 6) {
      e.stopPropagation();
      e.preventDefault();
    }
    stateRef.current.movedSinceDown = 0;
  };

  return {
    ref,
    rowProps: {
      onPointerEnter,
      onPointerLeave,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onClickCapture,
    },
  };
};

const Entertainment = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [activeMobileCardIndex, setActiveMobileCardIndex] = useState(0);
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
    if (activeCardIndex === null || transition) return;
    const step = direction === 'next' ? 1 : -1;
    const targetIndex = (activeCardIndex + step + allCards.length) % allCards.length;

    clearTransitionTimeout();
    setTransition({ direction, fromIndex: activeCardIndex, toIndex: targetIndex });

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
    if (activeCardIndex === null) return undefined;

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeStats();
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
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
  const activeMobileCard = allCards[activeMobileCardIndex];

  const goMobileNext = useCallback(() => {
    setActiveMobileCardIndex((index) => (index + 1) % allCards.length);
  }, []);

  const goMobilePrev = useCallback(() => {
    setActiveMobileCardIndex((index) => (index - 1 + allCards.length) % allCards.length);
  }, []);

  const row1Marquee = useMarqueeRow('left');
  const row2Marquee = useMarqueeRow('right');

  return (
    <section id="entertainment" className="entertainment">
      <h2 className="entertainment-title">
        Entertainment for <span className="gradient-text">2.3 Bn</span> Heartbeats
      </h2>

      <div className="marquee-wrapper">
        {/* Row 1 */}
        <div
          className="marquee-row"
          ref={row1Marquee.ref}
          {...row1Marquee.rowProps}
          role="region"
          aria-label="Entertainment platforms — row 1, scroll or drag to browse"
        >
          <div className="marquee-track row1-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="marquee-group"
                key={`row1-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {row1Cards.map((card, index) => (
                  <div
                    className="entertainment-card"
                    key={`row1-${groupIndex}-${index}`}
                  >
                    <img src={card.image} alt={card.title} className="card-bg card-bg-gray" decoding="async" />
                    {card.statImage && (
                      <img src={card.statImage} alt={card.title} className="card-bg card-bg-color" decoding="async" />
                    )}
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

        {/* Row 2 */}
        <div
          className="marquee-row"
          ref={row2Marquee.ref}
          {...row2Marquee.rowProps}
          role="region"
          aria-label="Entertainment platforms — row 2, scroll or drag to browse"
        >
          <div className="marquee-track row2-track">
            {[0, 1].map((groupIndex) => (
              <div
                className="marquee-group"
                key={`row2-group-${groupIndex}`}
                aria-hidden={groupIndex === 1}
              >
                {row2Cards.map((card, index) => (
                  <div
                    className="entertainment-card"
                    key={`row2-${groupIndex}-${index}`}
                  >
                    <img src={card.image} alt={card.title} className="card-bg card-bg-gray" decoding="async" />
                    {card.statImage && (
                      <img src={card.statImage} alt={card.title} className="card-bg card-bg-color" decoding="async" />
                    )}
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

      <div className="mobile-entertainment-carousel" aria-label="Entertainment platforms carousel">
        <div className="mobile-carousel-shell">
          <button
            type="button"
            className="mobile-carousel-arrow mobile-carousel-arrow-prev"
            onClick={goMobilePrev}
            aria-label="Previous entertainment platform"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mobile-carousel-card">
            <img
              src={activeMobileCard.statImage || activeMobileCard.image}
              alt={activeMobileCard.title}
              className="mobile-carousel-bg"
              decoding="async"
            />
            <div className="mobile-carousel-overlay">
              <span className="mobile-carousel-count">
                {String(activeMobileCardIndex + 1).padStart(2, '0')} / {String(allCards.length).padStart(2, '0')}
              </span>
              <h3 className="mobile-carousel-title">{activeMobileCard.title}</h3>
              <p className="mobile-carousel-desc">{activeMobileCard.description}</p>
              <button
                type="button"
                className="mobile-carousel-stats"
                onClick={() => openStats(activeMobileCard.title)}
              >
                View Stats
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mobile-carousel-arrow mobile-carousel-arrow-next"
            onClick={goMobileNext}
            aria-label="Next entertainment platform"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mobile-carousel-dots" role="tablist" aria-label="Choose entertainment platform">
          {allCards.map((card, index) => (
            <button
              type="button"
              key={card.title}
              className={`mobile-carousel-dot ${index === activeMobileCardIndex ? 'is-active' : ''}`}
              onClick={() => setActiveMobileCardIndex(index)}
              aria-label={`Show ${card.title}`}
              aria-current={index === activeMobileCardIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>

      {/* ── Stats Modal Overlay ── */}
      {isStatsOpen && activeCard && (
        <div className="stats-modal-overlay" onClick={closeStats}>
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
          <div className="gradient-blob blob-4"></div>

          <div
            className={`stats-stage ${activeCard.editorial ? 'stats-stage-editorial' : ''}`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${incomingCard?.title || activeCard.title} stats`}
          >
            <h2 className="stats-stage-title">
              Entertainment for <span className="gradient-text">2.3 Bn</span> Heartbeats
            </h2>

            {/* Side cards */}
            {prevCard && !transition && (
              <div className="stats-side-card stats-side-card-left" aria-hidden="true">
                <img src={prevCard.statImage || prevCard.image} alt="" className="stats-side-card-bg" decoding="async" />
                <div className="stats-side-card-overlay">
                  <span className="stats-side-card-title">{prevCard.title}</span>
                </div>
              </div>
            )}

            {nextCard && !transition && (
              <div className="stats-side-card stats-side-card-right" aria-hidden="true">
                <img src={nextCard.statImage || nextCard.image} alt="" className="stats-side-card-bg" decoding="async" />
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

            {/* ── CSS arc carousel ── */}
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
