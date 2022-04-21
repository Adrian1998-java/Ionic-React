import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Teclado from '../components/Teclado';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reino de Pruebas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Teclado />
      </IonContent>
    </IonPage>
  );
};

export default Home;
