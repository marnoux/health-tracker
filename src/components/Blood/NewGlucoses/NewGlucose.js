import React, { useState } from 'react';

import GlucoseForm from './GlucoseForm';
import './NewGlucose.css';

const NewGlucose = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveglucosDataHandler = (enteredglucosData) => {
		const glucosData = {
			...enteredglucosData,
			id: Math.random().toString(),
		};
		props.onAddGlucos(glucosData);
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
				<button onClick={startEditingHandler}>Log Blood Glucos</button>
			)}
			{isEditing && (
				<GlucoseForm
					onSaveglucosData={saveglucosDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewGlucose;
