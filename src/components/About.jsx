import React from 'react'
import CarouselNew from './CarouselNew'
import HeroSection from './HeroSection'

const About = () => {
  return (
    <div>
    <div className='bg-gradient-to-t from-gray-900 via-gray-600 to-gray-900'>
        <CarouselNew classNames={"w-screen opacity-65"}/>

    </div>
        <div className='absolute select-none w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-[#ffff] z-10 text-center font-bold tracking-tighter'>About Us</div>
        <HeroSection title={"New"} decription={"abfkabsfdb aubfabdfi"}/>
        </div>
    
  )
}

export default About