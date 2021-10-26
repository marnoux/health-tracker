import React, { useState } from 'react';

import WeightForm from './WeightForm';
import './NewWeight.css';

const NewWeight = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveWeightDataHandler = (enteredWeightData) => {
		const weightData = {
			...enteredWeightData,
			// Use Math.random to create a quick unique identifier
			id: Math.random().toString(),
		};
		props.onAddWeight(weightData);
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
		<div className='new-weight'>
			{!isEditing && <button onClick={startEditingHandler}>Log Weight</button>}
			{isEditing && (
				<WeightForm
					onSaveWeightData={saveWeightDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewWeight;
