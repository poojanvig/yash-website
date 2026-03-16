import React, { useState, useEffect } from "react";
import "./PremiumAdFormats.css";
import ctvMockup from "../assets/ctv-mockup.png";
import videoMockup from "../assets/video-mockup.png";
import displayMockup from "../assets/display-mockup.png";
import ctvMastheadsDesktop from "../assets/CTV mastheads.png";
import ctvPauseAdDesktop from "../assets/CtV Pause Ad.png";
import videoMidrollMobile from "../assets/video-adsMidroll.png";
import videoBumperAdsMobile from "../assets/video-adsBuperads.png";
import videoSplashScreenMobile from "../assets/Video Ads Splash screen.png";
import videoPrerollDesktop from "../assets/VideoAds-Preroll-desktop.png";
import videoBumperDesktop from "../assets/VideoAds-Bumber-desktop.png";

const adData = {
  ctv: {
    title: "CTV Ads",
    tabs: [
      {
        name: "CTV Mastheads",
        displayTitle: "CTV MASTHEADS",
        description:
          "CTV Mastheads are the high-impact display ad units that appear at the top of the home screen on Connected TV devices.",
        usage: "Ideal for Mass reach on Connected TVs, High Brand Recall.",
        desktopImage: ctvMastheadsDesktop,
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mile)",
            desc: "Cost per 1,000 ad impressions.",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Cost incurred when a viewer clicks on the ad.",
          },
          {
            label: "CPD",
            subtitle: "(Cost Per Day)",
            desc: "Fixed cost for exclusive visibility per day.",
          },
        ],
      },
      {
        name: "CTV Pause Ads",
        displayTitle: "CTV PAUSE ADS",
        description:
          "CTV Pause Ads are static ad creatives that appear on the screen when a viewer pauses video content on the Connected TV.",
        usage: "Ideal for Strong brand recall and High brand visibility on the big screen.",
        desktopImage: ctvPauseAdDesktop,
        desktopOnly: true,
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mile)",
            desc: "Cost per 1,000 ad impressions.",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Cost incurred when a viewer clicks on the ad.",
          },
          {
            label: "CPD",
            subtitle: "(Cost Per Day)",
            desc: "Fixed cost for exclusive visibility per day.",
          },
        ],
      },
    ],
  },
  video: {
    title: "Video Ads",
    tabs: [
      {
        name: "Pre-roll",
        displayTitle: "PRE-ROLL",
        description:
          "Pre-roll ads are typically the ads that automatically plays before the content the end user has selected to watch.",
        usage: "Ideal for Brand Awareness, Recall, Launch Campaigns.",
        desktopImage: videoPrerollDesktop,
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mile)",
            desc: "Cost per 1,000 ad impressions.",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Cost incurred when a viewer clicks on the ad.",
          },
          {
            label: "CPCV",
            subtitle: "(Cost Per Completed View)",
            desc: "Advertisers pay only when the video ad is watched.",
          },
        ],
      },
      {
        name: "Mid-roll",
        displayTitle: "MID-ROLL",
        description:
          "Mid-roll ads are non-skippable video advertisements that play during the viewers are actively engaged with the video.",
        usage: "Ideal for Brand Awareness, Recall, and consideration.",
        mobileImage: videoMidrollMobile,
        desktopImage: videoPrerollDesktop,
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mile)",
            desc: "Cost per 1,000 ad impressions.",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Cost incurred when a viewer clicks on the ad.",
          },
          {
            label: "CPCV",
            subtitle: "(Cost Per Completed View)",
            desc: "Advertisers pay only when the video ad is watched.",
          },
        ],
      },
      {
        name: "Bumper-Ads",
        displayTitle: "BUMPER ADS",
        description:
          "Bumper ads are short, bite-sized video that are non-skippable. They deliver quick brand message with minimal disruption.",
        usage: "Ideal for Branding and Storytelling in shorts formats.",
        mobileImage: videoBumperAdsMobile,
        desktopImage: videoBumperDesktop,
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mile)",
            desc: "Cost per 1,000 ad impressions.",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Cost incurred when a viewer clicks on the ad.",
          },
          {
            label: "CPCV",
            subtitle: "(Cost Per Completed View)",
            desc: "Advertisers pay only when the video ad is watched.",
          },
        ],
      },
      {
        name: "Splash Screen",
        displayTitle: "SPLASH SCREEN",
        description:
          "Splash Screen ads are full-screen, high-impact brand creatives that appear when users open the app.",
        usage: "Ideal for Instant Brand Awareness, High Recall and Mass Reach.",
        mobileImage: videoSplashScreenMobile,
        desktopImage: videoMockup,
        mobileOnly: true,
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mile)",
            desc: "Cost per 1,000 ad impressions.",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Cost incurred when a viewer clicks on the ad.",
          },
          {
            label: "CPD",
            subtitle: "(Cost Per Day)",
            desc: "Fixed cost for exclusive visibility per day.",
          },
        ],
      },
    ],
  },
  display: {
    title: "Display Ads",
    tabs: [
      {
        name: "Roadblock",
        displayTitle: "ROADBLOCK",
        description:
          "RoadBlock ads allow advertisers to promote multiple creatives simultaneously, delivering a 100% share of screen visibility across platform.",
        usage:
          "Ideal for High brand visibility, Strong impact during campaigns.",
        desktopImage: displayMockup,
        buyingOptions: [
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "One click and money is charged, no extra charges on any ad",
          },
          {
            label: "CPL",
            subtitle: "(Cost Per Lead)",
            desc: "Pay for qualified leads only",
          },
          {
            label: "CPI",
            subtitle: "(Cost Per Install)",
            desc: "Pay for app installs driven by ads",
          },
          {
            label: "CPD",
            subtitle: "(Cost Per Day)",
            desc: "Fixed cost for exclusive visibility on the app",
          },
        ],
      },
      {
        name: "Masthead",
        displayTitle: "MASTHEAD",
        description: "Top banner ad placement.",
        usage: "Ideal for premium visibility.",
        desktopImage: displayMockup,
        buyingOptions: [],
      },
      {
        name: "Native",
        displayTitle: "NATIVE",
        description: "Ads that blend with content.",
        usage: "Ideal for seamless engagement.",
        desktopImage: displayMockup,
        buyingOptions: [],
      },
      {
        name: "Companion Ads",
        displayTitle: "COMPANION ADS",
        description: "Complementary ad placements.",
        usage: "Ideal for reinforcing brand message.",
        desktopImage: displayMockup,
        buyingOptions: [],
      },
      {
        name: "Aston Bonds",
        displayTitle: "ASTON BONDS",
        description: "Overlay ads during content.",
        usage: "Ideal for non-intrusive branding.",
        desktopImage: displayMockup,
        buyingOptions: [],
      },
      {
        name: "Push Notification",
        displayTitle: "PUSH NOTIFICATION",
        description: "Direct push notifications to users.",
        usage: "Ideal for re-engagement.",
        desktopImage: displayMockup,
        buyingOptions: [],
      },
      {
        name: "App Exit Banner",
        displayTitle: "APP EXIT BANNER",
        description: "Ads shown when user exits app.",
        desktopImage: displayMockup,
        usage: "Ideal for last impression.",
        buyingOptions: [],
      },
    ],
  },
};

