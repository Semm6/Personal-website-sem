import React from "react";
import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Skills";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Footer from "../Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
