import React from 'react'
import './HeroCard.css'
import photo from '../Images/hero-card-img.svg'

function HeroCard() {
    return (
        <div className="hero-card-wrapper">
            <div className="left">
                <div className="heading">
                    <p>Start Your</p> 
                    <p id="heading-hero">Learning <span>Now !</span></p>
                </div>
                <div className="discription">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum
                    </p>
                </div>
                <div className="cta">
                    <button className="hero-card-btn">
                        Become an Educator
                    </button>
                </div>
            </div>
            <div className="right">
                <img src={photo} alt="" className="hero-card-img" />
            </div>
        </div >
    )
}

export default HeroCard
