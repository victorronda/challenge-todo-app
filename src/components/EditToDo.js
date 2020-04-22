import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditToDo = (props) => {
    const [ myTask, setMyTask ] = useState([]);
    const [ title, setTitle ] = useState(myTask.title);
    const [ body, setBody ] = useState('');
    
    const history = useHistory();

	useEffect(() => {
		getMyDos();
	}, [title,body,myTask]);

	const getMyDos = () => {
		axios
			.get(`http://localhost:4000/api/v1/todos/${props.match.params.id}`)
			.then((res) => setMyTask(res.data))
			.catch((err) => console.log(err));
    };
    
    const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:4000/api/v1/todos/${props.match.params.id}`, { title, body });
		try {
			console.log({ message: 'Task edited successfully!' });
			history.push('/todos/show');
		} catch (err) {
			console.log(err);
		}
    };
    

    //ME HE QUEDADO AQUÍ, ME HACE ALGO RARO AL EDITAR





	return (
		<div>
			<h1>EDIT YOU TASK</h1>
			<div className="d-flex flex-row justify-content-center mx-auto w-100 text-center">
				<form className="formAddTask" onSubmit={(e) => handleSubmit(e)}>
					<label className="my-1" htmlFor="title">
						Title of the task:
					</label>
					<input
						className="my-1"
						type="text"
						name="title"
						value={myTask.title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label className="my-1" htmlFor="body">
						Description of the task:
					</label>
					<textarea
						className="my-1"
						type="text"
						name="body"
						value={myTask.body}
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
