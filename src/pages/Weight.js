import React, { useState } from 'react';
import Newweight from '../components/NewWeight/NewWeight';
import Weights from '../components/Weights/Weights';

const DUMMY_WEIGHTS = [
	{ id: 'e1', amount: 89, date: new Date(2020, 7, 14), unit: 'kg' },
	{ id: 'e2', amount: 86, date: new Date(2021, 2, 12), unit: 'kg' },
	{ id: 'e3', amount: 88, date: new Date(2021, 2, 28), unit: 'kg' },
	{ id: 'e4', amount: 84, date: new Date(2021, 5, 12), unit: 'kg' },
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
