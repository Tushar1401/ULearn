import React from 'react'
import Card from './Card'
import './RecentlyContainer.css'

function RecentlyContainer() {
    return (
        <div class="recently-container">
            <div className="recently-wrapper">
                <div className="recently-top">
                    <h2 className="container-heading">Recently Added</h2>
                    <hr />
                </div>
                <div className="recently-card-container">
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={false}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={false}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={false}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={false}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={false}
                    />
                    <Card
                        title="Physics"
                        image="https://images.unsplash.com/photo-1630589762290-6a3c62223604?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        video_name="John Smith"
                        video_discription="Magnetic Field | Electrostatics | Lecture 5"
                        live={false}
                    />


                </div>
                <div className="explore-more">
                    <button className="explore-btn">Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default RecentlyContainer
