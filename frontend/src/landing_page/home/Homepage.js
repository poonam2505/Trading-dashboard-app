import React from 'react';
import Hero from './Hero';
import Award from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default Homepage;
