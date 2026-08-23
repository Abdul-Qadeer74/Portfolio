import React from "react";
import Left1 from "./Leftside/Left1";
import Right1 from "./Rightside/Right1";

const Intro = () => {
  return (
    <div className=" mt-2 w-full  h-[65%] text-white bg-sky-400/50 rounded-4xl  flex xs:flex-col sm:flex-row    items-center justify-evenly ">
      <Left1 />
      <Right1 />
    </div>
  );
};

export default Intro;
