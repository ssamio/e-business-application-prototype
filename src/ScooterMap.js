import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const ScooterMap = () => {
  const position = [63.096, 21.615];

  return (
    <IonCard>
      <IonCardContent>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: "60vh",
            width: "100%",
            backgroundColor: "whitesmoke",
          }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </IonCardContent>
    </IonCard>
  );
};

export default ScooterMap;
