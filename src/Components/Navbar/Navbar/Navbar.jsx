import React from "react";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div
      className="h-[7%] lg:w-[70%] w-[95%]  border border-sky-400 rounded-4xl text-sky-200 flex items-center justify-evenly "
      id="navbar"
    >
      <Left />
      <Right />
    </div>
  );
};

export default Navbar;
