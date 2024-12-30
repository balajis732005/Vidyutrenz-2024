import React, { useState, useEffect } from "react";
import './WorkshopEvents.css';
import back_logo from "../../assets/workshop_head_back.png";
import college_logo from "../../assets/cit_logo.png";
import about_img_1 from '../../assets/about_img_1.png';

const WorkshopEvents = () => {
    const [navbarTop, setNavbarTop] = useState("0");
    const [hoverboxTop, setHoverboxTop] = useState("-200px");
    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setNavbarTop("-120px");
            } else {
                setNavbarTop("0");
            }
            lastScrollTop = scrollTop;
        };

        const handleClickOutside = (e) => {
            const hoverbox = document.querySelector('.hoverbox');
            const option = document.querySelector('.option');
            if (!hoverbox.contains(e.target) && !option.contains(e.target)) {
                setHoverboxTop("-200px");
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleHoverbox = (e) => {
        e.stopPropagation();
        setHoverboxTop((prevTop) => (prevTop === "0px" ? "-200px" : "0px"));
    };

    return (
        <>
            <div className="body" style={{ backgroundImage: `url(${back_logo})` }}>
                <div className="navbar-container" style={{ top: navbarTop }}>
                    <nav className="navbar_in">
                        <div className="logo"><img src={college_logo} alt="logo" /></div>
                        <div className="nav-links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="option" onClick={toggleHoverbox}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                 className="main-grid-item-icon" fill="none" stroke="white" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2">
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                        </div>
                    </nav>
                </div>
                <div className="event-grid-container">
                    <div className="event-grid">
                        {[1, 2, 3, 4, 5, 6].map((event, index) => (
                            <div className="event-card" key={index}>
                                <img src={about_img_1} alt={`Event ${event}`} />
                                <h3>{`Event ${event}`}</h3>
                                <p>Basic description for event {event}.</p>
                                <p className="re">Remaining description for event {event}</p>
                                <button className={`button${event}`}>Learn More</button>
                                <div className="event-card-overlay">
                                    <p className="rema">Remaining description for event {event}</p>
                                    <button className="button7">Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hoverbox" style={{ top: hoverboxTop }}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </>
    );
};

export default WorkshopEvents;