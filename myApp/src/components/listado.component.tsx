import { IonCol, IonContent, IonGrid, IonInput, IonRow } from '@ionic/react';
import React from 'react';
import '../components/listado.css';

// Archivo .json de prueba
import Data from '../pages/output.json';

export const ListadoComponent: React.FC = () => {
	let direccion = [];
	let propiedades = [];
	let obj = new Array<string>();
	let result = [];

	// Añade los títulos a una tabla
	propiedades = Object.keys(Data.personas[0]);

	if (Object.hasOwn(Data.personas[0], 'direccion')) {
		direccion = Object.keys(Data.personas[0]?.direccion);
		propiedades.pop();
		obj = propiedades.concat(direccion);
	}

	// Añade los datos a la tabla /!\ DA ERROR, POR ARREGLAR
	// const result = [];

	// console.log(eval(new String(2+6)))

	return (
		<IonContent>
			<IonGrid className="tabla">
				{/* Fila de los títulos */}
				<IonRow>
					{obj.map((objects, i) => {
						return (
							<IonCol key={i} className="titulos">
								{/* {Object.getOwnPropertyNames(objects).at(i)?.toLocaleUpperCase()} */}
								{objects.toLocaleUpperCase()}
							</IonCol>
						);
					})}
				</IonRow>

				{/* Filas de datos */}
				<IonRow>
					{/* {result.map((users, i) => {
						return (
							<IonCol key={i} className="celdas">
								{users.at(i)}
							</IonCol>
						);
					})} */}
				</IonRow>
			</IonGrid>
		</IonContent>
	);
};
