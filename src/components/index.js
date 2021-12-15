
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../node_modules/aos/dist/aos.css";
/*componentes*/

/* img */
import logo from '../assets/img/logo.webp'
export const Index = () => {
	const { store, actions } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        if(!user){
            window.location.href = '/';
        }
    }, [])
	return (
		<div className="container-fluid p-0 m-50">
			<div className= "slider">
			   <img src={logo} className=""></img>
			</div>
            <div className="text-center fs-5">
               <i> "Lo más importante del deporte no es ganar, sino participar, porque lo esencial en la vida no es el éxito, sino esforzarse por conseguirlo". </i>
            </div>
            <div className="ps-3 fw-bold">
                Barón Pierre de Coubertin
            </div>
		</div>
	);
};
