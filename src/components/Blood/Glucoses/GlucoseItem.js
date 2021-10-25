import React from 'react';

import GlucoseDate from './GlucoseDate';
import Card from '../../UI/Card/Card';
import './GlucoseItem.css';

const GlucoseItem = (props) => {
	return (
		<Card className='glucos-item'>
			<GlucoseDate date={props.date} />
			<div className='glucos-item__kg'>
				{props.amount} {props.unit}
			</div>
		</Card>
	);
};

export default GlucoseItem;
