import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListGame_Ncaa_Baseball = props => {
    return (
        <div className="row g-0 listGames">
            <div className="col-1 d-flex justify-content-center align-items-center py-3">
                <div className="col-12 bg-dark h-100">
                    <div className="col-12 btn text-center text-white ">
                        {props.casino}
                    </div>
                    <div className="col-12 text-center">
                        <Link className="btn btn-dark text-white" to={`/edtihGame_Ncaa_Baseball/${props.id}`}><i className="far fa-eye"></i></Link>
                    </div>
                </div>
            </div>
            <div className="col-11 bg-white my-3 shadow">
                <div className="row g-0 text-center title-lines">
                    <div className="col-1 lines" id="statusMLB">{props.status}</div>
                    <div className="col-2 lines">RT# / Team</div>
                    <div className="col-1 lines">RL</div>
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
                                    {props.rotation_away}|
                                </div>
                                <div className="col-11">
                                    {props.away}
                                </div>
                            </div>
                        </div>
                        <div className="col-1 lines">{props.rl_away}</div>
                        <div className="col-1 lines">{props.juice_rl_away}</div>
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
                                    {props.rotation_home}|
                                </div>
                                <div className="col-11">
                                    {props.home}
                                </div>
                            </div>
                        </div>
                        <div className="col-1 lines">{props.rl_home}</div>
                        <div className="col-1 lines">{props.juice_rl_home}</div>
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
ListGame_Ncaa_Baseball.propTypes = {
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
    rl_away: PropTypes.string,
    rl_home: PropTypes.string,
    juice_rl_away: PropTypes.string,
    juice_rl_home: PropTypes.string,
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
};
export default ListGame_Ncaa_Baseball;
