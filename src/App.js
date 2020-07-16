import React from 'react';
import Task from './models/Task.js';
import './App.css';
import TaskInput from './components/TaskInput.js';
import TaskList from './components/TasksList.js';
import TaskSearch from './components/TaskSearch.js';
import ThemeContext from './contexts/ThemeContext.js';

export default class App extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			tasks: [
				new Task(
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam!', // cspell:disable-line
					0,
				),
				new Task(
					'officiis quaerat quas quibusdam enim corporis et, accusamus molestias dolor est odit laboriosam delectus omnis voluptates vero aperiam sequi doloremque maxime laudantium perspiciatis inventore eaque. ', // cspell:disable-line
					1,
				),
			],
			inputValue: '',
			searchValue: '',
			activeFilter: 'All',
		};
	}

	addButtonListener = () => {
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

	searchListener = ( e ) => {
		this.setState( { searchValue: e.target.value } );
	};

	markDoneListener = ( id ) => {
		const newList = [...this.state.tasks];
		newList[id].status === 'New' ? newList[id].status = 'Done' : newList[id].status = 'New';
		this.setState( { tasks: newList } );
	};

	deleteListener = ( id ) => {
		const newList = [...this.state.tasks];
		newList[id].status = 'Deleted';
		this.setState( { tasks: newList } );
	};

	render() {
		return (
			<ThemeContext.Provider theme="dark">
				<div className="App">
					<TaskInput
						inputValue={this.state.inputValue}
						addButtonListener={this.addButtonListener}
						inputListener={this.inputListener}
						keyPress={this.keyPress}
					/>
					<TaskSearch
						activeFilter={this.state.activeFilter}
						searchValue={this.searchValue}
						searchListener={this.searchListener}
					/>
					<TaskList
						tasks={this.state.tasks}
						markDoneListener={this.markDoneListener}
						deleteListener={this.deleteListener}
					/>
				</div>
			</ThemeContext.Provider>
		);
	}

}
