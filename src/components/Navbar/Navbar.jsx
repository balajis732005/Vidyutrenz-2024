import React from "react";
import './Navbar.css';
import navbar_logo from '../../assets/navbar_logo.png';

const Navbar = () => {

    return (
        <>
            <div className="background_navbar">
                <div className="navbar">
                    <img src={navbar_logo}
                         alt="Nabar_Logo"
                         className="navbar_logo"
                    />
                    <div className="clickable">
                        <p className="router"
                           data-text="Home"
                           onClick={() => {
                               const element = document.getElementById("home_id");
                               element?.scrollIntoView({
                                   behavior: "smooth",
                               })
                           }}>
                            Home
                        </p>
                        <p className="router"
                           data-text="About"
                           onClick={() => {
                               const element = document.getElementById("about_us_id");
                               element?.scrollIntoView({
                                   behavior: "smooth",
                               })
                           }}
                        >
                            About
                        </p>
                        <p className="router"
                           data-text="Events">
                            Events
                        </p>
                        <p className="router"
                           data-text="Contact">
                            Contact
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;