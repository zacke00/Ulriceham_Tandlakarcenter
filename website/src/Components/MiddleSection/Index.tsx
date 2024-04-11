import { useState } from "react";
import "./MiddleSection.css"

const MiddleSection: React.FC  = () => {
    const [hoveredItem, setHoveredItem] = useState(null as string | null);

    return (
        <div id="MS-Section-Container">
        <div id="MS-First-Item"
          onMouseEnter={() => setHoveredItem('first')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ opacity: hoveredItem && hoveredItem !== 'first' ? 0.6 : 0.9 }}
        >
          <h3 id="MS-Header">Kontakt</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id similique fuga nostrum </p>
        </div>
        <div id="MS-Second-Item" 
          onMouseEnter={() => setHoveredItem('second')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ opacity: hoveredItem && hoveredItem !== 'second' ? 0.6 : 0.9 }}
        >
          <h3>om oss</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id similique fuga nostrum </p>

        </div>

        
      </div>
    )
}

export default MiddleSection;