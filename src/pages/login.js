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
				window.localStorage.setItem("my_token",JSON.stringify(data));
				actions.changename(data.username);
				setAuth(true);
				alert("has ingresado correctamente");
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container-fluid  pt-5 m-50 login">
			<div className="" id="nav-tabContent">
				<div className="col-4 mx-auto rounded p-3 shadow-login" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
					<div className="col-12 text-center">
						<h2 className="col-12 text-white text_shadow">Login</h2>
					</div>
					{error ? (
						<div className="alert alert-naranjaContraste text-center fw-bold text-white bg-danger" role="alert">
							Wrong E-mail or Password
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
							<button type="submit" className="btn bt_deg shadow-st">
								Login
							</button>
						</div>
					</form>
					{auth ? <Redirect to="/admin" /> : null}
				</div>
			</div>
		</div>
	);
};
