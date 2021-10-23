import React from 'react';

import './BloodGlucoseDate.css';

const BloodGlucoseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className='bloodGlucos-date'>
			<div className='bloodGlucos-date__day'>{day}</div>
			<div className='bloodGlucos-date__month'>{month}</div>
			<div className='bloodGlucos-date__year'>{year}</div>
		</div>
	);
};

export default BloodGlucoseDate;
