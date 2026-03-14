import React, { useState } from "react";
import "./PremiumAdFormats.css";
import ctvMockup from "../assets/ctv-mockup.png";
import videoMockup from "../assets/video-mockup.png";
import displayMockup from "../assets/display-mockup.png";

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
        buyingOptions: [
          {
            label: "CPM",
            subtitle: "(Cost Per Mille)",
            desc: "Charged per 1,000 ad impressions",
          },
          {
            label: "CPC",
            subtitle: "(Cost Per Click)",
            desc: "Charged only when users click on the ad",
          },
          {
            label: "CPCV",
            subtitle: "(Cost Per Completed View)",
            desc: "Advertiser pays only when the entire ad video is viewed",
          },
        ],
      },
      {
        name: "Mid-roll",
        displayTitle: "MID-ROLL",
        description: "Mid-roll ads play during content breaks.",
        usage: "Ideal for engaged audiences.",
        buyingOptions: [],
      },
      {
        name: "Bumper-Ads",
        displayTitle: "BUMPER ADS",
        description: "Short non-skippable ads.",
        usage: "Ideal for quick brand recall.",
        buyingOptions: [],
      },
      {
        name: "Splash Screen",
        displayTitle: "SPLASH SCREEN",
        description: "Full screen ads on app launch.",
        usage: "Ideal for maximum visibility.",
        buyingOptions: [],
      },
      {
        name: "CTV Mastheads",
        displayTitle: "CTV MASTHEADS",
        description:
          "CTV Mastheads are the high-impact display ad units that appear at the top of the home screen on connected TV devices.",
        usage:
          "Ideal for broad-screen dominance and top-of-home-screen brand ownership.",
        buyingOptions: [],
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
        buyingOptions: [],
      },
      {
        name: "Native",
        displayTitle: "NATIVE",
        description: "Ads that blend with content.",
        usage: "Ideal for seamless engagement.",
        buyingOptions: [],
      },
      {
        name: "Companion Ads",
        displayTitle: "COMPANION ADS",
        description: "Complementary ad placements.",
        usage: "Ideal for reinforcing brand message.",
        buyingOptions: [],
      },
      {
        name: "Aston Bonds",
        displayTitle: "ASTON BONDS",
        description: "Overlay ads during content.",
        usage: "Ideal for non-intrusive branding.",
        buyingOptions: [],
      },
      {
        name: "Push Notification",
        displayTitle: "PUSH NOTIFICATION",
        description: "Direct push notifications to users.",
        usage: "Ideal for re-engagement.",
        buyingOptions: [],
      },
      {
        name: "App Exit Banner",
        displayTitle: "APP EXIT BANNER",
        description: "Ads shown when user exits app.",
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
  const activeAd = data.tabs[activeTab];
  const mockupSrc = mockupImages[categoryKey];

  return (
    <div className={`ad-category ad-category-${categoryKey}`}>
      <h3 className="ad-category-title">{data.title}</h3>
      <div className="platform-toggle">
        <button
          className={`toggle-btn ${platform === "mobile" ? "active" : ""}`}
          onClick={() => setPlatform("mobile")}
        >
          Mobile
        </button>
        <button
          className={`toggle-btn ${platform === "desktop" ? "active" : ""}`}
          onClick={() => setPlatform("desktop")}
        >
          Desktop
        </button>
      </div>

      <div className="ad-category-content">
        <div className="ad-mockup">
          <div className="mockup-glow"></div>
          {mockupSrc && <img src={mockupSrc} alt={data.title} />}
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
          {data.tabs.map((tab, i) => (
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
    <section className="premium-ad-formats">
      <h2 className="premium-title">Premium Ad Formats</h2>
      <p className="premium-subtitle">
        Choose from a comprehensive range of advertising solutions
        <br />
        designed to deliver high visibility and measurable impact.
      </p>

      <AdCategory categoryKey="video" data={adData.video} />
      <div className="section-divider"></div>
      <AdCategory categoryKey="ctv" data={adData.ctv} />
      <div className="section-divider"></div>
      <AdCategory categoryKey="display" data={adData.display} />
    </section>
  );
}

export default PremiumAdFormats;
