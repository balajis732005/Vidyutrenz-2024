import React from 'react';
import './Events.css';
import events_logo from '../../assets/events_logo.png';
import tech_logo from '../../assets/tech_logo.png';
import non_tech_logo from '../../assets/non_tech_logo.svg';
import workshop_logo from '../../assets/workshop_logo.svg';
import non_tech from '../../assets/non_tech.jpg'
import workshop_img from "../../assets/Workshop_img.jpg"

const Events = () => {
    return (
        <div className="back" style={{ backgroundImage: `url(${events_logo})` }}>
            <div className="events">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{ backgroundImage: `url(${tech_logo})` }}>
                            <h2>Technical</h2>
                            <p>Register for our Technical Events and Win Exciting Prizes</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Technical Events</h2>
                            <p>Find out more about our technical events and competitions.</p>
                            <a href="#" className="register-button">View Events</a>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{ backgroundImage: `url(${non_tech})` }}>
                            <h2>Non-Technical</h2>
                            <p>Register for our Non-Technical Events and Win Exciting Prizes</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Non-Technical Events</h2>
                            <p>Discover our range of non-technical events and activities.</p>
                            <a href="#" className="register-button">View Events</a>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{ backgroundImage: `url(${workshop_img})` }}>
                            <h2>Workshop</h2>
                            <p>Register for our Workshop Events and Win Exciting Prizes</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Workshop Events</h2>
                            <p>Explore various workshops to enhance your skills.</p>
                            <a href="#" className="register-button">View Events</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
