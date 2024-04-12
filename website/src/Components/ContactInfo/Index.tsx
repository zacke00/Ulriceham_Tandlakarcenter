import React from "react";
import "./ContactInfo.css"
const ContactInfo: React.FC = () => {




    return (
        <div id="CI-Main-Container">
            <div id="CI-Inner-Container">
                <div id="CI-Secound-Container">
                    <h1 id="CI-Title">Tandanlaget</h1>
                </div>
                <div id="CI-Third-Container">
                    <h2>Telefon</h2>
                    <p>070-123 45 67</p>
                </div>
                <div id="CI-Fourth-Container">
                    <h2>Email</h2>
                    <p>Test@Test.se</p>
                </div>

            </div>
        </div>
    );
}

export default ContactInfo;