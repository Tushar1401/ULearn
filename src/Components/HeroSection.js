import React from 'react'
import '../Components/HeroSection.css'
import SliderCard from './Slider/Slider'
import { SliderData } from './Slider/SliderData'

function HeroSection() {
    return (
        <div className="hero-container">
            <SliderCard slides={SliderData} />
        </div>
    )
}

export default HeroSection
