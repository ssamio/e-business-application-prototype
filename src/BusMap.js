import { IonCard, IonInput, IonCardContent, IonCardHeader } from "@ionic/react";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const BusMap = () => {
  const position = [63.096, 21.615];

  return (
    <IonCard>
      <IonCardHeader>
        <IonInput placeholder="Where would you like to go?"></IonInput>
      </IonCardHeader>
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

export default BusMap;
