import React from 'react';
import './Events.css';
import {useNavigate} from "react-router-dom";

const Events = () => {

    const navigate = useNavigate();

    const handleTechClick = () => {
        navigate('/tech_head');
    }

    return (
        <>
            <div className="background_event">
                <h1 className="tech" onClick={handleTechClick}>Tech</h1>
                <h1 className="nontech">NonTech</h1>
                <h1 className="wordshop">Workshop</h1>
            </div>
        </>
    );
};

export default Events;