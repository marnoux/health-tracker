import React from 'react';

import PressureDate from './PressureDate';
import Card from '../../UI/Card/Card';
import './PressureItem.css';

const PressureItem = (props) => {
	return (
		<Card className='pressure-item'>
			<PressureDate date={props.date} />
			<div className='pressure-item__measure'>
				{props.systolicAmount} / {props.diastolicAmount} {props.unit}
			</div>
		</Card>
	);
};

export default PressureItem;
