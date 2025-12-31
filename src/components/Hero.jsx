import React, { useState, useEffect } from 'react';
import { Flame, Ticket, Play } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const Hero = () => {
  const { openBooking } = useBooking();

  useEffect(() => {
    // Snowfall Generation
    const snowContainer = document.getElementById('snow-container');
    const createSnow = () => {
      if (!snowContainer) return;
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      const size = Math.random() * 3 + 2 + 'px';
      snowflake.style.width = size;
      snowflake.style.height = size;
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.opacity = Math.random() * 0.5 + 0.3;
      const duration = Math.random() * 5 + 5 + 's';
      snowflake.style.animationDuration = duration;
      snowContainer.appendChild(snowflake);
      setTimeout(() => snowflake.remove(), 10000);
    };

    const snowInterval = setInterval(createSnow, 200);

    // Fire Flares Generation
    const flaresContainer = document.getElementById('fire-flares');
    const createFireFlare = () => {
      if (!flaresContainer) return;
      const flare = document.createElement('div');
      flare.classList.add('fire-flare');
      flare.style.left = Math.random() * 100 + '%';
      const duration = Math.random() * 4 + 4 + 's';
      flare.style.animationDuration = duration;
      const width = Math.random() * 15 + 15;
      flare.style.width = width + 'px';
      flaresContainer.appendChild(flare);
      setTimeout(() => flare.remove(), 8000);
    };

    const flareInterval = setInterval(createFireFlare, 600);

    return () => {
      clearInterval(snowInterval);
      clearInterval(flareInterval);
    };
  }, []);

  return (
    <header className="relative w-full min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div id="snow-container" className="absolute inset-0 pointer-events-none z-20 overflow-hidden"></div>
      <div id="fire-flares" className="absolute inset-0 z-0 overflow-hidden pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-tiki-dark to-tiki-dark pointer-events-none"></div>

      <div className="relative z-40 text-center px-4 sm:px-8 w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 animate-pulse-slow">
            <Flame className="w-12 h-12 text-tiki-orange" />
          </div>
        </div>
        <h2 className="text-tiki-gold text-xs sm:text-sm md:text-xl tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-6 font-bold">Sarpanpally Lake, Vikarabad</h2>
        <h1 className="font-tribal text-3xl sm:text-4xl md:text-7xl lg:text-9xl text-white mb-6 leading-tight drop-shadow-2xl">
          Wild. Primal. <br />
          <span className="fire-text">Unforgettable.</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          Disconnect from the chaos and reconnect with nature. Experience the ultimate tribal gathering at <strong>Sarpanpally Lake</strong>.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center relative z-50 px-4">
          <button onClick={openBooking} className="px-10 py-5 bg-tiki-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-[0_0_40px_rgba(230,74,25,0.4)] flex items-center justify-center gap-3 transform hover:scale-105 hover:-translate-y-1">
            <Ticket />
            Book Camping
          </button>
          <a href="#experience" className="px-10 py-5 bg-white/10 border border-white/30 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 transform hover:scale-105 hover:-translate-y-1">
            <Play />
            Watch The Vibe
          </a>
        </div>
      </div>

      <div className="curve-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
