import React from 'react'
import './LiveContainer.css';
import Card from './Card.js';

function LiveContainer() {
    return (
        <div class="live-container">
            <div className="live-wrapper">
                <div className="live-top">
                    <h2 className="container-heading">Live</h2>
                    <hr />
                </div>
                <div className="live-card-container">
                    <Card
                        title="Physics"
                        image="https://image.freepik.com/free-vector/magnetic-field-like-poles-attract_1308-62874.jpg"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={true}
                    />
                    <Card
                        title="Web Development"
                        image="https://image.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
                        video_name="Clay Neal"
                        video_discription="HTML Basics | Tags | Project & Doubts"
                        live={true}
                    />
                    <Card
                        title="Finance"
                        image="https://image.freepik.com/free-vector/startup-managers-presenting-analyzing-sales-growth-chart-group-workers-with-heap-cash-rocket-bar-diagrams-with-arrow-heap-money_74855-14166.jpg"
                        video_name="Harriet Lucero "
                        video_discription="How The Economy Works | English "
                        live={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default LiveContainer
