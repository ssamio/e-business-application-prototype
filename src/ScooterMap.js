import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import { Map } from "pigeon-maps";

const ScooterMap = ({ height }) => {
  const position = [63.096, 21.615];

  return (
    <IonCard>
      <IonCardContent>
        <Map
          defaultCenter={position}
          height={height * 0.7}
          defaultZoom={13}
        ></Map>
      </IonCardContent>
    </IonCard>
  );
};

export default ScooterMap;
