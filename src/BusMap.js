import { IonCard, IonInput, IonCardContent, IonCardHeader } from "@ionic/react";
import { Map } from "pigeon-maps";
import React from "react";

const BusMap = ({ height }) => {
  const position = [63.096, 21.615];

  return (
    <IonCard>
      <IonCardHeader>
        <IonInput placeholder="Where would you like to go?"></IonInput>
      </IonCardHeader>
      <IonCardContent>
        <Map
          defaultCenter={position}
          height={height * 0.6}
          defaultZoom={13}
        ></Map>
      </IonCardContent>
    </IonCard>
  );
};

export default BusMap;
