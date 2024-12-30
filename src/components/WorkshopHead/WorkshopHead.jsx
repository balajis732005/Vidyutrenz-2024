import React from 'react';
import './WorkshopHead.css';
import back_logo from "../../assets/workshop_head_back.png";
import college_logo from "../../assets/cit_logo.png";
import tech_head_img from "../../assets/tech_head_img.jpg";
import vidyutrenz_logo from "../../assets/vidyutrenz_logo.png";
import Footer from "../Footer/Footer.jsx";
import {useNavigate} from "react-router-dom";

const WorkshopHead = () => {

    const navigate = useNavigate();

    const handleViewEventsClick = () => {
        navigate("/workshop_events");
    }

    return (
        <>
            <div className="body" style={{backgroundImage: `url(${back_logo})`}}>
                <div className="background1">
                    <header>
                        <div className="logo">
                            <img src={college_logo} alt="cit-logo"/>
                        </div>
                        <nav className="desktop">
                            <ul className="list-1">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="mobile">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                 className="main-grid-item-icon" fill="none" stroke="white" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2">
                                <line x1="3" x2="21" y1="12" y2="12"/>
                                <line x1="3" x2="21" y1="6" y2="6"/>
                                <line x1="3" x2="21" y1="18" y2="18"/>
                            </svg>
                        </div>
                        <div>
                            <ul className="list-2">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </header>
                    <main>
                        <section className="section1">
                            <div className="part1">
                                <h3>WORKSHOP EVENTS</h3>
                                <p>Tech events such as CES, SXSW, and TechCrunch Disrupt, showcase the latest
                                    innovations
                                    and trends in technology. These events feature product launches, keynote speeches,
                                    and
                                    networking opportunities, attraching industry leaders, startups, and tech
                                    enthusiasts.
                                    They are vital for staying updated and fostering collabrations within the tech
                                    community.</p>
                                <a className="btn-bg" onClick={handleViewEventsClick}>View Events</a>
                            </div>
                            <div className="part2">
                                <a href="#"><img src={tech_head_img} alt="" className="img-active img-fluid"/></a>
                                <a href="#"><img src={tech_head_img} alt="" className="img-fluid"/></a>
                            </div>
                        </section>
                    </main>
                </div>
                <aside>
                    <img src={vidyutrenz_logo} alt=""/>
                </aside>
            </div>
            <Footer/>
        </>
    );
};

export default WorkshopHead;