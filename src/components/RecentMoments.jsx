import React from 'react';

const RecentMoments = () => {
  const moments = [
    { src: "https://i.ibb.co/nMqJHpGk/IMG-20251225-WA0001.jpg", alt: "Visitors", label: "Visitors" },
    { src: "https://i.ibb.co/VpjbQ6bV/IMG-20251225-WA0011.jpg", alt: "Celebrity Visit", label: "Celebrity Visit" },
    { src: "https://i.ibb.co/hRyYMxH2/IMG-20251225-WA0000.jpg", alt: "Group Fun", label: "Group Fun" },
    { src: "https://i.ibb.co/zzkM7S1/IMG-20251225-WA0006.jpg", alt: "Camp and lake", label: "Camp and lake" },
    { src: "https://i.ibb.co/KpwyHnBJ/IMG-20251225-WA0009.jpg", alt: "Lake View", label: "Lake View" },
    { src: "https://i.ibb.co/BVG5j5Qf/IMG-20251225-WA0003.jpg", alt: "Cottage", label: "Cottage" },
    { src: "https://i.ibb.co/7xV3cnNK/IMG-20251225-WA0007.jpg", alt: "Tent Stay", label: "" },
    { src: "https://i.ibb.co/DgmG996r/IMG-20251225-WA0005.jpg", alt: "Tiki Beast", label: "Tiki Beast" },
    { src: "https://i.ibb.co/B2YbRhYr/IMG-20251225-WA0004.jpg", alt: "Tiki Vibes", label: "Tiki Vibes", span: "md:col-span-2 lg:col-span-1" },
    { src: "https://i.ibb.co/ds946Qth/IMG-20251225-WA0008.jpg", alt: "Animal Friends", label: "Animal Friends", span: "md:col-span-2 lg:col-span-1" },
    { src: "https://i.ibb.co/1WCMRT7/visitors.jpg", alt: "Visitors", label: "Visitors", span: "md:col-span-2 lg:col-span-1" },
    { src: "https://i.ibb.co/vvcRwmsh/IMG-20251225-WA0012.jpg", alt: "Visitors", label: "Visitors", span: "md:col-span-2 lg:col-span-1" },
  ];

  return (
    <section className="py-16 bg-tiki-charcoal relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h3 className="text-tiki-gold uppercase tracking-widest text-xs font-bold mb-2">Recent Moments</h3>
          <h2 className="font-tribal text-3xl md:text-4xl text-white">Life at Tiki Village</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-tiki-orange to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto reveal">
          {moments.map((moment, index) => (
            <div key={index} className={`group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${moment.span || ''}`}>
              <img src={moment.src} alt={moment.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-tribal text-white text-sm text-center px-2">{moment.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentMoments;
