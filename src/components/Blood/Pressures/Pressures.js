import React, { useState } from 'react';

import Card from '../../UI/Card';
import PressuresFilter from './PressuresFilter';
import PressuresList from './PressuresList';

import './Pressures.css';

const Pressures = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredPressures = props.items.filter((pressure) => {
		return pressure.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className='pressure'>
				<PressuresFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<PressuresList items={filteredPressures} />
			</Card>
		</li>
	);
};

export default Pressures;
