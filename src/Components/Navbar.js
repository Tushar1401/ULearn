import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="nav-left">

                <div className="logo-container">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div className="logo">
                            <span>U</span>
                            <span>Learn</span>
                        </div>
                    </Link>
                </div>

                <div className="category-container">
                    <div className="category">
                        <AppsIcon />
                        <p>Categories</p>
                    </div>
                </div>
            </div>

            <div className="nav-right">
                <div className="search">
                    <SearchIcon/>
                </div>

                <div className="login-container">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <p className="sign-in">Sign in</p>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <p className="sign-up">Sign Up</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar
