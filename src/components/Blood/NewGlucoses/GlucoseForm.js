import React, { useState } from 'react';

import './GlucoseForm.css';

const GlucoseForm = (props) => {
	const [enteredUnit, setEnteredUnit] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

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

		const glucosData = {
			unit: enteredUnit,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveGlucosData(glucosData);
		setEnteredUnit('');
		setEnteredAmount('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-glucos__controls'>
				<div className='new-glucos__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-glucos__control'>
					<label>Blood Glucos Level</label>
					<input
						type='number'
						min='1'
						step='1'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-glucos__control'>
					<label>Unit</label>
					<select value={enteredUnit} onChange={unitChangeHandler}>
						<option value=''></option>
						<option value='mmol/L'>mmol/L</option>
						<option value='mg/dL'>mg/dL</option>
					</select>
				</div>
			</div>
			<div className='new-glucos__actions'>
				<button type='Button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Log</button>
			</div>
		</form>
	);
};

export default GlucoseForm;
