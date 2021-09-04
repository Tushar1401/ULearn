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
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={true}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={true}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={true}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default LiveContainer
