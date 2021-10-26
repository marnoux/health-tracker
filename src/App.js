import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import MainHeader from './components/UI/MainHeader/MainHeader';
import Weight from './pages/Weight';
import BloodGlucose from './pages/BloodGlucose';
import BloodPressure from './pages/BloodPressure';

const App = () => {
	return (
		<div>
			<div className='App'>
				<MainHeader />
				<main>
					<Route exact path='/'>
						<Welcome />
					</Route>
					<Route path='/weight'>
						<Weight />
					</Route>
					<Route path='/glucose'>
						<BloodGlucose />
					</Route>
					<Route path='/pressure'>
						<BloodPressure />
					</Route>
				</main>
			</div>
		</div>
	);
};

export default App;
