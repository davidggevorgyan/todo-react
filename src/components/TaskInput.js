import React from 'react';
import '../styles/TaskInput.css';

export default function TaskInput( props ) {
	const {
		addButtonListener, inputListener, inputValue, keyPress,
	} = props;
	return (
		<div className="task-input">
			<input
				type="text"
				value={inputValue}
				onChange={inputListener}
				placeholder="Take a Note"
				onKeyDown={keyPress}
			></input>
			<button onClick={addButtonListener}>Add</button>
		</div>
	);
}
