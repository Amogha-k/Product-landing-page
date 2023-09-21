import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import {  FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
        <a href="https://github.com/Amogha-k" ><BsGithub /></a>
  <a href="https://www.linkedin/in/amogha-k-890079223" ><SiLinkedin /></a>
  <a href="https://youtube.com/@amogh8237?si=OOQbL7Ok2a2Eeci8" ><BsYoutube /></a>
  <a href="https://instagram.com/__amogh__07_?igshid=OGQ5ZDc2ODk2ZA==" ><FaInstagram /></a>

        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>8088120220</span>
          <span>google@gmail.com</span>
          <span>help@gmail.com</span>
          <span>contact@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
