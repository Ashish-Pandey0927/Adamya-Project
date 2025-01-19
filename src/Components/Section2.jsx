import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the heading
    gsap.fromTo(
      '.heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.heading',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Animate the description
    gsap.fromTo(
      '.description',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.description',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Animate the service lists
    gsap.fromTo(
      '.service-list',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.service-list',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-auto px-6 md:px-10 lg:px-[150px] flex flex-col bg-[#173180] text-[#f8f7f6] py-6 md:py-10 section2">
      <div className="py-10 md:py-20">
        {/* Heading */}
        <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-center md:text-left heading">
          Tailor-Made Solutions for Your Needs
        </div>

        {/* Description */}
        <div className="text-base md:text-lg lg:text-xl mt-5 text-center md:text-left description">
          Not everyone needs the full package—and that’s okay! <br />
          We provide comprehensive, customizable services tailored to your
          brand&apos;s needs. Whether you&apos;re launching a fashion label or
          refining an existing one, we’ve got you covered with end-to-end
          solutions:
        </div>

        {/* Services Lists */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 text-base md:text-lg lg:text-xl font-bold mt-10">
          {/* Left Services List */}
          <div className="flex flex-col items-center md:items-center lg:items-start service-list">
            <ul className="gap-3 flex flex-col text-center md:text-center lg:text-left">
              <li>Brand Strategy</li>
              <li>Brand Architecture</li>
              <li>Purpose & Positioning</li>
              <li>Identity Design</li>
              <li>Creative Strategy</li>
              <li>Brand Communication</li>
              <li>Brand Book Creation</li>
              <li>Brand Consultancy</li>
            </ul>
          </div>

          {/* Right Services List */}
          <div className="flex flex-col items-center md:items-center lg:items-start service-list">
            <ul className="gap-3 flex flex-col text-center md:text-center lg:text-left">
              <li>Forecast Driven Designs</li>
              <li>Quick Turnaround & Easy Sampling</li>
              <li>Customised Designs & Tech Packs</li>
              <li>End-to-End Production &</li>
              <li>Merchandising Support</li>
              <li>Social Media Management</li>
              <li>Stunning Photoshoots</li>
              <li>Dedicated Customer Success Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
