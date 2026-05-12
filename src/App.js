import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Entertainment from './components/Entertainment';
import AdFormats from './components/AdFormats';
import PremiumAdFormats from './components/PremiumAdFormats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Entertainment />
      <PremiumAdFormats />
      <AdFormats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
