import React from 'react';

import Chart from '../../UI/Chart/Chart';

const WeightsChart = (props) => {
	// Set datapoints for chart to each month of the year
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	];

	// Iterate through items to populate chart
	for (const item of props.glucose) {
		const glucoseMonth = item.date.getMonth();
		chartDataPoints[glucoseMonth].value += item.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default WeightsChart;
