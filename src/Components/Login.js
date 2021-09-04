import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sawo from 'sawo'
import App from '../App'
import HeroSection from './HeroSection'
import './Login.css'
import handleNav from '../App.js';

const Login = ({flag}, {onSuccess}) => {

    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: '3bc4dd58-4fce-46fe-a08f-c93245434df7',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
                // console.log('done');
                flag = true;
                // console.log(flag);
                onSuccess;
                window.location.assign("http://localhost:3000/");
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (

        <div className="login-section">
            <div className="navbar-container nav-extra">
                <div className="nav-left">

                    <div className="logo-container">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                <span>U</span>
                                <span>Learn</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="login-wrapper">
                <div className="login-box">
                    <div className="login-heading">
                        <p>Login/Sign Up</p>
                    </div>
                    <div id="sawo-container"></div>
                </div>
            </div>
        </div>
    )
}

export default Login
