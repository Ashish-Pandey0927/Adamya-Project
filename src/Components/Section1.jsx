import React, { useEffect } from 'react';
import './Section1.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section1 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the section when it enters the viewport
    // gsap.fromTo(
    //   '.section1', // target the section
    //   { opacity: 0, y: 50 }, // initial state
    //   {
    //     opacity: 1, // final state
    //     y: 0, // move to original position
    //     duration: 1.5,
    //     ease: 'power3.out',
    //     scrollTrigger: {
    //       trigger: '.section1', // trigger when this section enters the viewport
    //       start: 'top 80%', // start when the section is 80% from the top of the viewport
    //       end: 'top 30%', // end when the section is 30% from the top of the viewport
    //       scrub: true, // animate based on scroll position
    //     },
    //   }
    // );

    // Animate each child element (Heading, Description, and Images)
    // gsap.fromTo(
    //   '.heading', // target the heading
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.2,
    //     ease: 'power3.out',
    //     scrollTrigger: {
    //       trigger: '.heading',
    //       start: 'top 80%',
    //       end: 'top 30%',
    //       scrub: true,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   '.description', // target the description
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.2,
    //     ease: 'power3.out',
    //     scrollTrigger: {
    //       trigger: '.description',
    //       start: 'top 80%',
    //       end: 'top 30%',
    //       scrub: true,
    //     },
    //   }
    // );

    gsap.fromTo(
      '.image-container', // target each image container
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.3, // stagger the animations of each image
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-auto px-6 md:px-10 lg:px-[150px] flex flex-col bg-[#173180] text-[#f8f7f6] py-6 md:py-10 section1">
      {/* Heading */}
      <div className="px-0 md:px-5 pt-2 heading">
        <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-center md:text-left">
          Launch Your Fashion Dream Under 10 Lakhs
        </div>
      </div>

      {/* Description */}
      <div className="px-0 md:px-5 text-base md:text-lg lg:text-xl py-4 text-center md:text-left description">
        <p>
          We&apos;re your one-stop shop for building a successful fashion brand.
          With 15+ years of experience and 50+ brands <br className="hidden md:block" />
          launched, we offer end-to-end support: design, sampling, production,
          stunning photoshoots, website & social media magic.
        </p>
        <p className="mt-4">
          Ideal for aspiring entrepreneurs, our affordable launch package lets
          you test your brand idea and transform it into reality. <br className="hidden md:block" />
          Experience the power of &quot;test before you invest&quot;.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mb-10 px-0 md:px-5 mt-6 gap-6 lg:gap-16">
        <div className="image-container">
          <img
            src="/img1.jpg"
            className="h-[200px] w-[300px] md:h-[350px] md:w-[450px] lg:h-[470px] lg:w-[550px] liquid-effect-image"
            alt="Image 1"
          />
        </div>
        <div className="image-container">
          <img
            src="/img2.jpg"
            className="h-[200px] w-[300px] md:h-[350px] md:w-[450px] lg:h-[470px] lg:w-[550px] liquid-effect-image"
            alt="Image 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
