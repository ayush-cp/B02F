import React from "react";
import triangleVector from "../assets/triangleVector.png"
import crossVectors from "../assets/crossVectors.png"

const Assistance = () => {
  const assist = [
    {
      id: 1,
      title: "No Plagiarism",
      desc: "100% original answers that lessen the possibility of receiving a bad grade.",
    },
    {
      id: 2,
      title: "On-time Submission",
      desc: "We promise to turn in the job ahead of schedule, no matter how difficult it is.",
    },
    {
      id: 3,
      title: "24/7 support",
      desc: "Help for homework is available 24/7; we are always here to assist students with their assignments. ",
    },
    {
      id: 4,
      title: "Rewrites that satisfy",
      desc: "Get your schoolwork redone as many times as you like till you are happy.",
    },
  ];

  return (
    <div className="w-full h-max p-4 bg-white relative">

        <div className="w-[12%] min-w-[100px] min-h-[100px] absolute right-[-2%] top-[25%] rotate-[270deg]">
            <img src={triangleVector} alt="" className="w-full"/>
        </div>
        <div className=" min-w-[100px] min-h-[100px] absolute left-[2%] bottom-[6%] rotate-[180deg]">
            <img src={crossVectors} alt="" className="w-full"/>
        </div>

      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <h2 className="font-cormorant font-[700] text-black text-3xl">Our Assistance's advantages</h2>
          <h4 className="font-cormorant font-[500] text-black text-xl">
            The Assigner wants to build a strong foundation that will enable
            students to soar to achievement.
          </h4>
        </div>
        <div className="w-full h-max flex flex-row justify-evenly">
          {assist.map((items) => {
            return (
              <div
                key={items.id}
                className="flex flex-col justify-center items-center w-[14vw] min-w-[140px] h-[29vh] bg-[#EE481447] border border-black rounded-[20px] p-1"
              >
                <h4 className="font-cormorant font-[600] text-black text-2xl">
                  {items.title}
                </h4>
                <h5 className="font-cormorant font-[500] text-black text-md text-center">
                 {items.desc}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Assistance;
