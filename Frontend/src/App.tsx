import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./routes/project.tsx";
import Header from "./components/header.tsx";
import About from "./routes/about.tsx";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Test" element={<Header />}></Route>
          <Route path="/app" element={<About />}></Route>
          <Route path="projects" element={<Project />}></Route>
        </Routes>
      </Router>
    </>
  );
}
