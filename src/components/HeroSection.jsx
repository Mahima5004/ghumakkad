import React from 'react';
import DestinationSearch from './DestinationSearch';

function HeroSection() {
  return (
    <>
    
      {/* Hero Section */}
     
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Plan. Explore. Connect.</h1>
        <p className="text-lg mb-6">Your one-stop travel companion</p>
        <DestinationSearch />
      </section>
      
    </>
  );
}

export default HeroSection;
