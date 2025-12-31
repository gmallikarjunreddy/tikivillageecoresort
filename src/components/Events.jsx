import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Weekend Tribal Gathering",
      date: "Every Weekend",
      time: "4:00 PM Onwards",
      location: "Sarpanpally Lake",
      description: "Experience the magic of the woods every weekend. Bonfire, live music, and camping under the stars.",
      image: "https://i.ibb.co/v4ry73BL/bonefire.jpg",
      link: "/#regular-camping"
    }
  ];

  const pastEvents = [
    {
      id: 'nye2026',
      title: "NYE 2026: Under The Stars",
      date: "Dec 31, 2025",
      location: "Sarpanpally Lake",
      description: "The biggest tribal gathering to welcome the new year. DJ, Bonfire, and a feast fit for chiefs.",
      image: "https://i.ibb.co/ZRB3WBd4/tikinights.jpg"
    }
  ];

  return (
    <section id="events" className="py-24 bg-tiki-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h3 className="text-tiki-gold uppercase tracking-widest text-xs font-bold mb-2">Gatherings</h3>
          <h2 className="font-tribal text-4xl md:text-5xl text-white">Events at Tiki</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-tiki-orange to-transparent mx-auto mt-6"></div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-tribal text-white mb-8 border-l-4 border-tiki-orange pl-4">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-[#1a1816] rounded-xl overflow-hidden border border-white/10 hover:border-tiki-orange transition-all group reveal">
                <div className="h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-tiki-gold text-sm font-bold mb-3">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </div>
                  <h4 className="text-xl font-tribal text-white mb-3">{event.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </div>
                    <a href={event.link} className="text-tiki-orange text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-tribal text-white mb-8 border-l-4 border-gray-600 pl-4">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-[#1a1816] rounded-xl overflow-hidden border border-white/5 opacity-75 hover:opacity-100 transition-all reveal">
                <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-bold mb-3">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </div>
                  <h4 className="text-xl font-tribal text-gray-300 mb-3">{event.title}</h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center gap-2 text-gray-600 text-xs border-t border-white/5 pt-4">
                    <MapPin className="w-3 h-3" /> {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
