import React, { useState } from 'react';

import './PressureForm.css';

const PressureForm = (props) => {
	const [enteredUnit, setEnteredUnit] = useState('mmHg');
	const [enteredSystolicAmount, setEnteredSystolicAmount] = useState('');
	const [enteredDiastolicAmount, setEnteredDiastolicAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const unitChangeHandler = (event) => {
		setEnteredUnit(event.target.value);
	};

	const systolicAmountChangeHandler = (event) => {
		setEnteredSystolicAmount(event.target.value);
	};
	const diastolicAmountChangeHandler = (event) => {
		setEnteredDiastolicAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const pressureData = {
			unit: enteredUnit,
			systolicAmount: +enteredSystolicAmount,
			diastolicAmount: +enteredDiastolicAmount,
			date: new Date(enteredDate),
		};

		props.onSavePressureData(pressureData);
		setEnteredUnit('');
		setEnteredSystolicAmount('');
		setEnteredDiastolicAmount('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-pressure__controls'>
				<div className='new-pressure__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-pressure__control'>
					<label>Top Number</label>
					<input
						type='number'
						min='1'
						step='1'
						value={enteredSystolicAmount}
						onChange={systolicAmountChangeHandler}
					/>
				</div>
				<div className='new-pressure__control'>
					<label>Bottom Number</label>
					<input
						type='number'
						min='1'
						step='1'
						value={enteredDiastolicAmount}
						onChange={diastolicAmountChangeHandler}
					/>
				</div>
				<div className='new-pressure__control'>
					<label>Unit</label>
					<input
						type='text'
						readOnly='1'
						value={enteredUnit}
						onChange={unitChangeHandler}
					/>
				</div>
			</div>
			<div className='new-pressure__actions'>
				<button type='Button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Log</button>
			</div>
		</form>
	);
};

export default PressureForm;
