import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Single_Golfer } from "./single_golfer";
export const List_Stats_Golfer = () => {
    const { store } = useContext(Context);

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    var sortStats_py = store.golfer_stats;
    sortStats_py.sort(function (a, b) {
        return b.season - a.season;
    });
    return (
        <div className="container-fluid m-50">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">Golfer Stats</h4>
                        </div>
                    </div>
                </div>
                {sortStats_py.map((item, index) => {
                    return (
                        <div className="col-4 px-1 bg_grey_medium" key={index}>
                            <Single_Golfer
                                key={index}
                                id={index}
                                del={item.id}
                                swing={item.swing}
                                name={item.name}
                                country={item.country}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}