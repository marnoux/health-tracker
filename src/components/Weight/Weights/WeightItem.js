import React from 'react';

import WeightDate from './WeightDate';
import Card from '../UI/Card';
import './WeightItem.css';

const WeightItem = (props) => {
	return (
		<Card className='weight-item'>
			<WeightDate date={props.date} />
			<div className='weight-item__kg'>
				{props.amount} {props.unit}
			</div>
		</Card>
	);
};

export default WeightItem;
