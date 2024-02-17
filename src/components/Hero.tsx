import React from 'react'
import Image from 'next/image'


export default function Hero() {
  return (
    <div className='w-full h-screen bg-stone-400'>
    <div className='flex justify-evenly items-center w-full pt-20 px-20'>  
    <div>
      <div><button className="mb-5 bg-[#22324D] border-2 border-solid  flex items-center justify-center px-4 py-2 text-white">
            Sale 70%
          </button>
          <h1 className="text-[38px] md:text-[50px] text-white font-bold">
            An Industrial <br />
            Take On Sweaters
          </h1>
          <p className="pt-3 text-lg md:text-2xl md:w-[75%] text-white text-left ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          {/* <IoCartOutline className="w-12 h-8" /> */}
          <button className="mt-5 bg-[#BAC4C8] border-4 border-solid flex items-center justify-center px-4 py-3 text-[#22324D] border-[#22324D] font-bold">
            {/* <IoCartOutline className="w-12 h-8" />  */}
            Start Shopping
          </button></div>
    </div>

    <div className='md:flex hidden'><Image src={"/fashion4.jpg"} alt='image' width={300} height={300} className='rounded-full object-cover w-full h-full'/> </div>

    </div>
    </div>
  )
}
