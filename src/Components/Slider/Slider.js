import React, { useState } from 'react'
import './Slider.css'
import './SliderData'
import { SliderData } from './SliderData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Slider({ slides }) {

    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} />
            <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />

            {SliderData.map((slide, index) => {

                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {/* {index === current && (<img className="slide-img" src={slide.image} alt="img" />)} */}
                        {
                            index === current &&
                            (<iframe width="1000" height="520" src={slide.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
                        }
                    </div>
                )
            })}

        </div>
    )
}

export default Slider
