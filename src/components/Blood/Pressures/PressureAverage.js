import React from 'react';

import './PressureAverage.css';

const PressureAverage = (props) => {
	const arr = props.amounts;
	const arrLength = arr.length;

	if (arrLength > 0) {
		let total = 0;

		for (let i = 0; i < arrLength; i++) {
			total += arr[i].systolicAmount;
		}

		let systolicAvg = total / +arrLength;

		total = 0;

		for (let i = 0; i < arrLength; i++) {
			total += arr[i].diastolicAmount;
		}

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
