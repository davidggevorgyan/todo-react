import React from 'react';
import TaskItem from './TaskItem.js';

export default function TasksList( props ) {
	const { tasks, markDoneListener, deleteListener } = props;
	const wrapper = tasks
		.filter( ( task ) => task.status !== 'Deleted' && task.isDisplayed )
		.map( ( task ) => (
			<TaskItem
				key={task.text.slice( 0, 5 ) + task.id}
				task={task}
				markDoneListener={markDoneListener}
				deleteListener={deleteListener}
			/>
		) );
	return (
		<div className="tasks-list">
			{wrapper}
		</div>
	);
}
