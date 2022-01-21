import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Vista_Future from "../future/vista_future";

export const Futures_page = () => {
    
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const { store } = useContext(Context);
    return (
        <div className="container-fluid m-50">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>Injuries</h3>
            </div>
            <div className="container mt-3">
                <div className="row g-0">
                    {
                        store.futures.map((item, index) => {
                            return (
                                <div key={index} className="col-6 p-1">
                                    <Vista_Future
                                        id={index}
                                        line={item.line}
                                        future={item.future}
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