const mockupImages = {
  ctv: ctvMockup,
  video: videoMockup,
  display: displayMockup,
};

function AdCategory({ categoryKey, data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [platform, setPlatform] = useState("mobile");
  const [fadeIn, setFadeIn] = useState(true);
  const visibleTabs = data.tabs.filter(
    (tab) =>
      (platform === "desktop" || !tab.desktopOnly) &&
      (platform === "mobile" || !tab.mobileOnly)
  );
  const activeAd = visibleTabs[activeTab];
  const mockupSrc =
    platform === "desktop" && activeAd.desktopImage
      ? activeAd.desktopImage
      : activeAd.mobileImage
        ? activeAd.mobileImage
        : mockupImages[categoryKey];

  const handlePlatformChange = (newPlatform) => {
    setFadeIn(false);
    setTimeout(() => {
      setPlatform(newPlatform);
      setActiveTab(0);
      setFadeIn(true);
    }, 400);
  };

  return (
    <div className={`ad-category ad-category-${categoryKey} platform-${platform}`}>
      <h3 className="ad-category-title">{data.title}</h3>
      <div className="platform-toggle">
        <button
          className={`toggle-btn ${platform === "mobile" ? "active" : ""}`}
          onClick={() => handlePlatformChange("mobile")}
        >
          Mobile
        </button>
        <button
          className={`toggle-btn ${platform === "desktop" ? "active" : ""}`}
          onClick={() => handlePlatformChange("desktop")}
        >
          Desktop
        </button>
      </div>

      <div className="ad-category-content">
        <div className="mockup-glow"></div>
        <div className="ad-mockup">
          <img
            src={mockupSrc}
            alt={data.title}
            className={`mockup-img ${fadeIn ? "mockup-visible" : "mockup-hidden"}`}
          />
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
          {visibleTabs.map((tab, i) => (
            <button
              key={i}
              className={`ad-tab-btn ${activeTab === i ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PremiumAdFormats() {
  return (
    <section id="premium-ad-formats" className="premium-ad-formats">
      <h2 className="premium-title">Premium Ad Formats</h2>
      <p className="premium-subtitle">
        High-Impact Ad Formats That Connect Brands
        <br />
        to Millions
      </p>

      <AdCategory categoryKey="ctv" data={adData.ctv} />
      <div className="section-divider"></div>
      <AdCategory categoryKey="video" data={adData.video} />
      <div className="section-divider"></div>
      <AdCategory categoryKey="display" data={adData.display} />
    </section>
  );
}

export default PremiumAdFormats;
