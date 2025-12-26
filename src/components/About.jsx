import React from 'react';
import { Leaf, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-tiki-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative reveal">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-tiki-gold/50 rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-tiki-orange/50 rounded-br-3xl z-0"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img src="https://res.cloudinary.com/dqoafctvv/image/upload/v1766549890/LOGO_n6tddb.png" alt="Tribal Vibes" className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" />
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-tiki-orange"></div>
              <span className="text-tiki-orange font-bold uppercase tracking-widest text-sm">Our Story</span>
            </div>
            <h2 className="font-tribal text-4xl md:text-5xl text-white mb-6 leading-tight">Escape the Concrete <br /><span className="text-tiki-sand">Return to the Wild</span></h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Tiki Village Eco Resort is more than just a destination; it's a return to our primal roots. Nestled on the banks of the serene Sarpanpally Lake in Vikarabad, we've created a sanctuary where nature and tribal culture intertwine.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Our mission is to provide an authentic eco-experience that respects the land while offering the thrill of the wild. From our hand-crafted huts to our community bonfires, every detail is designed to help you disconnect from the digital world and reconnect with the earth.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <Leaf className="text-tiki-gold w-8 h-8" />
                <h4 className="text-white font-bold">Eco-Friendly</h4>
                <p className="text-xs text-gray-500">Sustainable practices in everything we do.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="text-tiki-gold w-8 h-8" />
                <h4 className="text-white font-bold">Community</h4>
                <p className="text-xs text-gray-500">A gathering place for the modern tribe.</p>
              </div>
              <div className="flex flex-col gap-2">
                <MapPin className="text-tiki-gold w-8 h-8" />
                <h4 className="text-white font-bold">Location</h4>
                <p className="text-xs text-gray-500">Hidden gem at Sarpanpally Lake.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
