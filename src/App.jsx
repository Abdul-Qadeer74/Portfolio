import React from "react";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import Intro from "./Components/Navbar/Main/Intro";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-evenly  p-2 flex-col items-center ">
      <Navbar />
      <Intro />
    </div>
  );
};

export default App;
