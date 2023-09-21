import React from "react";
import google from "../Assets/google-image.png";
import Tensor from "../Assets/Tensor.png";
import Camera from "../Assets/Camera.png";


const Work = () => {
  const workInfoData = [
    {
      image: google,
      title: "Security",
      text: "Security and OS updates Five years of Pixel updates",
    },
    {
      image: Tensor,
      title: "TENSOR",
      text: "Google Tensor makes Pixel 6a super smart, secure, and powerful. It’s the first chip designed by Google just for Pixel.",
    },
    {
      image: Camera,
      title: "CAMERA",
      text: "A camera that lets you express yourself.Pixel’s camera captures any moment beautifully. Personalized info when you need it.",
    },
  ];
  return (
    <div className="work-section-wrapper" >
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">Description</h1>
        <p className="primary-text">
        The Tensor chip can process AI and ML models directly on the phone, providing a better experience for the camera, voice recognition, and other functions. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
