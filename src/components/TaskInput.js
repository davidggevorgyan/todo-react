import React from 'react';

export default function TaskInput( props ) {
	const {
		addButtonListener, inputListener, inputValue, keyPress,
	} = props;
	return (
		<header className="task-input">
			<input
				type="text"
				value={inputValue}
				onChange={inputListener}
				placeholder="Take a Note"
				onKeyDown={keyPress}
			></input>
			<button onClick={addButtonListener}>Add</button>
		</header>
	);
}
