import React from "react";
import { IonFooter, IonLabel, IonToolbar } from "@ionic/react";

const Footer = () => {
  return (
    <IonFooter class="ion-no-border">
      <IonToolbar style={{ width: "100%" }}>
        <IonLabel slot="start">Testing purposes only.</IonLabel>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
