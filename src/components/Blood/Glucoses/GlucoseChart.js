import React from 'react';

import Chart from '../../UI/Chart/Chart';

const WeightsChart = (props) => {
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

	for (const glucos of props.glucoss) {
		const glucosMonth = glucos.date.getMonth();
		chartDataPoints[glucosMonth].value += glucos.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default WeightsChart;
