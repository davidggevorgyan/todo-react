import React from 'react';

export default class TaskItem extends React.Component {

	render() {
		const { isDone, id, text } = this.props.task;
		const { markDoneListener, deleteListener } = this.props;
		return (
			<div className="list-item">
				<input
					checked={isDone}
					type="checkbox"
					onChange={( e ) => markDoneListener( id )}
				/>
				<li className={`${ isDone ? 'done' : '' }`}>{text}</li>
				<button onClick={( e ) => deleteListener( id )}>X</button>
			</div>
		);
	}

}
