import React, { useState } from "react";

import Menubtn from "./Menubtn";

const Right = () => {
  return (
    <div className="h-[90%] sm:w-[55%] xs:w-[35%] border border-white rounded-4xl bg-sky-600 flex  items-center">
      <div className=" w-full h-full flex items-center justify-evenly text-xl">
        <div className="w-[30%] flex items-center justify-center sm:block xs:hidden border py-1 px-3 rounded-4xl">
          About Us
        </div>
        <div className="w-[30%] flex items-center justify-center sm:block xs:hidden border py-1 px-3 rounded-4xl">
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
