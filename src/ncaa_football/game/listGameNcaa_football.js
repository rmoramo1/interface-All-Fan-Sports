import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const List_Game_Ncaa_Football = props => {
    const { store } = useContext(Context);

    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {
        
    }


    return (
        <div className="row g-0 listGames">
            <div className="col-1 d-flex justify-content-center align-items-center py-3">
                <div className="col-12 bg-dark h-100">
                    <div className="col-12 btn text-center text-white ">
                        {props.casino}
                    </div>
                    <div className="col-12 text-center">
                        <Link className="btn btn-dark text-white" to={`/edtihGame_ncaa_footbal/${props.id}`}><i className="far fa-eye"></i></Link>
                    </div>
                    <div className="col-12 btn text-center text-white ">
                        {props.type_of_line}
                    </div>
                </div>
            </div>
            <div className="col-11 bg-white my-3 shadow">
                <div className="row g-0 text-center title-lines">
                    <div className="col-1 lines" id="statusNfl">{props.status}</div>
                    <div className="col-2 lines">
                        <div className="row g-0">
                            <span className="text-start col-6">RT#</span><span className="col-6 text-start">Team</span> </div>
                        </div>
                    <div className="col-1 lines">Spread</div>
                    <div className="col-1 lines">Juice</div>
                    <div className="col-1 lines">ML</div>
                    <div className="col-1 lines">Total</div>
                    <div className="col-1 lines">Juice</div>
                    <div className="col-1 lines">TT</div>
                    <div className="col-1 lines">JO</div>
                    <div className="col-1 lines">JU</div>
                    <div className="col-1 lines">FS</div>
                </div>
                <div className="">
                    <div className="row g-0 text-center">
                        <div className="col-1 lines fw-bold">{props.date}</div>
                        <div className="col-2 lines">
                            <div className="row g-0">
                                <div className="col-1">
                                    {props.rotation_away}
                                </div>
                                <div className="col-11">
                                    {props.away}
                                </div>
                            </div>
                        </div>
                        <div className="col-1 lines">{props.spread_away}</div>
                        <div className="col-1 lines">{props.juice_spread_away}</div>
                        <div className="col-1 lines">{props.moneyLineAway}</div>
                        <div className="col-1 lines">{props.total}</div>
                        <div className="col-1 lines">{props.juice_total_over}</div>
                        <div className="col-1 lines">{props.tt_away}</div>
                        <div className="col-1 lines">{props.juice_over_away}</div>
                        <div className="col-1 lines">{props.juice_under_away}</div>
                        <div className="col-1 lines">{props.final_score_away}</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-1 lines">{props.hour}</div>
                        <div className="col-2 lines">
                            <div className="row g-0">
                                <div className="col-1">
                                    {props.rotation_home}
                                </div>
                                <div className="col-11">
                                    {props.home}
                                </div>
                            </div>
                        </div>
                        <div className="col-1 lines">{props.spread_home}</div>
                        <div className="col-1 lines">{props.juice_spread_home}</div>
                        <div className="col-1 lines">{props.moneyLineHome}</div>
                        <div className="col-1 lines"></div>
                        <div className="col-1 lines">{props.juice_total_under}</div>
                        <div className="col-1 lines">{props.tt_home}</div>
                        <div className="col-1 lines">{props.juice_over_home}</div>
                        <div className="col-1 lines">{props.juice_under_home}</div>
                        <div className="col-1 lines">{props.final_score_home}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
List_Game_Ncaa_Football.propTypes = {
    id: PropTypes.number,
    del: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    rotation_away: PropTypes.string,
    rotation_home: PropTypes.string,
    casino: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    spread_away: PropTypes.string,
    juice_spread_away: PropTypes.string,
    juice_spread_home: PropTypes.string,
    moneyLineAway: PropTypes.string,
    moneyLineHome: PropTypes.string,
    total: PropTypes.string,
    juice_total_over: PropTypes.string,
    juice_total_under: PropTypes.string,
    tt_away: PropTypes.string,
    tt_home: PropTypes.string,
    juice_over_away: PropTypes.string,
    juice_over_home: PropTypes.string,
    juice_under_away: PropTypes.string,
    juice_under_home: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string,
    type_of_line: PropTypes.string,
};
export default List_Game_Ncaa_Football;
