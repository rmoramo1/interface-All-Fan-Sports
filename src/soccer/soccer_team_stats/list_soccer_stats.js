import React, { useContext ,useEffect } from "react";
import { Context } from "../../store/appContext";
import { Stat_Single_Soccer } from "./stat_single_soccer";

export const List_Soccer_Stats = () => {
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    var sortStats = store.soccer_stats_teams;
    sortStats.sort(function (a, b) {
        return b.season - a.season;
    });

    return (
        <div className="container-fluid m-50">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">SOCCER STATS BY LEAGUE</h4>
                        </div>
                    </div>
                </div>
                {
                    store.soccer_tournament.map((index) => {
                        return (
                            <div className="col-4 p-1 span_stats_list">
                                <div className="fs-6 text-center bg_grey_dark text-white" key={index}>{index.tournament}</div>
                                {sortStats.map((item, index2) => {
                                    if (item.league == index.tournament) {
                                        return (
                                            <div className="col-12 px-1 bg_grey_medium" key={index2}>
                                                <Stat_Single_Soccer
                                                    id={index2}
                                                    del={item.id}
                                                    name={item.name}
                                                    season={item.season}
                                                    position={item.position}
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