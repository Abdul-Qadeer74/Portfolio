import React from "react";
import { Phone, Mail, CircleUserRound } from "lucide-react";

const Left1 = () => {
  return (
    <div className="sm:w-[45%] xs:w-[95%] sm:h-[75%] xs:h-[50%]  rounded-4xl flex  justify-evenly flex-col border items-center border-black shadow-xl shadow-black">
      <div className="text-xl text-white w-[90%] h-[70%]  leading-10 font-bold flex items-center justify-center ">
        My name is" ABDUL-QADEER " .I am a student of SoftWare Engineering at "
        PUNJAB TIANJIN UNIVERSITY OF TECHONOLOGY ".
      </div>
      <div className="w-[90%] h-[35%]  flex flex-col justify-evenly ">
        <div className="h-[30%] w-full  rounded-2xl flex  justify-evenly   ">
          <div className="lg:w-[34%] sm:w-full h-full  rounded-2xl flex items-center justify-center bg-black border border-sky-400 ">
            <h1 className="text-sky-300 flex items-center justify-center gap-2 w-full">
              <Phone size={16} />
              <a href="https://wa.me/923711408302" target="_blank">
                Whatsapp
              </a>
            </h1>
          </div>
          <div className="w-[64%] h-full  rounded-2xl flex items-center justify-center  lg:flex bg-black border border-sky-400">
            <h1 className="text-sky-300 flex items-center justify-evenly gap-2">
              <Mail size={16} />
              <a href="mailto:abdqadeer7574@gmail.com" target="_blank">
                Abdul Qadeer
              </a>
            </h1>
          </div>
        </div>
        <div className="h-[50%] w-full  flex items-center justify-evenly border border-sky-400 rounded-4xl">
          <div className="w-[99%] h-[90%]  rounded-3xl flex items-center justify-evenly md:text-sm    lg:flex bg-black">
            <div className="text-sky-400 flex items-center justify-center gap-2 w-[90%]   ">
              <CircleUserRound size={20} />
              <p>Social Accounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left1;
