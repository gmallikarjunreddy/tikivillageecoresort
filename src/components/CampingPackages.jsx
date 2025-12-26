import React from 'react';
import { Tent, Utensils, Flame, Gamepad2, Mountain, Wind, Home, Check } from 'lucide-react';

const CampingPackages = () => {
  return (
    <section id="regular-camping" className="py-24 bg-tiki-dark relative bg-totem-pattern bg-blend-soft-light">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-tiki-leaf/20 border border-tiki-leaf text-tiki-leaf px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Tent className="w-4 h-4" /> Regular Camping • Anytime
          </div>
          <h2 className="font-tribal text-5xl md:text-7xl text-white mb-6">Everyday <br /> <span className="text-tiki-gold">Camping Experience</span></h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">Experience the wild at Anantagiri Hills. Choose your perfect camping package.</p>
          <div className="mt-6 text-tiki-gold">
            <p className="font-bold">📍 Anantagiri Hills</p>
            <p className="text-sm text-gray-400 mt-2">Check-in: 4:30 PM | Check-out: 10:30 AM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 items-stretch">
          {/* Basic Package */}
          <div className="bg-[#1a1816] border border-gray-800 p-8 rounded-2xl reveal hover:border-tiki-leaf transition-all relative group hover:-translate-y-2">
            <h3 className="font-tribal text-2xl text-white mb-2">Basic Camp</h3>
            <div className="text-4xl font-bold text-tiki-leaf mb-4">₹999 <span className="text-sm text-gray-500 font-normal">/ package</span></div>
            <p className="text-sm text-gray-400 mb-6 border-b border-gray-800 pb-4">Stay only, bring your own food.</p>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-leaf" /> 2-sharing tent stay</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-leaf" /> No food included</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-leaf" /> Indoor & outdoor games</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-leaf" /> All basic facilities</li>
            </ul>
            <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20the%20BASIC%20camping%20package%20at%20%E2%82%B9999." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 border border-gray-600 text-gray-300 font-bold rounded-xl hover:bg-tiki-sand hover:text-black hover:border-tiki-sand transition-all">
              Book Basic
            </a>
          </div>

          {/* Standard Package (Featured) */}
          <div className="bg-gradient-to-b from-tiki-leaf to-green-900 p-[2px] rounded-2xl transform md:-translate-y-6 shadow-2xl shadow-green-900/50 reveal z-10 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#1a1816] p-8 rounded-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-tiki-gold text-black text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg">POPULAR</div>
              <h3 className="font-tribal text-3xl text-white mb-2">Standard</h3>
              <div className="text-5xl font-bold text-tiki-leaf mb-4">₹1500 <span className="text-sm text-gray-400 font-normal">/ package</span></div>
              <p className="text-sm text-gray-300 mb-6 border-b border-gray-700 pb-4">Complete camping with meals & bonfire.</p>
              <ul className="space-y-4 mb-10 text-white text-sm font-medium">
                <li className="flex items-center gap-3"><Tent className="w-5 h-5 text-tiki-leaf" /> 2-sharing tent with bedding</li>
                <li className="flex items-center gap-3"><Utensils className="w-5 h-5 text-tiki-leaf" /> Snacks, dinner & breakfast</li>
                <li className="flex items-center gap-3"><Flame className="w-5 h-5 text-tiki-leaf" /> Common bonfire</li>
                <li className="flex items-center gap-3"><Gamepad2 className="w-5 h-5 text-tiki-leaf" /> All games included</li>
                <li className="flex items-center gap-3"><Mountain className="w-5 h-5 text-tiki-leaf" /> Trekking</li>
              </ul>
              <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20the%20STANDARD%20camping%20package%20at%20%E2%82%B91500." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-tiki-leaf text-white font-bold text-lg rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
                Book Standard
              </a>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-[#1a1816] border border-gray-800 p-8 rounded-2xl reveal hover:border-tiki-orange transition-all relative group hover:-translate-y-2">
            <h3 className="font-tribal text-2xl text-white mb-2">Premium</h3>
            <div className="text-4xl font-bold text-tiki-orange mb-4">₹1800 <span className="text-sm text-gray-500 font-normal">/ person</span></div>
            <p className="text-sm text-gray-400 mb-6 border-b border-gray-800 pb-4">VIP experience with private amenities.</p>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> 2-sharing tent with bedding</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> Snacks, dinner & breakfast</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> <strong>Private bonfire</strong></li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> <strong>Separate speaker</strong></li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-tiki-orange" /> All games & service</li>
            </ul>
            <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20the%20PREMIUM%20camping%20package%20at%20%E2%82%B91800." target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 border border-gray-600 text-gray-300 font-bold rounded-xl hover:bg-tiki-sand hover:text-black hover:border-tiki-sand transition-all">
              Book Premium
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <h3 className="text-tiki-gold text-center uppercase tracking-widest text-sm font-bold mb-8">Prefer a Room?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:border-tiki-gold transition-all group">
              <Wind className="w-12 h-12 text-tiki-gold mx-auto mb-4 group-hover:rotate-180 transition-transform duration-500" />
              <h4 className="text-white font-tribal text-2xl mb-2">AC Room</h4>
              <div className="text-3xl font-bold text-tiki-gold mb-2">₹5000</div>
              <p className="text-sm text-gray-400 mb-6">For 2 people</p>
              <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20an%20AC%20Room%20at%20%E2%82%B95000." target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-tiki-gold text-black font-bold rounded-xl hover:bg-white transition-colors">
                Book AC Room
              </a>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:border-tiki-orange transition-all group">
              <Home className="w-12 h-12 text-tiki-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-tribal text-2xl mb-2">Non-AC Room</h4>
              <div className="text-3xl font-bold text-tiki-orange mb-2">₹4500</div>
              <p className="text-sm text-gray-400 mb-6">For 2 people</p>
              <a href="https://wa.me/917032360083?text=Hi%2C%20I%20want%20to%20book%20a%20Non-AC%20Room%20at%20%E2%82%B94500." target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-tiki-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
                Book Non-AC
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampingPackages;
