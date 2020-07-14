import React from 'react';
import Task from './models/Task.js';
import './App.css';
import TaskInput from './components/TaskInput.js';
import TaskList from './components/TasksList.js';

export default class App extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			tasks: [
				new Task(
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam!',
					0,
				),
				new Task(
					'officiis quaerat quas quibusdam enim corporis et, accusamus molestias dolor est odit laboriosam delectus omnis voluptates vero aperiam sequi doloremque maxime laudantium perspiciatis inventore eaque. ',
					1,
				),
			],
			inputValue: '',
		};
	}

	addButtonListener = ( e ) => {
		const newList = [...this.state.tasks];
		newList.push( new Task( this.state.inputValue, this.state.tasks.length ) );
		this.setState( { inputValue: '', tasks: newList } );
	};

	keyPress = ( e ) => {
		if ( e.keyCode === 13 ) {
			this.addButtonListener( e );
		}
	};

	inputListener = ( e ) => {
		this.setState( { inputValue: e.target.value } );
	};

	markDoneListener = ( id ) => {
		const newList = [...this.state.tasks];
		newList[id].isDone = !newList[id].isDone;
		this.setState( { tasks: newList } );
	};

	deleteListener = ( id ) => {
		const newList = [...this.state.tasks];
		newList[id].isDeleted = true;
		this.setState( { tasks: newList } );
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<TaskInput
						inputValue={this.state.inputValue}
						addButtonListener={this.addButtonListener}
						inputListener={this.inputListener}
						keyPress={this.keyPress}
					/>
					<TaskList
						tasks={this.state.tasks}
						markDoneListener={this.markDoneListener}
						deleteListener={this.deleteListener}
					/>
				</header>
			</div>
		);
	}

}
