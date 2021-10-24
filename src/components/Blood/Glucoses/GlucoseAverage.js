import React from 'react';

import './GlucoseAverage.css';

const GlucoseAverage = (props) => {
	const arr = props.amounts;

	if (arr.length > 0) {
		let total = 0;

		for (let i = 0; i < arr.length; i++) {
			total += arr[i].amount;
		}

		let avg = total / arr.length;

		return <div className='glucose-average'>{<h2>Average: {avg}</h2>}</div>;
	} else {
		return <div></div>;
	}
};

export default GlucoseAverage;
