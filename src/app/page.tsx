
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import React from 'react'


export default function page() {
  return (
    <div className='overflow-x-hidden'>
    <Hero/>  
    {/* relative is used for possitioning not furthure more */}
    <div className='relative z-30'><Products/></div>
    </div>
  )
}
