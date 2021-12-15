import React from "react";
import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Skills";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
