import React from "react";
import "@ionic/react/css/core.css";
import { IonApp } from "@ionic/react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MenuFab from "./MenuFab";
import MainPage from "./MainPage";
import { setupIonicReact } from "@ionic/react";
import "leaflet/dist/leaflet.css";

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <Header />
      <MenuFab />
      <MainPage />
      <Footer />
    </IonApp>
  );
};

export default App;
