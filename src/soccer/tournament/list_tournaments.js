import React, { useContext,useEffect } from "react";
import { Context } from "../../store/appContext";
import { Single_Tournament } from "./single_tournament";

export const List_Tournaments = () => {
    const { store } = useContext(Context);
        useEffect(() => {
        const loggedUser = window.localStorage.getItem('my_token');
        const user = JSON.parse(loggedUser);
        
        if(!user){
            window.location.href = '/';
        }
    }, [])
    var sortStats = store.tournaments;
    sortStats.sort(function (a, b) {
        return b.season - a.season;
    });

    return (
        <div className="container-fluid m-50">
            <div className="row g-0">
                <div className="col-12 p-3 bg-title-edith my-2 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100">
                        <div className="col-12">
                            <h4 className="fw-bold text-center">LIST TOURNAMEnTS SOCCER</h4>
                        </div>
                    </div>
                </div>
                {
                    store.soccer_tournament.map((index) => {
                        return (
                            <div className="col-4 p-1 span_stats_list">
                                <div className="fs-6 text-center bg_grey_dark text-white" key={index}>{index.tournament}</div>
                                {sortStats.map((item, index2) => {
                                    if (item.tournament == index.tournament) {
                                        return (
                                            <div className="col-12 px-1 bg_grey_medium" key={index2}>
                                                <Single_Tournament
                                                    id={index2}
                                                    del={item.id}
                                                    country={item.country}
                                                    tournament={item.tournament}
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