import React, { useState } from "react";
import accordionArrow from "../assets/accordionArrow.png";

const Faqs = () => {

  const [activeId, setActiveId] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "What services are available on our website?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore nam beatae adipisci aliquid nisi magnam voluptas corporis, illo atque error perspiciatis ea quod.",
    },
    {
      id: 2,
      question: "How can we guarantee the caliber of the assignments?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, unde. Tenetur quaerat est unde libero eaque molestias quae omnis quos saepe? Quam repudiandae perspiciatis placeat tempore itaque delectus rem repellendus distinctio, reiciendis vel perferendis reprehenderit maxime libero nulla odit neque.",
    },
    {
      id: 3,
      question:
        "What distinguishes our company from other assignment writing firms?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, cumque alias. Quis vel sunt a ex quia eligendi perspiciatis quam repudiandae in! Quod dignissimos assumenda tempore iste, delectus quaerat id!",
    },
    {
      id: 4,
      question: "Does utilizing our service have any limitations?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore nam beatae adipisci aliquid nisi magnam voluptas corporis, illo atque error perspiciatis ea quod.",
    },
    {
      id: 5,
      question: "How can consumers access our website's news and updates?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempore nam beatae adipisci aliquid nisi magnam voluptas corporis, illo atque error perspiciatis ea quod.",
    },
  ];

  return (
    <div className="w-full h-max p-4 bg-white">
      <div className="w-[90%] h-full  flex flex-col items-center gap-4">
        <div className="w-full text-center">
          <h2 className="font-cormorant font-bold text-4xl text-black">FAQs</h2>
        </div>

        <div className="w-[90%] h-max flex flex-col gap-6">
          {faqs.map((item) => {
            return (
              <div key={item.id} className=" shadow-[0px_2px_5px_0px_#00000040] cursor-pointer">
                <div className="w-full h-11 bg-white flex flex-row justify-between items-center px-4" onClick={()=>setActiveId(activeId === item.id? null: item.id)}>
                  <span className="font-cormorant text-xl text-black font-bold ">
                    {item.question}
                  </span>
                  <div className="p-2 cursor-pointer transition-all ease-linear duration-200 hover:bg-gray-200 rounded-full flex justify-center items-center ">
                    <img src={accordionArrow} alt="" className={`transition-all ease-in-out duration-500 ${activeId===item.id?'rotate-180': ''}`} />
                  </div>
                </div>

                <div className={`${activeId=== item.id?'h-max p-4 ' : 'h-0'} transition-all ease-in-out duration-400 overflow-hidden w-full bg-white border-l-8 border-l-violet-700 `}>
                  <p>
                  {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
