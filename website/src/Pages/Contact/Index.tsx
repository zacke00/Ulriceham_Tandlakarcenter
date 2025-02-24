import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import ContactInfo from "../../Components/Contact/ContactInfo/Index";
import "./Contact.css"

export const ContactPage = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [center, setCenter] = useState({
      lat: 57.79921346590481,
      lng: 13.427529701850889,
  });

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial value

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  useEffect(() => {
      if (windowWidth < 768) {
          setCenter({
              lat: 57.80041346590481, // Centered Bottom
              lng: 13.425029701850889, // Centered Bottom
          });
      } else {
          setCenter({
              lat: 57.79921346590481,
              lng: 13.427529701850889,
          });
      }
  }, [windowWidth]);

  const mapContainerStyle = {
      width: "100%",
      height: "80vh",
  };

  const markerPosition = {
      lat: 57.79921346590481,
      lng: 13.425029701850889,
  };

  const handleMapLoad = () => {
      setMapLoaded(true);
  };
    return (
        <div id="CP-Main-Container">

            <div id="CP-Map-Container">
                <LoadScript 
                googleMapsApiKey="AIzaSyACHPdUGavmQ_arXnfoHuqqQoeLALeyQ6o" 
                onLoad={handleMapLoad}
                >
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={16}

                        >
                        <Marker position={markerPosition}/>
                    </GoogleMap>
                </LoadScript>
                </div>
                <div id="Inside-Map-Info">
                    <ContactInfo/>
                </div>
        </div>
    )
}
