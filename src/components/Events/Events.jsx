import React from 'react';
import './Events.css';
import {useNavigate} from "react-router-dom";
import events_back from '../../assets/event_back.png';
import tech_logo from '../../assets/tech_logo.png';
import nontech_logo from '../../assets/nontech_logo.jpg';
import workshop_logo from '../../assets/workshop_logo.jpg';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Events = () => {

    const navigate = useNavigate();

    const handleTechClick = () => {
        navigate('/tech_head');
    }

    const handleNonTechClick = () => {
        navigate('/nontech_head');
    }

    const handleWorshopClick = () => {
        navigate('/workshop_head');
    }

    return (
        <>
            <div className="back" style={{backgroundImage: `url(${events_back})`}}>
                <Navbar/>
                <div className="events">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front" style={{backgroundImage: `url(${tech_logo})`}}>
                                <h2>Technical</h2>
                                <p>Register for our Technical Events and Win Exciting Prizes</p>
                            </div>
                            <div className="flip-card-back">
                                <h2>Technical Events</h2>
                                <p>Find out more about our technical events and competitions.</p>
                                <a href="#"
                                   className="register-button"
                                   onClick={handleTechClick}
                                >View Events</a>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front" style={{backgroundImage: `url(${nontech_logo})`}}>
                                <h2>Non-Technical</h2>
                                <p>Register for our Non-Technical Events and Win Exciting Prizes</p>
                            </div>
                            <div className="flip-card-back">
                                <h2>Non-Technical Events</h2>
                                <p>Discover our range of non-technical events and activities.</p>
                                <a href="#"
                                   className="register-button"
                                   onClick={handleNonTechClick}
                                >View Events
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front" style={{backgroundImage: `url(${workshop_logo})`}}>
                                <h2>Workshop</h2>
                                <p>Register for our Workshop Events and Win Exciting Prizes</p>
                            </div>
                            <div className="flip-card-back">
                                <h2>Workshop Events</h2>
                                <p>Explore various workshops to enhance your skills.</p>
                                <a href="#"
                                   className="register-button"
                                   onClick={handleWorshopClick}
                                >View Events
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Events;