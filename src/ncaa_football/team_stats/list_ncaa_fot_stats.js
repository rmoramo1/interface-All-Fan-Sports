import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Stat_Single_Ncaa_Fot } from "./stat_single_ncaa_fot";

export const List_Ncaa_Fot_Stats = () => {
    const { store } = useContext(Context);

        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])

    var sortStats = store.ncaa_football_team_stats;
    sortStats.sort(function (a, b) {
        return b.season - a.season;
    });

    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">NCAA FOOTBALL STATS BY TEAM</h4>
                        </div>
                    </div>
                </div>
                {
                    store.ncaa_foot_teams.map((index) => {
                        return (
                            <div className="col-4 p-1 span_stats_list">
                                <div className="fs-4 text-center bg_grey_dark text-white" key={index}>{index}</div>
                                {sortStats.map((item, index2) => {
                                    if (item.team == index) {
                                        return (
                                            <div className="col-12 px-1 bg_grey_medium" key={index2}>
                                                <Stat_Single_Ncaa_Fot
                                                    id={index2}
                                                    del={item.id}
                                                    team={item.team}
                                                    season={item.season}
                                                    conference={item.conference}
                                                    division={item.division}
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