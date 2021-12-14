import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/

/* img */


export const Glosary = () => {
	const { store, actions } = useContext(Context);
    useEffect(() => {
        if(!store.username_temp){
            window.location.href = '/';
        }
    }, [])
	return (
		<div className="container-fluid p-0 m-50">
			<div className="slider">
				Glosary
			</div>
		</div>
	);
};
