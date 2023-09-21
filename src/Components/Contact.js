import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Any Questions ?</h1>
      <h1 className="primary-heading">Let me help you</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button type="submit" className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
