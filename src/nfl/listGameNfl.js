import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const GameMapNfl = props => {
    const { store, actions } = useContext(Context);
    const delet = e => {
        fetch("https://interfaceroy.herokuapp.com/nfl/" + props.del, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(actualizar())
            .catch(err => console.log(err));
    };
    let actualizar = () => {
        alert("The game is Delete")
        window.location.reload(true);
    }
    return (
        <div className="row g-0 listGames">
            <div className="col-1 d-flex justify-content-center align-items-center">
                <div className="col-12">
                    {/* <div className="col-12 text-center bg-dark">
                        <div className="btn btn-dark text-white" data-bs-toggle="modal" data-bs-target="#edith"><i className="fas fa-pencil-alt"></i></div>
                    </div> */}
                    <div className="col-12 text-center bg-dark">
                        <Link className="btn btn-dark text-white" to={`/edtihGame/${props.id}`}><i className="far fa-eye"></i></Link>
                    </div>
                    <div className="col-12 text-center bg-dark" data-bs-toggle="modal" data-bs-target="#delete" >
                        <div className="btn btn-dark text-white" ><i className="far fa-trash-alt"></i></div>
                    </div>
                </div>
            </div>
            <div className="col-11 bg-white my-3 shadow">
                <div className="row g-0 text-center title-lines">
                    <div className="col-1 lines" id="statusNfl">{props.status}</div>
                    <div className="col-2 lines">Team</div>
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
                        <div className="col-2 lines">{props.away}</div>
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
                        <div className="col-2 lines">{props.home}</div>
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
            <div className="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content overflow-hidden">
                        <div className="col-12 text-center text-white bg-danger text-uppercase fs-5 py-3">
                            <i className="fas fa-exclamation-triangle fs-1"></i><br />are you sure you want to delete the match
                        </div>
                        <div className="row g-0">
                            <div className="col-6 p-2 text-center">
                                <button className="btn btn-danger" onClick={delet} data-bs-dismiss="modal">Yes Delete</button>
                            </div>
                            <div className="col-6 p-2 text-center">
                                <button type="button" className="btn btn-info text-white" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
GameMapNfl.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    week: PropTypes.string,
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
};
export default GameMapNfl;
