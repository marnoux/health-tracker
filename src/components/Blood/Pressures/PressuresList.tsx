import React from 'react';

import PressureItem from './PressureItem';
import './PressuresList.css';

const PressuresList = (props) => {
	if (props.items.length === 0) {
		return (
			<h2 className='pressure-list__fallback'>
				Nothing captured for selected period.
			</h2>
		);
	}

	return (
		<ul className='pressure-list'>
			{props.items.map((pressure) => (
				<PressureItem
					key={pressure.id}
					unit={pressure.unit}
					systolicAmount={pressure.systolicAmount}
					diastolicAmount={pressure.diastolicAmount}
					date={pressure.date}
				/>
			))}
		</ul>
	);
};

export default PressuresList;
