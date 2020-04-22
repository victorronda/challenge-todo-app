import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateToDo = () => {
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:4000/api/v1/todos', { title, body });
		try {
			console.log({ message: 'Task created successfully!' });
			history.push('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1>ADD YOU NEW TASK</h1>
			<div className="d-flex flex-row justify-content-center mx-auto w-100 text-center">
				<form className="formAddTask" onSubmit={(e) => handleSubmit(e)}>
					<label className="my-1" htmlFor="title">Title of the task:</label>
					<input className="my-1" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
					<label className="my-1" htmlFor="body">Description of the task:</label>
					<textarea className="my-1" type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)} />
					<input className="btn btn-outline-primary w-25 mx-auto my-3" type="submit" value="ADD TASK" />
				</form>
				<Link to={'/'}>Go back</Link>
			</div>
		</div>
	);
};

export default CreateToDo;
