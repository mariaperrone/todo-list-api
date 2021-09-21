import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	const handleKeyPress = event => {
		if (event.key == "Enter") {
			setListaTareas([...listaTareas, tarea]);
			setTarea("");
		}
	};

	const borrar = indice => {
		let result = [];
		result = listaTareas.filter((tarea, index) => index !== indice);
		setListaTareas(result);
	};

	return (
		<div className="text-center mt-5">
			<h1>todos</h1>
			<input
				type="text"
				className="form-control"
				placeholder="Agregar tarea"
				onChange={e => setTarea(e.target.value)}
				onKeyPress={f => handleKeyPress(f)}
				value={tarea}
			/>
			<ul>
				{listaTareas.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button
								className="btn btn-light text-dark"
								type="submit"
								onClick={() => borrar(index)}>
								x
							</button>
						</li>
					);
				})}
			</ul>
			<div>{listaTareas.length} cosas por hacer</div>
		</div>
	);
};

export default Home;
