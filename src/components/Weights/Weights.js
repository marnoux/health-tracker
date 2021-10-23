import React, { useState } from 'react';

import Card from '../UI/Card';
import WeightsFilter from './WeightsFilter';
import './Weights.css';
import WeightsList from './WeightsList';
import WeightChart from './WeightChart';

const Weights = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredWeights = props.items.filter((weight) => {
		return weight.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className='weights'>
				<WeightsFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<WeightChart weights={filteredWeights} />
				<WeightsList items={filteredWeights} />
			</Card>
		</li>
	);
};

export default Weights;
