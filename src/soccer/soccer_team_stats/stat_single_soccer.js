import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Stat_Single_Soccer = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-3">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edith_stats_soccer_team/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-3 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-4 lines">Team</div>
                        <div className="col-4 lines">Season</div>
                        <div className="col-4 lines">Position</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.name}</div>
                        <div className="col-4 lines">{props.season}</div>
                        <div className="col-4 lines">{props.position}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Stat_Single_Soccer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    season: PropTypes.string,
    position: PropTypes.string,
};