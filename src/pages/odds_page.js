import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Vista_ODDS from "../odds/vista_odds";

export const ODDS_page = () => {
    
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }

    const { store } = useContext(Context);
    return (
        <div className="container-fluid m-50">
            <div className="col-12 bg-title-edith mt-2 p-3 text-center">
                <h3>ODDS to Win</h3>
            </div>
            <div className="container mt-3">
                <div className="row g-0">
                    {
                        store.odds_to_win.map((item, index) => {
                            return (
                                <div key={index} className="col-4 p-1">
                                    <Vista_ODDS
                                        id={index}
                                        title={item.title}
                                        sport={item.sport}
                                        type_odd={item.type_odd}
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