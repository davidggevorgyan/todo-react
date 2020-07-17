import React from 'react';

export default function TaskSearch( props ) {
	const {
		searchValue, searchListener, filter, filterListener,
	} = props;

	return (
		<div className="search">
			<div onClick={( e ) => filterListener( 'New, Done' )} className={ filter === 'New, Done' ? 'active' : '' } >All</div>
			<div onClick={( e ) => filterListener( 'New' )} className={ filter === 'New' ? 'active' : '' }>Active</div>
			<div onClick={( e ) => filterListener( 'Done' )} className={ filter === 'Done' ? 'active' : '' }>Completed</div>
			<input placeholder="Search Task" type="search" value={searchValue} onChange={searchListener}/>
		</div>
	);
}
