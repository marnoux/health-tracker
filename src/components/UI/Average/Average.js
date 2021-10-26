import React from 'react';

import './Average.css';

const Average = (props) => {
	const arr = props.amounts;
	// Array length will be used in average calculation
	const arrLength = arr.length;

	let total = 0;

	if (arrLength > 0) {
		// Calculate sum total for passed in array amounts
		for (let i = 0; i < arrLength; i++) {
			total += arr[i].amount;
		}

		// Calculate average for passed in array amounts
		let avg = total / arrLength;

		return <div className='average'>{<h2>Average: {avg}</h2>}</div>;
	} else {
		return <div></div>;
	}
};

export default Average;
