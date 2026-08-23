import React, { useState } from "react";

import Menubtn from "./Menubtn";

const Right = () => {
  return (
    <div className="h-[90%] sm:w-[55%] xs:w-[35%] rounded-4xl bg-black flex  items-center border border-sky-400/50">
      <div className=" w-full h-full flex items-center justify-evenly text-xl">
        <div className="w-[30%] flex items-center justify-center sm:block xs:hidden  py-1 px-3 rounded-4xl bg-sky-400/50">
          About Us
        </div>
        <div className="w-[30%] flex items-center justify-center sm:block xs:hidden  py-1 px-3 rounded-4xl bg-sky-400/50">
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
