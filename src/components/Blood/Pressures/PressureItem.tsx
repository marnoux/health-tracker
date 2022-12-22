import React from 'react';
import Card from '../../UI/Card/Card';
import Date from '../../UI/Date/Date';
import './PressureItem.css';

const PressureItem = (props) => {
	return (
		<Card className='pressure-item'>
			<Date date={props.date} />
			<div className='pressure-item__measure'>
				{props.systolicAmount} / {props.diastolicAmount} {props.unit}
			</div>
		</Card>
	);
};

export default PressureItem;
