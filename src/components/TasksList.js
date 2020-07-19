import React from 'react';
import TaskItem from './TaskItem.js';
import ThemeContext from '../contexts/ThemeContext.js';
import {
	DARK_BODY, DARK_COLOR, LIGHT_COLOR, LIGHT_BODY,
} from '../constants/colors.js';

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
		<ThemeContext.Consumer>
			{ ( darkTheme ) => ( <div className="tasks-list" style={darkTheme ? { backgroundColor: DARK_BODY, color: DARK_COLOR } : { backgroundColor: LIGHT_BODY, color: LIGHT_COLOR } }>
				{wrapper}
			</div> )
			}
		</ThemeContext.Consumer>
	);
}
