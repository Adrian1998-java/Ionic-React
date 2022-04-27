import { IonContent } from '@ionic/react';
import { ModTeclado } from '../components/modTeclado.componente';

export const Teclado: React.FC = () => {
	return (
		<IonContent>
			<p>Mi página de teclado</p>
			<ModTeclado />
		</IonContent>
	);
};

