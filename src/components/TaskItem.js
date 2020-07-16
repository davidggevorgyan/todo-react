import React from 'react';

export default function TaskItem( props ) {
	const { status, id, text } = props.task;
	const { markDoneListener, deleteListener } = props;
	return (
		<div className="list-item">
			<input
				checked={status === 'Done' }
				type="checkbox"
				onChange={( e ) => markDoneListener( id )}
			/>
			<li className={`${ status === 'Done' ? 'done' : '' }`}>{text}</li>
			<button onClick={( e ) => deleteListener( id )}>X</button>
		</div>
	);
}
