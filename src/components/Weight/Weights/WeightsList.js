import React from 'react';

import WeightItem from './WeightItem';
import './WeightsList.css';

const WeightsList = (props) => {
	if (props.items.length === 0) {
		return (
			<h2 className='weights-list__fallback'>
				Nothing captured for selected period.
			</h2>
		);
	}

	return (
		<ul className='weights-list'>
			{props.items.map((weight) => (
				<WeightItem
					key={weight.id}
					unit={weight.unit}
					amount={weight.amount}
					date={weight.date}
				/>
			))}
		</ul>
	);
};

export default WeightsList;
