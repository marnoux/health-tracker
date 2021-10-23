import React, { useState } from 'react';
import Newweight from '../components/NewWeight/NewWeight';
import Weights from '../components/Weights/Weights';

const DUMMY_WEIGHTS = [
	{ id: 'e1', amount: 89, date: new Date(2020, 1, 1), unit: 'kg' },
	{ id: 'e2', amount: 86, date: new Date(2020, 3, 5), unit: 'kg' },
	{ id: 'e3', amount: 88, date: new Date(2020, 5, 28), unit: 'kg' },
	{ id: 'e4', amount: 84, date: new Date(2020, 8, 12), unit: 'kg' },
	{ id: 'e5', amount: 80, date: new Date(2020, 10, 14), unit: 'kg' },
	{ id: 'e6', amount: 79, date: new Date(2021, 1, 1), unit: 'kg' },
	{ id: 'e7', amount: 72, date: new Date(2021, 3, 14), unit: 'kg' },
	{ id: 'e8', amount: 69, date: new Date(2021, 5, 12), unit: 'kg' },
	{ id: 'e9', amount: 65, date: new Date(2021, 7, 28), unit: 'kg' },
	{ id: 'e10', amount: 61, date: new Date(2021, 9, 12), unit: 'kg' },
];

const Weight = () => {
	const [weights, setweights] = useState(DUMMY_WEIGHTS);

	const addWeightsHandler = (weight) => {
		setweights((prevweights) => {
			return [weight, ...prevweights];
		});
	};

	return (
		<div>
			<Newweight onAddWeight={addWeightsHandler} />
			<Weights items={weights} />
		</div>
	);
};

export default Weight;
