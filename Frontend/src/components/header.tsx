import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaRegMoon, FaLinkedin } from "react-icons/fa";
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
        <header className="container max-w-full p-4 inline-flex space-x-8 justify-center flex-grow ">
          {/*Center Content*/}
          <nav className="flex space-x-12 text-white md:text-lg flex-grow justify-center">
            {navItems.map((item) => (
              <a
                href={item.link}
                className="hover:text-gray-700 hover:translate-y-2 transition-thansform duration-300 ease-in-out"
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
