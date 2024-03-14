import React, { useState } from "react";
import "./Home.css"

export const HomePage = () => {
  const [hoveredItem, setHoveredItem] = useState(null as string | null);

    return (
    <div id="Home-Container">

      <div id="Home-Inner-Container" style={{ position: 'relative', height: '70vh', overflow: 'hidden', paddingTop: 100}}>
      <video 
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover', // This will cover the whole screen while maintaining aspect ratio
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centers the video
        zIndex: '-1', // Ensure the video stays in the background
        opacity: '0.5'
      }}
      autoPlay
      loop
      muted
      playsInline // Helps with autoplay on some browsers/mobile devices
      >
    <source src="/Videos/Dental-Care.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <div id="Home-Title">
          <h1>Home</h1>
        </div>
      </div>

      <div id="Home-Main-Section-Container">
      <div id="Home-Section-Container">
        <div id="Home-First-Item"
          onMouseEnter={() => setHoveredItem('first')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ opacity: hoveredItem && hoveredItem !== 'first' ? 0.5 : 1 }}
        >
          <h3>First Container</h3>
        </div>
        <div id="Home-Second-Item" 
          onMouseEnter={() => setHoveredItem('second')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ opacity: hoveredItem && hoveredItem !== 'second' ? 0.5 : 1 }}
        >
          <h3>Second Container</h3>
        </div>
        <div id="Home-Third-Item"
          onMouseEnter={() => setHoveredItem('third')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ opacity: hoveredItem && hoveredItem !== 'third' ? 0.5 : 1}}>
          <h3>Third Container</h3>
        </div>

        
      </div>
      </div>
      <div id="Home-Information-Container">
        <h2>Information</h2>
        <div style={{marginBottom: "300rem"}}></div>
      </div>
    </div>
    )

}

