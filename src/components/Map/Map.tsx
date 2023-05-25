import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.863528919551833,
  lng: -98.94085482921642
};


const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAUBJAET71aY2tTQ6V7wSG5ukblwWKMQJ0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;