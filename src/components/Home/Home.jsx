import React from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar.jsx";
import back_logo from '../../assets/back_home.jpg';
import header_logo from '../../assets/header_logo.svg';
import Footer from "../Footer/Footer.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";

const Home = () => {
    return (
        <>
            <div className="background" id="home_id"
                 style={{backgroundImage: `url(${back_logo})`}}>
                <Navbar/>
                <div className="header">
                    <div className="left_content">
                        <p className="head">Welcome to Vidyutrenz 2025</p>
                        <p className="down">Blending the Boundaries of Utopia and Dystopia</p>
                        <a className="register_button">
                            Register Now
                        </a>
                    </div>
                    <div className="right_content">
                        <img src={header_logo}
                             alt="Header_Logo"
                             className="header_logo"
                        />
                    </div>
                </div>

                <div className="middle_theme">
                    <p className="theme_name">Blending the boundaries of Utopia and Dystopia</p>
                </div>
                <AboutUs />
            </div>
            <Footer />
        </>
    )
}

export default Home;