import React from "react";
import Left1 from "./Leftside/Left1";
import Right1 from "./Rightside/Right1";

const Intro = () => {
  return (
    <div className=" mt-20 w-full  h-[85%] text-white border border-sky-400 rounded-4xl  flex xs:flex-col sm:flex-row    items-center justify-evenly  ">
      <Right1 />
      <Left1 />
    </div>
  );
};

export default Intro;
