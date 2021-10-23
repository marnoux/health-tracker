import React, { useState } from 'react';

import WeightForm from './WeightForm';
import './NewWeight.css';

const NewWeight = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveweightDataHandler = (enteredweightData) => {
		const weightData = {
			...enteredweightData,
			id: Math.random().toString(),
		};
		props.onAddWeight(weightData);
		setIsEditing(false);
	};

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
					onSaveweightData={saveweightDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewWeight;
