import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingAnimation = () => {
  const wolfRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null); // Ref for the text

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the loading animation container
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
        });
      },
    });

    // Wolf animation: Rotate, scale, and move
    tl.to(wolfRef.current, {
      rotation: 360,
      scale: 1.5,
      duration: 2,
      ease: "power3.inOut",
    })
      .to(wolfRef.current, {
        scale: 0.8,
        y: "-37vh", // Move wolf vertically upwards towards the center of the screen
        duration: 2,
        ease: "power3.inOut",
      })
      .to(wolfRef.current, {
        scale: 0, // Disappear
        duration: 1,
        ease: "power3.inOut",
      })
      // Typewriter animation for the text, starts at the same time
      .to(textRef.current, {
        opacity: 1, // Ensure text is visible
        duration: 0.5,
        delay: 0, // Start immediately with wolf animation
      })
      .fromTo(
        textRef.current,
        {
          text: "", // Start with an empty text
        },
        {
          text: "ADAYAM PROJECT", // End with the full text
          duration: 4, // Set the same duration for the typewriter effect
          ease: "none",
          snap: { text: 1 }, // Snap text so it types letter by letter
        }
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#ffffff] flex justify-center items-center z-50"
    >
      <div className="flex flex-col items-center">
        <img
          ref={wolfRef}
          src="/wolf.png"
          alt="Wolf Animation"
          className="w-[10rem] md:w-[15rem]"
        />
        <h1
          ref={textRef}
          className="text-white text-3xl mt-5 opacity-0" // Hidden initially
        >
          ADAYAM PROJECT
        </h1>
      </div>
    </div>
  );
};

export default LoadingAnimation;
