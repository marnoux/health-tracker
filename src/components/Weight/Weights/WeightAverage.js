import React from 'react';

import './WeightAverage.css';

const WeightAverage = (props) => {
	const arr = props.amounts;

	if (arr.length > 0) {
		let total = 0;

		for (let i = 0; i < arr.length; i++) {
			total += arr[i].amount;
		}

		let avg = total / arr.length;

		return <div className='weight-average'>{<h2>Average: {avg}</h2>}</div>;
	} else {
		return <div></div>;
	}
};

export default WeightAverage;
