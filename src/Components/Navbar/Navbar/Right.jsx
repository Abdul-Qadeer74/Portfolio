import React, { useState } from "react";

import Menubtn from "./Menubtn";

const Right = () => {
  return (
    <div className="h-[90%] sm:w-[55%] xs:w-[35%] border border-sky-200 rounded-4xl bg-white/10 flex  items-center">
      <div className=" w-full h-full flex items-center justify-evenly text-xl">
        <div className="w-[30%] flex items-center justify-center sm:block xs:hidden">
          About Us
        </div>
        <div className="w-[30%] flex items-center justify-center sm:block xs:hidden ">
          Projects
        </div>

        <div className="xs:block sm:hidden">
          <Menubtn />
        </div>
      </div>
    </div>
  );
};

export default Right;
