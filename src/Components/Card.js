import React from 'react'
import './Card.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Card({
    title,
    image,
    video_name,
    video_discription,
    live
}) {
    return (
        <div className="card-wrapper">
            <div className="top-info">
                <p className="video-name">{title}</p>
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
                <img src={image} alt="" />
            </div>
            <div className='card__info'>
                <div className="movie__details">
                    <p className="video-creator-name">{video_name}</p>
                    <p className="video-discription">{video_discription}</p>
                </div>
            </div>
        </div >
    )
}

export default Card
