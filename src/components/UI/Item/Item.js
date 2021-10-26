import React from 'react';
import Card from '../Card/Card';
import Date from '../Date/Date';
import './Item.css';

const WeightItem = (props) => {
	return (
		<Card className='item'>
			<Date date={props.date} />
			<div className='item__field'>
				{props.amount} {props.unit}
			</div>
		</Card>
	);
};

export default WeightItem;
