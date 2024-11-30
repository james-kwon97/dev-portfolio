'use client';

import { useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => setActive('home')}
          className={`nav-item transition-colors duration-300 ${
            active === 'home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActive('projects')}
          className={`nav-item transition-colors duration-300 ${
            active === 'projects'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : ''
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActive('about')}
          className={`nav-item transition-colors duration-300 ${
            active === 'about' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActive('contact')}
          className={`nav-item transition-colors duration-300 ${
            active === 'contact'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : ''
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
