import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        <img src="https://res.cloudinary.com/dqoafctvv/image/upload/v1766549890/LOGO_n6tddb.png" alt="Logo" className="h-20 mx-auto mb-6 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        
        <p className="text-gray-600 max-w-md mx-auto mb-8 text-sm">
          Tiki Village Eco Resort is a sustainable tribal-themed getaway in Vikarabad. We respect nature, local traditions, and the silence of the woods.
        </p>

        <div className="flex justify-center gap-8 mb-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
          <a href="/#about" className="hover:text-tiki-orange transition-colors">Story</a>
          <a href="/#guidelines" className="hover:text-tiki-orange transition-colors">Rules</a>
          <a href="/#location" className="hover:text-tiki-orange transition-colors">Contact</a>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-700 text-xs">
          <p>&copy; 2025 Tiki Village Eco Resort. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for the Tribe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
