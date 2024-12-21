import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="container max-w-full p-4 bg-red-950 inline-flex space-x-8">
      {/* Left */}
      <div className="bg-black font-bold text-xl">
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
      <div className="flex space-x-14 font-bold text-white text-xl bg-blue-400 flex-grow justify-center">
        <div>About</div>
        <div>Portfolio</div>
        <div>Projects</div>
        <div>Blog</div>
      </div>

      {/* Right (Empty) */}
      <div className="flex-shrink-0">hello</div>
    </div>
  );
}
