import React, { useState } from 'react';
import './AboutUs.css';
import about_img_1 from '../../assets/about_img_1.jpeg';
import about_img_2 from '../../assets/about_img_2.jpeg';
import about_img_3 from '../../assets/about_img_3.jpeg';

const AboutUsExample = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [about_img_1, about_img_2, about_img_3];

    const handleRadioChange = (index) => {
        setCurrentImage(index);
    };

    return (
        <>
            <div className="about_us_section" id="about_us_id">
                <div className="about_us" id="about_us_id">
                    <p className="about_head">About us</p>
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
                        project benefits from our expertise and dedication.
                    </p>
                </div>
                <div className="about_slider">
                    <img src={images[currentImage]}
                         alt={`About IMG ${currentImage + 1}`}
                         className="about_image"
                    />
                    <div className="radio_buttons">
                        {images.map((_, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="about_image_radio"
                                    checked={currentImage === index}
                                    onChange={() => handleRadioChange(index)}
                                />
                                <span className="radio_custom"></span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsExample;
