import React, { useState, useEffect } from "react";
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import ScooterMap from "./ScooterMap";
import BusMap from "./BusMap";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const MainPage = () => {
  const [selectedSegment, setSelectedSegment] = useState("scooter");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const handleSegmentChange = (segmentValue) => {
    setSelectedSegment(segmentValue);
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {selectedSegment === "scooter" && (
        <ScooterMap height={windowDimensions.height} />
      )}
      {selectedSegment === "public" && (
        <BusMap height={windowDimensions.height} />
      )}
    </IonContent>
  );
};

export default MainPage;
