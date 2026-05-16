import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Entertainment from './components/Entertainment';
import AdFormats from './components/AdFormats';
import PremiumAdFormats from './components/PremiumAdFormats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Rise from './pages/Rise';

function MainPage() {
  return (
    <>
   {/* ── SEO: React 19 native document metadata hoisting ── */}
      <title>Z Ad World | Multi-Screen Advertising Network by Zee</title>
      <meta name="description" content="Z Ad World is Zee's unified advertising network spanning Broadcast, OTT, YouTube, and Social Media. Reach millions across multiple screens with premium ad formats." />
      <meta name="keywords" content="Z Ad World, Zee advertising, multi-screen ads, broadcast advertising, OTT advertising, digital ad network India" />
      <link rel="canonical" href="https://z-ad-world.vercel.app/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://z-ad-world.vercel.app/" />
      <meta property="og:title" content="Z Ad World | Multi-Screen Advertising Network" />
      <meta property="og:description" content="Reach millions across Broadcast, OTT, YouTube, and Social Media with Z Ad World's premium advertising solutions." />
      <meta property="og:image" content="https://z-ad-world.vercel.app/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Z Ad World" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ZeeEntertainment" />
      <meta name="twitter:title" content="Z Ad World | Multi-Screen Advertising Network" />
      <meta name="twitter:description" content="Reach millions across Broadcast, OTT, YouTube, and Social Media with Z Ad World's premium advertising solutions." />
      <meta name="twitter:image" content="https://z-ad-world.vercel.app/og-image.jpg" />

      {/* ── Structured Data: Organization ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Z Ad World",
            "url": "https://z-ad-world.vercel.app",
            "logo": "https://z-ad-world.vercel.app/favicon.png",
            "description": "Zee's unified multi-screen advertising network spanning Broadcast, OTT, YouTube, and Social Media.",
            "sameAs": [
              "https://www.linkedin.com/company/zee5adworld/",
              "https://www.instagram.com/zeeadworld/",
              "https://www.facebook.com/ZeeAdWorld"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "url": "https://z-ad-world.vercel.app/#contact"
            }
          })
        }}
      />

      {/* ── Structured Data: WebSite ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Z Ad World",
            "url": "https://z-ad-world.vercel.app"
          })
        }}
      /> 
    <div className="App">
      <Navbar />
      <Hero />
      <Entertainment />
      <PremiumAdFormats />
      <AdFormats />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rise" element={<Rise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
