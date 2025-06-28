import React from 'react';

function Header() {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-gray-700 text-white" aria-label="Main Navigation">
        <div className="text-xl font-bold">Ghumakkad</div>
        <ul className="flex gap-4 hidden md:flex">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Explore</a></li>
          <li><a href="#" className="hover:underline">Connect</a></li>
          <li><a href="#" className="hover:underline">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Plan. Explore. Connect.</h1>
        <p className="text-lg mb-6">Your one-stop travel companion</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Start Exploring</button>
      </section>
    </header>
  );
}

export default Header;
