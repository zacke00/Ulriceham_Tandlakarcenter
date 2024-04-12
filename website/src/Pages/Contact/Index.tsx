import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import MiddleSection from "../../Components/MiddleSection/Index";
import ContactInfo from "../../Components/ContactInfo/Index";
import "./Contact.css"

export const ContactPage = () => {
    const [mapLoaded, setMapLoaded] = useState(false);
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

    return (
        <div id="CP_Main_Container">

            <div id="CP_Map_Container">
                <LoadScript googleMapsApiKey="AIzaSyA6RMA3QdhYD9YNNAkhjQ22Dby59xuOnio" onLoad={handleMapLoad}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={16}
                        
                        >
                        <Marker position={markerPosition}/>
                    </GoogleMap>
                </LoadScript>
                </div>
                <div id="Inside_Map_Info">
                    <ContactInfo/>
                </div>
        </div>
    )
}