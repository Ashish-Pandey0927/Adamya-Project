import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Components/Navbar'; // Adjust the path if needed
import Hero from './Components/Hero';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Footer from './Components/Footer';

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all sections, hero, and footer (exclude navbar)
    const elements = document.querySelectorAll(
      '.animate-on-scroll'
    );

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Start animation when the element enters the viewport
            end: 'top 30%',
            scrub: true, // Synchronize animation with scroll
          },
        }
      );
    });
  }, []);

  return (
    <div>
      {/* Navbar is excluded from animation */}
      <Navbar />

      {/* Sections with animation */}
      <div className="animate-on-scroll">
        <Hero />
      </div>
      <div className="animate-on-scroll">
        <Section1 />
      </div>
      <div className="animate-on-scroll">
        <Section2 />
      </div>
      <div className="animate-on-scroll">
        <Section3 />
      </div>
      <div className="animate-on-scroll">
        <Section4 />
      </div>
      <div className="animate-on-scroll">
        <Section5 />
      </div>
      <div className="animate-on-scroll">
        <Section6 />
      </div>

      {/* Footer with animation */}
      
        <Footer />
      
    </div>
  );
};

export default App;
