import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react';
import {arrowForward} from 'ionicons/icons'
import { useState } from 'react';

import './Teclado.css';

interface ContainerProps { }

const Teclado: React.FC<ContainerProps> = () => {

  const [value, setValue] = useState('')

  //Return to zero
  const ReturnToZero = () => {
    console.log('Return to 0')
    setValue( '' );
  }
  //Return to zero
  const RemoveOne = () => {
    console.log('Remove one')
    setValue( c => c.slice(0, -1) );
  }

  //Add a number
  const HandleState = (id:string) =>{
    console.log(id);
    setValue(c => c + id)

  }
  
  return (
    <IonGrid class='' id='grid'>
      <IonRow id='row'>
        <IonCol class='col-xs-12' id='column' size='9'>
          <IonInput
          value={value}
          readonly
          >
            Value: 
          </IonInput>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={1} onClick={ () => HandleState('1') } >1</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={2} onClick={ () => HandleState('2') } >2</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={3} onClick={ () => HandleState('3') } >3</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={4} onClick={ () => HandleState('4') } >4</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={5} onClick={ () => HandleState('5') } >5</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={6} onClick={ () => HandleState('6') } >6</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={7} onClick={ () => HandleState('7') } >7</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={8} onClick={ () => HandleState('8') } >8</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={9} onClick={ () => HandleState('9') } >9</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='number' expand='block' size='large' aria-valuenow={0} onClick={ () => HandleState('0') } >0</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolortwo' id='command' expand='block' size='large' onClick={ RemoveOne }>C</IonButton>
        </IonCol>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolortwo' id='command' expand='block' size='large' onClick={ ReturnToZero }>CE</IonButton>
        </IonCol>
      </IonRow>
      <IonRow id='row'>
        <IonCol class='col-xs-12' id='column'>
          <IonButton color='mycolor' id='continue' expand='block' size='large' >Continuar <IonIcon slot="icon-only" ios={arrowForward}></IonIcon></IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>

  );

};

export default Teclado;