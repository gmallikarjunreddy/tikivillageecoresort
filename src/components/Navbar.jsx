import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-tiki-dark shadow-lg' : 'bg-tiki-dark/95 backdrop-blur-md border-b border-white/10 shadow-xl'}`} id="navbar">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img src="https://res.cloudinary.com/dqoafctvv/image/upload/v1766549890/LOGO_n6tddb.png" alt="Tiki Village Logo" className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform" />
            <span className="font-tribal text-sm md:text-2xl text-tiki-gold tracking-widest">TIKI VILLAGE ECO RESORTS</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-tiki-orange transition-colors uppercase text-xs font-bold tracking-widest">About</a>
            <a href="#activities" className="hover:text-tiki-orange transition-colors uppercase text-xs font-bold tracking-widest">Activities</a>
            <a href="#nye2026" className="hover:text-tiki-orange transition-colors uppercase text-xs font-bold tracking-widest">NYE 2026</a>
            <a href="#regular-camping" className="hover:text-tiki-orange transition-colors uppercase text-xs font-bold tracking-widest">Camping</a>
            <a href="#menu" className="hover:text-tiki-orange transition-colors uppercase text-xs font-bold tracking-widest">Stay</a>
            <a href="#gallery" className="hover:text-tiki-orange transition-colors uppercase text-xs font-bold tracking-widest">Gallery</a>
            <a href="https://wa.me/917032360083?text=Hi%20Tiki%20Village%2C%20I%20want%20to%20book%20an%20experience." target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-tiki-orange text-white rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/50 text-sm flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Book Now
            </a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-tiki-gold hover:text-white transition-colors">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-tiki-dark transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 z-[60] bg-jungle-pattern`}>
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-tiki-sand hover:text-white">
          <X className="w-10 h-10" />
        </button>
        
        <div className="flex flex-col items-center gap-4 mb-4">
          <img src="https://res.cloudinary.com/dqoafctvv/image/upload/v1766549890/LOGO_n6tddb.png" alt="Tiki Village Logo" className="h-20 w-auto" />
          <h2 className="font-tribal text-2xl text-tiki-gold tracking-widest text-center px-6">TIKI VILLAGE ECO RESORT</h2>
        </div>

        <a href="#about" onClick={toggleMenu} className="text-2xl font-tribal hover:text-tiki-orange">Our Roots</a>
        <a href="#activities" onClick={toggleMenu} className="text-2xl font-tribal hover:text-tiki-orange">Activities</a>
        <a href="#nye2026" onClick={toggleMenu} className="text-3xl font-tribal text-tiki-gold hover:text-white">NYE Party</a>
        <a href="#regular-camping" onClick={toggleMenu} className="text-2xl font-tribal hover:text-tiki-orange">Camping</a>
        <a href="#menu" onClick={toggleMenu} className="text-2xl font-tribal hover:text-tiki-orange">Eat & Sleep</a>
        <a href="#gallery" onClick={toggleMenu} className="text-2xl font-tribal hover:text-tiki-orange">Gallery</a>
        <a href="https://wa.me/917032360083?text=Hi%2C%20I%20have%20a%20query." className="px-8 py-3 bg-tiki-green-700 border border-tiki-gold text-tiki-gold rounded-full font-bold text-lg">WhatsApp Us</a>
      </div>
    </>
  );
};

export default Navbar;
