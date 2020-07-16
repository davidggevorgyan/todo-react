import React from 'react';

export default function TaskSearch( props ) {
	const { searchValue, searchListener } = props;
	return (
		<div className="search">
			<button>All</button>
			<button>Active</button>
			<button>Completed</button>
			<input placeholder="Search Task" type="search" value={searchValue} onChange={searchListener}/>
		</div>
	);
}
