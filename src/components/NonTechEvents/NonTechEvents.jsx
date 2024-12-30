import React, { useState } from 'react';
import './NonTechEvents.css';
import college_logo from "../../assets/cit_logo.png";
import about_img_3 from '../../assets/about_img_3.png';
import back_logo from "../../assets/nontech_head_back.png";

const NonTechEvents = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <>
            <div className="body" style={{ backgroundImage: `url(${back_logo})` }}>
                <header className="main_header">
                    <div className="logo">
                        <img src={college_logo} alt="Logo" />
                    </div>
                    <nav>
                        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="hamburger" onClick={toggleNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </header>

                <section className="cards-container">
                    <div className="card">
                        <img src={about_img_3} alt="Event 1" />
                        <div className="card-content">
                            <h3>Event Name 1</h3>
                            <p>Description of Event 1</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={about_img_3} alt="Event 2" />
                        <div className="card-content">
                            <h3>Event Name 2</h3>
                            <p>Description of Event 2</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={about_img_3} alt="Event 3" />
                        <div className="card-content">
                            <h3>Event Name 3</h3>
                            <p>Description of Event 3</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={about_img_3} alt="Event 4" />
                        <div className="card-content">
                            <h3>Event Name 4</h3>
                            <p>Description of Event 4</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={about_img_3} alt="Event 5" />
                        <div className="card-content">
                            <h3>Event Name 5</h3>
                            <p>Description of Event 5</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={about_img_3} alt="Event 6" />
                        <div className="card-content">
                            <h3>Event Name 6</h3>
                            <p>Description of Event 6</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NonTechEvents;