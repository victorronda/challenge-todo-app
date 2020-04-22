import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreateToDo from './components/CreateToDo';
import ShowToDos from './components/ShowToDos';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/todos/add" component={CreateToDo} />
						<Route exact path="/todos/show" component={ShowToDos} />
						{/* <Route exact path="/todos/delete" component={DeleteToDo} /> */}
						{/* <Route exact path="/todos/edit" component={EditToDo} /> */}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
