// I didn't use the base UI Average component due
// to there being 2 different amounts in
import React from 'react';

import './PressureAverage.css';

const PressureAverage = (props) => {
	const arr = props.amounts;
	// Array length will be used in average calculation
	const arrLength = arr.length;

	if (arrLength > 0) {
		let total = 0;

		// Calculate sum total for passed in Systolic amounts
		for (let i = 0; i < arrLength; i++) {
			total += arr[i].systolicAmount;
		}

		// Calculate average for passed in Systolic amounts
		let systolicAvg = total / +arrLength;

		total = 0;

		// Calculate sum total for passed in Diastolic amounts
		for (let i = 0; i < arrLength; i++) {
			total += arr[i].diastolicAmount;
		}

		// Calculate average for passed in Diastolic amounts
		let diastolicAvg = total / +arrLength;

		return (
			<div className='pressure-average'>
				{
					<h2>
						Average: {systolicAvg} / {diastolicAvg}
					</h2>
				}
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default PressureAverage;
