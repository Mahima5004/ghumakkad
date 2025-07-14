import React from 'react'

function Navbar() {
  return (
        <nav className="flex justify-between items-center p-4 bg-gray-700 text-white" aria-label="Main Navigation">
        <div className="text-xl font-bold">Ghumakkad</div>
        <ul className="flex gap-4 hidden md:flex">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Explore</a></li>
          <li><a href="#" className="hover:underline">Connect</a></li>
          <li><a href="#" className="hover:underline">Login</a></li>
        </ul>
      </nav>
  )
}

export default Navbar