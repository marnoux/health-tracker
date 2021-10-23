import React, { useState } from 'react';

import Card from '../../UI/Card';
import PressuresFilter from './PressuresFilter';
import './Pressures.css';
import PressuresList from './PressuresList';
import PressureChart from './PressureChart';

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
				{/* <PressureChart pressures={filteredPressures} /> */}
				<PressuresList items={filteredPressures} />
			</Card>
		</li>
	);
};

export default Pressures;
