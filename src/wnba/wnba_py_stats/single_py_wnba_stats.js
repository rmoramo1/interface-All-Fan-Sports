import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_py_wnba_stats = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 py-1">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/edit_stats_player_wnba/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11 bg-white my-1 shadow">
                    <div className="row g-0 text-center title-lines">
                        <div className="col-3 lines">Name</div>
                        <div className="col-2 lines">Pos</div>
                        <div className="col-4 lines">Dorsal</div>
                        <div className="col-3 lines">Minutes</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-3 lines">{props.name}</div>
                        <div className="col-2 lines">{props.position}</div>
                        <div className="col-4 lines">{props.dorsal}</div>
                        <div className="col-3 lines">{props.minutes}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_py_wnba_stats.propTypes = {
    id: PropTypes.number,
    team: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    dorsal: PropTypes.string,
    minutes: PropTypes.string
};