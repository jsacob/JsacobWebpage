import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaRegMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
const navItems = ["About", "Portfolio", "Projects", "Blog"];

export default function Header() {
  const [mobileView, setmobileView] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 767) {
      setmobileView(false);
    } else if (window.innerWidth < 767) {
      setmobileView(true);
    }
  }, []);

  return (
    <header className="pb-7 container max-w-full p-4 inline-flex space-x-8 justify-center flex-grow">
      {/* Left */}
      <div className="font-bold text-2xl min-w-56 max-w-48 flex justify-start pt-3 lex-shrink-0">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="color: #569CD6;">console.</span>')
              .typeString('<span style="color: #D7BA7E;">log</span>')
              .typeString('<span style="color: #FFD700;">(</span>')
              .typeString('<span style="color: #CE9178;">"</span>')
              .typeString('<span style="color: #CE9178;">jsacob</span>')
              .typeString('<span style="color: #CE9178;">"</span>')
              .typeString('<span style="color: #FFD700;">)</span>')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </div>

      {/* Center (Navigation options) */}
      <nav className="flex space-x-12 text-white text-2xl flex-grow justify-center pr-24 pt-3">
        {navItems.map((item) => (
          <div
            className="hover:text-blue-500 hover:translate-y-3 transition-transform duration-500 ease-in-out cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Right (Empty or dynamic content) */}
      <div className="flex-shrink-0 pt-3 text-3xl inline-flex space-x-6">
        <FaGithub className="text-white hover:text-purple-500 hover:translate-y-3 transition-transform-colors duration-300 ease-in-out cursor-pointer" />
        <FaRegMoon className="text-white hover:text-yellow-300 hover:translate-y-3 transition-transform-colors duration-300 ease-in-out cursor-pointer" />
      </div>
    </header>
  );
}
