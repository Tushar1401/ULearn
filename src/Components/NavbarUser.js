import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'
import '../Components/NavbarUser.css'
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
                    <SearchIcon />
                </div>

                {/* {console.log(handleNav)} */}
                {/* {console.log("NAV",flag)} */}

                <div className="user-container">
                    <p className="user-greet">Hello User</p>
                    <Link to='/user' style={{ textDecoration: 'none' }}>
                        <div className="user-profile">
                            <AccountCircleIcon />
                            <p className="profile-text">See Profile</p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar
