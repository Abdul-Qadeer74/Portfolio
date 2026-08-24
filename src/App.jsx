import React from "react";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import Intro from "./Components/Navbar/Main/Intro";
import Project from "./Components/Navbar/Main/Pages/Projects";
import About from "./Components/Navbar/Main/Pages/About";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="h-screen w-full bg-black flex justify-evenly  p-2 flex-col items-center ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
