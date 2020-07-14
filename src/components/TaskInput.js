import React from 'react';

export default class TaskInput extends React.Component {

	render() {
		const {
			addButtonListener, inputListener, inputValue, keyPress,
		} = this.props;
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

}
