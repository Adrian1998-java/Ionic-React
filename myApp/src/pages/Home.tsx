import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Teclado from '../components/Teclado';
import './Home.css';
import { ListadoComponent } from '../components/listado.component';

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
        {/* LISTADO DE COMPONENTES */}
        <Teclado />
        {/* <ListadoComponent /> */}
        {/* FIN DE LISTADO DE COMPONENTES */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
