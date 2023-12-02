import React from "react";
import { IonToolbar, IonImg, IonHeader } from "@ionic/react";
import logo from "./assets/logo.jpeg";

const Header = () => {
  return (
    <IonHeader class="ion-no-border">
      <IonToolbar style={{ width: "100%" }}>
        <div className="logo-container">
          <IonImg className="toolbar-logo" src={logo} />
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
