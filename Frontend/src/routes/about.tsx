import React, { useEffect } from "react";
import AOS from "aos";

export default function AboutPage() {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="flex min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-100 mb-8 text-center"></h1>
          <div className="shadow-sm rounded-lg p-8">
            <p className="text-lg mb-6">
              Hi, I'm Jacob. I'm a 21-year-old software developer who's
              passionate about learning, building, and constantly improving.
            </p>
            <p className="text-lg mb-6">
              Over the past year, I've been working on projects with languages
              and technologies like{" "}
              <span className="font-semibold">
                TypeScript, JavaScript, React, Tailwind, C, and currently Rust
              </span>
              . I enjoy finding creative solutions to challenging problems.
            </p>
            <p className="text-lg mb-6">
              I'm curious about many things, from programming and higher-level
              math to exploring some aspects of hardware engineering like
              designing my own PCB at some point. I really enjoy learning new
              skills and seeing how different areas of tech come together.
            </p>
            <p className="text-lg mb-6">
              While I'm currently based near{" "}
              <span className="font-semibold">Montreal, Canada</span>, I plan to
              permanently reside in{" "}
              <span className="font-semibold">Houston, Texas</span> in the very
              close future to be part of the thriving tech community there and
              take the next steps in my career.
            </p>
            <p className="text-lg">
              Outside of programming, I spend my time diving into personal
              projects, sharpening my problem-solving skills, and exploring new
              areas of tech.
            </p>
          </div>
        </div>
        <h1 className="text-white text-3xl"></h1>
      </div>
    </>
  );
}
