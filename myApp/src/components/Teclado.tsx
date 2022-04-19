import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react';
import {arrowForward} from 'ionicons/icons'
import { useState } from 'react';

import './Teclado.css';

interface ContainerProps { }

const Teclado: React.FC<ContainerProps> = () => {

  const [value, setValue] = useState(0)
  
  

  return (
    <IonGrid fixed id='grid'>
      <IonRow id='row'>
        <IonCol id='column' size='9'>
          <IonInput
          value={value}
          placeholder="Enter input"
          >
            Value</IonInput>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol id='column'size='3'>
          <IonButton id='number'  expand='block' size='large'>1</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>2</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large' onClick={() => setValue(value)}>3</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>4</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>5</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>6</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>7</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>8</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>9</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol id='column'size='3'>
          <IonButton id='number' expand='block' size='large'>0</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='command'color='tertiary' expand='block' size='large'>C</IonButton>
        </IonCol>
        <IonCol id='column'size='3'>
          <IonButton id='command'color='tertiary' expand='block' size='large'>CE</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol id='column'size='9'>
          <IonButton id='continue'expand='block' size='large'>Continuar <IonIcon slot="icon-only" ios={arrowForward}></IonIcon></IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>

  );
};

export default Teclado;
