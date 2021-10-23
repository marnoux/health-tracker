import React from 'react';

import GlucoseItem from './GlucoseItem';
import './GlucosesList.css';

const GlucosesList = (props) => {
	if (props.items.length === 0) {
		return (
			<h2 className='glucoss-list__fallback'>
				Nothing captured for selected period.
			</h2>
		);
	}

	return (
		<ul className='glucoss-list'>
			{props.items.map((glucos) => (
				<GlucoseItem
					key={glucos.id}
					unit={glucos.unit}
					amount={glucos.amount}
					date={glucos.date}
				/>
			))}
		</ul>
	);
};

export default GlucosesList;
