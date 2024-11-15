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
    <div className="w-full h-max p-4 bg-white relative overflow-hidden ">
        
        <div className="w-[12%] min-w-[150px] min-h-[140px] absolute md:block hidden transition-all ease-out duration-500 right-[-80px] hover:top-[0] top-[5px] rotate-[270deg]">
            <img src={triangleVector} alt="" className="w-full"/>
        </div>
        <div className=" min-w-[100px] min-h-[100px] absolute left-[2%] md:block hidden transition-all ease-out duration-1000 hover:scale-[1.1] bottom-[10px] rotate-[180deg]">
            <img src={crossVectors} alt="" className="w-full"/>
        </div>

      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <h2 className="font-cormorant font-[700] text-black md:text-3xl sm:text-2xl text-xl select-none">Our Assistance's advantages</h2>
          <h4 className="font-cormorant font-[500] text-black md:text-xl sm:text-md select-none">
            The Assigner wants to build a strong foundation that will enable
            students to soar to achievement.
          </h4>
        </div>
        <div className="w-full h-max grid md:grid-cols-4 grid-cols-2 gap-4 place-items-center">
          {assist.map((items) => {
            return (
              <div
                key={items.id}
                className="flex flex-col justify-center items-center gap-2 cursor-pointer transition-all ease-out duration-500 hover:shadow-lg hover:shadow-orange-100 hover:border-none md:w-[20vw] w-[100%] sm:min-w-[185px] min-h-[20vh] md:h-[17vw] h-[20vh] bg-[#EE481447] border border-gray-500 rounded-[20px]"
              >
                <h4 className="font-cormorant font-[600] text-black md:text-2xl sm:text-xl text-md text-center">
                  {items.title}
                </h4>
                <h5 className="font-cormorant font-[500] text-black md:text-md sm:text-sm text-xs text-center">
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
