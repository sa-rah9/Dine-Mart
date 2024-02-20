
import About from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Products from '@/components/Products'
import React from 'react'


export default function page() {
  return (
    <div className='overflow-x-hidden'>
    <Hero/>  
    {/* relative is used for possitioning not furthure more */}
    <div className='relative z-30'><Products/></div>
    
    <div className='relative z-30'>
    <About/>
    </div>
    <div className='relative z-30'>
      <Newsletter/>
    </div>
    <div className='relative z-30'>
      <Footer/>
    </div>
    </div>
    
  )
}
