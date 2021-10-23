import React from 'react';

import BloodGlucoseDate from './BloodGlucoseDate';
import Card from '../../UI/Card';
import './BloodGlucoseItem.css';

const BloodGlucoseItem = (props) => {
	return (
		<Card className='bloodGlucos-item'>
			<BloodGlucoseDate date={props.date} />
			<div className='bloodGlucos-item__kg'>
				{props.amount} {props.unit}
			</div>
		</Card>
	);
};

export default BloodGlucoseItem;
