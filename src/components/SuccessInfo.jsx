import React from 'react'
import triangleVector from "../assets/triangleVector.png"
import crossVectors from "../assets/crossVectors.png"
import resources from "../assets/resources.png"
import institutions from "../assets/institutions.png"
import user from "../assets/user.png"

const SuccessInfo = () => {


    const stats = [
        {
            amount: "350+",
            image: resources,
            entity: "Study Resources"
        },
        {
            amount: "115+",
            image: institutions,
            entity: "Institutions"
        },
        {
            amount: "700+",
            image: user,
            entity: "Users"
        }
    ]

  return (
    <div className='w-full relative md:h-[22vh] min-h-[15vh] h-max bg-gray-100 flex justify-center items-center shadow-[0px_4px_4px_0px_#00000040]'>
        <div className='absolute md:block hidden transition-all ease-out duration-1000 left-2 hover:left-8 top-[-10px]'>
            <img src={triangleVector} alt="" />
        </div>
        <div className='absolute md:block hidden transition-all ease-out duration-1000 hover:scale-[1.1] right-4 bottom-[-10px]'>
            <img src={crossVectors} alt="" />
        </div>


        <div className='w-[95%] sm:h-[95%] h-[95%] py-2 bg-white flex flex-col items-center'>
            <div className='flex flex-col sm:gap-2 gap-0 items-center'>
                <h2 className='font-cormorant font-[700] md:text-4xl sm:text-2xl'>700+ students saved, and counting</h2>
                <h5 className='font-cormorant font-[500] sm:text-md text-sm text-center'>50K new study notes added every day, from the world’s most active student
                communities</h5>
            </div>

            <div className='w-full flex-auto bg-white flex flex-row justify-around items-center'>
                {
                    stats.map((item, index)=>{
                        return (
                            <div key={index} className='flex flex-col gap-0 items-center'>
                            <span className='font-cormorant font-[600] md:text-4xl sm:text-2xl text-sm'>{item.amount}</span>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={item.image} alt={`${item.entity}`} className='sm:w-[15px] w-[10px] sm:h-[15px] h-[10px]'/>
                                <span className='font-cormorant font-[500] md:text-md text-xs'>{item.entity}</span>
                            </div>
                        </div>
                        )
                    })
                }
               


               

            </div>
        </div>
    </div>
  )
}

export default SuccessInfo