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
		<div className="cuerpo text-center mt-5 mx-auto">
			<h1 className="text-secondary">todos</h1>
			<input
				type="text"
				placeholder="Agregar tarea"
				onChange={e => setTarea(e.target.value)}
				onKeyPress={f => handleKeyPress(f)}
				value={tarea}
			/>
			<ul className="text-secondary">
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
			<div className="text-secondary">
				{listaTareas.length} cosas por hacer
			</div>
		</div>
	);
};

export default Home;
