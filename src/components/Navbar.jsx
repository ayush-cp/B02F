import React, { useState } from "react";
import logo from "../assets/logo.png";
import ham from "../assets/ham.png";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="w-full h-max flex flex-row justify-between items-center sm:p-4 bg-white relative">
      <div className="w-max cursor-pointer">
        <img src={logo} alt="The Assigner" className="w-[18vw] min-w-[150px]" />
      </div>

      <div className={`w-full h-max md:flex ${openMenu? 'flex': 'hidden'} z-10 md:justify-center md:relative absolute right-0 top-[100%] justify-end`}>
        
        <div className="md:h-[47px] h-max md:w-[60%] w-full min-w-[500px] bg-[#F5F5F5] shadow-[0px_4px_4px_0px_#00000040]">
          <ul className="h-full w-full flex md:flex-row justify-around items-center flex-col md:gap-0 gap-2">
            <li className="font-[700] text-[100%] font-cormorant cursor-pointer select-none md:p-[2px] md:px-[5px] py-2 text-center px-2 md:w-max w-full rounded-md transition-all ease-linear hover:bg-gray-300">
              Home
            </li>
            <li className="font-[700] text-[100%] font-cormorant cursor-pointer md:p-[2px] select-none md:px-[5px] py-2 text-center px-2 md:w-max w-full rounded-md transition-all ease-linear hover:bg-gray-300">
              About Us
            </li>
            <li className="font-[700] text-[100%] font-cormorant cursor-pointer md:p-[2px] select-none md:px-[5px] py-2 text-center px-2 md:w-max w-full rounded-md transition-all ease-linear hover:bg-gray-300">
              Blog
            </li>
            <li className="font-[700] text-[100%] font-cormorant cursor-pointer md:p-[2px] select-none md:px-[5px] py-2 text-center px-2 md:w-max w-full rounded-md transition-all ease-linear hover:bg-gray-300">
              Our Services
            </li>
            <li className="font-[700] text-[100%] font-cormorant cursor-pointer md:p-[2px] select-none md:px-[5px] py-2 text-center px-2 md:w-max w-full rounded-md transition-all ease-linear hover:bg-gray-300">
              IELTS & PTE
            </li>
            <li className="font-[700] text-[100%] font-cormorant cursor-pointer md:p-[2px] select-none md:px-[5px] py-2 text-center px-2 md:w-max w-full rounded-md transition-all ease-linear hover:bg-gray-300">
              Contact Us
            </li>
          </ul>
        </div>
       
      </div>

      <div className="w-max  sm:h-[40px] h-[30px] flex flex-row items-center gap-2">
        <button className="w-[9vw] sm:min-w-[80px] min-w-[60px] select-none  h-full  bg-[#583781] font-cormorant font-[600] text-[15px] text-white rounded-[5px] transition-all ease-linear hover:bg-[#8456bb] hover:text-gray-50">
          Login
        </button>
        <div className={` ${openMenu? 'bg-gray-100': 'bg-transparent'} md:hidden right-0 w-[50px] cursor-pointer block transition-all ease-linear hover:bg-gray-200 rounded-lg`} onClick={()=>setOpenMenu(prev => !prev)}>
          <img src={ham} alt="Menu" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
