import React from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar.jsx";
import back_logo from '../../assets/back_home.jpg'
const Home = () => {
    return (
        <>
            <div className="background" style={{backgroundImage: `url(${back_logo})`}}>
                <Navbar/>
                <div className="left_content">
                    <h1 className="head">Welcome To Vidyutrenz 2024</h1>
                    <p className="down">Blending the Boundaries of Utopia and Dystopia</p>
                    <button className="explore">Register Now</button>
                </div>
            </div>
        </>
    )
}

export default Home;