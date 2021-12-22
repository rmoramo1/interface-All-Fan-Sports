import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Vista_casino from "../casino/vista_casino";

export const Casinos_page = () => {
    
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const { store } = useContext(Context);
    return (
        <div className="container-fluid m-50">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Casinos</h3>
            </div>
            <div className="container mt-3">
                <div className="row g-0">
                    {
                        store.casinos.map((item, index) => {
                            return (
                                <div key={index} className="col-4 p-1">
                                    <Vista_casino
                                        id={index}
                                        name={item.name}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}