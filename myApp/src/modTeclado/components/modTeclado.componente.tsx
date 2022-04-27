import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonInput,
	IonRow,
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import React from 'react';
import '../styles/modTeclado.componente.css';
import { useInput } from '../hooks/useInputTeclado';

export const ModTeclado: React.FC = () => {
	const {
		value,
		ReturnToZero,
		RemoveOne,
		HandleState,
		PlusOne,
		MinnusOne,
		AddComa,
		ReadString,
	} = useInput();

	return (
		<IonGrid class="" id="grid">
			<IonRow id="row">
				<IonCol class="col-xs-12" id="column">
					<IonInput value={value} readonly onIonChange={ReadString}></IonInput>
				</IonCol>
			</IonRow>
			<IonRow id="row">
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('7')}
					>
						7
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('8')}
					>
						8
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('9')}
					>
						9
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolortwo"
						id="plus"
						expand="block"
						size="large"
						onClick={PlusOne}
					>
						+
					</IonButton>
				</IonCol>
			</IonRow>
			<IonRow id="row">
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('4')}
					>
						4
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('5')}
					>
						5
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('6')}
					>
						6
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolortwo"
						id="less"
						expand="block"
						size="large"
						onClick={MinnusOne}
					>
						-
					</IonButton>
				</IonCol>
			</IonRow>
			<IonRow id="row">
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('1')}
					>
						1
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('2')}
					>
						2
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('3')}
					>
						3
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolortwo"
						id="comma"
						expand="block"
						size="large"
						onClick={AddComa}
					>
						.
					</IonButton>
				</IonCol>
			</IonRow>
			<IonRow id="row">
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolortwo"
						id="command"
						expand="block"
						size="large"
						onClick={RemoveOne}
					>
						C
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolor"
						id="number"
						expand="block"
						size="large"
						onClick={() => HandleState('0')}
					>
						0
					</IonButton>
				</IonCol>
				<IonCol class="col-xs-12" id="column">
					<IonButton
						color="mycolortwo"
						id="command"
						expand="block"
						size="large"
						onClick={ReturnToZero}
					>
						CE
					</IonButton>
				</IonCol>
				<IonCol></IonCol>
			</IonRow>
			<IonRow id="row">
				<IonCol class="col-xs-12" id="column">
					<IonButton color="mycolor" id="continue" expand="block" size="large">
						Continuar <IonIcon slot="icon-only" ios={arrowForward}></IonIcon>
					</IonButton>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};
