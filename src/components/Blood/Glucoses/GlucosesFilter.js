import React from 'react';

import './GlucosesFilter.css';

const GlucosesFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className='glucoss-filter'>
			<div className='glucoss-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={dropdownChangeHandler}>
					{/* Adding a hardcoded list of dates for now, will change later */}
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
				</select>
			</div>
		</div>
	);
};

export default GlucosesFilter;
