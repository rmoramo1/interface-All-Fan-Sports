
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/

/* img */


export const Faqs = () => {
	const { store, actions } = useContext(Context);
    useEffect(() => {
        if(!store.username_temp){
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
