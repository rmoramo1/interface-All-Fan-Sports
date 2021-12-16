
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
		<div className="container-fluid p-0 pt-5 m-50 bg_blue text-white">
            <div className="container">
                <div className="col-12 text-center">
                    <h2><span className="font_special"> WELCOME {store.username_temp} </span></h2>
                </div>
            </div>
			<div className= "slider">
			   <img src={logo} className="img-fluid"></img>
			</div>
            <div className="text-center fs-5">
               <i> "The most important thing in sport is not to win, but to participate, because the most important thing in life is not success, but striving for it". </i>
            </div>
            <div className="ps-3 fw-bold">
                Barón Pierre de Coubertin
            </div>
		</div>
	);
};
