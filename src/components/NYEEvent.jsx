import React, { useEffect } from 'react';
import { Sparkles, Clock, Ticket, Check } from 'lucide-react';

const NYEEvent = () => {
  useEffect(() => {
    const container = document.getElementById('fire-sparkles-nye');
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

    const interval = setInterval(createSparkle, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="nye2026" className="py-24 bg-tiki-brown relative bg-jungle-pattern bg-blend-multiply overflow-hidden">
      <div id="fire-sparkles-nye" className="absolute inset-0 pointer-events-none z-0"></div>
      <div className="curve-top text-tiki-charcoal">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-tiki-orange/20 border border-tiki-orange text-tiki-orange px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" /> The Main Event • Dec 31
          </div>
          <h2 className="font-tribal text-5xl md:text-7xl text-white mb-6">Welcome 2026 <br /> <span className="text-tiki-gold">Under The Stars</span></h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">Join the biggest tribal gathering at Sarpanpally Lake. DJ, Bonfire, Camping, and a feast fit for chiefs.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-20 reveal">
          <div className="relative border-l-2 border-tiki-orange/30 ml-4 md:ml-12 space-y-12">
            {/* Timeline Item */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-5 h-5 bg-tiki-orange rounded-full border-4 border-tiki-brown"></div>
              <h4 className="text-tiki-gold font-bold text-xl">4:00 PM</h4>
              <h3 className="text-white text-2xl font-tribal">Check-In & High Tea</h3>
              <p className="text-gray-400">Arrive at the village. Settle into your tents and enjoy welcome drinks.</p>
            </div>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-5 h-5 bg-tiki-dark rounded-full border-2 border-tiki-orange"></div>
              <h4 className="text-tiki-gold font-bold text-xl">5:00 PM</h4>
              <h3 className="text-white text-2xl font-tribal">Tribal Games & Adventure</h3>
              <p className="text-gray-400">Archery, Volleyball, and Box Cricket tournaments begin.</p>
            </div>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-5 h-5 bg-tiki-dark rounded-full border-2 border-tiki-orange"></div>
              <h4 className="text-tiki-gold font-bold text-xl">8:00 PM</h4>
              <h3 className="text-white text-2xl font-tribal">Bonfire & Music</h3>
              <p className="text-gray-400">Gather around the fire. The DJ starts spinning tribal beats.</p>
            </div>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-1 w-5 h-5 bg-tiki-dark rounded-full border-2 border-tiki-orange"></div>
              <h4 className="text-tiki-gold font-bold text-xl">12:00 AM</h4>
              <h3 className="text-white text-2xl font-tribal">NYE Celebration</h3>
              <p className="text-gray-400">Welcome 2026 under the open sky.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 items-center">
          {/* Group */}
          <div className="bg-[#1a1816] border border-gray-800 p-8 rounded-2xl reveal hover:border-tiki-orange transition-all order-2 md:order-1 relative group hover:-translate-y-2">
            <h3 className="font-tribal text-2xl text-white mb-2">Group Tribe</h3>
            <div className="text-4xl font-bold text-tiki-orange mb-4">₹2600 <span className="text-sm text-gray-500 font-normal">/ head</span></div>
            <p className="text-sm text-gray-400 mb-6 border-b border-gray-800 pb-4">Minimum Group of 10.</p>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> All Standard Inclusions</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> Group Tent Cluster</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> Dedicated Service</li>
            </ul>
            <a href="https://wa.me/917032360083?text=Hi%2C%20I%20have%20a%20group%20booking%20enquiry%20for%20NYE%202026." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 border border-gray-600 text-gray-300 font-bold rounded-xl hover:bg-tiki-sand hover:text-black hover:border-tiki-sand transition-all">
              Enquire Group
            </a>
          </div>

          {/* Early Bird (Featured) */}
          <div className="bg-gradient-to-b from-tiki-orange to-red-900 p-[2px] rounded-2xl transform md:-translate-y-6 shadow-2xl shadow-orange-900/50 reveal order-1 md:order-2 z-10 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#1a1816] p-8 rounded-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-tiki-gold text-black text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg">BEST VALUE</div>
              <h3 className="font-tribal text-3xl text-white mb-2">Early Bird</h3>
              <div className="text-5xl font-bold text-tiki-orange mb-4">₹3000 <span className="text-sm text-gray-400 font-normal">/ head</span></div>
              <p className="text-sm text-gray-300 mb-6 border-b border-gray-700 pb-4">Limited slots available.</p>
              <ul className="space-y-4 mb-10 text-white text-sm font-medium">
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-tiki-gold" /> Full NYE Access</li>
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-tiki-gold" /> Unlimited Buffet Dinner</li>
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-tiki-gold" /> Tent Stay & Breakfast</li>
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-tiki-gold" /> DJ & Bonfire Night</li>
              </ul>
              <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20the%20EARLY%20BIRD%20Pass%20for%20NYE%202026." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-tiki-orange text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                <Ticket className="w-5 h-5" /> Book Early Bird
              </a>
            </div>
          </div>

          {/* Standard */}
          <div className="bg-[#1a1816] border border-gray-800 p-8 rounded-2xl reveal hover:border-tiki-orange transition-all order-3 relative group hover:-translate-y-2">
            <h3 className="font-tribal text-2xl text-white mb-2">Regular Pass</h3>
            <div className="text-4xl font-bold text-gray-300 mb-4">₹3500 <span className="text-sm text-gray-500 font-normal">/ head</span></div>
            <p className="text-sm text-gray-400 mb-6 border-b border-gray-800 pb-4">Standard entry price.</p>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-gray-500" /> Full NYE Access</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-gray-500" /> Buffet Dinner</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-gray-500" /> Tent Stay & Breakfast</li>
            </ul>
            <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20the%20REGULAR%20Pass%20for%20NYE%202026." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 border border-gray-600 text-gray-300 font-bold rounded-xl hover:bg-tiki-sand hover:text-black hover:border-tiki-sand transition-all">
              Book Regular
            </a>
          </div>
        </div>

        <div className="max-w-md mx-auto reveal mb-16">
          <h3 className="text-tiki-gold text-center uppercase tracking-widest text-xs font-bold mb-6">Payment Details</h3>
          <div className="text-center">
            <img src="https://i.ibb.co/q31H9nr5/paymentqr.png" alt="Payment QR Code" className="mx-auto mb-4 w-90 h-160 rounded-lg border border-gray-600" />
            <p className="text-white text-lg font-bold">Pay with Mobile Number</p>
            <p className="text-tiki-gold text-2xl font-bold">7625000666</p>
          </div>
        </div>

        <div className="max-w-md mx-auto reveal mb-16">
          <h3 className="text-tiki-gold text-center uppercase tracking-widest text-xs font-bold mb-6">Party Preview</h3>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 flex justify-center bg-black">
            <iframe 
              src="https://www.instagram.com/reel/DSOp-SRD0gM/embed" 
              className="w-full aspect-[9/16] max-h-[600px] border-0" 
              scrolling="no" 
              allowtransparency="true" 
              allow="encrypted-media"
              title="Instagram Reel"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NYEEvent;
