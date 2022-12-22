import React, { useState } from 'react';

import Pressures from '../components/Blood/Pressures/Pressures';
import NewPressure from '../components/Blood/NewPressures/NewPressure';

const DUMMY_PRESSURES = [
	{
		id: 'e1',
		systolicAmount: 120,
		diastolicAmount: 80,
		date: new Date(2020, 1, 14),
		unit: 'mmHg',
	},
	{
		id: 'e2',
		systolicAmount: 110,
		diastolicAmount: 88,
		date: new Date(2020, 3, 12),
		unit: 'mmHg',
	},
	{
		id: 'e3',
		systolicAmount: 115,
		diastolicAmount: 81,
		date: new Date(2020, 5, 28),
		unit: 'mmHg',
	},
	{
		id: 'e4',
		systolicAmount: 130,
		diastolicAmount: 72,
		date: new Date(2020, 7, 12),
		unit: 'mmHg',
	},
	{
		id: 'e5',
		systolicAmount: 120,
		diastolicAmount: 79,
		date: new Date(2020, 10, 4),
		unit: 'mmHg',
	},
	{
		id: 'e6',
		systolicAmount: 110,
		diastolicAmount: 80,
		date: new Date(2021, 1, 1),
		unit: 'mmHg',
	},
	{
		id: 'e7',
		systolicAmount: 115,
		diastolicAmount: 88,
		date: new Date(2021, 2, 23),
		unit: 'mmHg',
	},
	{
		id: 'e8',
		systolicAmount: 130,
		diastolicAmount: 81,
		date: new Date(2021, 5, 30),
		unit: 'mmHg',
	},
	{
		id: 'e9',
		systolicAmount: 120,
		diastolicAmount: 72,
		date: new Date(2021, 10, 12),
		unit: 'mmHg',
	},
	{
		id: 'e10',
		systolicAmount: 115,
		diastolicAmount: 79,
		date: new Date(2021, 1, 4),
		unit: 'mmHg',
	},
];

const BloodPressure = () => {
	const [pressures, setPressures] = useState(DUMMY_PRESSURES);

	const addPressuressHandler = (pressures) => {
		setPressures((prevPressures) => {
			return [pressures, ...prevPressures];
		});
	};

	return (
		<div>
			<NewPressure onAddPressure={addPressuressHandler} />
			<Pressures items={pressures} />
		</div>
	);
};

export default BloodPressure;
