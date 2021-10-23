import React, { useState } from 'react';

import Card from '../../UI/Card';
import GlucosesFilter from './GlucosesFilter';
import './Glucoses.css';
import GlucosesList from './GlucosesList';
import GlucoseChart from './GlucoseChart';

const Glucoses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredGlucoses = props.items.filter((glucos) => {
		return glucos.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className='glucoss'>
				<GlucosesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<GlucoseChart glucoss={filteredGlucoses} />
				<GlucosesList items={filteredGlucoses} />
			</Card>
		</li>
	);
};

export default Glucoses;
