import React from "react";
import middleTop from "../assets/middleTop.png";
import middleBottom from "../assets/middleBottom.png";

const IeltsPrep = () => {
  return (
    <div className="w-full md:h-[60vh] sm:h-[40vh] h-[30vh]  relative bg-gradient bg-cover">
      <div className="absolute w-[40%] right-8 top-4 z-[2]">
        <img src={middleTop} alt="" className="w-full" />
      </div>
      <div className="absolute w-[23%] bottom-0 right-16">
        <img src={middleBottom} alt="" className="w-full" />
      </div>


      <div className="ml-[10%] h-full md:w-[50%] w-[70%] relative flex flex-col justify-center sm:gap-8 gap-0">
        <div className="flex flex-col w-max sm:gap-4 gap-0">
          <span className="font-cormorant font-[700] text-[#9F0D76] md:text-[3rem] text-2xl">IELTS Preparation</span>
          <span className="font-cormorant font-[700] text-[#5A156B] md:text-[3rem] text-2xl">Online Best Learning</span>
          <span className="font-cormorant font-[700] text-[#A259FF] md:text-[3rem] text-2xl">opportunities in The World</span>
        </div>
        <div>
          <p className="font-cormorant font-[500] text-[#000] md:text-xl text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
            negotium, dicerem impudens, nisi hoc institut translatum ad
            philosophos nostros esset.
          </p>
        </div>

        <div className="md:w-full w-[80%] sm:h-[13%] h-[10%] pl-[5%]">
          <button className="w-[35%] h-[100%] bg-[#5A156B] rounded-[15px] font-cormorant font-[700] text-[#fff] sm:text-2xl text-md transition-all ease-linear duration-300 hover:bg-[#9531af] hover:border-[1px] hover:border-[#712385] hover:shadow-[0px_0px_5px_1px_#5A156B]">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default IeltsPrep;
