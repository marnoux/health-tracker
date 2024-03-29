import React from 'react';

import './WeightsFilter.css';

const WeightsFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className='weights-filter'>
			<div className='weights-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={dropdownChangeHandler}>
					{/* Adding a hardcoded list of dates that 
						correlates with min and max dates in date selector */}
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default WeightsFilter;
