import React from 'react';

import Item from '../../UI/Item/Item';
import './GlucosesList.css';

const GlucosesList = (props) => {
	// If the filtered year has no data, tell the user
	if (props.items.length === 0) {
		return (
			<h2 className='glucose-list__fallback'>
				Nothing captured for selected period.
			</h2>
		);
	}

	// If the filtered year has data, display it to the user
	return (
		<ul className='glucose-list'>
			{props.items.map((glucose) => (
				<Item
					key={glucose.id}
					unit={glucose.unit}
					amount={glucose.amount}
					date={glucose.date}
				/>
			))}
		</ul>
	);
};

export default GlucosesList;
