import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  menuOutline,
  helpOutline,
  personOutline,
  ticketOutline,
  logOutOutline,
  homeOutline,
} from "ionicons/icons";

const MenuFab = () => {
  return (
    <IonFab slot="fixed" size="large" vertical="bottom" horizontal="end">
      <IonFabButton>
        <IonIcon icon={menuOutline}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton routerLink="/home">
          <IonIcon icon={homeOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={personOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={ticketOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={helpOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logOutOutline}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default MenuFab;
