import React from 'react';
import './Footer.css';
import back_logo from '../../assets/navbar_logo.png';
import youtube_logo from '../../assets/youtube_icon.svg';
import linkedin_logo from '../../assets/twitter_icon.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <img src={back_logo} alt="Logo" className="logo" />
                </div>
                <div className="footer-section">
                    <h3>Socials</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Events</h3>
                    <ul>
                        <li><a href="#">Tech</a></li>
                        <li><a href="#">Non Tech</a></li>
                        <li><a href="#">Workshops</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Vidyutrenz team</a></li>
                        <li><a href="#">Developer</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-section register-section">
                    <a href="#" className="register-button">Register</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Chennai Institute Of Technology, Kundrathur Chennai.</p>
                <div className="social-icons">
                    <a href="#"><img src={youtube_logo} alt="YouTube" /></a>
                    <a href="#"><img src={linkedin_logo} alt="Twitter" /></a>
                </div>
            </div>
            <div className="footer-legal">
                <p>©2024 Vidyutrenz</p>
                <a href="#">Cookie settings</a>
                <a href="#">Terms and conditions</a>
                <a href="#">Privacy policy</a>
                <a href="#">Modern slavery statement</a>
            </div>
        </footer>
    );
};

export default Footer;
