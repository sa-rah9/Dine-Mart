import React from 'react'
import Image from 'next/image'
export default function Products() {
  return (
    <div className='w-full h-screen bg-stone-400'>

    <h1 className='text-white text-4xl font-bold text-center'>Products</h1>
    <h2 className='text-white text-3xl font-bold text-center'>Check what we have </h2>
<div className='flex items-center justify-evenly '>
    <div className='bg-zinc-800 mt-10'>
        
    < Image src={"/fashion4.jpg"} alt='image' width={300} height={300} className='object-cover pt-10 px-10 '/>
    <h1 className='text-center text-2xl font-semibold text-white'>Black shirt</h1>
    <h1 className='text-center text-2xl font-semibold text-white opacity-50'>T-Shirt</h1>
    <h1 className='text-center text-2xl font-semibold text-white mb-2'> $240</h1>
    </div>

    <div className='bg-zinc-800 mt-10'>
        
    < Image src={"/fashion4.jpg"} alt='image' width={300} height={300} className='object-cover pt-10 px-10 '/>
    <h1 className='text-center text-2xl font-semibold text-white'>Black shirt</h1>
    <h1 className='text-center text-2xl font-semibold text-white opacity-50'>T-Shirt</h1>
    <h1 className='text-center text-2xl font-semibold text-white mb-2'> $240</h1>
    </div>
    
    <div className='bg-zinc-800 mt-10'>
        
    < Image src={"/fashion4.jpg"} alt='image' width={300} height={300} className='object-cover pt-10 px-10 '/>
    <h1 className='text-center text-2xl font-semibold text-white'>Black shirt</h1>
    <h1 className='text-center text-2xl font-semibold text-white opacity-50'>T-Shirt</h1>
    <h1 className='text-center text-2xl font-semibold text-white mb-2'> $240</h1>
    </div>
</div>


    </div>
  )
}
