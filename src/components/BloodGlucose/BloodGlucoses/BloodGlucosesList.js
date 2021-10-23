import React from 'react';

import BloodGlucoseItem from './BloodGlucoseItem';
import './BloodGlucosesList.css';

const BloodGlucosesList = (props) => {
	if (props.items.length === 0) {
		return (
			<h2 className='bloodGlucoss-list__fallback'>
				Nothing captured for selected period.
			</h2>
		);
	}

	return (
		<ul className='bloodGlucoss-list'>
			{props.items.map((bloodGlucos) => (
				<BloodGlucoseItem
					key={bloodGlucos.id}
					unit={bloodGlucos.unit}
					amount={bloodGlucos.amount}
					date={bloodGlucos.date}
				/>
			))}
		</ul>
	);
};

export default BloodGlucosesList;
