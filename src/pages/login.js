import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
/* img */


export const Login = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	const { actions } = useContext(Context);
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [auth, setAuth] = useState(false);

	const enviar = e => {
		e.preventDefault();
		const body = { mail: mail, password: password };
		console.log(body);
		fetch("https://interfaceroy.herokuapp.com/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		})
			// .then(res => res.json())
			.then(response => {
				if (!response.ok) {
					setError(true);
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				actions.changename(data.username);
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
				setAuth(true);
				successfulLogin();
			})
			.catch(err => console.log(err));
	};

	function successfulLogin() {
		let btnLog = document.getElementById("btnLogOut");
		let pri = document.getElementById("st-pri");
		btnLog.classList.remove("d-none");
		pri.classList.remove("d-none");
		alert("has ingresado correctamente");
	}
	return (
		<div className="container-fluid  pt-5 m-50 login">
			<div className="" id="nav-tabContent">
				<div className="col-4 mx-auto rounded p-3 shadow-login" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
					<div className="col-12 text-center">
						<h2 className="col-12">Login</h2>
					</div>
					{error ? (
						<div className="alert alert-naranjaContraste text-center" role="alert">
							Correo Electrónico o Contraseña erróneos
						</div>
					) : null}
					<form onSubmit={enviar}>

						<div className="input-group mb-3 shadow ">
							<span className="input-group-text" id="basic-addon1">@</span>
							<input
								id="mail"
								onChange={e => setMail(e.target.value)}
								name="mail"
								type="text"
								className="form-control "
								placeholder="Mail"
								aria-label="Mail"
								aria-describedby="basic-addon1"
								
							/>
						</div>
						<div className="input-group mb-3 shadow">
							<span className="input-group-text" id="basic-addon1">
								<i className="fas fa-key" />
							</span>
							<input
								type="password"
								onChange={e => setPassword(e.target.value)}
								id="password"
								name="password"
								className="form-control "
								placeholder="Password"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</div>

						<div className="col-12 text-center">
							<button type="submit" className="btn btn-primary">
								Ingresar
							</button>
						</div>
					</form>
					{auth ? <Redirect to="/admin" /> : null}
				</div>
			</div>
		</div>
	);
};
