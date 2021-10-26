import React, { useState } from 'react';

import PressureForm from './PressureForm';
import './NewPressure.css';

const NewPressure = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const savePressureDataHandler = (enteredPressureData) => {
		const pressureData = {
			...enteredPressureData,
			// Use Math.random to create a quick unique identifier
			id: Math.random().toString(),
		};
		props.onAddPressure(pressureData);
		setIsEditing(false);
	};

	// Set the isEditing state to show or hide the input form
	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-pressure'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Log Blood Pressure</button>
			)}
			{isEditing && (
				<PressureForm
					onSavePressureData={savePressureDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewPressure;
