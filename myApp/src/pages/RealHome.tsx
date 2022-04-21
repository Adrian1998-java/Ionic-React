import { IonPage, IonTitle } from "@ionic/react";
import React from "react";
import Home from "./Home";

const RealHome: React.FC = () => {
    return(
        <IonPage>
            <IonTitle>Teclado</IonTitle>
            <Home />
        </IonPage>
    ); 
}