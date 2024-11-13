import React from "react";
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="md:w-full md:h-full w-full h-full flex justify-center items-center relative">
      <img src={hero} alt="" className="w-full h-full object-fill cursor-pointer shadow-[0px_4px_4px_0px_#00000040"/>
      <div className="absolute left-4 sm:hidden flex flex-col h-full w-max items-start gap-2 justify-center">
        <div className="w-[116px]">
          <h1 className="flex flex-col">
            <span className="font-cormorant font-[700] text-[12px] text-[#891993]">Navigate your</span>
            <span className="font-cormorant font-[700] text-[12px] text-[#5A156B]">Academic Journey</span>
            <span className="font-cormorant font-[700] text-[12px] text-[#E52FDE]">with Confidence</span>
          </h1>
        </div>

        <div className="w-[40%]">
          <p className="font-cormorant  font-[500] text-[12px] text-justify text-black">Providing high-quality and comprehensive assistance with assignments and thesis writing for students 
          at all academic levels.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
