import React from 'react';
import { Target, Club, Volleyball, Mountain, Gamepad2, Music } from 'lucide-react';

const Activities = () => {
  const activities = [
    { icon: Target, title: 'Archery', delay: '' },
    { icon: Club, title: 'Musical Hula Hoops', delay: 'delay-75' },
    { icon: Volleyball, title: 'Volleyball', delay: 'delay-100' },
    { icon: Mountain, title: 'Trekking', delay: 'delay-150' },
    { icon: Gamepad2, title: 'Indoor Games', delay: 'delay-200' },
    { icon: Music, title: 'Live DJ', delay: 'delay-200' },
  ];

  return (
    <section id="activities" className="py-24 bg-[#1a1816] relative bg-jungle-pattern bg-blend-soft-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h3 className="text-tiki-gold uppercase tracking-widest text-xs font-bold mb-2">Adventure Awaits</h3>
          <h2 className="font-tribal text-4xl md:text-5xl text-white">Tribal Activities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {activities.map((activity, index) => (
            <div key={index} className={`bg-black/40 p-6 rounded-xl text-center border border-white/5 hover:border-tiki-orange transition-all group reveal ${activity.delay}`}>
              <activity.icon className="w-10 h-10 text-tiki-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold tracking-wide">{activity.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
