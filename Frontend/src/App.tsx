import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./routes/project.tsx";
import About from "./routes/about.tsx";
import Portfolio from "./routes/portfolio.tsx";
import Blog from "./routes/blog.tsx";
import TestRoute from "./routes/testroute.tsx";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="test" element={<TestRoute />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}
