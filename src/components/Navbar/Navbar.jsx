import React from "react";
import './Navbar.css';
import navbar_logo from '../../assets/navbar_logo.png';

const Navbar = () => {
    return (
        <>
            <div className="background_top">
                <div className="navbar">
                    <div>
                        <img src={navbar_logo}
                             alt="Nabar_Logo"
                             className="navbar_logo"
                        />
                    </div>
                    <div className="container">
                        <h1>Home</h1>
                        <h1>About us</h1>
                        <h1>Events</h1>
                        <h1>Contact us</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;