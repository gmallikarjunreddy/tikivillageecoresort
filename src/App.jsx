import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Experience from './components/Experience';
import NYEEvent from './components/NYEEvent';
import RecentMoments from './components/RecentMoments';
import CampingPackages from './components/CampingPackages';
import MenuAndStay from './components/MenuAndStay';
import Gallery from './components/Gallery';
import Guidelines from './components/Guidelines';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll Reveal Animation
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal(); // Initial call

    // Global Sparkles Generation
    const container = document.getElementById('global-sparkles');
    const createSparkle = () => {
      if (!container) return;
      const sparkle = document.createElement('div');
      sparkle.classList.add('fire-sparkle');
      const size = Math.random() * 3 + 1 + 'px';
      sparkle.style.width = size;
      sparkle.style.height = size;
      sparkle.style.left = Math.random() * 100 + '%';
      const duration = Math.random() * 3 + 2 + 's';
      sparkle.style.animationDuration = duration;
      const jitter = (Math.random() - 0.5) * 200 + 'px';
      sparkle.style.setProperty('--jitter', jitter);
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 5000);
    };

    const interval = setInterval(createSparkle, 200);

    return () => {
      window.removeEventListener("scroll", reveal);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-tiki-dark text-tiki-sand font-body overflow-x-hidden selection:bg-tiki-orange selection:text-white">
      <div id="global-sparkles" className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Experience />
        <NYEEvent />
        <RecentMoments />
        <CampingPackages />
        <MenuAndStay />
        <Gallery />
        <Guidelines />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
