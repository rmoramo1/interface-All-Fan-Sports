import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Single_py_ncaa_baseball_stats } from "./single_py_ncaa_baseball_stats";
export const List_Stats_NCAA_BASEBALL_PY = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }

    var sortStats_py = store.ncaa_baseball_stats_player;
    sortStats_py.sort(function (a, b) {
        return b.season - a.season;
    });
    return (
        <div className="container-fluid m-50">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">NCAA BASEBALL STATS BY PLAYER</h4>
                        </div>
                    </div>
                </div>
                {
                    store.ncaa_baseball_teams.map((index) => {
                        return (
                            <div className="col-4 p-1 span_stats_list">
                                <div className="text-center bg_grey_dark text-white" key={index}>
                                    <div className="row g-0">
                                        <div className="col-12">
                                            {index}
                                        </div>
                                    </div>
                                </div>
                                {sortStats_py.map((item, index2) => {
                                    if (item.team === index && item.season === "2021") {
                                        return (
                                            <div className="col-12 px-1 bg_grey_medium" key={index2}>
                                                <Single_py_ncaa_baseball_stats
                                                    key={index2}
                                                    id={index2}
                                                    del={item.id}
                                                    team={item.team}
                                                    name={item.name}
                                                    position={item.position}
                                                    dorsal={item.dorsal}
                                                />
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}