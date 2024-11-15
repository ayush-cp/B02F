import React from "react";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import meta from "../assets/meta.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import x from "../assets/x.png";

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
      link: "#faqs",
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
      link: "#features",
      name: "Plagiarism Checker",
    },
    {
      id: 2,
      link: "#features",
      name: "Free Publications",
    },
    {
      id: 3,
      link: "#features",
      name: "Provides Books",
    },
    {
      id: 4,
      link: "#features",
      name: "Provides PDF",
    },
    {
      id: 5,
      link: "#features",
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
    <div className="relative w-full md:min-h-[40vh] h-max bg-footer bg-cover bg-center flex justify-center items-center">
      <div className=" w-[100%] h-[90%] grid md:grid-cols-4 grid-cols-2 gap-4 items-start place-items-center md:pt-8 py-8 overflow-hidden">
        <div className="h-max w-max flex flex-col gap-4">
          <h3 className="font-cormorant font-bold text-black md:text-2xl sm:text-xl text-md">
            Quick Links
          </h3>
          <ul className="list-none flex flex-col gap-1">
            {quickLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-max px-1 rounded-sm transition-all ease-linear duration-300 font-cormorant font-semibold text-black md:text-lg sm:text-md text-sm hover:text-gray-800 hover:bg-[#cfcdcd45]"
                >
                  <a href={`${item.link}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="h-max w-max  flex flex-col gap-4">
          <h3 className="font-cormorant font-bold text-black md:text-2xl sm:text-xl text-md">
            Features
          </h3>
          <ul className="list-none flex flex-col gap-1">
            {features.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-max px-1 rounded-sm transition-all ease-linear duration-300 font-cormorant font-semibold text-black md:text-lg sm:text-md text-sm hover:text-gray-800 hover:bg-[#cfcdcd45]"
                >
                  <a href={`${item.link}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="h-max w-max  flex flex-col gap-4">
          <h3 className="font-cormorant font-bold text-black md:text-2xl sm:text-xl text-md">
            Our Offerings
          </h3>
          <ul className="list-none flex flex-col gap-1">
            {offerings.map((item) => {
              return (
                <li
                  key={item.id}
                  className="w-max px-1 rounded-sm transition-all ease-linear duration-300 font-cormorant font-semibold text-black md:text-lg sm:text-md text-sm hover:text-gray-800 hover:bg-[#cfcdcd45]"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" h-max w-max 2  flex flex-col sm:items-start items-center justify-center gap-4">
          <div className="w-[80%] h-max flex flex-col items-start">
            <h3 className="font-cormorant font-bold text-black md:text-2xl sm:text-xl text-md text-center">
              Newsletter
            </h3>
            <h4 className="text-wrap font-cormorant font-semibold text-black md:text-lg sm:text-md text-sm">
              You can trust us. We only send promo offers,
            </h4>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="sm:w-full w-[85%] flex flex-row items-center justify-around">
              <input
                type="email"
                placeholder="Your Email Here"
                className="sm:w-max w-[50%] border-none outline-none font-cormorant font-bold text-white md:text-lg sm:text-md text-sm italic p-1 sm:px-2 transition-all ease-linear duration-300 bg-[#583781] focus:bg-[#8354bcd3] focus:rounded-sm focus:shadow-sm focus:shadow-[#583781]"
              />
              <button type="submit" className="select-none w-[40%] h-[100%] transition-all ease-linear duration-300 bg-[#BA4396] hover:bg-[#da56b2] border-none outline-none font-cormorant font-bold text-white md:text-lg sm:text-md text-sm italic p-1 sm:px-2">
                Subscribe
              </button>
            </div>
            <div>
              <div className="sm:w-[100%] ml-4 w-[70%] h-full flex flex-row justify-around items-center bg-black">
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
    </div>
  );
};

export default Footer;
