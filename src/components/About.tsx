
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='w-full h-full bg-stone-400 '>

                         {/* By md:6-xl  we made it responsive */}
    <h1 className='text-white  text-3xl font-bold text-center pt-10 pb-10 lg:text-7xl sm:text-5xl px-3'>Unique and Authentic Vintage Designer Jewellery</h1>
    {/* We made 3 grid first grid for small screen second md for medium and lg for fullscreen */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] text-white'>

    <div  className="bg-zinc-600  hover:bg-[#737677] hover:text-black hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem] border-8 border-solid border-zinc-800">
    <h1 className='text-center  md:text-[16.5px] font-semibold text-white'>
        THIS PIECE IS ETHICALLY CRAFTED IN OUR SMALL FAMILY-OWNED WORKSHOP IN PERU WITH UNMATCHED ATTENTION TO DETAIL AND CARE. THE NATURAL COLOR IS THE ACTUAL NATURAL COLOR OF THE FIBER, UNDYED AND 100% TRACEABLE.
    </h1>
    </div>

    <div className='bg-zinc-600 mt-2 flex items-center justify-center hover:scale-110 transform transition-all duration-300 border-8 border-solid border-zinc-800 '>   
    <Image src={"/fashion3.jpg"} alt='image' width={400} height={400} className='object-cover 5 pt-5 pb-5 pl-5 pr-5'/>
    </div>
    
    <div className='bg-zinc-600 mt-2 hover:scale-110 transform transition-all duration-300 py-12 border-8 border-solid border-zinc-800'>
    <h1 className=' px-4 text-center md:text-[16.5px] font-semibold text-white'>USING GOOD QUALITY MATERIALS 100% HANDMADE PRODUCTS DISCOUNT FOR BULK ORDERS MODERN FASHION DESIGN
          </h1>
          <div className='flex justify-center items-center'>
    <button className=" bg-[#22324D] border-2 border-solid px-8 py-2 text-white text-center mt-4 ">
                See All Products
                </button>
          </div>
    </div>

</div>

  
   </div>
  )
}

