import React from "react";
import ProfilePic from "../Assets/profile-pic.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          REVIEWS FOR OUR PRODUCT
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The Google Pixel 6a impresses with a sleek design, vibrant OLED display, and a capable camera.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>AMOGH K</h2>
      </div>
    </div>
  );
};

export default Testimonial;
