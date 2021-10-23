import React, { useState } from 'react';

import Card from '../../UI/Card';
import BloodGlucosesFilter from './BloodGlucosesFilter';
import './BloodGlucoses.css';
import BloodGlucosesList from './BloodGlucosesList';
import BloodGlucoseChart from './BloodGlucoseChart';

const BloodGlucoses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredBloodGlucoses = props.items.filter((bloodGlucos) => {
		return bloodGlucos.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className='bloodGlucoss'>
				<BloodGlucosesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<BloodGlucoseChart bloodGlucoss={filteredBloodGlucoses} />
				<BloodGlucosesList items={filteredBloodGlucoses} />
			</Card>
		</li>
	);
};

export default BloodGlucoses;
