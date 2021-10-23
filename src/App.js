import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import MainHeader from './components/UI/MainHeader';
import Weight from './pages/Weight';

const App = () => {
	return (
		<div>
			<div className='App'>
				<MainHeader />
				<main>
					<Route path='/welcome'>
						<Welcome />
					</Route>
					<Route path='/weight'>
						<Weight />
					</Route>
				</main>
			</div>
		</div>
	);
};

export default App;
