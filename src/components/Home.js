import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Hello! Welcome to my TO DO app</h1>
            <div className="homeWelcome">
			<h3>What do you want to do?</h3>
            <div className="d-block">
                <Link className="btn btn-success mx-2" to="/todos/add">Create a new task</Link>
                <Link className="btn btn-info mx-2" to="/todos/show">Show all my task</Link>
            </div>

            </div>
		</div>
	);
};

export default Home;
