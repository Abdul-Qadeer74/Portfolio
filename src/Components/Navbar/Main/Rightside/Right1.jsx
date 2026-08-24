import React from "react";
import Image from "./Image.jpg";
const Right1 = () => {
  return (
    <div className="sm:w-[35%] xs:w-[65%] sm:h-[75%] xs:h-[40%]  rounded-4xl  overflow-hidden border border-sky-400 shadow-xl shadow-sky-400/40 ">
      <img
        src={Image}
        alt="profile pic"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default Right1;
