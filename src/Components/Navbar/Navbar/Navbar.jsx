import React from "react";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div
      className="h-[10%] lg:w-[60%] w-[95%]  border border-sky-200 rounded-4xl text-sky-200 flex items-center justify-evenly shadow-xl shadow-sky-200/20 "
      id="navbar"
    >
      <Left />
      <Right />
    </div>
  );
};

export default Navbar;
