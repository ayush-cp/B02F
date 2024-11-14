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
    <div className="w-full h-[35vh] flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <h2 className="font-cormorant font-[700] text-[#201041] text-3xl">
          Awesome Features
        </h2>
        <h3 className="font-cormorant font-[500] text-[#000] text-xl">
          Get ready to unlock the next level of features
        </h3>
      </div>

      <div className="w-[95%] flex flex-row justify-around">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-[270px] md:min-h-[187px] h-max border-[1px] border-black rounded-[10px] shadow-[0px_8px_16px_0px_#00000033] flex flex-col items-center justify-center gap-4">
              <img src={item.image} alt={`${item.title}`} className="w-[50px]" />
              <div className="flex flex-col gap-1 items-center">
              <span className="font-cormorant font-[600] text-[#2E2E3B] text-xl">
                {item.title}
              </span>
              <span className="font-cormorant font-[500] text-[#464657] text-lg text-center">
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
