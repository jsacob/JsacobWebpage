import React, { useEffect } from "react";
import AOS from "aos";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h1
          className="text-5xl font-extrabold text-white mb-8 text-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Insight
        </h1>
        <div className="" data-aos="fade-up" data-aos-duration="1500">
          <div className="p-6 sm:p-10">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I am a passionate and dedicated software developer with a strong
                commitment to continuous growth and skill refinement. Currently
                based near <b>Montreal, Quebec, Canada</b>, I am actively
                seeking opportunities to relocate to the{" "}
                <b>United States, particularly to Houston, Texas</b>, to further
                my career in tech.
              </p>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Skills & Experience
                </h2>
                <p className="mb-4">
                  With over a year of hands-on experience, I've become
                  proficient in:
                </p>
                <div className="flex flex-wrap gap-2 justify-center mx-auto ">
                  {[
                    "TypeScript",
                    "JavaScript",
                    "React",
                    "C",
                    "Rust",
                    "SQL",
                    "Node",
                    "TailwindCss",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-700 text-red-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                I firmly believe that skills are more valuable than credentials,
                and my journey as a developer is driven by a relentless pursuit
                of improvement.
              </blockquote>
              <p>
                I take particular interest in data structures and algorithms,
                understanding that mastering these foundational concepts is key
                to solving complex problems efficiently. Every day, I dedicate
                myself to expanding my knowledge and enhancing my ability to
                write clean, efficient code.
              </p>
              <p>
                As I continue to grow professionally, I am eager to collaborate
                with like-minded individuals, share my expertise, and take on
                new challenges. I am actively working on expanding my portfolio
                with projects that reflect my evolving skill set and dedication
                to software development.
              </p>
              <p className="font-semibold text-white">
                My goal is to secure a position where I can thrive, continue
                learning, and ultimately contribute to the advancement of
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
