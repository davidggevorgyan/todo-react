import React from 'react';
import Task from './models/Task.js';
import './styles/App.css';
import TaskInput from './components/TaskInput.js';
import TaskList from './components/TasksList.js';
import TaskSearch from './components/TaskSearch.js';
import ThemeContext from './contexts/ThemeContext.js';
import {
	DARK_BODY, LIGHT_BODY, DARK_HEADER, LIGHT_HEADER,
} from './constants/colors.js';

export default class App extends React.Component {

	state = {
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
		filter: 'New, Done',
		darkTheme: true,
	};

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
		const newList = this.state.tasks.map( ( task ) => {
			const newTask = { ...task };
			newTask.text.includes( e.target.value )
				? newTask.isDisplayed = true
				: newTask.isDisplayed = false;
			return newTask;
		} );
		this.setState( {
			tasks: newList,
			filter: 'New, Done',
			searchValue: e.target.value,
		} );
	}

	filterListener = ( statusesToFilter ) => {
		const newList = this.state.tasks.map( ( task ) => {
			const newTask = { ...task };
			statusesToFilter.includes( newTask.status )
				? newTask.isDisplayed = true
				: newTask.isDisplayed = false;
			return newTask;
		} );
		this.setState( {
			searchValue: '',
			tasks: newList,
			filter: statusesToFilter,
		} );
	}

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

	changeTheme = () => {
		this.setState( {
			darkTheme: !this.state.darkTheme,
		} );
	}

	render() {
		return (
			<ThemeContext.Provider value={this.state.darkTheme}>
				<div className="App" style={this.state.darkTheme ? { backgroundColor: DARK_BODY } : { backgroundColor: LIGHT_BODY } }>
					<header style={this.state.darkTheme ? { backgroundColor: DARK_HEADER } : LIGHT_HEADER }>
						<TaskInput
							inputValue={this.state.inputValue}
							addButtonListener={this.addButtonListener}
							inputListener={this.inputListener}
							keyPress={this.keyPress}
						/>
						<TaskSearch
							filter={this.state.filter}
							filterListener={this.filterListener}
							searchValue={this.state.searchValue}
							searchListener={this.searchListener}
							themeListener={this.changeTheme}
						/>
					</header>
					<TaskList
						markDoneListener={this.markDoneListener}
						deleteListener={this.deleteListener}
						tasks={this.state.tasks}
					/>
				</div>
			</ThemeContext.Provider>
		);
	}

}
