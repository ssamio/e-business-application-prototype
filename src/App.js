import React from "react";
import "@ionic/react/css/core.css";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MenuFab from "./MenuFab";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <Header />
      <MenuFab />
      <IonReactRouter basename="/e-business-application-prototype/">
        <IonRouterOutlet>
          <Route path="/e-business-application-prototype/" exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
      <Footer />
    </IonApp>
  );
};

export default App;
