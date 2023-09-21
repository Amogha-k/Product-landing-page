import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Any Questions ?</h1>
      <h1 className="primary-heading">Let me help you</h1>
      <div className="contact-form-container">
      <form style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ flex: 1, marginRight: 'auto' }}>
    <input type="text" placeholder="yourmail@gmail.com" />
  </div>
  <button className="secondary-button" style={{ flex: 1, marginLeft: '250px' }}>Submit</button>
</form>




      </div>
    </div>
  );
};

export default Contact;
