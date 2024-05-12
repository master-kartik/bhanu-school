import CarouselNew from "./CarouselNew";
import React from 'react'
import HeroSection from "./HeroSection";

const Spotlight = () => {
  return (
    <div className="bg-background w-full py-12">
        <HeroSection title={"School's Spotlight"} decription={"Explore our vibrant tapestry of learning moments captured in frames of inspiration and joy. From engaging classroom activities to exciting extracurricular events, these images capture the joy, inspiration, and camaraderie that fill our halls."}/>
        <CarouselNew/>
    </div>
  )
}

export default Spotlight