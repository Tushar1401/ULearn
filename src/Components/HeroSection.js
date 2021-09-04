import React from 'react'
import '../Components/HeroSection.css'
import HeroCard from './HeroCard'
import SliderCard from './Slider/Slider'
import { SliderData } from './Slider/SliderData'

function HeroSection() {
    return (
        <div className="hero-container">
            <SliderCard slides={SliderData} />
            <HeroCard />
        </div>
    )
}

export default HeroSection
