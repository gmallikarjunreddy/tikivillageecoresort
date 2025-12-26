import React from 'react';
import { UtensilsCrossed, Moon, Sun, Tent } from 'lucide-react';

const MenuAndStay = () => {
  return (
    <section id="menu" className="py-24 bg-tiki-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Food Menu */}
          <div className="lg:w-1/2 reveal">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-tiki-brown rounded-full flex items-center justify-center border border-tiki-orange">
                <UtensilsCrossed className="w-8 h-8 text-tiki-orange" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Taste the Wild</h3>
                <h2 className="font-tribal text-4xl text-white">The Tribal Feast</h2>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h4 className="text-tiki-gold font-bold text-xl mb-3 flex items-center gap-3">
                  <Moon className="w-5 h-5" /> Dinner Buffet
                </h4>
                <p className="text-gray-400 leading-relaxed pl-8 border-l-2 border-gray-800 group-hover:border-tiki-orange transition-colors">
                  Savor the smoky flavors of our <strong>Chicken & Veg Biryani</strong>, rich Paneer Curry, and an assortment of crispy starters. Accompanied by Roti, White Rice, Sambar, and sweet treats.
                </p>
              </div>
              
              <div className="group">
                <h4 className="text-tiki-gold font-bold text-xl mb-3 flex items-center gap-3">
                  <Sun className="w-5 h-5" /> Morning Fuel
                </h4>
                <p className="text-gray-400 leading-relaxed pl-8 border-l-2 border-gray-800 group-hover:border-tiki-gold transition-colors">
                  Wake up to steaming hot <strong>Idli, Upma, or Kesari Bath</strong> served with chutney and sambar. Hot tea and biscuits provided to kickstart your day in the hills.
                </p>
              </div>
            </div>
          </div>

          {/* Stay Details */}
          <div className="lg:w-1/2 reveal delay-200">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-tiki-brown rounded-full flex items-center justify-center border border-tiki-orange">
                <Tent className="w-8 h-8 text-tiki-orange" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Sleep in Nature</h3>
                <h2 className="font-tribal text-4xl text-white">Camping Stay</h2>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 group shadow-2xl border border-white/10">
              <img src="https://i.ibb.co/tMGDhc7L/campingtents.jpg" alt="Camping Tents" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-tribal text-2xl mb-1">Cozy Camping</p>
                <p className="text-sm text-gray-300">Weatherproof tents with bedding provided.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <strong className="block text-white mb-1">Flexible Sharing</strong>
                <span className="text-sm text-gray-400">2-Sharing & 3-Sharing tents available.</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <strong className="block text-white mb-1">Hygiene First</strong>
                <span className="text-sm text-gray-400">Clean common washrooms & pillows/blankets provided.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuAndStay;
