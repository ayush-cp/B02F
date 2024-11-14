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
    <div className='w-full relative h-[22vh] bg-gray-100 flex justify-center items-center shadow-[0px_4px_4px_0px_#00000040]'>
        <div className='absolute left-0 top-0'>
            <img src={triangleVector} alt="" />
        </div>
        <div className='absolute right-0 bottom-0'>
            <img src={crossVectors} alt="" />
        </div>


        <div className='w-[95%] h-[95%] bg-white flex flex-col items-center'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-cormorant font-[700] text-4xl'>700+ students saved, and counting</h2>
                <h5 className='font-cormorant font-[500] text-md'>50K new study notes added every day, from the world’s most active student
                communities</h5>
            </div>

            <div className='w-full flex-auto bg-white flex flex-row justify-around items-center'>
                {
                    stats.map((item, index)=>{
                        return (
                            <div key={index} className='flex flex-col gap-1 items-center'>
                            <span className='font-cormorant font-[600] text-4xl'>{item.amount}</span>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={item.image} alt={`${item.entity}`} className='w-[15px] h-[15px]'/>
                                <span className='font-cormorant font-[500] text-md'>{item.entity}</span>
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