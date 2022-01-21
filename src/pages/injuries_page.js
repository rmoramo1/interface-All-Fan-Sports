import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Vista_Injuries from "../injuries/vista_injuries";

export const Injuries_page = () => {
    
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
                        store.injuries.map((item, index) => {
                            return (
                                <div key={index} className="col-6 p-1">
                                    <Vista_Injuries
                                        id={index}
                                        team={item.team}
                                        name_player={item.name_player}
                                        injurie={item.injurie}
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