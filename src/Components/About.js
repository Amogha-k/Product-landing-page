import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Product Description</p>
        <h1 className="primary-heading">
        A camera that lets you express yourself.
        </h1>
        <p className="primary-text">
        Make faces look sharper with Face Unblur, take beautifully accurate photos of different skin tones with Real Tone and remove unwanted objects with Magic Eraser in Google Photos.  
        </p>
        <p className="primary-text">
        Powered by the Google Tensor processor built especially for Pixel enables you to experience seamless juggling and multitasking.

        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
      </div>
    </div>
    </div>
  );
};
export default About;
