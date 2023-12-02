import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  menuOutline,
  helpOutline,
  personOutline,
  ticketOutline,
} from "ionicons/icons";

const MenuFab = () => {
  const [accountModal, setAccountModal] = useState(false);
  const [ticketModal, setTicketModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false);

  const openAccount = () => {
    setAccountModal(true);
  };

  const closeAccount = () => {
    setAccountModal(false);
  };

  const openTicket = () => {
    setTicketModal(true);
  };

  const closeTicket = () => {
    setTicketModal(false);
  };

  const openHelp = () => {
    setHelpModal(true);
  };

  const closeHelp = () => {
    setHelpModal(false);
  };

  return (
    <>
      <IonFab slot="fixed" size="large" vertical="bottom" horizontal="end">
        <IonFabButton className="red-button">
          <IonIcon icon={menuOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton onClick={openAccount}>
            <IonIcon icon={personOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={openTicket}>
            <IonIcon icon={ticketOutline}></IonIcon>
          </IonFabButton>
          <IonFabButton onClick={openHelp}>
            <IonIcon icon={helpOutline}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <IonModal isOpen={accountModal} onDidDismiss={closeAccount}>
        <IonToolbar>
          <IonButton slot="end" className="red-button" onClick={closeAccount}>
            Close
          </IonButton>
          <IonTitle className="red-title" slot="start">
            Account settings
          </IonTitle>
        </IonToolbar>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonText className="red-title">
                <p>
                  Account settings go here! Payment options, contact information
                  and the like.
                </p>
              </IonText>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
      <IonModal isOpen={ticketModal} onDidDismiss={closeTicket}>
        <IonToolbar>
          <IonButton slot="end" className="red-button" onClick={closeTicket}>
            Close
          </IonButton>
          <IonTitle className="red-title" slot="start">
            Tickets
          </IonTitle>
        </IonToolbar>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonText className="red-title">
                <p>Public transportation tickets can be shown from here!</p>
              </IonText>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
      <IonModal isOpen={helpModal} onDidDismiss={closeHelp}>
        <IonToolbar>
          <IonButton slot="end" className="red-button" onClick={closeHelp}>
            Close
          </IonButton>
          <IonTitle className="red-title" slot="start">
            Help and support
          </IonTitle>
        </IonToolbar>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonText className="red-title">
                <p>
                  Help is available! All support and FAQ related stuff would be
                  found here.
                </p>
              </IonText>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
    </>
  );
};

export default MenuFab;
