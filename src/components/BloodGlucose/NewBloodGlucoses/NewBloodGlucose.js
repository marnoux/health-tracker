import React, { useState } from 'react';

import BloodGlucoseForm from './BloodGlucoseForm';
import './NewBloodGlucose.css';

const NewBloodGlucose = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const savebloodGlucosDataHandler = (enteredbloodGlucosData) => {
		const bloodGlucosData = {
			...enteredbloodGlucosData,
			id: Math.random().toString(),
		};
		props.onAddBloodGlucos(bloodGlucosData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-bloodGlucos'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Log Blood Glucos</button>
			)}
			{isEditing && (
				<BloodGlucoseForm
					onSavebloodGlucosData={savebloodGlucosDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewBloodGlucose;
