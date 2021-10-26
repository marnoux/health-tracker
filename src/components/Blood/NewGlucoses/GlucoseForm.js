import React, { useState } from 'react';

import './GlucoseForm.css';

const GlucoseForm = (props) => {
	// Split into state slices
	const [enteredUnit, setEnteredUnit] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Create event handler for each state slice
	const unitChangeHandler = (event) => {
		setEnteredUnit(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// Save state
		const glucoseData = {
			unit: enteredUnit,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		// Clear after save
		props.onSaveGlucoseData(glucoseData);
		setEnteredUnit('');
		setEnteredAmount('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-glucose__controls'>
				<div className='new-glucose__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-glucose__control'>
					<label>Blood Glucose Level</label>
					<input
						type='number'
						min='1'
						step='1'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-glucose__control'>
					<label>Unit</label>
					<select value={enteredUnit} onChange={unitChangeHandler}>
						<option value=''></option>
						<option value='mmol/L'>mmol/L</option>
						<option value='mg/dL'>mg/dL</option>
					</select>
				</div>
			</div>
			<div className='new-glucose__actions'>
				<button type='Button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Log</button>
			</div>
		</form>
	);
};

export default GlucoseForm;
