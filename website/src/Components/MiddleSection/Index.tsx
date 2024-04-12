import { useState } from "react";
import "./MiddleSection.css"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const MiddleSection: React.FC  = () => {
    const [hoveredItem, setHoveredItem] = useState(null as string | null);

    return (
        <div id="MS-Section-Container">

            <Link to="/contact" id="MS-First-Item">
                <div id="MS-Div-Text"
                onMouseEnter={() => setHoveredItem('first')}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ opacity: hoveredItem && hoveredItem !== 'first' ? 0.6 : 0.9 }}
              >
                <h3 id="MS-Header">Kontakt</h3>
                <p id="Text-P"> Vi här på Tandanlaget tar vara på våra gjäster och jobbar hårt med att ge den hjälp som du förtjänar.
                  Med det sagt så är vi alltid tillgängliga för att svara på dina frågor och funderingar.
                  Vi håller våran bokning fullt på telefon och mail.
                </p>
              </div>
            </Link>
            <Link to="/about-us" id="MS-Second-Item" >
            <div id="MS-Div-Text"
              onMouseEnter={() => setHoveredItem('second')}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ opacity: hoveredItem && hoveredItem !== 'second' ? 0.6 : 0.9 }}
            >
              
              <h3>om oss</h3>
              <p id="Text-P"> Välkommen till Tandanlaget i Ulricehamn. <br/>
Oavsett om du har värk i en tand, pressar tänder eller vill ha hjälp att skydda dina tänder under hela livet, finns vi här för dig. 
 </p>

            </div>
            </Link>

        
      </div>
    )
}

export default MiddleSection;