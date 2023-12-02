import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  menuOutline,
  helpOutline,
  personOutline,
  ticketOutline,
} from "ionicons/icons";

const MenuFab = () => {
  return (
    <IonFab slot="fixed" size="large" vertical="bottom" horizontal="end">
      <IonFabButton className="red-button">
        <IonIcon icon={menuOutline}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon icon={personOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={ticketOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={helpOutline}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default MenuFab;
