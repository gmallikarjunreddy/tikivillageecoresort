import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

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
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-tiki-dark text-tiki-sand font-body overflow-x-hidden selection:bg-tiki-orange selection:text-white">
          <div id="global-sparkles" className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"></div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </main>
          <Footer />
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
