import React, { useState } from "react";
import "./PremiumAdFormats.css";
import spotlightMockup from "../assets/spotlight-mockup.webp";
import displayMockup from "../assets/display-mockup.webp";
import inRailStaticBanner from "../assets/in-rail-static-banner.webp";
import overlayAstonBand from "../assets/overlay-aston-band.webp";
import disruptorAston from "../assets/disruptor-aston.webp";
import brandedCarousel from "../assets/branded-carousel.webp";
import lBand from "../assets/l-band.webp";
import brandedWindowGec from "../assets/branded-window-gec.webp";
import comingUpWindowGec from "../assets/coming-up-window-gec.webp";
import inContentAdvertising from "../assets/in-content-advertising.webp";
import metaTaggedAston from "../assets/meta-tagged-aston.webp";
import pauseAndPlay from "../assets/pause-and-play.webp";
import inShowIntegration from "../assets/in-show-integration.webp";
import qrAstons from "../assets/qr-astons.webp";
import anchorMentions from "../assets/anchor-mentions.webp";
import ctvPauseAdDesktop from "../assets/CtV Pause Ad.webp";
import companionAdsMobile from "../assets/COMPANION ADS.webp";
import appExitBannerMobile from "../assets/App Exit banner.webp";

const categories = [
  {
    key: "spotlight",
    name: "Spotlight",
    description:
      "Spotlight is an Omni-Channel, High Visibility Advertising innovation that blends premium brand touchpoints to amplify presence and deliver impactful reach at scale.",
    platforms: ["Digital"],
    tabs: [
      {
        name: "Masthead",
        displayTitle: "MASTHEAD",
        description:
          "The Masthead is a high-impact ad unit that appears at the top of the home screen, making it the first banner to capture user attention.",
        usage:
          "Ideal for Brand Recall, Mass reach and Driving traffic to the website or app.",
        image: spotlightMockup,

        buyingOptions: [
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
          { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
      {
        name: "Roadblock",
        displayTitle: "ROADBLOCK",
        description:
          "RoadBlock ads allow advertisers to promote multiple creatives simultaneously, delivering a 100% share of screen visibility across platform.",
        usage:
          "Ideal for High brand visibility, Strong impact during campaigns.",
        image: displayMockup,
        buyingOptions: [
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "One click and money is charged, no extra charges on any ad" },
          { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads only" },
          { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by ads" },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility on the app" },
        ],
      },
      {
        name: "In-rail Static Ads",
        displayTitle: "IN-RAIL STATIC BANNERS",
        description:
          "In-Rail Static Banners are high-visibility placements within content rails, ensuring seamless brand presence as users browse.",
        usage:
          "Deliver seamless, non-intrusive brand visibility within browsing content feeds.",
        image: inRailStaticBanner,
        buyingOptions: [
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
          { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
          { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
        ],
      },
      {
        name: "App Exit Banner",
        displayTitle: "APP EXIT BANNER",
        description:
          "App Exit Banners are the full-screen or high-impact display ads that appear when a user attempts to exit or close the app.",
        usage:
          "Ideal for Brand Recall, Re-engagement and redirecting users to a website or app.",
        image: appExitBannerMobile,
        buyingOptions: [
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
          { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
      {
        name: "CTV Pause Ads",
        displayTitle: "CTV PAUSE ADS",
        description:
          "CTV Pause Ads are static ad creatives that appear on the screen when a viewer pauses video content on the Connected TV.",
        usage:
          "Ideal for Strong brand recall and High brand visibility on the big screen.",
        image: ctvPauseAdDesktop,
        buyingOptions: [
          { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
      {
        name: "Clickable Companion",
        displayTitle: "CLICKABLE COMPANION",
        description:
          "Companion ads are display or interactive ad units that appear alongside video content, such as beside or below the video player.",
        usage:
          "Ideal for Brand Reinforcement, High Recall and supporting video ad campaigns.",
        image: companionAdsMobile,

        buyingOptions: [
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
          { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
      {
        name: "Overlays Aston Bands",
        displayTitle: "OVERLAYS ASTON BANDS",
        description:
          "Aston Bands are overlay-style advertising units that appear as slim, non-intrusive bands on the video player.",
        usage:
          "Ideal for Brand Presence, Driving consideration without disrupting viewing.",
        image: overlayAstonBand,
        buyingOptions: [
          { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
    ],
  },
  {
    key: "reach",
    name: "Reach",
    description:
      "Maximize visibility and drive Awareness by connecting with high-value audiences through premium placements designed to deliver impactful reach at scale.",
    platforms: ["Digital", "Linear"],
    platformTabs: {
      Digital: [
        {
          name: "In-rail Static Ads",
          displayTitle: "IN-RAIL STATIC ADS",
          description:
            "In-Rail Static Banners are high-visibility placements within content rails, ensuring seamless brand presence as users browse.",
          usage:
            "Deliver seamless, non-intrusive brand visibility within browsing content feeds.",
          image: inRailStaticBanner,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
            { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          ],
        },
        {
          name: "App Exit Banner",
          displayTitle: "APP EXIT BANNER",
          description:
            "App Exit Banners are the full-screen or high-impact display ads that appear when a user attempts to exit or close the app.",
          usage:
            "Ideal for Brand Recall, Re-engagement and redirecting users to a website or app.",
          image: appExitBannerMobile,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
            { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
      ],
      Linear: [
        {
          name: "Disruptor Astons",
          displayTitle: "DISRUPTER ASTON BAND",
          description:
            "Disrupter Aston Bands are high-visibility banner formats designed to interrupt the browsing journey and immediately grab user attention.",
          usage:
            "Ideal for Flash sales, Product launches and limited-time offers",
          image: disruptorAston,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
            { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          ],
        },
        {
          name: "Branded Carousel",
          displayTitle: "BRANDED CAROUSEL",
          description:
            "Branded Carousel ads are interactive, multi-frame ad units that allow advertisers to showcase multiple creatives in a swipeable format.",
          usage:
            "Ideal for Storytelling, Product showcases and Multi-offer campaigns.",
          image: brandedCarousel,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          ],
        },
        {
          name: "L-Bands",
          displayTitle: "L-BANDS",
          description:
            "L-Bands are L-shaped overlay ad units that wrap around the content on two sides, providing high visibility without fully interrupting the viewing experience.",
          usage:
            "Ideal for Brand Awareness, Sponsorship integration and High-impact visibility.",
          image: lBand,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
      ],
    },
  },
  {
    key: "inspire",
    name: "Inspire",
    description:
      "Capture attention and spark Interest through immersive storytelling formats. This stage focuses on meaningful engagement that builds brand recall and emotional connection.",
    platforms: ["Linear"],
    tabs: [
      {
        name: "Branded Window",
        displayTitle: "BRANDED WINDOW",
        description:
          "Branded Window (GEC) is a customized, high-visibility ad placement within General Entertainment Content (GEC).",
        usage: "Ideal for Premium brand positioning, Mass audience reach within entertainment content.",
        image: brandedWindowGec,
        buyingOptions: [
          { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
      {
        name: "Coming Up Window",
        displayTitle: "COMING UP WINDOW",
        description:
          "Coming Up Window (GEC) is a branded ad placement that appears during the 'Coming Up Next' segment within General Entertainment Content.",
        usage:
          "Ideal for Brand Awareness, Audience anticipation and capturing attention during content transitions.",
        image: comingUpWindowGec,
        buyingOptions: [
          { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
      {
        name: "In-content Ads",
        displayTitle: "IN-CONTENT ADVERTISING",
        description:
          "In-Content Advertising is a seamless ad integration within entertainment content, blending brand messaging naturally into the viewing experience.",
        usage: "Ideal for Deep brand integration, High recall and Non-intrusive engagement.",
        image: inContentAdvertising,
        buyingOptions: [
          { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
          { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
        ],
      },
    ],
  },
  {
    key: "synergize",
    name: "Synergize",
    description:
      "Capture attention, spark interest, and build Desire through immersive storytelling formats that drive engagement, strengthen brand recall, and create emotional connections.",
    platforms: ["Digital", "Linear"],
    platformTabs: {
      Digital: [
        {
          name: "CTV Pause Ads",
          displayTitle: "CTV PAUSE ADS",
          description:
            "CTV Pause Ads are static ad creatives that appear on the screen when a viewer pauses video content on the Connected TV.",
          usage:
            "Ideal for Strong brand recall and High brand visibility on the big screen.",
          image: ctvPauseAdDesktop,
          buyingOptions: [
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
      ],
      Linear: [
        {
          name: "Meta Tagged Aston",
          displayTitle: "META TAGGED ASTON",
          description:
            "Meta Tagged Aston is a performance-enabled Aston band format integrated with clickable metadata elements.",
          usage: "Ideal for Enhancing discoverability through contextual tagging.",
          image: metaTaggedAston,
          buyingOptions: [
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
        {
          name: "Pause & Play",
          displayTitle: "PAUSE & PLAY",
          description:
            "Pause & Play ads are interactive ad units that appear when a viewer pauses content, offering an engaging brand experience during natural viewing breaks.",
          usage:
            "Ideal for High brand recall, Non-intrusive engagement during content consumption.",
          image: pauseAndPlay,
          buyingOptions: [
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
        {
          name: "In show Integration",
          displayTitle: "IN SHOW INTEGRATION",
          description:
            "In Show Integration is a seamless brand placement within the show's storyline, creating organic and memorable brand associations.",
          usage: "Ideal for Deep brand integration, High recall and Authentic audience connection.",
          image: inShowIntegration,
          buyingOptions: [
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
      ],
    },
  },
  {
    key: "engage",
    name: "Engage",
    description:
      "Convert attention into measurable Action. From direct interactions to response driven formats, this stage empowers users to click, explore, and take the next step.",
    platforms: ["Digital", "Linear"],
    platformTabs: {
      Digital: [
        {
          name: "Clickable Companion",
          displayTitle: "CLICKABLE COMPANION",
          description:
            "Companion ads are display or interactive ad units that appear alongside video content, such as beside or below the video player.",
          usage:
            "Ideal for Brand Reinforcement, High Recall and supporting video ad campaigns",
          image: companionAdsMobile,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
            { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
        {
          name: "Overlay Aston Bands",
          displayTitle: "OVERLAY ASTON BANDS",
          description:
            "Aston Bands are overlay-style advertising units that appear as slim, non-intrusive bands on the video player.",
          usage:
            "Ideal for Brand Presence, Driving consideration without disrupting viewing.",
          image: overlayAstonBand,
          buyingOptions: [
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
      ],
      Linear: [
        {
          name: "QR Code Astons",
          displayTitle: "QR CODE ASTONS",
          description:
            "QR Code Astons are high-visibility Aston band formats integrated with a scannable QR code on the screen.",
          usage: "Ideal for Driving website visits or app downloads, Bridging TV-to-mobile journeys.",
          image: qrAstons,
          buyingOptions: [
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPL", subtitle: "(Cost Per Lead)", desc: "Pay for qualified leads generated." },
            { label: "CPI", subtitle: "(Cost Per Install)", desc: "Pay for app installs driven by the ad." },
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
          ],
        },
        {
          name: "Anchor Mentions",
          displayTitle: "ANCHOR MENTIONS",
          description:
            "Anchor Mentions are brand integrations where the TV anchor organically mentions or showcases the brand during live or recorded content.",
          usage: "Ideal for Authentic brand endorsement, High trust and Credibility building.",
          image: anchorMentions,
          buyingOptions: [
            { label: "CPM", subtitle: "(Cost Per Mile)", desc: "Cost per 1,000 ad impressions." },
            { label: "CPC", subtitle: "(Cost Per Click)", desc: "Cost incurred when a viewer clicks on the ad." },
            { label: "CPD", subtitle: "(Cost Per Day)", desc: "Fixed cost for exclusive visibility per day." },
          ],
        },
      ],
    },
  },
];

function PremiumAdFormats() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const category = categories[activeCategoryIndex];
  const activePlatformName = category.platforms[activePlatform] || category.platforms[0];
  const tabs = category.platformTabs
    ? category.platformTabs[activePlatformName]
    : category.tabs;
  const activeAd = tabs[activeTab];
  const mockupSrc = activeAd.image;

  const preloadAndFadeIn = (src, callback) => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      callback();
    } else {
      img.onload = callback;
      img.onerror = callback;
    }
  };

  const handleCategoryChange = (index) => {
    if (index === activeCategoryIndex) return;
    setFadeIn(false);
    const nextCat = categories[index];
    const nextTabs = nextCat.platformTabs
      ? nextCat.platformTabs[nextCat.platforms[0]]
      : nextCat.tabs;
    const nextSrc = nextTabs[0].image;
    setTimeout(() => {
      preloadAndFadeIn(nextSrc, () => {
        setActiveCategoryIndex(index);
        setActiveTab(0);
        setActivePlatform(0);
        setFadeIn(true);
      });
    }, 300);
  };

  const handlePlatformChange = (index) => {
    if (index === activePlatform) return;
    setFadeIn(false);
    const nextTabs = category.platformTabs
      ? category.platformTabs[category.platforms[index]]
      : category.tabs;
    const nextSrc = nextTabs[0].image;
    setTimeout(() => {
      preloadAndFadeIn(nextSrc, () => {
        setActivePlatform(index);
        setActiveTab(0);
        setFadeIn(true);
      });
    }, 300);
  };

  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setFadeIn(false);
    const nextSrc = tabs[index].image;
    setTimeout(() => {
      preloadAndFadeIn(nextSrc, () => {
        setActiveTab(index);
        setFadeIn(true);
      });
    }, 300);
  };

  return (
    <section id="premium-ad-formats" className="premium-ad-formats">
      <h2 className="premium-title">
        Optimize Your Presence With Premium Ad Formats
      </h2>

      <div className="category-tabs">
        {categories.map((cat, i) => (
          <button
            key={cat.key}
            className={`category-tab ${i === activeCategoryIndex ? "active" : ""}`}
            onClick={() => handleCategoryChange(i)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <p className="category-description">{category.description}</p>

      <div className="platform-toggle">
        {category.platforms.map((p, i) => (
          <button
            key={p}
            className={`platform-toggle-btn ${i === activePlatform ? "active" : ""}`}
            onClick={() => handlePlatformChange(i)}
          >
            {p}
          </button>
        ))}
      </div>

      <div className={`ad-category-content category-${category.key}`}>
        <div className="mockup-glow"></div>
        <div className={`ad-mockup mockup-${activeAd.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <img
            src={mockupSrc}
            alt={activeAd.displayTitle}
            className={`mockup-img ${fadeIn ? "mockup-visible" : "mockup-hidden"}`}
            loading="lazy"
            decoding="async"
          />
          {activeAd.secondaryImage && (
            <img
              src={activeAd.secondaryImage}
              alt=""
              className={`mockup-img mockup-secondary ${fadeIn ? "mockup-visible" : "mockup-hidden"}`}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>

        <div className="ad-info-card">
          <h4 className="ad-info-title">{activeAd.displayTitle}</h4>
          <div className="ad-info-section">
            <h5>Description</h5>
            <p>{activeAd.description}</p>
          </div>
          <div className="ad-info-section">
            <h5>Usage</h5>
            <p>{activeAd.usage}</p>
          </div>
          {activeAd.buyingOptions.length > 0 && (
            <div className="ad-info-section">
              <h5>Buying Options</h5>
              <div className="buying-options-grid">
                {activeAd.buyingOptions.map((opt, i) => (
                  <div
                    key={i}
                    className={`buying-option ${
                      activeAd.buyingOptions.length % 2 === 1 &&
                      i === activeAd.buyingOptions.length - 1
                        ? "buying-option-centered"
                        : ""
                    }`}
                  >
                    <span className="buying-label">{opt.label}</span>
                    <span className="buying-subtitle">{opt.subtitle}</span>
                    <span className="buying-desc">{opt.desc}</span>
                    <span className="buying-option-arrow">&#8250;</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="ad-tabs-nav">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              className={`ad-tab-btn ${activeTab === i ? "active" : ""}`}
              onClick={() => handleTabChange(i)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremiumAdFormats;
