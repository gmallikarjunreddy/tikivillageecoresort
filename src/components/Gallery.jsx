import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const carouselItems = [
    { src: "https://i.ibb.co/d4xbB1HN/tikinights-dj-music.jpg", alt: "DJ Music Night", title: "DJ Music Nights" },
    { src: "https://i.ibb.co/3mqDZgfL/tiki-tabletennis.jpg", alt: "Table Tennis", title: "Table Tennis" },
    { src: "https://i.ibb.co/hJsKFTd8/tikibirthdayden.jpg", alt: "Birthday Celebration", title: "Birthday Celebrations" },
    { src: "https://i.ibb.co/7x5bPCDh/tikibonfire.jpg", alt: "Night Bonfire", title: "Night Bonfires" },
    { src: "https://i.ibb.co/Df5cqZb1/tikichitchathuts.jpg", alt: "Chit Chat Huts", title: "Chit Chat Huts" },
    { src: "https://i.ibb.co/5W2fhdh5/tikivillageecowoodsittingandbenches.jpg", alt: "Eco Wooden Seating", title: "Eco Seating" },
    { src: "https://i.ibb.co/8LvrZqVZ/tikivistorwithrabbit.jpg", alt: "Visitor with Rabbit", title: "Animal Encounters" },
    { src: "https://i.ibb.co/rGxg8dHh/tikkiducks.jpg", alt: "Ducks", title: "Ducks & Wildlife" },
    { src: "https://i.ibb.co/YFKn8YkX/tikicats.jpg", alt: "Cats", title: "Cats" },
    { src: "https://i.ibb.co/DD71XnPS/tikicats2.jpg", alt: "Cats Roaming", title: "Cats Roaming" },
    { src: "https://i.ibb.co/wh8NkD9D/tikifiredance.jpg", alt: "Fire Dance", title: "Fire Dance" },
    { src: "https://i.ibb.co/yJxDp47/tikicarnival.jpg", alt: "Carnival", title: "Carnival" },
    { src: "https://i.ibb.co/yJKfxjZ/tikigames.jpg", alt: "Outdoor Games", title: "Games" },
    { src: "https://i.ibb.co/fdTTztRq/tikilakeview.jpg", alt: "Lake View", title: "Lake View" },
    { src: "https://i.ibb.co/VpzsY5jQ/tikimainentrance.jpg", alt: "Main Entrance", title: "Entrance" },
    { src: "https://i.ibb.co/ZRB3WBd4/tikinights.jpg", alt: "Night Ambience", title: "Night Ambience" },
    { src: "https://i.ibb.co/4n8jQfJJ/tikirooms.jpg", alt: "Eco Rooms", title: "Eco Rooms" },
    { src: "https://i.ibb.co/rfHQX5GQ/visitorsimage.jpg", alt: "Guests Experience", title: "Guests Experience" },    {src: "https://i.ibb.co/B5gB8sk5/tikivillage1.jpg", alt: "Resort View", title: "Resort View" },
    {src: "https://i.ibb.co/1WCMRT7/visitors.jpg", alt: "Visitors", title: "Happy Visitors" },
    {src: "https://i.ibb.co/Q3D7cYv3/welcome-to-tiki.jpg", alt: "Welcome Board", title: "Welcome to Tiki" },
    {src: "https://i.ibb.co/MxmcRWr7/Acrooms.jpg", alt: "AC Rooms", title: "AC Rooms" },  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(nextSlide, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Reset timer when slide changes manually
  const handlePrev = () => {
    prevSlide();
    startAutoScroll();
  };

  const handleNext = () => {
    nextSlide();
    startAutoScroll();
  };

  return (
    <section id="gallery" className="py-24 bg-[#12100e] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h3 className="text-tiki-gold uppercase tracking-widest text-xs font-bold mb-2">Moments</h3>
          <h2 className="font-tribal text-4xl md:text-5xl text-white">Life at Tiki</h2>
        </div>
        
        <div className="gallery-grid reveal">
          <div className="gallery-item tall group">
            <img src="https://i.ibb.co/ZRB3WBd4/tikinights.jpg" alt="Night Camp" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-tribal text-white text-xl">Night Vibes</span>
            </div>
          </div>
          
          <div className="gallery-item big bg-tiki-brown/50 flex items-center justify-center p-8 border border-tiki-orange/30">
            <img src="https://res.cloudinary.com/dqoafctvv/image/upload/v1766549890/LOGO_n6tddb.png" alt="Tiki Logo" className="!object-contain w-3/4 h-3/4 opacity-80 hover:scale-110 hover:opacity-100 transition-all duration-500" />
          </div>
          
          <div className="gallery-item group">
            <img src="https://i.ibb.co/v4ry73BL/bonefire.jpg" alt="Bonfire" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-tribal text-white text-xl">Bonfire</span>
            </div>
          </div>
          <div className="gallery-item group">
            <img src="https://i.ibb.co/yJxDp47/tikicarnival.jpg" alt="Music" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-tribal text-white text-xl">Live Music</span>
            </div>
          </div>
          <div className="gallery-item wide group">
            <img src="https://i.ibb.co/tpBF35wY/tikivillage.jpg" alt="Forest Landscape" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-tribal text-white text-xl">The Wilderness</span>
            </div>
          </div>
          <div className="gallery-item wide group">
            <img src="https://i.ibb.co/tMGDhc7L/campingtents.jpg" alt="Camping Tents" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-tribal text-white text-xl">Tents</span>
            </div>
          </div>
        </div>

        <div className="mt-16 reveal">
          <h3 className="text-tiki-gold text-center uppercase tracking-widest text-sm font-bold mb-8">More Moments</h3>
          <div 
            className="carousel"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            <div 
              className="carousel-inner" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="carousel-item">
                  <img src={item.src} alt={item.alt} />
                  <div className="carousel-caption">
                    <h4 className="font-tribal text-lg">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            <button className="prev" onClick={handlePrev}>&#10094;</button>
            <button className="next" onClick={handleNext}>&#10095;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
