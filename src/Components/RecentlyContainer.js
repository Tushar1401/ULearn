import React from 'react'
import { Link } from 'react-router-dom'
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
                        title="UI/UX Designing"
                        image="https://image.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg"
                        video_name="Aleeza Brock"
                        video_discription="Fundamental Principles | Important "
                        live={false}
                    />
                    <Card
                        title="Public Speaking"
                        image="https://as2.ftcdn.net/v2/jpg/02/64/10/57/500_F_264105760_W86OZkA9rrpm8wOJObFni9LTcCTb7uPT.jpg"
                        video_name="Nick Burn"
                        video_discription="How to make people listen to you ?"
                        live={false}
                    />
                    <Card
                        title="Aptitude"
                        image="https://image.freepik.com/free-vector/brain-logo_126523-778.jpg"
                        video_name="Kim Clements"
                        video_discription="2021 Top Aptitude Questions [SOVLED]"
                        live={false}
                    />
                    <Card
                        title="Mathematics"
                        image="https://image.freepik.com/free-vector/isometric-maths-elements-background_52683-8061.jpg"
                        video_name="Leo Holmes"
                        video_discription="Integration | Tricks and Important Formulae"
                        live={false}
                    />
                    <Card
                        title="Machine Learning"
                        image="https://image.freepik.com/free-vector/characters-fixing-computer-chatbot-isometric-icon-3d_1284-63049.jpg"
                        video_name="Louis Gentry"
                        video_discription="Getting started | Python Revision & More"
                        live={false}
                    />
                    <Card
                        title="Chemistry"
                        image="https://image.freepik.com/free-photo/laboratory-glassware-with-liquids-different-color_1150-19441.jpg"
                        video_name="Caris Vance"
                        video_discription="States Of Matter | Top Questions | Solved"
                        live={false}
                    />


                </div>

                <div className="explore-more">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button className="explore-btn">Explore More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecentlyContainer
