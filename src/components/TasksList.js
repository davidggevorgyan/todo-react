import React from 'react';
import TaskItem from './TaskItem';

export default class TasksList extends React.Component {
	render() {
		let { tasks, markDoneListener, deleteListener } = this.props;
		return tasks
			.filter((task) => !task.isDeleted)
			.map((task) => (
				<TaskItem
					key={task.text.slice(0, 5) + task.id}
					task={task}
					markDoneListener={markDoneListener}
					deleteListener={deleteListener}
				/>
			));
	}
}
