import { IonPage, IonTitle } from "@ionic/react";
import React from "react";
import Teclado from "../components/Teclado";
import Home from "./Home";

const RealHome: React.FC = () => {
    return(
        <IonPage>
            <IonTitle>Teclado</IonTitle>
            <Teclado />
        </IonPage>
    ); 
}