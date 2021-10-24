import React, { useState } from 'react';

import PressureForm from './PressureForm';
import './NewPressure.css';

const NewPressure = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveglucosDataHandler = (enteredglucosData) => {
		const glucosData = {
			...enteredglucosData,
			id: Math.random().toString(),
		};
		props.onAddPressure(glucosData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-glucos'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Log Blood Pressure</button>
			)}
			{isEditing && (
				<PressureForm
					onSaveglucosData={saveglucosDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewPressure;
