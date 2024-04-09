import React, { useState } from "react";
import "./Home.css"
import { MainBody } from "../../Components/Mainbody/Index";
import MiddleSection from "../../Components/MiddleSection/Index";



export const HomePage = () => {

    return (

      <div style={{opacity: 0.9999, zIndex: -2}}>  {/* This is a hack to fix the video not showing up */}

      <MainBody/>
        <h2>Information</h2>
      </div>


    )

}

