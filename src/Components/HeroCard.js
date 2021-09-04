import React from 'react'
import './HeroCard.css'
import photo from '../Images/hero-card-img.svg'
import { Link } from 'react-router-dom'

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
                    ULearn is a one-stop free solution for all the users who want to learn something new & gain knowledge without losing focus. It also provides a unique platform to all the content creators, teachers, writers and others who want to give back to the society by creating quality content for those who are keen to learn some new skills. The platform will enable them to create content through video, audio, power point presentation or texts along with real life examples. 

                    </p>
                </div>
                <div className="cta">
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <button className="hero-card-btn">
                            Become an Educator
                        </button>
                    </Link>
                </div>
            </div>
            <div className="right">
                <img src={photo} alt="" className="hero-card-img" />
            </div>
        </div >
    )
}

export default HeroCard
