import './UserProfile.css'
import FAQ from "./faq/FAQ";
import Recent from "./recVideos/Recent";
import Skill from "./skill/Skill";

function UserProfile() {
    return (

    <div>
        <div className="header">

            <div className="profilePicture">
                <div id="profile-upper">
                    <div id="profile-banner-image">
                        <img src="https://quotefancy.com/media/wallpaper/3840x2160/18846-Anonymous-Quote-Work-hard-in-silence-let-your-success-be-your.jpg" alt="Banner image"/>
                    </div>
                    <div id="profile-d">
                        <div id="profile-pic">
                            <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"/>
                        </div>

                    </div>
                </div>
            </div>

        </div>


        <div className="infoBasic">
            <h2>John Doe, <address>Delhi, India</address></h2>
            <h3>My Goal : Become Independent <small>Deadline : January 1, 2022</small></h3>
            <small>Since September 2021</small>
        </div>

        <linkButton/>

        <div className="about">
            <h1 style={{
                textAlign: "left",
                marginLeft: "2vw"
            }}>About Me</h1>
            <hr/>
            <p style={{
                textAlign: "left",
                marginLeft: "2vw",
                fontSize: "3vh"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut, quos. At consectetur consequatur dicta
                doloremque dolores ducimus ea eaque eius excepturi id inventore laudantium necessitatibus nihil
                pariatur, quasi, sint. <span className="skills"> Know my skills <a href="#skill-con" className="skillId">here</a></span>. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut, quos. At consectetur consequatur dicta
                doloremque dolores ducimus ea eaque eius excepturi id inventore laudantium necessitatibus nihil
                pariatur, quasi, sint.</p>
        </div>


        <Recent/>
        <div id="skill-con">
            <Skill/>
        </div>
        <FAQ/>

    </div>


);
}


export default UserProfile