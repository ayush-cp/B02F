import React from "react";
import plagiarism from "../assets/plagiarism.png";
import publication from "../assets/publication.png";
import freebook from "../assets/freebook.png";
import paraphraser from "../assets/paraphraser.png";

const AwesomeFeatures = () => {
  const data = [
    {
      image: plagiarism,
      title: "Plagiarism Checker",
      description: "We will provide access to assignments free of plagiarism",
    },
    {
      image: publication,
      title: "Free Publications",
      description: "We will provide access to publication",
    },
    {
      image: freebook,
      title: "Provides Free Books and PDF",
      description: "Free Books and PDF will be provided",
    },
    {
      image: paraphraser,
      title: "Paraphraser",
      description: "A paraphraser will be provided",
    },
  ];

  return (
    <div id="features" className="w-full min-h-[35vh] h-max flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <h2 className="font-cormorant font-[700] text-[#201041] md:text-3xl sm:text-2xl text-xl">
          Awesome Features
        </h2>
        <h3 className="font-cormorant font-[500] text-[#000] md:text-xl sm:text-lg text-md">
          Get ready to unlock the next level of features
        </h3>
      </div>

      <div className="w-[95%] grid md:grid-cols-4 grid-cols-2 justify-between gap-4 place-items-center">
        {data.map((item, index) => {
          return (
            <div key={index} className="md:w-[90%] w-[95%] md:min-h-[150px] h-[100%] border-[1px] p-2 border-black rounded-[10px] cursor-pointer transition-all ease-linear duration-300 shadow-[0px_8px_16px_0px_#00000033] hover:shadow-[2px_20px_20px_0px_#c2d4f033] flex flex-col items-center justify-start gap-4">
              <img src={item.image} alt={`${item.title}`} className="w-[50px]" />
              <div className="flex flex-col gap-1 items-center">
              <span className="font-cormorant font-[600] text-[#2E2E3B] sm:text-xl text-md text-center">
                {item.title}
              </span>
              <span className="font-cormorant font-[500] text-[#464657] sm:text-lg md:text-md text-sm text-center">
                {item.description}
              </span>
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AwesomeFeatures;
