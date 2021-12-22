import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Vista_logo_nfl from "../logos/nfl/vista_logo_nfl";
import Vista_logo_nba from "../logos/nba/vista_logo_nba";
import Vista_logo_nhl from "../logos/nhl/vista_logo_nhl";
import Vista_logo_mlb from "../logos/mlb/vista_logo_mlb";
import Vista_logo_soccer from "../logos/soccer/vista_logo_soccer";

export const Logos_page = () => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    return (
        <div className="container-fluid m-50">
            <div className="col-12 bg-title-edith my-2 p-3 text-center">
                <h3>List of Logos of the Teams</h3>
            </div>
            <div className="row g-0">
                <div className="col-4 span_logos_list p-2">
                    <div className="title-lines fw-bold text-center">NFL Logos</div>
                    {
                        store.logos_nfl.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_nfl
                                        id={index}
                                        team={item.team}
                                        url={item.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4 span_logos_list p-2">
                    <div className="title-lines fw-bold text-center">NBA Logos</div>
                    {
                        store.logos_nba.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_nba
                                        id={index}
                                        team={item.team}
                                        url={item.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4 span_logos_list p-2">
                    <div className="title-lines fw-bold text-center">NHL Logos</div>
                    {
                        store.logos_nhl.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_nhl
                                        id={index}
                                        team={item.team}
                                        url={item.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4 span_logos_list p-2 pt-4">
                    <div className="title-lines fw-bold text-center">MLB Logos</div>
                    {
                        store.logos_mlb.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_mlb
                                        id={index}
                                        team={item.team}
                                        url={item.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4 span_logos_list p-2 pt-4">
                    <div className="title-lines fw-bold text-center">SOCCER Logos</div>
                    {
                        store.logos_soccer.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_soccer
                                        id={index}
                                        team={item.team}
                                        url={item.url}
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