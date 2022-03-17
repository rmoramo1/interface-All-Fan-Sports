import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Vista_logo_nfl from "../logos/nfl/vista_logo_nfl";
import Vista_logo_nba from "../logos/nba/vista_logo_nba";
import Vista_logo_nhl from "../logos/nhl/vista_logo_nhl";
import Vista_logo_mlb from "../logos/mlb/vista_logo_mlb";
import Vista_logo_soccer from "../logos/soccer/vista_logo_soccer";
import Vista_logo_ncaa_basket from "../logos/ncaa_basketball/vista_logo_ncaa_basket";
import Vista_logo_NCAA_BASEBALL from "../logos/ncaa_baseball/vista_logo_ncaa_baseball";
import Vista_logo_ncaa_footbal from "../logos/ncaa_football/vista_logo_ncaa_fooball";

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
                <div className="span_logos_list">
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
                <div className="span_logos_list">
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
                <div className="span_logos_list">
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
                <div className="span_logos_list">
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
                <div className="span_logos_list">
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
                <div className="span_logos_list">
                    <div className="title-lines fw-bold text-center">NCAA BASKETBALL Logos</div>
                    {
                        store.logos_ncaa_basketball.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_ncaa_basket
                                        id={index}
                                        team={item.team}
                                        url={item.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="span_logos_list">
                    <div className="title-lines fw-bold text-center">NCAA BASEBALL Logos</div>
                    {
                        store.logos_ncaa_baseball.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_NCAA_BASEBALL
                                        id={index}
                                        team={item.team}
                                        url={item.url}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="span_logos_list">
                    <div className="title-lines fw-bold text-center">NCAA FOOTBALL Logos</div>
                    {
                        store.logos_ncaa_football.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Vista_logo_ncaa_footbal
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