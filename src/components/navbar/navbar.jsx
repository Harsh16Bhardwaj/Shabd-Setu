import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./navbar.css";
import logo from "../../assets/Web_Logo.png";

export default function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  linksRef.current = [];


  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useEffect(() => {

    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );


    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: "back.out(1.7)" }
    );

    
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="flex justify-center pt-8" ref={navbarRef}>
    
      <div>
        <img className="logo w-14" src={logo} alt="Logo" ref={logoRef} />
      </div>

      <div className="signika font-medium flex justify-between items-center bg-gray-800 p-1.5 pl-5 pr-2 rounded-3xl w-1/2">
       
        <div className="text-2xl ml-3">
          <h1 className="text-gray-200">
            Shabd-Setu
          </h1>
        </div>

        <div>
          <ul className="flex justify-evenly gap-x-8 text-sm raleway list-none">
            {["Home", "About", "Product", "Contact"].map((link, index) => (
              <li key={index} className="a" ref={addToRefs}>
                {link}
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <button className="p-[3px] w-full relative  ">
          <div className=" absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl" />
            <div className=" hello px-4 py-2 bg-black rounded-3xl relative group transition duration-200  text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
