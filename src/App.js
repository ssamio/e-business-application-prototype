import React from "react";
import "@ionic/react/css/core.css";
import { Route, Redirect } from "react-router-dom";
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
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" exact={true} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
      <Footer />
    </IonApp>
  );
};

export default App;
