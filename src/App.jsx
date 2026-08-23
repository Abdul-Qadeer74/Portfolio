import React from "react";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import Intro from "./Components/Navbar/Main/Intro";
import Project from "./Components/Navbar/Projects/Project";
import Footer from "./Components/Navbar/Footer/Footer";

const App = () => {
  return (
    <div className="h-300 w-full bg-black flex justify-evenly  p-2 flex-col items-center ">
      <Navbar />
      <Intro />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
