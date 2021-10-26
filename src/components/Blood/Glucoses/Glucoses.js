import React, { useState } from 'react';
import Average from '../../UI/Average/Average';
import Card from '../../UI/Card/Card';
import GlucoseChart from './GlucoseChart';
import GlucosesFilter from './GlucosesFilter';
import GlucosesList from './GlucosesList';
import './Glucoses.css';

const Glucoses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredGlucoses = props.items.filter((glucose) => {
		return glucose.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className='glucose'>
				<GlucosesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<GlucoseChart glucose={filteredGlucoses} />
				<GlucosesList items={filteredGlucoses} />
				<Average amounts={filteredGlucoses} />
			</Card>
		</li>
	);
};

export default Glucoses;
