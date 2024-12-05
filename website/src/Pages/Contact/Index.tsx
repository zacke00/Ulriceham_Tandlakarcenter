import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import ContactInfo from "../../Components/ContactInfo/Index";
import "./Contact.css"

export const ContactPage = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          if (!mapLoaded) {
            window.location.reload();
          }
        }, 2000); // Wait for 3 seconds before refreshing if the map is not loaded
    
        return () => clearTimeout(timeout); // Clear timeout on component unmount
      }, [mapLoaded]);
    const mapContainerStyle = {
        width: '100%',
        height: '80vh',
      };
    
      const center = {
        lat: 57.79921346590481,
        lng: 13.425029701850889,
      };
      const markerPosition = {
        lat: 57.79921346590481,
        lng: 13.425029701850889,
    }
    const handleMapLoad = () => {
        setMapLoaded(true); // Set mapLoaded state to true when map is loaded
    };
    console.log(mapLoaded);
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