import React, { useState } from "react";
import './Navbar.css';
import navbar_logo from '../../assets/navbar_logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="background_navbar">
            <div className="navbar">
                <img src={navbar_logo} alt="Navbar Logo" className="navbar_logo"/>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className={`clickable ${menuOpen ? "show" : ""}`}>
                    <p className="router"
                       onClick={() => {
                           document.getElementById("home_id")?.scrollIntoView({behavior: "smooth"});
                           setMenuOpen(false);
                       }}>
                        Home
                    </p>
                    <p className="router"
                       onClick={() => {
                           document.getElementById("about_us_id")?.scrollIntoView({behavior: "smooth"});
                           setMenuOpen(false);
                       }}>
                        About
                    </p>
                    <p className="router"
                       onClick={() => setMenuOpen(false)}>
                        Events
                    </p>
                    <p className="router"
                       onClick={() => setMenuOpen(false)}>
                        Contact
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
