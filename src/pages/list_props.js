import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Vista_Add_Props from "../add_props/vista_add_props";

export const List_Props = () => {
    
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const { store } = useContext(Context);
    return (
        <div className="container-fluid m-50">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>List Props</h3>
            </div>
            <div className="container mt-3">
                <div className="row g-0">
                    {
                        store.add_props.map((item, index) => {
                            return (
                                <div key={index} className="col-4 p-1">
                                    <Vista_Add_Props
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