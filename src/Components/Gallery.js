import React, { useState } from 'react';
import '../App.css'; // Import your custom CSS

const ProductSlider = () => {
  const images = [
    // 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/j/o/-original-imaggbrbrnyyp5db.jpeg?q=70',
    // 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/b/t/-original-imaggbrbkxzra38y.jpeg?q=70',
    'https://lh3.googleusercontent.com/6tEVI4ooaK4HbeTG5e6tAN_iQeKeEUcpAFln9Wl5VQ17BF06-h6lY4yAAP-4hNzPbSiX25BTgI8hB77BCJKbPSMTYUEHpOqOxRo=rw-e365-w1440',
    'https://lh3.googleusercontent.com/Ek3s9evaNWHJ6biNcFrvSqsZzWe2WNNiENdepn2vVn4r3NJ9XMQM1ZWjAD1CL-oPqBaOJzb3dIYFnBIgB_OoUv-1Po7WLHw4H1sh=rw-e365-w1440',
    'https://lh3.googleusercontent.com/F7SDiG6jwZzcT2NK1WVtN891avPwNZz_AP_V4mStdOY8jrUe2k5ecWOWedzbiQIyQeoxzmO12rPG7QVHPSHUQY5Y0LvZ27W7ZSs=rw-e365-w1440'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-slider">
      <div className="slider-image" >
        <img loading='lazy' src={images[currentIndex]} alt=""  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',alignContent:'center',alignItems:'center' }}/>
      </div>
      <button className="slider-button prev" onClick={prevSlide}>
        <div className="arrow-container">
          <span className="arrow-icon">&#10094;</span>
        </div>
      </button>

      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductSlider;
