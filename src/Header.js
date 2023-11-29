import React from "react";
import { IonToolbar, IonIcon, IonHeader, IonTitle } from "@ionic/react";
import { chevronForward } from "ionicons/icons";

const Header = () => {
  return (
    <IonHeader class="ion-no-border">
      <IonToolbar style={{ width: "100%" }}>
        <IonIcon
          slot="start"
          icon={chevronForward}
          size="large"
          color="primary"
        ></IonIcon>
        <IonTitle>PEOPLE MOVING COMPANY</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
