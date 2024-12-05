import React, { useState } from 'react';
import './Information.css'; // Import your CSS file for styling


export const Information: React.FC = () => {
    const [informationSet, setInformationSet] = useState(0);



    
    return (
        <div id='Information-Main-Container'>
            <div id='Information-Section'>
                <ul id='Information-Button-Section'>
                <span id="line"></span>

                    <li id={informationSet === 0 ? "Information-Item-Active" : "Information-Item"} onClick={() => setInformationSet(0)}>
                        <div id="Gray-Circle-Outline">
                            <div id={informationSet === 0 ? "Information-Icon-Active" : "Information-Icon-Item"}></div>
                        </div>
                        <h3>Info 1</h3>
                    </li>

                    <li id={informationSet === 1 ? "Information-Item-Active" : "Information-Item"} onClick={() => setInformationSet(1)}>
                        <div id="Gray-Circle-Outline">
                            <div id={informationSet === 1 ? "Information-Icon-Active" : "Information-Icon-Item"}></div>
                        </div>
                        <h3>Info 2</h3>
                    </li>

                    <li id={informationSet === 2 ? "Information-Item-Active" : "Information-Item"} onClick={() => setInformationSet(2)}>
                        <div id="Gray-Circle-Outline">
                            <div id={informationSet === 2 ? "Information-Icon-Active" : "Information-Icon-Item"}></div>
                        </div>
                        <h3>Info 3</h3>
                    </li>
                </ul>
                <div id='Information-Information-Section'>
                    <div id={informationSet === 0 ? "Information-Information-Active" : "Information-Information"}>
                        <h3>Info 1</h3>
                        <p>Information 1</p>
                    </div>
                    <div id={informationSet === 1 ? "Information-Information-Active" : "Information-Information"}>
                        <h3>Info 2</h3>
                        <p>Information 2</p>
                    </div>
                    <div id={informationSet === 2 ? "Information-Information-Active" : "Information-Information"}>
                        <h3>Info 3</h3>
                        <p>Information 3</p>
                    </div>
                </div>

            </div>
        </div>
    )
}