import React from "react";
import { Phone, Mail, CircleUserRound } from "lucide-react";

const Left1 = () => {
  return (
    <div className="sm:w-[45%] xs:w-[95%] sm:h-[95%] xs:h-[40%]  rounded-4xl flex  justify-evenly flex-col">
      <div className="text-xl text-white w-[90%] h-[70%]  leading-10 font-bold">
        My name is"
        <span className="font-extrabold text-black text-2xl">ABDUL-QADEER</span>
        " .I am a student of SoftWare Engineering at "
        <span className="text-black/60 font-bold">
          PUNJAB TIANJIN UNIVERSITY OF TECHONOLOGY
        </span>
        ".
      </div>
      <div className="w-full h-[25%]  flex flex-col justify-evenly ">
        <div className="h-[30%] w-full  rounded-2xl flex  justify-evenly  xs:hidden sm:flex ">
          <div className="lg:w-[35%] sm:w-full h-full  rounded-2xl flex items-center justify-center bg-black">
            <h1 className="text-sky-300 flex items-center justify-evenly gap-2 ">
              <Phone size={16} />
              03711408302
            </h1>
          </div>
          <div className="w-[60%] h-full  rounded-2xl flex items-center justify-center xs:hidden lg:flex bg-black">
            <h1 className="text-sky-300 flex items-center justify-evenly gap-2">
              <Mail size={16} />
              abdqadeer7574@gmail.com
            </h1>
          </div>
        </div>
        <div className="h-[60%] w-full  flex items-center justify-evenly ">
          <div className="w-[35%] h-[90%]  rounded-3xl flex items-center justify-evenly md:text-sm  border-sky-200 xs:hidden lg:flex bg-black">
            <div className="text-sky-400 flex items-center justify-evenly w-[90%] ">
              <CircleUserRound size={20} />
              <p>Social Accounts</p>
            </div>
          </div>
          <div className="lg:w-[60%] xs:w-full lg:h-[90%] xs:h-full  rounded-3xl flex items-center justify-center text-xl border-sky-200 bg-black">
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left1;
