import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const VideoCard = ({ videoId, title, subtitle, delay, isPlaying, onPlay, countdownSeconds = 0 }) => {
  const [countdown, setCountdown] = useState(countdownSeconds);
  const [isReady, setIsReady] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const controlsTimer = useRef(null);

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsReady(true);
    }
  }, [countdown]);

  // Controls visibility logic
  useEffect(() => {
    if (isPlaying) {
      setShowControls(true);
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
      controlsTimer.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    } else {
      setShowControls(true);
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
    }
    return () => {
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
    };
  }, [isPlaying]);

  const handleOverlayClick = (e) => {
    if (isPlaying && !showControls) {
      setShowControls(true);
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
      controlsTimer.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    } else {
      onPlay(videoId);
    }
  };

  // Initialize Vimeo Player
  useEffect(() => {
    const initPlayer = () => {
      if (iframeRef.current && window.Vimeo) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);
        playerRef.current.setMuted(true);
        playerRef.current.setLoop(true);
      } else if (iframeRef.current) {
        // Retry after a short delay if Vimeo is not yet available
        setTimeout(initPlayer, 500);
      }
    };
    
    initPlayer();
  }, []);

  // Handle Play/Stop state
  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.setMuted(false);
        playerRef.current.play();
      } else {
        playerRef.current.setMuted(true);
        playerRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className={`group relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 reveal ${delay}`}>
      <div className="video-wrapper aspect-[9/16] bg-black relative">
        {/* Countdown Overlay */}
        {!isReady && (
          <div className="video-countdown-overlay">
            <div className="countdown-number">{countdown}</div>
            <p className="text-tiki-gold font-tribal mt-4">Preparing the Vibe...</p>
          </div>
        )}

        {/* Play/Pause Button Overlay (Visible after countdown) */}
        {isReady && (
          <div 
            onClick={handleOverlayClick}
            className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 cursor-pointer ${
              showControls 
                ? 'bg-black/40 backdrop-blur-[2px] opacity-100' 
                : 'bg-black/0 opacity-0'
            }`}
          >
            <button 
              className="w-20 h-20 bg-tiki-orange text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(230,74,25,0.6)] hover:scale-110 transition-transform pointer-events-none"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 fill-current" />
              ) : (
                <Play className="w-10 h-10 fill-current ml-1" />
              )}
            </button>
          </div>
        )}

        {/* Mute/Unmute Indicator */}
        {isPlaying && (
          <div className="absolute top-4 right-4 z-30 bg-black/60 p-2 rounded-full">
            <Volume2 className="w-5 h-5 text-tiki-gold animate-pulse" />
          </div>
        )}

        <iframe 
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
          allow="autoplay; fullscreen" 
          title={title}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6 pt-20 pointer-events-none z-10">
        <h4 className="text-white font-tribal text-xl mb-1">{title}</h4>
        <p className="text-tiki-gold text-xs uppercase tracking-widest font-bold">{subtitle}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const [playingId, setPlayingId] = useState(null);

  const handlePlay = (id) => {
    setPlayingId(prev => prev === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-tiki-charcoal relative bg-totem-pattern bg-blend-soft-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h3 className="text-tiki-gold uppercase tracking-widest text-xs font-bold mb-2">Visual Journey</h3>
          <h2 className="font-tribal text-4xl md:text-6xl text-white">The Tiki Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-tiki-orange to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VideoCard 
            videoId="1149325940" 
            title="Tribal Adventures" 
            subtitle="Explore the Wild" 
            delay="" 
            isPlaying={playingId === "1149325940"}
            onPlay={handlePlay}
          />
          <VideoCard 
            videoId="1149327315" 
            title="Sacred Rituals" 
            subtitle="Connect with Nature" 
            delay="delay-100 transform md:-translate-y-8" 
            isPlaying={playingId === "1149327315"}
            onPlay={handlePlay}
          />
          <VideoCard 
            videoId="1149327859" 
            title="Tiki Carnival" 
            subtitle="Celebrate Life" 
            delay="delay-200" 
            isPlaying={playingId === "1149327859"}
            onPlay={handlePlay}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
