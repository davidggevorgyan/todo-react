import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import ThemeContext from '../contexts/ThemeContext.js';
import '../styles/TaskSearch.css';

export default function TaskSearch( props ) {
	const {
		searchValue, searchListener, filter, filterListener, themeListener,
	} = props;

	return (
		<ThemeContext.Consumer>
			{ ( darkTheme ) => (
				<div className="search">
					<div onClick={( e ) => filterListener( 'New, Done' )} className={ filter === 'New, Done' ? 'active' : '' } >All</div>
					<div onClick={( e ) => filterListener( 'New' )} className={ filter === 'New' ? 'active' : '' }>Active</div>
					<div onClick={( e ) => filterListener( 'Done' )} className={ filter === 'Done' ? 'active' : '' }>Done</div>
					<input placeholder="Search Task" type="search" value={searchValue} onChange={searchListener}/>
					<DarkModeToggle
						onChange={themeListener}
						checked={darkTheme}
						size={64}
					/>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
