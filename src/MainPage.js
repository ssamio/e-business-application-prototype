import React, { useState } from "react";
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import ScooterMap from "./ScooterMap";
import BusMap from "./BusMap";

const MainPage = () => {
  const [selectedSegment, setSelectedSegment] = useState("scooter");

  const handleSegmentChange = (segmentValue) => {
    setSelectedSegment(segmentValue);
  };

  return (
    <IonContent>
      <IonToolbar>
        <IonSegment
          value={selectedSegment}
          onIonChange={(e) => handleSegmentChange(e.detail.value)}
        >
          <IonSegmentButton value="scooter">
            <IonLabel>Scooters</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="public">
            <IonLabel>Public transport</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>

      {selectedSegment === "scooter" && <ScooterMap />}
      {selectedSegment === "public" && <BusMap />}
    </IonContent>
  );
};

export default MainPage;
