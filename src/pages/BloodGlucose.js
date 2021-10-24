import React, { useState } from 'react';

import BloodClucoses from '../components/Blood/Glucoses/Glucoses';
import NewGlucose from '../components/Blood/NewGlucoses/NewGlucose';

const DUMMY_GLUCOSES = [
	{ id: 'e1', amount: 57, date: new Date(2020, 1, 14), unit: 'mmol/L' },
	{ id: 'e2', amount: 52, date: new Date(2020, 3, 12), unit: 'mmol/L' },
	{ id: 'e3', amount: 60, date: new Date(2020, 5, 28), unit: 'mmol/L' },
	{ id: 'e4', amount: 51, date: new Date(2020, 7, 12), unit: 'mmol/L' },
	{ id: 'e5', amount: 70, date: new Date(2020, 10, 4), unit: 'mmol/L' },
	{ id: 'e6', amount: 49, date: new Date(2021, 1, 1), unit: 'mmol/L' },
	{ id: 'e7', amount: 50, date: new Date(2021, 2, 23), unit: 'mmol/L' },
	{ id: 'e8', amount: 61, date: new Date(2021, 5, 30), unit: 'mmol/L' },
	{ id: 'e9', amount: 59, date: new Date(2021, 10, 12), unit: 'mmol/L' },
	{ id: 'e10', amount: 57, date: new Date(2021, 1, 4), unit: 'mmol/L' },
];

const BloodGlucose = () => {
	const [glucosess, setglucosess] = useState(DUMMY_GLUCOSES);

	const addGlucosessHandler = (glucoses) => {
		setglucosess((prevGlucoses) => {
			return [glucoses, ...prevGlucoses];
		});
	};

	return (
		<div>
			<NewGlucose onAddGlucos={addGlucosessHandler} />
			<BloodClucoses items={glucosess} />
		</div>
	);
};

export default BloodGlucose;
