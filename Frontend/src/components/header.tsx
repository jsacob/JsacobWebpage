import AOS from "aos";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

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
      <header className="container max-w-full p-4 inline-flex space-x-8 justify-center flex-grow bg-background text-text ">
        {/*Center Content*/}
        <nav className="flex space-x-12 md:text-lg flex-grow justify-center">
          {navItems.map((item) => (
            <a
              href={item.link}
              className="hover:text-blue-700 hover:translate-y-2 transition-transform duration-300 ease-in-out"
              key={item.name}
            >
              {item.name}
            </a>
          ))}
          <a href="https://github.com/jsacob">
            <FaGithub
              className="hover:text-purple-500 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
              size={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/jacob-mills-b2b1202ab">
            <FaLinkedin
              className="hover:text-blue-600 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
              size={25}
            />
          </a>
          <a className="relative group">
            <FaDiscord
              className="hover:text-blue-700 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
              size={28}
            />
            {/* Text box that appears ONLY when hovering over the icon */}
            <div className="discordBoxInfo absolute left-1/2 transform -translate-x-1/2 translate-y-2 mt-2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Billy Elrod#2769
            </div>
          </a>
        </nav>
      </header>
    </>
  );
}
