import React, { useState } from 'react';

import './WeightForm.css';

const WeightForm = (props) => {
	const [enteredUnit, setEnteredUnit] = useState('kg');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
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

		const weightData = {
			unit: enteredUnit,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveWeightData(weightData);
		setEnteredUnit('');
		setEnteredAmount('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-weight__controls'>
				<div className='new-weight__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-weight__control'>
					<label>Weight</label>
					<input
						type='number'
						min='1'
						step='1'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-weight__control'>
					<label>Unit</label>
					<select value={enteredUnit} onChange={titleChangeHandler}>
						<option value='kg'>kg</option>
						<option value='lbs'>lbs</option>
					</select>
				</div>
			</div>
			<div className='new-weight__actions'>
				<button type='Button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Log</button>
			</div>
		</form>
	);
};

export default WeightForm;
