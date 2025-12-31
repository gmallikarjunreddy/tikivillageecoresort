import React from 'react';
import Hero from './Hero';
import About from './About';
import Activities from './Activities';
import Experience from './Experience';
import RecentMoments from './RecentMoments';
import CampingPackages from './CampingPackages';
import MenuAndStay from './MenuAndStay';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Guidelines from './Guidelines';
import Location from './Location';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Activities />
      <Experience />
      <RecentMoments />
      <CampingPackages />
      <MenuAndStay />
      <Gallery />
      <Testimonials />
      <Guidelines />
      <Location />
    </>
  );
};

export default Home;
