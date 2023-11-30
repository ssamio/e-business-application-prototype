import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  menuOutline,
  helpOutline,
  personOutline,
  ticketOutline,
  logOutOutline,
} from "ionicons/icons";

const MenuFab = () => {
  return (
    <IonFab slot="fixed" size="large" vertical="bottom" horizontal="end">
      <IonFabButton>
        <IonIcon icon={menuOutline}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon color="primary" icon={personOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon color="primary" icon={ticketOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon color="primary" icon={helpOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon color="danger" icon={logOutOutline}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};

export default MenuFab;
