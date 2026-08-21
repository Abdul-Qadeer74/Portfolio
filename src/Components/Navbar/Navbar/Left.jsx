import React from "react";
import { UserRound } from "lucide-react";

const Left = () => {
  return (
    <div className="h-[90%] sm:w-[35%] xs:w-[35%] border border-sky-200 rounded-4xl flex items-center justify-center lg:text-2xl md:text-xl  tracking-widest bg-white/10 font-bold [text-shadow:0_0_1px_white,0_0_2px_white,0_0_2px_white,0_0_1px_white]">
      <h1 className="sm:block xs:hidden">PORTFOLIO</h1>
      <div className="xs:block sm:hidden">
        <UserRound />
      </div>
    </div>
  );
};

export default Left;
