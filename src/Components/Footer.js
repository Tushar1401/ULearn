import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="footer-left-top">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                <span>U</span>
                                <span>Learn</span>
                            </div>
                        </Link>
                    </div>
                    <div className="footer-left-bottom">
                        <div className="copyright">
                            © 2021 ULearn  Pvt. Ltd.
                        </div>
                    </div>
                </div>
                <div className="footer-mid">
                    <div className="footer-mid-left">
                        <Link to='/' style={{ textDecoration: 'none' }}><p className="footer-link mb-5">About Us</p></Link>
                        <Link to='/' style={{ textDecoration: 'none' }}><p className="footer-link mb-5">Contact</p></Link>
                        <Link to='/' style={{ textDecoration: 'none' }}><p className="footer-link mb-5">Terms & Conditions</p></Link>
                    </div>
                    <div className="footer-mid-mid">
                        <div className="footer-socials-wrapper">
                            <div className="social-link-wrapper mb-5">
                                <FacebookIcon style={{ height: '20px' }} />
                                <a href="" className="footer-link">Facebook</a>
                            </div>
                            <div className="social-link-wrapper mb-5">
                                <TwitterIcon style={{ height: '20px' }} />
                                <a href="" className="footer-link">Twitter</a>
                            </div>
                            <div className="social-link-wrapper mb-5">
                                <LinkedInIcon style={{ height: '20px' }} />
                                <a href="" className="footer-link">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-mid-right">
                        <div className="form-container">
                            <form action="#">
                                <p className="form-heading">Subscribe to our Newsletter</p>
                                <div className="form-input">
                                    <input type="text" id="footer-input" placeholder="Type your email ..." />
                                    <button>OK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <span>ABC Block, XYZ Area, </span>
                    <span>New Delhi - XX, India </span>
                    <span>+91 123456789 </span>
                    <span>ulearn@mail.com </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
