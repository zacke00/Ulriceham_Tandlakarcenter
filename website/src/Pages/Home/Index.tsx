import React, { useState } from "react";
import "./Home.css"
import { MainBody } from "../../Components/Home/Mainbody/Index";
import MiddleSection from "../../Components/Home/MiddleSection/Index";
import { Information } from "../../Components/Home/Information/Index";



export const HomePage = () => {

    return (
      <div>

      <div style={{opacity: 0.999, zIndex: -3}}>  {/* This is a hack to fix the mainBody items not working correctly */}

      <MainBody/>
      <Information/>
      </div>
      </div>


    )

}

