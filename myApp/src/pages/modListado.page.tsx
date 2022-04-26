import {
	IonContent,
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonLabel,
} from '@ionic/react';
import React from 'react';
import { ListadoComponent } from '../components/listado.component';

export const Listado: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Listado</IonTitle>
					<IonLabel class="ion-margin-end" slot="secondary">
						v0.1A
					</IonLabel>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<ListadoComponent />
			</IonContent>
		</IonPage>
	);
};
