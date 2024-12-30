import React, { useEffect, useState } from 'react';
import './TechEvents.css';
import about_img_2 from '../../assets/about_img_2.png';
import back_logo from "../../assets/tech_head_back.png";
import college_logo from "../../assets/cit_logo.png";

const TechEvents = () => {
    const [navActive, setNavActive] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleMenuToggle = (e) => {
            e.stopPropagation();
            setNavActive(!navActive);
        };

        const handleDocumentClick = (e) => {
            if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
                setNavActive(false);
            }
        };

        const handleScroll = () => {
            const navbar = document.querySelector('.navbar_in1');
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            setLastScroll(currentScroll);
        };

        const observeElements = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });

            document.querySelectorAll('.event-card').forEach((card) => {
                observer.observe(card);
            });
        };

        document.querySelector('.menu-toggle').addEventListener('click', handleMenuToggle);
        document.addEventListener('click', handleDocumentClick);
        window.addEventListener('scroll', handleScroll);

        observeElements();

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll, navActive]);

    return (
        <div className="body" style={{ backgroundImage: `url(${back_logo})` }}>
            <nav className="navbar_in1">
                <div className="nav-content">
                    <div className="logo"><img src={college_logo} alt="logo" /></div>
                    <div className="menu-toggle">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className={`nav-links ${navActive ? 'active' : ''}`}>
                        <a href="#">Home</a>
                        <a href="#">Events</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </nav>

            <div className="events-container">
                {Array(6).fill(0).map((_, index) => (
                    <div className="event-card" key={index}>
                        <img className="event-image" src={about_img_2} alt={`Event ${index + 1}`} />
                        <div className="basic-details">
                            <h2>Event {index + 1}</h2>
                            <p>Basic description for event {index + 1}.</p>
                        </div>
                        <div className="further-details">
                            <p>Additional details about event {index + 1}.</p>
                            <a href="#">
                                <button>Learn More</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechEvents;
