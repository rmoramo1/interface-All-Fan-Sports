import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Standings_Single_NFL = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-3">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_standings_nfl_team/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-3 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-4 lines">Team</div>
                        <div className="col-4 lines">Season</div>
                        <div className="col-4 lines">Division</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.team}</div>
                        <div className="col-4 lines">{props.season}</div>
                        <div className="col-4 lines">{props.division}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Standings_Single_NFL.propTypes = {
    id: PropTypes.number,
    team: PropTypes.string,
    season: PropTypes.string,
    division: PropTypes.string
};