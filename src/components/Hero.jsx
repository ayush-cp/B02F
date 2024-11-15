import React from "react";
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="md:w-full md:h-full w-full h-[25vh] sm:h-full flex justify-center items-center relative overflow-hidden">
      <img src={hero} alt="" className="w-full h-full object-cover object-center cursor-pointer shadow-[0px_4px_4px_0px_#00000040"/>
      <div className="absolute left-4 py-4 sm:hidden flex flex-col h-full w-max items-start gap-1 justify-center">
        <div className="w-[50%] h-max">
          <h1 className="flex flex-col">
            <span className="font-cormorant font-[700] text-lg text-[#891993]">Navigate your</span>
            <span className="font-cormorant font-[700] text-lg text-[#5A156B]">Academic Journey</span>
            <span className="font-cormorant font-[700] text-lg text-[#E52FDE]">with Confidence</span>
          </h1>
        </div>

        <div className="w-[40%]">
          <p className="font-cormorant  font-[800] text-xs text-justify text-black stroke-white stroke-1">Providing high-quality and comprehensive assistance with assignments and thesis writing for students 
          at all academic levels.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
