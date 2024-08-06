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
                           onClick={() => {
                               const element = document.getElementById("home_id");
                               element?.scrollIntoView({
                                   behavior: "smooth",
                               })
                           }}>
                            Home
                        </p>
                        <p className="router"
                           onClick={() => {
                               const element = document.getElementById("about_us_id");
                               element?.scrollIntoView({
                                   behavior: "smooth",
                               })
                           }}
                        >
                            About <span className="us_show">us</span>
                        </p>
                        <p className="router">Events</p>
                        <p className="router">Contact <span className="us_show">us</span></p>
                        <span id="moving"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;