import React from "react";
import './Home.css';
import Navbar from "../Navbar/Navbar.jsx";
import back_logo from '../../assets/back_home.jpg';
import header_logo from '../../assets/header_logo.svg';
import Footer from "../Footer/Footer.jsx";

const Home = () => {
    return (
        <>
            <div className="background" style={{backgroundImage: `url(${back_logo})`}}>
                <Navbar/>
                <div className="header">
                    <div className="left_content">
                        <p className="head">Welcome To Vidyutrenz 2024</p>
                        <p className="down">Blending the Boundaries of Utopia and Dystopia</p>
                        <button className="register_button">
                            Register Now
                        </button>
                    </div>
                    <div className="right_content">
                        <img src={header_logo}
                             alt="Header_Logo"
                             className="header_logo"
                        />
                    </div>
                </div>

                <div className="about_us">
                    <p className="about_head">About Us</p>
                    <p className="about_content">
                        At Vidyutrenz, we’re at the forefront of electrical engineering and technology,
                        committed to delivering innovative solutions that drive progress and efficiency.
                        Our mission is to revolutionize the industry by providing cutting-edge products
                        and services designed to meet the highest standards of performance and reliability.
                        We offer a diverse range of solutions, including expert engineering services,
                        advanced product development, and comprehensive technology solutions tailored to
                        various sectors. Our vision is to lead the global market with a focus on quality,
                        innovation, and exceptional customer service. Our team of skilled professionals
                        works closely with clients to deliver bespoke solutions that not only meet but
                        exceed expectations. At Vidyutrenz, we prioritize your needs, ensuring every
                        project benefits from our expertise and dedication. Join us as we shape the
                        future of electrical engineering and technology. For more information, please
                        contact us and discover how we can power your success.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;