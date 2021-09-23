import React, { useState, useEffect } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	const url = "https://assets.breatheco.de/apis/fake/todos/user/mariaperrone";

	const getTodo = () => {
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				setListaTareas(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				//manejo de errores
				alert(error);
			});
	};

	useEffect(() => {
		getTodo();
	}, []);
   
    useEffect(() => {
		putTodo();
	}, [listaTareas]);

	const putTodo=()=>{fetch(url, {
		method: "PUT",
		body: JSON.stringify(listaTareas),
		headers: {
		  "Content-Type": "application/json"
		}
	  })
	  .then(resp => {
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        //manejo de errores
        alert(error);
    });}

	const handleKeyPress = event => {
		if (event.key == "Enter") {
			let newtarea = {
				label: tarea,
				done: false
			};
			setListaTareas([...listaTareas, newtarea]);
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
							{item.label}
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
