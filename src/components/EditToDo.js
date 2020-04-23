import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditToDo = (props) => {
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');

	const history = useHistory();

	useEffect(() => {
		getMyDos();
	}, []);

	const getMyDos = () => {
		axios
			.get(`http://localhost:4000/api/v1/todos/${props.match.params.id}`)
			.then((res) => {
				setTitle(res.data.title);
				setBody(res.data.body);
			})
			.catch((err) => console.log(err));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:4000/api/v1/todos/${props.match.params.id}`, { title, body });
			console.log({ message: 'Task edited successfully!' });
			history.push('/todos/show');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1>EDIT YOU TASK</h1>
			<div className="d-flex flex-row justify-content-center mx-auto w-100 text-center">
				<form className="formAddTask" onSubmit={(e) => handleSubmit(e)}>
					<label className="my-1">Title of the task:</label>
					<input
						className="my-1"
						type="text"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label className="my-1">Description of the task:</label>
					<textarea
						className="my-1"
						type="text"
						name="body"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
					<input className="btn btn-outline-secondary w-75 mx-auto my-3" type="submit" value="EDIT TASK" />
				</form>
				<Link to={'/'}>Go back</Link>
			</div>
		</div>
	);
};


export default EditToDo;