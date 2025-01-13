import AOS from "aos";
import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaRegMoon } from "react-icons/fa";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
];

export default function Header() {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  useEffect(() => {
    const saveMode = sessionStorage.getItem("lightmode");
    if (saveMode === "true") {
      setIsLightMode(true);
    } else {
      setIsLightMode(false);
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [isLightMode]);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    sessionStorage.setItem("lightmode", String(newMode));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1500">
        <header className="container max-w-full p-4 inline-flex space-x-8 justify-center flex-grow bg-transparent">
          {/*Center Content*/}
          <nav className="flex space-x-12 md:text-lg flex-grow justify-center">
            {navItems.map((item) => (
              <a
                href={item.link}
                className="fa hover:text-blue-700 hover:translate-y-2 transition-transform duration-300 ease-in-out"
                key={item.name}
              >
                {item.name}
              </a>
            ))}
            <a href="https://github.com/jsacob">
              <FaGithub
                className="fa hover:text-purple-500 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
                size={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/jacob-mills-b2b1202ab">
              <FaLinkedin
                className="fa hover:text-blue-600 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
                size={25}
              />
            </a>
            <a className="relative group">
              <FaDiscord
                className="fa hover:text-blue-700 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
                size={28}
              />
              {/* Text box that appears ONLY when hovering over the icon */}
              <div className="discordBoxInfo absolute left-1/2 transform -translate-x-1/2 translate-y-2 mt-2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Billy Elrod#2769
              </div>
            </a>
            <FaRegMoon
              onClick={toggleMode}
              className="hover:text-yellow-300 hover:translate-y-2 transition-transform-colors duration-300 ease-in-out cursor-pointer"
              size={24}
            />
          </nav>
        </header>
      </div>
    </>
  );
}
