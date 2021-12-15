
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/

/* img */


export const Faqs = () => {
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
			<div className="slider">
				Faqs
			</div>
		</div>
	);
};
