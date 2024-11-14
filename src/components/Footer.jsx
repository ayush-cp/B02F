import React from "react";
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import meta from "../assets/meta.png"
import telegram from "../assets/telegram.png"
import whatsapp from "../assets/whatsapp.png"
import x from "../assets/x.png"

const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      link: "#",
      name: "Home",
    },
    {
      id: 2,
      link: "#",
      name: "About Us",
    },
    {
      id: 3,
      link: "#",
      name: "Blog",
    },
    {
      id: 4,
      link: "#",
      name: "FAQ",
    },
    {
      id: 5,
      link: "#",
      name: "Contact Us",
    },
    {
      id: 6,
      link: "#",
      name: "How We Help?",
    },
    {
      id: 7,
      link: "#",
      name: "Community",
    },
  ];

  const features = [
    {
      id: 1,
      link: "#",
      name: "Plagiarism Checker",
    },
    {
      id: 2,
      link: "#",
      name: "Free Publications",
    },
    {
      id: 3,
      link: "#",
      name: "Provides Books",
    },
    {
      id: 4,
      link: "#",
      name: "Provides PDF",
    },
    {
      id: 5,
      link: "#",
      name: "Paraphraser",
    },
  ];

  const offerings = [
    {
      id: 1,
      name: "Free IELTS Masterclass",
    },
    {
      id: 2,
      name: "Talk to Counsellor",
    },
    {
      id: 3,
      name: "IELTS Exam Overview",
    },
    {
      id: 4,
      name: "Important IELTS Articles",
    },
  ];

  return (
    <div className="w-full h-[50vh] bg-footer bg-cover bg-center flex justify-center items-center">
      <div className="w-[90%] h-[90%] flex flex-row justify-between pt-8">
        <div className="h-max w-max flex flex-col gap-4">
          <h3 className="font-cormorant font-bold text-black text-2xl">
            Quick Links
          </h3>
          <ul className="list-none flex flex-col gap-1">
            {quickLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-max px-1 rounded-sm transition-all ease-linear duration-300 font-cormorant font-semibold text-black text-lg hover:text-gray-800 hover:bg-[#cfcdcd45]"
                >
                  <a href={`${item.link}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="h-max w-max  flex flex-col gap-4">
          <h3 className="font-cormorant font-bold text-black text-2xl">
            Features
          </h3>
          <ul className="list-none flex flex-col gap-1">
            {features.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-max px-1 rounded-sm transition-all ease-linear duration-300 font-cormorant font-semibold text-black text-lg hover:text-gray-800 hover:bg-[#cfcdcd45]"
                >
                  <a href={`${item.link}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="h-max w-max  flex flex-col gap-4">
          <h3 className="font-cormorant font-bold text-black text-2xl">
            Our Offerings
          </h3>
          <ul className="list-none flex flex-col gap-1">
            {offerings.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-max px-1 rounded-sm transition-all ease-linear duration-300 font-cormorant font-semibold text-black text-lg hover:text-gray-800 hover:bg-[#cfcdcd45]"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="h-[100%] w-max p-3 flex flex-col items-end justify-center gap-4">
            <div className="w-full h-max flex flex-col items-start">
            <h3 className="font-cormorant font-bold text-black text-3xl text-center">
            Newsletter
          </h3>
          <h4 className="font-cormorant font-semibold text-black text-lg">
            You can trust us. We only send promo offers,
          </h4>
            </div>
          
          <div className="w-full flex flex-row justify-between">
            <input type="text" placeholder="Your Email Here" className="border-none outline-none font-cormorant font-bold text-white text-lg italic p-1 px-2 bg-[#583781]"/>
            <button className="w-[35%] h-[100%] transition-all ease-linear duration-300 bg-[#BA4396] hover:bg-[#da56b2] border-none outline-none font-cormorant font-bold text-white text-lg italic p-1 px-2">Subscribe</button>
          </div>
          <div>
            <div className="w-[274px] h-full flex flex-row justify-around items-center bg-black">
              <a href="" target="_blank">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-[35px] p-1 transition-all ease-linear hover:bg-[#6f6e6e] rounded-md"
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={meta}
                  alt="meta"
                  className="w-[35px] p-1 transition-all ease-linear hover:bg-[#6f6e6e] rounded-md"
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={insta}
                  alt="insta"
                  className="w-[35px] p-1 transition-all ease-linear hover:bg-[#6f6e6e] rounded-md"
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={x}
                  alt="x"
                  className="w-[35px] p-1 transition-all ease-linear hover:bg-[#6f6e6e] rounded-md"
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className="w-[35px] p-1 transition-all ease-linear hover:bg-[#6f6e6e] rounded-md"
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[35px] p-1 transition-all ease-linear hover:bg-[#6f6e6e] rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
