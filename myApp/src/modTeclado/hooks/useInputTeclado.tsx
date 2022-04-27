import { useState } from 'react';

export const useInput = (inputValue = '') => {
	const [value, setValue] = useState(inputValue);

	const ReturnToZero = () => {
		setValue('');
	};

	const RemoveOne = () => {
		setValue((c) => c.slice(0, -1));
	};

	const HandleState = (id: string) => {
		setValue((c) => c + id);
	};

	const PlusOne = () => {
		if (value.length === 1 && value.includes('.')) {
			setValue(String('1'));
		} else {
			setValue(String(Number(value) + 1));
		}
	};

	const MinnusOne = () => {
		if (value.length === 1 && value.includes('.')) {
			setValue(String('-1'));
		} else {
			setValue(String(Number(value) - 1));
		}
	};

	const AddComa = () => {
		setValue(`${value}.`);
	};

	const ReadString = () => {
		if (value.includes('.')) {
			document.getElementById('comma')?.setAttribute('disabled', 'disabled');
		} else {
			document.getElementById('comma')?.removeAttribute('disabled');
		}
	};

	return {
		value,
		ReturnToZero,
		RemoveOne,
		HandleState,
		PlusOne,
		MinnusOne,
		AddComa,
		ReadString,
	};
};
