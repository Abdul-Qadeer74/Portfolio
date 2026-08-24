import React from "react";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div
      className="h-[10%] lg:w-[70%] w-[95%]  border border-sky-400 rounded-4xl text-sky-200 flex items-center justify-evenly fixed top-3 bg-black"
      id="navbar"
    >
      <Left />
      <Right />
    </div>
  );
};

export default Navbar;
