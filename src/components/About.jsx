import React from 'react'
import CarouselNew from './CarouselNew'
import HeroSection from './HeroSection'
import NewTimeline from './NewTimeline'
import TextCard from'./TextCard'

const About = () => {
  return (
    <div className=''>
    <div className='bg-gradient-to-t from-gray-900 via-gray-600 to-gray-900'>
        <CarouselNew classNames={"w-screen opacity-65"}/>

    </div>
        <div className='absolute select-none w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-[#ffff] z-10 text-center font-bold tracking-tighter'>About Us</div>
        <HeroSection title={"Our Mission"} decription={"We are committed to providing a world-class education that respects traditional values while embracing modern practices. We are committed to providing a well-rounded education that goes beyond the classroom. Our mission is to inspire and empower every student to achieve their full potential, both academically and athletically."}/>
        <TextCard/>
        <HeroSection title={"Our Journey"}/>
        <NewTimeline/>
        </div>
    
  )
}

export default About