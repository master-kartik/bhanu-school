import {LandingSection, HeroSection, MissionIcons, Spotlight, FaqSection, ContactUs} from "./index";
import React from 'react'
import TextCard from "./TextCard";

const Home = () => {
  return (
    <div>
        <LandingSection />
        <HeroSection title={"Our Mission"} decription={"We are committed to providing a world-class education that respects traditional values while embracing modern practices. We are committed to providing a well-rounded education that goes beyond the classroom. Our mission is to inspire and empower every student to achieve their full potential, both academically and athletically."}/>
        <MissionIcons/>
        <Spotlight/>
        <HeroSection title={"A New Chapter in Rural Education"}  decription={"We are dedicated to delivering a world-class education that upholds time-honored values while embracing innovative and contemporary practices. Our commitment lies in blending the wisdom of tradition with the dynamism of modernity, ensuring our students receive a holistic learning experience that prepares them for success in an ever-evolving world."}/>
        <TextCard/>
        <FaqSection/>
        <ContactUs/>
    </div>
  )
}

export default Home