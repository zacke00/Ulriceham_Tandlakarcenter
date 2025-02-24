import { useState } from "react";
import "./MiddleSection.css"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const MiddleSection: React.FC  = () => {

    return (
        <div id="MS-Section-Container">

            <Link to="/contact" id="MS-First-Item">

              <div id="MS-Div-Text">
                <h3 id="MS-Sub-Title">Kontakt</h3>
                <p id="MS-Sub-P"> Vi här på Tandanlaget tar hand om våra gäster och arbetar hårt för att ge dig den hjälp du förtjänar.
Med det sagt är vi alltid tillgängliga för att svara på dina frågor och funderingar.
Vi håller vår bokning tillgänglig både via telefon och mejl.
                </p>
              </div>
            </Link>
            <Link to="/about-us" id="MS-Second-Item" >

            <div id="MS-Div-Text">
              <h3 id="MS-Sub-Title">Om oss</h3>
              <p id="MS-Sub-P"> Välkommen till Tandanlaget i Ulricehamn! Oavsett om du har tandvärk, pressar tänder eller vill ha hjälp att skydda dina tänder genom hela livet, finns vi här för dig.</p>
            </div>
            </Link>
        
      </div>
    )
}

export default MiddleSection;