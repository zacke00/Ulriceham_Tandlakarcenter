import React from "react";


export const HomePage = () => {

    return (
    <div style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
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
    <h1 style={{ zIndex: '1', position: 'relative', textAlign: 'center', top: '20%' }}>Home</h1>
  </div>
    )

}
