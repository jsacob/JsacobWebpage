import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaRegMoon, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from "aos";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
];

export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1500">
        <header className="container max-w-full p-4 inline-flex space-x-8 justify-center flex-grow bg-transparent">
          {/*Center Content*/}
          <nav className="flex space-x-12 text-white md:text-lg flex-grow justify-center">
            {navItems.map((item) => (
              <a
                href={item.link}
                className="hover:text-blue-700 hover:translate-y-2 transition-thansform duration-300 ease-in-out"
                key={item.name}
              >
                {item.name}
              </a>
            ))}
            <a href="https://github.com/jsacob">
              <FaGithub
                className="text-white hover:text-purple-500 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
                size={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/jacob-mills-b2b1202ab">
              <FaLinkedin
                className="text-white hover:text-blue-600 hover:translate-y-2
              transition-transform-colors duration-300 ease-in-out
              cursor-pointer"
                size={25}
              />
            </a>
            <a className="relative group">
              <FaDiscord
                className="text-white hover:text-blue-700 hover:translate-y-2
                transition-transform-colors duration-300 ease-in-out cursor-pointer"
                size={28}
              />
              {/* Text box that appears ONLY when hovering over the icon */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 
                bg-white text-black text-sm px-2 py-1 rounded opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                Billy Elrod#2769
              </div>
            </a>
            <FaRegMoon
              className="text-white hover:text-yellow-300 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
              size={24}
            />
          </nav>
        </header>
      </div>
    </>
  );
}
