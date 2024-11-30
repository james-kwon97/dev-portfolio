'use client';

import { useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState('home');

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (sectionId === 'contact') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const offset = window.innerWidth >= 1024 ? 0 : 20;

        window.scrollTo({
          top: sectionTop - offset,
          behavior: 'smooth',
        });
      }
    }
    setActive(sectionId);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={scrollToSection('home')}
          className={`nav-item transition-colors duration-300 ${
            active === 'home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={scrollToSection('projects')}
          className={`nav-item transition-colors duration-300 ${
            active === 'projects'
              ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
              : ''
          }`}
        >
          Projects
        </button>
        <button
          onClick={scrollToSection('about')}
          className={`nav-item transition-colors duration-300 ${
            active === 'about' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''
          }`}
        >
          About
        </button>
        <button
          onClick={scrollToSection('contact')}
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
