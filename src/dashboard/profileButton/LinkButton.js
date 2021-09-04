import './LinkButton.css'

function LinkButton(){
    return(
        <div>
            <div className="friends">
                {/*if userIsAuthenticatedAndHisProfile*/
                    /*     <div className="editProfile">
                             <a href="editProfile">Edit Profile</a>
                         </div>
                     }*/}
                {/*if userIsNotAuthenticatedAndFollows*/
                    /*<div className="unfollow">
                        <button className="unfollow" onClick="processRequest">UnFollow</button>
                        {
                            function processRequest(){
                                /*
                                * Get Authenticated user following count and increase by -1
                                * Remove Username whom authenticated user had followed in list
                                * if above status === 200
                                * Increase following count of followed user by -1 and update data as required
                                * */
                    //    }
                    //</div>
                }

                }
                {/*if userIsNotAuthenticatedOrNOTFollowed*/
                    <div className="follow">
                        <button className="follow" onClick="processRequest()">Follow</button>
                        {
                            function processRequest(){

                                /*
                                * Get Authenticated user following count and increase by 1
                                * Add Username whom authenticated user had followed in list
                                * if above status === 200
                                * Increase following count of followed user by 1 and update data as required
                                * */
                            }
                        }
                    </div>
                }

                <div className="following">
                    <a href="following" target="_blank">Following</a>
                </div>
            </div>

            <div className="userStatus">
                <div className="streak">
                    {/*Data Will be fetched from user object*/}
                    Current Streak ⚡ : 2 {/*Data Will be fetched from user object*/}
                </div>
                <div className="hoursWatched">
                    Hours Studied 🏫: 10 {/*Data Will be fetched from user object*/}
                </div>
                <div className="completed">
                    Skill Acquired 💪: 2 {/*Data Will be fetched from user object*/}
                </div>
            </div>
        </div>
    )
}
export default LinkButton