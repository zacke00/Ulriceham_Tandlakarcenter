import React, { useState } from 'react';
import './Information.css';
import informationData from "../../data/Information.json";

export const Information: React.FC = () => {

    return (
        <div id='Information-Main-Container'>
            <div id='Information-Section'>


                {/* Right Side: Scrolling Content */}
                <div id='Information-Content-Section'>
                    {informationData.info.map((item, index) => (
                        <div key={index} className="Information-Content-Block">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};