import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'; // Adjust the path if needed
import Hero from './Components/Hero';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Footer from './Components/Footer';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import Section9 from './Components/Section9';
import LoadingAnimation from './LoadingAnimation'; // Import the LoadingAnimation component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation duration
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading animation after it ends
    }, 5000); // Set to the duration of your loading animation

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/* Navbar */}
          <Navbar />

          {/* Sections with proper IDs */}
          <div id="home">
            <Hero />
          </div>
          <div id="work">
            <Section1 />
          </div>
          <div>
            <Section7 />
          </div>
          <div id="services">
            <Section2 />
          </div>
          <div id="projects">
            <Section3 />
          </div>
          <div>
            <Section8 />
          </div>
          <div>
            <Section9 />
          </div>
          <div id="clients">
            <Section4 />
          </div>
          <div id="about">
            <Section5 />
          </div>
          <div id="contact">
            <Section6 />
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
