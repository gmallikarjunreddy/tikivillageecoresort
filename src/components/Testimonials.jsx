import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul & Priya",
      role: "Weekend Campers",
      text: "The silence of the woods at night was magical. We loved the bonfire and the tribal storytelling. A perfect escape from Hyderabad traffic!",
    },
    {
      id: 2,
      name: "Arjun Singh",
      role: "Solo Traveler",
      text: "I've been to many camping spots, but Tiki Village has a soul. The staff treats you like family (or tribe!). The morning trek to the lake is a must.",
    },
    {
      id: 3,
      name: "The Tech Gang",
      role: "Corporate Outing",
      text: "We booked the entire place for our team offsite. The games, the food, and the vibe were spot on. Best team bonding experience ever.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-tiki-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="tribal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-tiki-gold"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#tribal-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <h3 className="text-tiki-gold uppercase tracking-widest text-xs font-bold mb-2">Voices of the Tribe</h3>
          <h2 className="font-tribal text-4xl md:text-5xl text-white">Tribal Tales</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-tiki-orange to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={review.id} className={`bg-[#1a1816] p-8 rounded-2xl border border-white/5 hover:border-tiki-gold transition-all group reveal delay-${index * 100}`}>
              <div className="mb-6 text-tiki-orange">
                <Quote className="w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tiki-brown border-2 border-tiki-gold/30 flex items-center justify-center text-tiki-gold font-tribal text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold font-tribal tracking-wide">{review.name}</h4>
                  <p className="text-tiki-gold text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
