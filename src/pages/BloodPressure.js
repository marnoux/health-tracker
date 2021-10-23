import React, { useState } from 'react';

import Pressures from '../components/Blood/Pressures/Pressures';
import NewPressure from '../components/Blood/NewPressures/NewPressure';

const DUMMY_PRESSURES = [
	{ id: 'e1', amount: '120/80', date: new Date(2020, 1, 14), unit: 'mmHg' },
	{ id: 'e2', amount: '120/80', date: new Date(2020, 3, 12), unit: 'mmHg' },
	{ id: 'e3', amount: '120/80', date: new Date(2020, 5, 28), unit: 'mmHg' },
	{ id: 'e4', amount: '120/80', date: new Date(2020, 7, 12), unit: 'mmHg' },
	{ id: 'e5', amount: '120/80', date: new Date(2020, 10, 4), unit: 'mmHg' },
	{ id: 'e6', amount: '120/80', date: new Date(2021, 1, 1), unit: 'mmHg' },
	{ id: 'e7', amount: '120/80', date: new Date(2021, 2, 23), unit: 'mmHg' },
	{ id: 'e8', amount: '120/80', date: new Date(2021, 5, 30), unit: 'mmHg' },
	{ id: 'e9', amount: '120/80', date: new Date(2021, 10, 12), unit: 'mmHg' },
	{ id: 'e10', amount: '120/80', date: new Date(2021, 1, 4), unit: 'mmHg' },
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
