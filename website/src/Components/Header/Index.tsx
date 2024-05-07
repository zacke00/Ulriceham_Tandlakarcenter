import React, { SVGProps, useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import {AboutUsPage} from "../../Pages/About-us/Index"
import {ContactPage}  from "../../Pages/Contact/Index"
import {HomePage}  from "../../Pages/Home/Index"

import "./Header.css"

export const Header: React.FC = () => {

    return (
        <div id="Header-Container" >
                <div id="Header-Inner-Container">
                    <div id="Header-Icon"> Tandanlaget</div>
                    <div id="Header-Pages-Container">
                        
                            <Link id="Header-Home-Link" to="/">

                                Hem
                            </Link>

                            <Link id="Header-About-Link" to="/about-us">

                                Om oss
                            </Link>
                       
                            <Link id="Header-Contact-Link" to="/contact">

                                Kontakt
                            </Link>

                        

                    </div>

                </div>

        </div>

    )
}

