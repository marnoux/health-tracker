import React from 'react';

import './PressureDate.css';

const PressureDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className='pressure-date'>
			<div className='pressure-date__day'>{day}</div>
			<div className='pressure-date__month'>{month}</div>
			<div className='pressure-date__year'>{year}</div>
		</div>
	);
};

export default PressureDate;
