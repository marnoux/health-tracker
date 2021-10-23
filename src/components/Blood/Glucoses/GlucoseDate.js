import React from 'react';

import './GlucoseDate.css';

const GlucoseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className='glucos-date'>
			<div className='glucos-date__day'>{day}</div>
			<div className='glucos-date__month'>{month}</div>
			<div className='glucos-date__year'>{year}</div>
		</div>
	);
};

export default GlucoseDate;
