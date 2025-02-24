import React from "react";
import "./ContactInfo.css";
import FaceImage from "../../../Images/Tandanlaget-face.png";

const ContactInfo: React.FC = () => {
  return (
    <div id="CI-Main-Container">
      <div id="CI-Inner-Container">
        <div id="CI-Secound-Container">
          <h1 id="CI-Title">Tandanlaget</h1>
        </div>
        <div id="CI-Image-Container">
          <div id="CI-Image"></div>
        </div>
        <div id="CI-Third-Container">
          <h2 id="CI-Sub-Title">Telefon</h2>
          <p id="CI-Sub-P">0321-132 50</p>
        </div>
        <div id="CI-Fourth-Container">
          <h2 id="CI-Sub-Title">Email</h2>
          <address id="CI-Sub-P">
            <a href="mailto:Tandanlaget@gmail.com">Tandanlaget@gmail.com</a>
          </address>
        </div>
        <div id="CI-Fifth-Container">
          <h2 id="CI-Sub-Title">Adress</h2>
          <p id="CI-Sub-P">Jönköpingsvägen 37</p>
          <p id="CI-Sub-P">523 36 Ulricehamn</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;