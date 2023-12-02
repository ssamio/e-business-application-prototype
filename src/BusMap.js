import { IonInput, IonToolbar, IonButton, IonIcon } from "@ionic/react";
import { Map } from "pigeon-maps";
import React from "react";
import { arrowForward } from "ionicons/icons";

const BusMap = () => {
  const position = [63.096, 21.615];

  return (
    <>
      <IonToolbar>
        <IonInput
          slot="start"
          className="red-accent"
          placeholder="Where would you like to go?"
        ></IonInput>
        <IonButton className="red-button" shape="round" size="small" slot="end">
          <IonIcon icon={arrowForward} slot="icon-only" />
        </IonButton>
      </IonToolbar>
      <Map defaultCenter={position} defaultZoom={13}></Map>
    </>
  );
};

export default BusMap;
