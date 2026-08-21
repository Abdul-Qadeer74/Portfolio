import React from "react";
import Left1 from "./Leftside/Left1";
import Right1 from "./Rightside/Right1";

const Intro = () => {
  return (
    <div className=" w-full border-sky-200 border h-[85%] text-white rounded-4xl shadow-2xl shadow-sky-200/60 flex xs:flex-col sm:flex-row    items-center justify-evenly ">
      <Left1 />
      <Right1 />
    </div>
  );
};

export default Intro;
