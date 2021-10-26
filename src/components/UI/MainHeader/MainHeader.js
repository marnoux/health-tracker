import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Welcome</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to='/weight'>
							Weight
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to='/glucose'>
							Blood Glucose
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to='/pressure'>
							Blood Pressure
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
