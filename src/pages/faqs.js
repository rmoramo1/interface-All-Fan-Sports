
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/

/* img */


export const Faqs = () => {
	const { store, actions } = useContext(Context);
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }
	return (
		<div className="container-fluid p-0 m-50">
			<div className="slider">
				Faqs
			</div>
		</div>
	);
};
