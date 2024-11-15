import React from "react";
import middleTop from "../assets/middleTop.png";
import middleBottom from "../assets/middleBottom.png";

const IeltsPrep = () => {
  return (
    <div className="w-full md:h-[60vh] sm:h-full p-2 h-[30vh]  relative bg-gradient bg-cover">
      <div className="absolute sm:w-[50%] w-[60%] sm:right-8 right-0 sm:top-4 top-8 z-[2]">
        <img src={middleTop} alt="" className="w-full" />
      </div>
      <div className="absolute sm:w-[22%] w-[35%] sm:top-[31%] bottom-[0%] sm:right-16 right-4">
        <img src={middleBottom} alt="" className="w-full" />
      </div>


      <div className="sm:ml-[10%] ml-[3%] h-full md:w-[50%] w-[70%] relative flex flex-col justify-center sm:gap-2 md:gap-8 gap-2">
        <div className="flex flex-col w-max sm:gap-1 md:gap-6 gap-0">
          <span className="font-cormorant font-[700] text-[#9F0D76] md:text-[3rem] sm:text-3xl text-xl">IELTS Preparation</span>
          <span className="font-cormorant font-[700] text-[#5A156B] md:text-[3rem] sm:text-3xl text-xl">Online Best Learning</span>
          <span className="font-cormorant font-[700] text-[#A259FF] md:text-[3rem] sm:text-3xl text-xl">opportunities in The World</span>
        </div>
        <div>
          <p className="font-cormorant font-[500] text-[#000] md:text-xl sm:text-md text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
            negotium, dicerem impudens, nisi hoc institut translatum ad
            philosophos nostros esset.
          </p>
        </div>

        <div className="md:w-full w-[60%] sm:h-[13%] h-[10%] sm:pl-[5%] pl-[0%]">
          <button className="select-none sm:w-[35%] w-[45%] h-[100%] bg-[#5A156B] sm:rounded-[15px] rounded-[5px] font-cormorant font-[700] text-[#fff] sm:text-lg md:text-2xl text-xs transition-all ease-linear duration-300 hover:bg-[#9531af] hover:border-[1px] hover:border-[#712385] hover:shadow-[0px_0px_5px_1px_#5A156B]">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default IeltsPrep;
