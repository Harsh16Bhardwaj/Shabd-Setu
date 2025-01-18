

import React, { useEffect, useRef } from 'react';
import './demo.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { gsap } from 'gsap';

function Demo() {
  // Create refs for the elements you want to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

//   const triggerAnimation = (elementRef) => {
//     gsap.fromTo(
//       elementRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
//     );
//   };
const triggerAnimation = (elementRef, delay = 0) => {
    if (elementRef.current) {
      // Heading animation
      if (elementRef === headingRef) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
        );
      }
      // Paragraph animation
      if (elementRef === paragraphRef) {
        gsap.fromTo(
          paragraphRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
        );
      }
      // Button animation
      if (elementRef === buttonRef) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: 1 }
        );
      }
      // Video animation
      if (elementRef === videoRef) {
        gsap.fromTo(
          videoRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 1.2 }
        );
      }
    }
  };
  return (
    <>
      <div className="flex px-40">
        <div className="pt-32 h-screen w-1/2">
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div ref={headingRef}>
                {isVisible && triggerAnimation(headingRef)}
                <h1 className="text-6xl font-bold josekin text-pink-600">
                  Watch a Demo
                </h1>
                <hr className="m-2 w-1/2" />
                <h4 className="text-3xl mt-5 mb-3 px-4 font-semibold text-yellow-200">
                  Instructions:
                </h4>
                <div className='text-lg'>
                <p className="px-10 text-gray-200 z-1" ref={paragraphRef}>
                  1. Start by Signing In
                </p>
                <p className="px-10 text-gray-200 z-1" ref={paragraphRef}>
                  2. Head to the Blog writing section
                </p>
                <p className="px-10 text-gray-200 z-1" ref={paragraphRef}>
                  3. Choose between writing content or using audio transcriptions 
                </p>
                <p className="px-10 text-gray-200 z-1" ref={paragraphRef}>
                  4. Choose languages to translate to.
                </p>
                <p className="px-10 text-gray-200 z-1" ref={paragraphRef}>
                  5. See your Blog in Action
                </p>
                <p className="px-10 text-gray-200 z-1" ref={paragraphRef}>
                  6. Publish your Blog and reach Millions
                </p>
                </div>
              </div>
            )}
          </TrackVisibility>

          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div
                className="flex justify-start items-center mt-10"
                ref={buttonRef}
              >
                {isVisible && triggerAnimation(buttonRef)}
                <button className="relative inline-flex h-14 w-32 ml-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Try Yourself
                  </span>
                </button>
              </div>
            )}
          </TrackVisibility>
        </div>

        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className="h-screen flex justify-center items-center"
              ref={videoRef}
            >
              {isVisible && triggerAnimation(videoRef)} {/* Trigger animation only when visible */}
              <div className="bg-black p-10 relative -ml-16 -z-2 youtube rounded-3xl">
                <iframe
                  className="rounded-2xl"
                  width="560"
                  height="350"
                  src="https://www.youtube.com/embed/iDCS2sxDWIE"
                  title="Social_Abstractions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </>
  );
}

export default Demo;
