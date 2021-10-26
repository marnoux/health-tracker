import React, { useState } from 'react';
import Average from '../../UI/Average/Average';
import Card from '../../UI/Card/Card';
import WeightsFilter from './WeightsFilter';
import WeightsList from './WeightsList';
import WeightChart from './WeightChart';
import './Weights.css';

const Weights = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

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
				<Average amounts={filteredWeights} />
			</Card>
		</li>
	);
};

export default Weights;
