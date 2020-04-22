import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowToDos = () => {
	const [ allToDos, setAllToDos ] = useState([]);

	useEffect(() => {
		getAllToDos();
	}, []);

	const getAllToDos = () => {
		axios
			.get('http://localhost:4000/api/v1/todos')
			.then((res) => setAllToDos(res.data))
			.catch((err) => console.log(err));
	};

	const handleDelete = (e) => {
		axios
			.delete(`http://localhost:4000/api/v1/todos/${e.target.value}`)
			.then(setAllToDos(allToDos.filter((elem) => elem._id !== e.target.value)))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h1>ALL YOUR TASKS</h1>
			<ul>
				{allToDos.map((elem, i) => {
					return (
						<div key={i} className="d-flex flex-row justify-content-center mx-auto w-100 text-center">
							<div className="listTasks" key={i}>
								<li style={{ listStyleType: 'none' }} key={i}>
									<h3>Title: {elem.title}</h3>
									<p>Description: {elem.body}</p>
									<Link className="btn btn-info" to={`/todos/edit/${elem._id}`}>
										Edit
									</Link>
									<button
										className="btn btn-danger"
										value={elem._id}
										onClick={(e) => handleDelete(e)}
									>
										Delete
									</button>
								</li>
							</div>
						</div>
					);
				})}
			</ul>
			<Link to={'/'}>Go back</Link>
		</div>
	);
};

export default ShowToDos;
