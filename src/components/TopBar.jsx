import React from 'react'
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import meta from "../assets/meta.png"
import telegram from "../assets/telegram.png"
import whatsapp from "../assets/whatsapp.png"
import x from "../assets/x.png"

const TopBar = () => {
  return (
    <div className='w-full h-[40px] bg-[#641566] sm:flex hidden justify-end pr-10'>
        <div className='w-[274px] h-full flex flex-row justify-around items-center'>
            <a href="" target='_blank'><img src={linkedin} alt="linkedin" className='w-[35px] p-1 transition-all ease-linear hover:bg-[#8d208f] rounded-md'/></a>
            <a href="" target='_blank'><img src={meta} alt="meta" className='w-[35px] p-1 transition-all ease-linear hover:bg-[#8d208f] rounded-md'/></a>
            <a href="" target='_blank'><img src={insta} alt="insta" className='w-[35px] p-1 transition-all ease-linear hover:bg-[#8d208f] rounded-md'/></a>
            <a href="" target='_blank'><img src={x} alt="x" className='w-[35px] p-1 transition-all ease-linear hover:bg-[#8d208f] rounded-md'/></a>
            <a href="" target='_blank'><img src={whatsapp} alt="whatsapp" className='w-[35px] p-1 transition-all ease-linear hover:bg-[#8d208f] rounded-md'/></a>
            <a href="" target='_blank'><img src={telegram} alt="telegram" className='w-[35px] p-1 transition-all ease-linear hover:bg-[#8d208f] rounded-md'/></a>
        </div>
    </div>
  )
}

export default TopBar