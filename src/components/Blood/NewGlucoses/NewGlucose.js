import React, { useState } from 'react';

import GlucoseForm from './GlucoseForm';
import './NewGlucose.css';

const NewGlucose = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveGlucoseDataHandler = (enteredGlucoseData) => {
		const glucoseData = {
			...enteredGlucoseData,
			// Use Math.random to create a quick unique identifier
			id: Math.random().toString(),
		};
		props.onAddGlucose(glucoseData);
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
		<div className='new-glucose'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Log Blood Glucose</button>
			)}
			{isEditing && (
				<GlucoseForm
					onSaveGlucoseData={saveGlucoseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewGlucose;
