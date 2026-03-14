import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Entertainment from './components/Entertainment';
import AdFormats from './components/AdFormats';
import PremiumAdFormats from './components/PremiumAdFormats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Entertainment />
      <AdFormats />
      <PremiumAdFormats />
    </div>
  );
}

export default App;
