import MiddleSection from "../MiddleSection/Index"
import "./Mainbody.css"


export const MainBody = () => {
    return (

      <div id="Main-Inner-Container" style={{ position: 'relative', height: '70vh', overflow: 'hidden', paddingTop: 100}}>
      <video 
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover', // This will cover the whole screen while maintaining aspect ratio
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centers the video
        zIndex: '-2', // Ensure the video stays in the background
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
        <div id="Main-Title">
          <h1>Tandanlaget</h1>
        </div>

          <MiddleSection/>
    </div>
    )
}