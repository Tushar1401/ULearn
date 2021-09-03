import React from 'react'
import './Card.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Card({ live }) {
    return (
        <div className="card-wrapper">
            <div className="top-info">
                <p className="video-name">Physics</p>
                {live == true ?
                    (
                        <div className="live-section">
                            <FiberManualRecordIcon className="live-dot" />
                            <p className="live-text">LIVE</p>
                        </div>
                    ) :
                    ""
                }
            </div>
            <div className="card__image">
                <img src="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='card__info'>
                <div className="movie__details">
                    <p className="video-creator-name">HELLO</p>
                    <p className="video-discription">Magnetic Field | Electrostatics | Lecture 5 </p>
                </div>
            </div>
        </div >
    )
}

export default Card
